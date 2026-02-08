
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Patents from './components/Patents';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-blue-500/30">
      <CustomCursor />
      
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-t-blue-600 border-r-transparent border-b-purple-600 border-l-transparent rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              />
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-xl font-heading tracking-widest uppercase text-white/80"
              >
                Initializing Systems...
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      {!isLoading && (
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <main>
            <About />
            <Skills />
            <Experience />
            <Patents />
            <Projects />
            <Achievements />
            <Certificates />
            <Services />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
