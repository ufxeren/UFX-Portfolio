import { motion } from "motion/react";
import imgHomePage from "figma:asset/74daba549895527bd4d20338cd777651ed4ccc9f.png";
import imgBriefcase from "figma:asset/751c0d84e3e57def13a1fd2a905ab4af3ced478f.png";
import imgLightningBolt from "figma:asset/dd23829811e18c56a4d705c35f9e740b2c6aeb0f.png";
import imgLink from "figma:asset/a17454e68fa7d26c620869628dbaa28d96045d22.png";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "HOME", icon: imgHomePage },
  { id: "work", label: "WORK", icon: imgBriefcase },
  { id: "skills", label: "SKILLS", icon: imgLightningBolt },
  { id: "links", label: "LINKS", icon: imgLink },
];

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const activeIndex = navItems.findIndex(item => item.id === activeSection);
  
  return (
    <motion.nav
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <div className="relative hidden lg:block bg-black/37 backdrop-blur-[37.6px] rounded-[29px] px-6 py-3">
        {/* Active indicator background */}
        <motion.div
          className="absolute top-0 bottom-0 bg-black/31 backdrop-blur-[37.6px] rounded-[29px]"
          initial={false}
          animate={{
            left: activeIndex === 0 ? 24 : activeIndex * 164 + 24,
            width: 126,
          }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 30,
            mass: 0.8
          }}
        />

        {/* Nav items */}
        <div className="relative flex items-center gap-10">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative flex items-center gap-3 px-4 py-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={item.icon}
                alt=""
                className="w-8 h-8 object-contain pointer-events-none"
              />
              <span
                className="text-white font-medium text-base whitespace-nowrap"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
