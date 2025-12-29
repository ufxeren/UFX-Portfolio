import { motion } from "motion/react";

interface WatermarkProps {
  opacity?: number;
}

export function Watermark({ opacity = 0.17 }: WatermarkProps) {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-[20%] right-[10%] lg:right-[15%]">
        <p
          className="text-black text-[180px] lg:text-[280px] leading-none whitespace-nowrap"
          style={{
            fontFamily: "'Super Sliced', sans-serif",
            opacity: opacity,
          }}
        >
          UFX
        </p>
        <p
          className="text-black text-[120px] lg:text-[200px] leading-none whitespace-nowrap font-bold"
          style={{
            fontFamily: "'Inter', sans-serif",
            opacity: opacity,
          }}
        >
          AMAN
        </p>
      </div>
    </motion.div>
  );
}
