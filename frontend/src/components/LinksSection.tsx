import { motion } from "motion/react";
import { useState } from "react";
import { Watermark } from "./Watermark";
import imgRectangle24 from "figma:asset/87416784080ef4c9f313717de3e575e978ad0a87.png";
import imgRectangle25 from "figma:asset/922345a5a65b13c0e3c57c1ed7542f74eb6dcf5e.png";
import imgRectangle26 from "figma:asset/5cc0b2e45462aa8e3859fdc9e972b29bfca3f040.png";
import imgRectangle27 from "figma:asset/1ecb5c37d0dc7992adb67dc027e3f54b64b1c408.png";
import imgLetter from "figma:asset/7ed509396293ed2e9a5393be45fa57d855689f34.png";
import imgPhone from "figma:asset/3d7544a749cbd8ffdff0532284039af4f3476fde.png";
import imgBrokenLink from "figma:asset/1cd651578f02b5153f5e916bf9cb127136f3c42d.png";

const socialLogos = [
  { src: imgRectangle24, alt: "Social 1", href:"https://www.tiktok.com/@ufx.eren" },
  { src: imgRectangle27, alt: "Social 2", href:"https://www.instagram.com/ufx.aman_1/" },
  { src: imgRectangle25, alt: "Social 3", href:"https://www.youtube.com/@ufx.eren_1" },
  { src: imgRectangle26, alt: "Social 4", href:"https://discord.gg/U7vt2HcC" },
];

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

export function LinksSection() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    description: "",
  });
  const [attachedFiles, setAttachedFiles] = useState<Array<{
    name: string;
    type: string;
    data: string;
    size: number;
  }>>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [rawFiles, setRawFiles] = useState<File[]>([]);

  const handleFileAttach = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setRawFiles(prev => [...prev, ...newFiles]);

      // Keep your existing visual logic for the UI previews if you want
      const newAttached = newFiles.map(file => ({
        name: file.name,
        size: `${(file.size / 1024).toFixed(1)} KB`,
        data: "" // No need for base64 strings for the backend anymore
      }));
      setAttachedFiles(prev => [...prev, ...newAttached]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Replace handleSubmit in LinksSection.tsx
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append('email', formData.email);
    data.append('fullName', formData.fullName);
    data.append('description', formData.description);

    // Append the ACTUAL files
    rawFiles.forEach(file => {
      data.append('attachments', file);
    });

    const response = await fetch('http://localhost:5000/api/messages', {
      method: 'POST',
      body: data
    });

    if (response.ok) {
      alert("Message Sent!");
      setFormData({ email: '', fullName: '', description: '' });
      setRawFiles([]);
      setAttachedFiles([]);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#d7d7d7] py-20 overflow-hidden">
      <Watermark opacity={0.054} />

      {/* Success Message */}
      {showSuccess && (
        <motion.div
          className="fixed top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-lg shadow-2xl z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
        >
          <p className="text-lg font-semibold">✓ Message sent successfully!</p>
        </motion.div>
      )}

      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-[48px] lg:text-[64px] text-[#0a0a0a]"
            style={{ fontFamily: "'ZCOOL XiaoWei', sans-serif" }}
          >
            LINKS
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Social Links */}
          <motion.div
            className="space-y-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <p
                className="text-[32px] lg:text-[40px] text-black mb-4"
                style={{ fontFamily: "'Super Sliced', sans-serif" }}
              >
                LINKS
              </p>
              <div className="w-full max-w-[186px] h-[5px] bg-black" />
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-[260px]">
              {socialLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="w-[73px] h-[72px] rounded-[17px] overflow-hidden shadow-[0px_4px_18.8px_1px_rgba(0,0,0,0.71)] cursor-pointer"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={logo.href}><img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-cover"
                  /></a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            className="w-full max-w-[868px] mx-auto lg:mx-0"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="h-[5px] bg-[#0a0a0a] shadow-[0px_17px_19px_0px_rgba(0,0,0,0.81)] mb-3" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent outline-none text-black text-[20px] lg:text-[24px] py-2 px-2 tracking-[1.92px] placeholder:text-black/40"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 300,
                    textShadow: "0px 17px 19px rgba(0,0,0,0.81)",
                  }}
                  placeholder="EMAIL"
                />
              </motion.div>

              {/* Full Name */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="h-[5px] bg-[#0a0a0a] shadow-[0px_17px_19px_0px_rgba(0,0,0,0.81)] mb-3" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-transparent outline-none text-black text-[20px] lg:text-[24px] py-2 px-2 tracking-[1.92px] placeholder:text-black/40"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 300,
                    textShadow: "0px 17px 19px rgba(0,0,0,0.81)",
                  }}
                  placeholder="FULL NAME"
                />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="border border-black shadow-[0px_17px_19px_0px_rgba(0,0,0,0.81)] p-4 h-[287px]">
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full h-full bg-transparent outline-none resize-none text-black text-[18px] lg:text-[20px] placeholder:text-black/40"
                    style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 300 }}
                    placeholder="DESCRIPTION - Tell me about your project..."
                  />
                </div>
              </motion.div>

              {/* Attached Files Preview */}
              {attachedFiles.length > 0 && (
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  <p className="text-sm text-black font-semibold">
                    Attached Files ({attachedFiles.length}):
                  </p>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {attachedFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-black/10 px-3 py-2 rounded"
                      >
                        <span className="text-sm text-black truncate flex-1">
                          {file.name} ({(file.size / 1024).toFixed(1)}KB)
                        </span>
                        <button
                          type="button"
                          onClick={() => removeAttachment(index)}
                          className="text-red-600 hover:text-red-800 ml-2"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Attach File Button */}
              <motion.div
                className="flex gap-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="file-attach"
                  className="border border-black px-8 py-6 shadow-[0px_7px_36px_10px_rgba(0,0,0,0.15)] hover:bg-black/5 transition-colors cursor-pointer"
                >
                  <input
                    type="file"
                    id="file-attach"
                    multiple
                    accept="image/*,video/*,.pdf,.doc,.docx"
                    onChange={handleFileAttach}
                    className="hidden"
                  />
                  <span
                    className="text-black text-[18px] lg:text-[20px] font-semibold tracking-[1.6px]"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    ATTACH FILE
                  </span>
                </label>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white px-8 py-6 shadow-[0px_7px_36px_10px_rgba(0,0,0,0.15)] hover:bg-gray-800 transition-colors disabled:opacity-50"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  <span
                    className="text-white text-[18px] lg:text-[20px] font-semibold tracking-[1.6px]"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </span>
                </motion.button>
              </motion.div>
            </form>

            {/* Contact Info */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3 bg-black/15 backdrop-blur-[7.1px] rounded-[20px] px-6 py-2">
                <img src={imgLetter} alt="Email" className="w-[25px] h-[25px]" />
                <span
                  className="text-black text-[14px] lg:text-[16px] font-semibold tracking-[1.28px]"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  ufxeren@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 bg-black/15 backdrop-blur-[7.1px] rounded-[20px] px-6 py-2">
                <img src={imgPhone} alt="Phone" className="w-[25px] h-[25px]" />
                <span
                  className="text-black text-[14px] lg:text-[16px] font-semibold tracking-[1.28px]"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  +92 00000000000
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Broken Link Icon (decorative) */}
        <motion.div
          className="absolute right-8 top-32 hidden lg:block"
          initial={{ rotate: 0, opacity: 0 }}
          whileInView={{ rotate: 360, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src={imgBrokenLink} alt="" className="w-[38px] h-[38px]" />
        </motion.div>
      </div>
    </section>
  );
}