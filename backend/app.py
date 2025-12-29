import os
import uuid
from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.utils import secure_filename
from datetime import datetime

app = Flask(__name__)
CORS(app) 

# --- PATHS ---
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'static', 'uploads')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(BASE_DIR, 'instance', 'portfolio.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# --- MODELS ---
class WorkItem(db.Model):
    id = db.Column(db.String(50), primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    file_path = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Message(db.Model):
    id = db.Column(db.String(50), primary_key=True)
    email = db.Column(db.String(120), nullable=False)
    full_name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    attachments = db.relationship('Attachment', backref='message', cascade="all, delete-orphan", lazy=True)

class Attachment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    file_path = db.Column(db.String(255))
    message_id = db.Column(db.String(50), db.ForeignKey('message.id'))

# --- ROUTES ---

@app.route('/api/work', methods=['GET'])
def get_work_list():  # Unique function name
    items = WorkItem.query.order_by(WorkItem.created_at.desc()).all()
    return jsonify([{
        "id": i.id, 
        "title": i.title, 
        "imageUrl": f"http://localhost:5000/api/uploads/{os.path.basename(i.file_path)}",
        "category": i.category,
        "createdAt": i.created_at.isoformat()
    } for i in items])

@app.route('/api/work', methods=['POST'])
def add_work_item():  # Unique function name
    file = request.files.get('file')
    title = request.form.get('title')
    category = request.form.get('category')
    
    if file and title and category:
        filename = secure_filename(f"{uuid.uuid4()}_{file.filename}")
        path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(path)
        
        new_item = WorkItem(id=str(uuid.uuid4()), title=title, file_path=path, category=category)
        db.session.add(new_item)
        db.session.commit()
        return jsonify({"message": "Success"}), 201
    return jsonify({"error": "Missing data"}), 400

# NEW: The route that actually serves the images to the browser
@app.route('/api/uploads/<filename>')
def serve_uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# Combined Route for Messages (Handles both GET and POST)
@app.route('/api/messages', methods=['GET', 'POST'])
def handle_messages():
    # --- HANDLING SENDING A MESSAGE (POST) ---
    if request.method == 'POST':
        try:
            msg_id = str(uuid.uuid4())
            new_msg = Message(
                id=msg_id,
                email=request.form['email'],
                full_name=request.form['fullName'],
                description=request.form['description']
            )
            
            # Handle attachments
            files = request.files.getlist('attachments')
            for file in files:
                filename = secure_filename(f"{uuid.uuid4()}_{file.filename}")
                path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                file.save(path)
                db.session.add(Attachment(name=file.filename, file_path=path, message_id=msg_id))
            
            db.session.add(new_msg)
            db.session.commit()
            return jsonify({"message": "Message sent successfully!"}), 201
        except Exception as e:
            print(f"POST Error: {e}")
            return jsonify({"error": str(e)}), 500

    # --- HANDLING FETCHING MESSAGES (GET) ---
    if request.method == 'GET':
        try:
            msgs = Message.query.order_by(Message.created_at.desc()).all()
            return jsonify([{
                "id": m.id,
                "email": m.email,
                "fullName": m.full_name,
                "description": m.description,
                "createdAt": m.created_at.isoformat(),
                "attachments": [{
                    "name": a.name,
                    # Create a reachable URL for the frontend
                    "url": f"http://localhost:5000/static/uploads/{os.path.basename(a.file_path)}"
                } for a in m.attachments]
            } for m in msgs])
        except Exception as e:
            return jsonify({"error": str(e)}), 500

import os

@app.route('/api/work/<id>', methods=['DELETE'])
def delete_work(id):
    # 1. Find the item in the database
    item = WorkItem.query.get(id)
    
    if item:
        try:
            # 2. Delete the physical file from the folder
            if os.path.exists(item.file_path):
                os.remove(item.file_path)
            
            # 3. Remove the entry from the database
            db.session.delete(item)
            db.session.commit()
            
            return jsonify({"message": "Successfully deleted"}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 500
            
    return jsonify({"error": "Item not found"}), 404

@app.route('/api/messages/<id>', methods=['DELETE'])
def delete_message(id):
    try:
        # 1. Find the message
        message = Message.query.get(id)
        if not message:
            return jsonify({"error": "Message not found"}), 404

        # 2. Find and delete all associated attachment files from the server
        for attachment in message.attachments:
            if os.path.exists(attachment.file_path):
                os.remove(attachment.file_path)
        
        # 3. Delete the message from database (attachments will auto-delete due to cascade)
        db.session.delete(message)
        db.session.commit()
        
        return jsonify({"message": "Message and attachments deleted successfully"}), 200
    except Exception as e:
        print(f"Delete Error: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/admin/login', methods=['POST'])
def admin_login():
    data = request.json
    # Change the password here
    if data.get('password') == "ufx.eren._.1":
        return jsonify({"success": True}), 200
    return jsonify({"success": False, "message": "Invalid password"}), 401

if __name__ == '__main__':
    with app.app_context():
        os.makedirs(os.path.join(BASE_DIR, 'instance'), exist_ok=True)
        db.create_all()
    app.run(debug=True, port=5000)