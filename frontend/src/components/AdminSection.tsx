import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Upload, X, Image as ImageIcon, Trash2, Mail, Download, FileText, Video } from "lucide-react";

interface WorkItem {
  id: string;
  title: string;
  imageUrl: string;
  category: "posters" | "thumbnails" | "shorts" | "uiux" | "videos";
  createdAt: string;
}

interface ContactMessage {
  id: string;
  email: string;
  fullName: string;
  description: string;
  attachments: Array<{
    name: string;
    type: string;
    data: string;
    size: number;
  }>;
  createdAt: string;
}

interface AdminSectionProps {
  onWorkItemsChange?: (items: WorkItem[]) => void;
  initialItems?: WorkItem[];
}

export function AdminSection({ onWorkItemsChange, initialItems = [] }: AdminSectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"work" | "messages">("work");
  const [workTab, setWorkTab] = useState<WorkItem["category"]>("posters");
  const [workItems, setWorkItems] = useState<WorkItem[]>(initialItems);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [uploadForm, setUploadForm] = useState({
    title: "",
    imageFile: null as File | null,
    imageUrl: "",
  });

  // Inside AdminSection component
  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/work');
        const data = await response.json();
        // data is already sorted by backend, so we just set it
        setWorkItems(data);
      } catch (error) {
        console.error("Error fetching work:", error);
      }
    };

    fetchWork();
  }, [activeTab]); // Refetch when switching tabs to ensure latest data

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/messages');
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    if (activeTab === "messages") {
      fetchMessages();
    }
  }, [activeTab]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        alert("Invalid password");
      }
    } catch (err) {
      alert("Connection to server failed");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadForm({
        ...uploadForm,
        imageFile: file,
        imageUrl: URL.createObjectURL(file)
      });
    }
  };

  // Replace your handleAddWork in AdminSection.tsx
  const handleAddWork = async () => {
    if (!uploadForm.title || !uploadForm.imageFile) {
      alert("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append('title', uploadForm.title);
    formData.append('category', workTab);
    formData.append('file', uploadForm.imageFile);

    try {
      const response = await fetch('http://localhost:5000/api/work', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Refresh the list from the server to get the REAL URLs
        const res = await fetch('http://localhost:5000/api/work');
        const data = await res.json();
        setWorkItems(data);

        // Reset the form
        setUploadForm({ title: "", imageFile: null, imageUrl: "" });
        alert("Upload successful!");
      }
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  const handleDelete = async (id: string) => {
    // Confirm before deleting
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      // 1. Send delete request to the Flask backend
      const response = await fetch(`http://localhost:5000/api/work/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // 2. If successful on server, update the local React state
        const updatedItems = workItems.filter((item) => item.id !== id);
        setWorkItems(updatedItems);
        onWorkItemsChange?.(updatedItems);

        alert("Item deleted successfully");
      } else {
        alert("Failed to delete item from server");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Connection error to backend");
    }
  };

  const handleDeleteMessage = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this message and its attachments?")) return;

    try {
      const response = await fetch(`http://localhost:5000/api/messages/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the message from the local state so it disappears instantly
        setMessages(prev => prev.filter(msg => msg.id !== id));
        alert("Message deleted successfully");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error deleting message:", error);
      alert("Failed to connect to the server.");
    }
  };

  const getCategoryItems = (category: WorkItem["category"]) => {
    return workItems.filter((item) => item.category === category);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  if (!isAuthenticated) {
    return (
      <section className="relative min-h-screen bg-[#d7d7d7] flex items-center justify-center overflow-hidden">
        <motion.div
          className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full mx-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-[32px] lg:text-[40px] text-black mb-6 text-center"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
          >
            Admin Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-black mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                placeholder="Enter admin password"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.button>
          </form>
          <p className="text-sm text-gray-500 mt-4 text-center">
          </p>
        </motion.div>
      </section>
    );
  }

  const workTabs = [
    { id: "posters" as const, label: "Posters" },
    { id: "thumbnails" as const, label: "Thumbnails" },
    { id: "shorts" as const, label: "Shorts" },
    { id: "uiux" as const, label: "UI/UX" },
    { id: "videos" as const, label: "Videos" },
  ];

  return (
    <section className="relative min-h-screen bg-[#d7d7d7] py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-8 flex justify-between items-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-[48px] lg:text-[64px] text-[#0a0a0a]"
            style={{ fontFamily: "'ZCOOL XiaoWei', sans-serif" }}
          >
            ADMIN DASHBOARD
          </h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Logout
          </button>
        </motion.div>

        {/* Main Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("work")}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${activeTab === "work"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-gray-100"
              }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            📁 Work Portfolio
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all relative ${activeTab === "messages"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-gray-100"
              }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            ✉️ Messages
            {messages.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                {messages.length}
              </span>
            )}
          </button>
        </div>

        {/* Work Portfolio Section */}
        {activeTab === "work" && (
          <>
            {/* Work Sub-tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {workTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setWorkTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${workTab === tab.id
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                    }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upload Form */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-xl"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2
                  className="text-[24px] font-semibold mb-6 text-black"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Upload to {workTabs.find((t) => t.id === workTab)?.label}
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-black mb-2 font-medium">Title</label>
                    <input
                      type="text"
                      value={uploadForm.title}
                      onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                      placeholder="Enter work title"
                    />
                  </div>

                  <div>
                    <label className="block text-black mb-2 font-medium">Image/Video</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-black transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept="image/*,video/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        {uploadForm.imageUrl ? (
                          <div className="space-y-2">
                            {uploadForm.imageFile?.type.startsWith('video/') ? (
                              <video src={uploadForm.imageUrl} controls className="max-h-48 mx-auto rounded-lg" />
                            ) : (
                              <img
                                src={uploadForm.imageUrl}
                                alt="Preview"
                                className="max-h-48 mx-auto rounded-lg"
                              />
                            )}
                            <p className="text-sm text-gray-600">{uploadForm.imageFile?.name}</p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center">
                            <Upload className="w-12 h-12 text-gray-400 mb-2" />
                            <p className="text-gray-600">Click to upload image or video</p>
                            <p className="text-sm text-gray-400 mt-1">PNG, JPG, MP4, MOV up to 50MB</p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  <motion.button
                    onClick={handleAddWork}
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Upload className="w-5 h-5" />
                    Add Work
                  </motion.button>
                </div>
              </motion.div>

              {/* Current Items */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-xl"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2
                  className="text-[24px] font-semibold mb-6 text-black"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Current Items ({getCategoryItems(workTab).length})
                </h2>

                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  {getCategoryItems(workTab).length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                      <ImageIcon className="w-16 h-16 mx-auto mb-4" />
                      <p>No items yet. Upload your first work!</p>
                    </div>
                  ) : (
                    getCategoryItems(workTab).map((item) => (
                      <motion.div
                        key={item.id}
                        className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-black transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-black">{item.title}</h3>
                          <p className="text-sm text-gray-500">
                            {new Date(item.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </motion.div>
                    ))
                  )}
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {workTabs.map((tab) => (
                <div key={tab.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
                  <p className="text-3xl font-bold text-black">
                    {getCategoryItems(tab.id).length}
                  </p>
                  <p className="text-sm text-gray-600">{tab.label}</p>
                </div>
              ))}
            </motion.div>
          </>
        )}

        {/* Messages Section */}
        {activeTab === "messages" && (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {messages.length === 0 ? (
              <div className="bg-white p-12 rounded-lg shadow-xl text-center">
                <Mail className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 text-lg">No messages yet</p>
              </div>
            ) : (
              messages.map((message) => (
                <motion.div
                  key={message.id}
                  className="bg-white p-6 rounded-lg shadow-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">{message.fullName}</h3>
                      <p className="text-gray-600 mb-1">📧 {message.email}</p>
                      <p className="text-sm text-gray-400">
                        {new Date(message.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteMessage(message.id)} // Pass the message ID here
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      title="Delete Message"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-black whitespace-pre-wrap">{message.description}</p>
                  </div>

                  {message.attachments.length > 0 && (
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-black mb-3">
                        Attachments ({message.attachments.length}):
                      </p>
                      <div className="grid gap-3">
                        {message.attachments.map((attachment, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-gray-500" />
                              <div>
                                <p className="text-sm font-medium text-black">{attachment.name}</p>
                              </div>
                            </div>
                            <a
                              href={attachment.url} // Link directly to the static file on the server
                              target="_blank"
                              rel="noopener noreferrer"
                              download // This will force a download or open in a new tab
                              className="flex items-center gap-2 px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                            >
                              <Download className="w-4 h-4" />
                              <span className="text-sm">Download</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
