import { motion } from "motion/react";
import imgEllipse1 from "figma:asset/4b981f50bc3c5c60a383d0e1159545f8fc9ca1ff.png";
import { Watermark } from "./Watermark";

export function HomeSection() {
  return (
    <section className="relative min-h-screen bg-[#d7d7d7] flex items-center justify-center overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-25 mix-blend-difference pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-black/10 to-transparent" />
      </div>

      <Watermark />

      <div className="container mx-auto px-4 lg:px-16 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <p
                className="text-[48px] lg:text-[64px] leading-none text-black mb-2"
                style={{ fontFamily: "'Super Sliced', sans-serif" }}
              >
                UFX
              </p>
              <p
                className="text-[32px] lg:text-[40px] leading-none text-black font-bold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                AMAN
              </p>
            </div>

            <div className="w-full max-w-[303px] h-[5px] bg-black" />

            <motion.div
              className="space-y-4 max-w-[331px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p
                className="text-[18px] lg:text-[20px] text-black font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Hi, I'm a Creative UI/UX Designer, Video Editor, and Thumbnail & Poster Designer —
              </p>

              <p
                className="text-[14px] lg:text-[16px] text-black"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                With a strong eye for aesthetics and functionality, I specialize in designing
                user-friendly interfaces, eye-catching thumbnails, and impactful posters that tell a
                story. My work blends creativity with strategy — ensuring every design not only
                looks great but also connects with your audience.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-[280px] h-[280px] lg:w-[377px] lg:h-[377px]">
              <motion.img
                src={imgEllipse1}
                alt="Profile"
                className="w-full h-full object-contain"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Title at top */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-[28px] lg:text-[64px] text-[#0a0a0a]"
          style={{ fontFamily: "'ZCOOL XiaoWei', sans-serif" }}
        >
          PORTFOLIO
        </p>
      </motion.div>
    </section>
  );
}
