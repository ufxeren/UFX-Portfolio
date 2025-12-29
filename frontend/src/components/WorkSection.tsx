import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Watermark } from "./Watermark";
import { ArrowRight, ChevronUp, Play, Pause } from "lucide-react";

interface WorkItem {
  id: string;
  title: string;
  imageUrl: string;
  category: "posters" | "thumbnails" | "shorts" | "uiux" | "videos";
}

export function WorkSection() {
  const [workItems, setWorkItems] = useState<WorkItem[]>([]);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    fetch('http://localhost:5000/api/work')
      .then(res => res.json())
      .then(data => setWorkItems(data))
      .catch(err => console.error("Error fetching work:", err));
  }, []);

  const toggleSection = (category: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const renderSection = (category: WorkItem["category"], title: string, index: number) => {
    const allItems = workItems.filter(i => i.category === category);
    const isExpanded = expandedSections[category];
    const displayItems = isExpanded ? allItems : allItems.slice(0, 3);

    if (allItems.length === 0) return null;

    return (
      <motion.div
        className="mb-16 md:mb-24" // Reduced bottom margin on mobile
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Header Section */}
        <div className="flex items-end justify-between mb-8 border-b-2 border-black pb-2">
          <div className="flex items-center gap-4">
            <span className="text-xl lg:text-[24px] font-black italic opacity-20">0{index + 1} </span>
            <h2 className="text-2xl lg:text-[24px] font-black tracking-tighter text-black uppercase italic">
              {title}
            </h2>
          </div>
          <p className="text-[10px] font-bold tracking-[2px] md:tracking-[4px] text-black/40 uppercase">
            [{allItems.length} PROJECTS]
          </p>
        </div>

        {/* Responsive Grid: 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
          {displayItems.map((item) => {
            const isVideo = item.imageUrl.toLowerCase().endsWith('.mp4') ||
              category === 'videos' ||
              category === 'shorts';

            return (
              <motion.div key={item.id} layout className="group flex flex-col">
                <div className="relative aspect-[16/10] w-full bg-[#eeeeee] border border-black/10 overflow-hidden transition-all duration-500 md:group-hover:border-black md:group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  {isVideo ? (
                    <video
                      src={item.imageUrl}
                      className="w-full h-full object-contain"
                      controls
                      playsInline
                      muted
                    />
                  ) : (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-contain transition-all duration-700"
                    />
                  )}
                </div>

                <div className="mt-4 flex flex-col">
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">
                    {category}
                  </span>
                  <h3 className="text-[14px] md:text-[16px] font-black text-black uppercase leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        {allItems.length > 3 && (
          <div className="mt-8 md:mt-12 flex justify-start">
            <button
              onClick={() => toggleSection(category)}
              className="px-6 py-3 md:px-8 md:py-3 bg-black text-white text-[10px] md:text-[11px] font-black uppercase tracking-[3px] hover:bg-zinc-800 transition-all flex items-center gap-3 shadow-xl"
            >
              {isExpanded ? "Collapse" : `View Full ${title}`}
              {isExpanded ? <ChevronUp size={14} /> : <ArrowRight size={14} />}
            </button>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className="relative min-h-screen bg-[#d7d7d7] py-12 md:py-24 overflow-hidden">
      <Watermark opacity={0.06} />
      <div className="container mx-auto px-6 lg:px-24 relative z-10">

        {/* Massive Editorial Header - Made responsive for mobile */}
        <motion.div
          className="mb-16 md:mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-start">
            {/* text-[60px] = Mobile size 
               md:text-[120px] = Desktop size 
               lg:text-[180px] = Large monitor size 
            */}
            <div className="container mx-auto px-4 lg:px-16 relative z-10">

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
                  WORK
                </p>
              </motion.div>
            </div>
            <div className="h-2 md:h-4 w-32 md:w-64 bg-black mt-4 md:mt-6" />
          </div>
        </motion.div>

        {renderSection("posters", "Posters", 0)}
        {renderSection("thumbnails", "Thumbnails", 1)}
        {renderSection("shorts", "Shorts", 2)}
        {renderSection("uiux", "UI / UX Design", 3)}
        {renderSection("videos", "Video Projects", 4)}
      </div>
    </section>
  );
}