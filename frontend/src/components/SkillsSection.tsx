import { motion } from "motion/react";
import { Watermark } from "./Watermark";
import imgRectangle18 from "figma:asset/6f50af75e5a1b17a887131a7f7722ba1ad2d9c2e.png";
import imgRectangle19 from "figma:asset/c894c22136699da96d2f3d54a726759a2e0f2c6e.png";
import imgRectangle20 from "figma:asset/bc34d6d7c08f17a41905e4870c60c17739fd53e3.png";
import imgRectangle21 from "figma:asset/1be510c8e6c8f86d83033af35053b89560f3fe63.png";
import imgRectangle22 from "figma:asset/7e75f85a47bcb34cc101fcee8e43e232fec21e15.png";
import imgRectangle23 from "figma:asset/bdd6ebef08337d0ffbcb4a88996f82177b8ace48.png";

const softwareLogos = [
  { src: imgRectangle18, alt: "Software 1" },
  { src: imgRectangle23, alt: "Software 2" },
  { src: imgRectangle19, alt: "Software 3" },
  { src: imgRectangle22, alt: "Software 4" },
  { src: imgRectangle21, alt: "Software 5" },
  { src: imgRectangle20, alt: "Software 6" },
];

export function SkillsSection() {
  return (
    <section className="relative min-h-screen bg-[#d7d7d7] py-20 overflow-hidden">
      <Watermark opacity={0.1} />

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
            SKILLS
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Software Logos */}
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
                SOFTWARES
              </p>
              <div className="w-full max-w-[303px] h-[5px] bg-black" />
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-[370px]">
              {softwareLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="w-[73px] h-[72px] rounded-[14px] overflow-hidden shadow-[0px_4px_18.8px_1px_rgba(0,0,0,0.71)]"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills Description */}
          <motion.div
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="text-black text-center lg:text-left"
              style={{
                fontFamily: "'Inter', sans-serif",
                textShadow: "6px 9px 12.7px white",
              }}
            >
              {/* UI/UX Design */}
              <motion.div
                className="mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-[20px] lg:text-[24px] font-semibold tracking-[1.92px] mb-4">
                  🎨 UI/UX Design
                </p>
                <ul className="list-disc list-inside space-y-2 ml-9 text-[16px] lg:text-[20px]">
                  <li>Skilled in creating clean, modern, and user-friendly interfaces.</li>
                  <li>Strong understanding of color theory, typography, and design hierarchy.</li>
                  <li>Experienced with tools like Figma and Photoshop.</li>
                  <li>Focused on user-centered design, usability, and smooth digital experiences.</li>
                </ul>
              </motion.div>

              {/* Video Editing */}
              <motion.div
                className="mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-[20px] lg:text-[24px] font-semibold tracking-[1.92px] mb-4">
                  🎬 Video Editing
                </p>
                <ul className="list-disc list-inside space-y-2 ml-9 text-[16px] lg:text-[20px]">
                  <li>Proficient in Adobe Premiere Pro, and CapCut Pro.</li>
                  <li>Skilled at storytelling through visuals, transitions, and sound.</li>
                  <li>Creating YouTube videos, reels, and promotional edits with professional flow.</li>
                </ul>
              </motion.div>

              {/* Thumbnail & Poster Design */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-[20px] lg:text-[24px] font-semibold tracking-[1.92px] mb-4">
                  🖼️ Thumbnail & Poster Design
                </p>
                <ul className="list-disc list-inside space-y-2 ml-9 text-[16px] lg:text-[20px]">
                  <li>Expert in designing scroll-stopping thumbnails that boost engagement.</li>
                  <li>Crafting aesthetic posters for digital and print use.</li>
                  <li>Deep knowledge of visual balance, composition, and branding.</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
