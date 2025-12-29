import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navigation } from "./components/Navigation";
import { HomeSection } from "./components/HomeSection";
import { WorkSection } from "./components/WorkSection";
import { SkillsSection } from "./components/SkillsSection";
import { LinksSection } from "./components/LinksSection";
import { AdminSection } from "./components/AdminSection";

interface WorkItem {
  id: string;
  title: string;
  imageUrl: string;
  category: "posters" | "thumbnails" | "shorts" | "uiux" | "videos";
  createdAt: string;
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [workItems, setWorkItems] = useState<WorkItem[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const isScrolling = useRef(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Load work items from localStorage
    const savedItems = localStorage.getItem("portfolioWorkItems");
    if (savedItems) {
      setWorkItems(JSON.parse(savedItems));
    }
  }, []);

  // Detect scroll position and update active section
  useEffect(() => {
    if (showAdmin) return;

    const handleScroll = () => {
      if (isScrolling.current) return;

      const sections = ["home", "work", "skills", "links"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAdmin]);

  // Check for admin route
  useEffect(() => {
    const checkAdminRoute = () => {
      const path = window.location.hash;
      if (path === "#admin") {
        setShowAdmin(true);
      }
    };
    
    checkAdminRoute();
    window.addEventListener("hashchange", checkAdminRoute);
    return () => window.removeEventListener("hashchange", checkAdminRoute);
  }, []);

  const handleNavigate = (section: string) => {
    if (section === "admin") {
      window.location.hash = "admin";
      setShowAdmin(true);
    } else {
      window.location.hash = "";
      setShowAdmin(false);
      setActiveSection(section);
      
      // Smooth scroll to section
      isScrolling.current = true;
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    }
  };

  const handleWorkItemsChange = (items: WorkItem[]) => {
    setWorkItems(items);
    // Save to localStorage
    localStorage.setItem("portfolioWorkItems", JSON.stringify(items));
  };

  if (showAdmin) {
    return (
      <>
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="fixed inset-0 z-[100] bg-[#d7d7d7] flex items-center justify-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p 
                className="text-[64px] lg:text-[96px] text-black mb-2"
                  style={{ fontFamily: "'Super Sliced', sans-serif" }}
                >
                  UFX
                </p>
                <p
                  className="text-[40px] lg:text-[64px] text-black font-bold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  AMAN
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="relative">
          <AdminSection onWorkItemsChange={handleWorkItemsChange} initialItems={workItems} />
          
          <button
            onClick={() => {
              window.location.hash = "";
              setShowAdmin(false);
            }}
            className="fixed top-8 right-8 bg-black text-white px-6 py-2 rounded-lg z-50 hover:bg-gray-800 transition-colors"
          >
            Back to Portfolio
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#d7d7d7] flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-[64px] lg:text-[96px] text-black mb-2"
                style={{ fontFamily: "'Super Sliced', sans-serif" }}
              >
                UFX
              </p>
              <p
                className="text-[40px] lg:text-[64px] text-black font-bold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                AMAN
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {/* Sections */}
        <div id="home">
          <HomeSection />
        </div>
        <div id="work">
          <WorkSection workItems={workItems} />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="links">
          <LinksSection />
        </div>

        {/* Navigation */}
        <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-50"
          style={{
            scaleX: 0,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ amount: "all" }}
        />
      </div>
    </>
  );
}