
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Terminal, ExternalLink, ChevronRight, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/data';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 z-10">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-500 font-heading font-medium tracking-widest uppercase mb-4 text-lg">
              Welcome to the Future
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight tracking-tighter">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-8 max-w-2xl font-light">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-white/40 mb-10 max-w-xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="px-8 py-4 glass border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all"
              >
                Contact Me
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center md:justify-start gap-6">
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-white/50 hover:text-blue-400 transition-all hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-white/50 hover:text-white transition-all hover:scale-110">
                <Github size={24} />
              </a>
              <a href={PERSONAL_INFO.socials.leetcode} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-white/50 hover:text-orange-400 transition-all hover:scale-110 font-bold">
                L
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative max-w-md"
        >
          {/* Futuristic Square Mask Frame */}
          <div className="relative z-10 p-2 group">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-500 z-20 transition-all group-hover:scale-110"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blue-500 z-20 transition-all group-hover:scale-110"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-blue-500 z-20 transition-all group-hover:scale-110"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-500 z-20 transition-all group-hover:scale-110"></div>

            <div className="aspect-square glass border border-white/10 overflow-hidden shadow-2xl relative">
              <img 
                src={PERSONAL_INFO.profileImage} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-1/2 w-full animate-[scan_4s_linear_infinite] pointer-events-none"></div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -right-8 glass p-5 rounded-2xl border border-white/10 shadow-2xl max-w-[180px] z-30 transition-transform hover:-translate-y-2">
              <div className="text-blue-400 font-bold text-3xl font-heading tracking-tighter">8.52</div>
              <div className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">Academic Merit</div>
            </div>

            <div className="absolute -top-8 -left-8 glass p-4 rounded-2xl border border-white/10 shadow-2xl z-30 transition-transform hover:translate-y-2">
              <div className="text-purple-400 font-bold text-lg flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                </span>
                <Terminal size={18} /> AI Specialist
              </div>
            </div>
          </div>

          {/* Animated rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-30">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[1px] border-dashed border-blue-500/20 rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[1px] border-blue-500/10 rounded-full scale-110"
            ></motion.div>
          </div>
        </motion.div>
      </div>
      {/* Use dangerouslySetInnerHTML for style tag to prevent JSX parser from misinterpreting CSS braces as JS blocks */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      ` }} />
    </section>
  );
};

export default Hero;
