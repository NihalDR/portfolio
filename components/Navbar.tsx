
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Patents', id: 'patents' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Approximate navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#050505]/80 backdrop-blur-md' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.button 
          onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-heading tracking-tighter cursor-pointer bg-transparent border-none p-0 outline-none text-white"
        >
          Nihal<span className="text-blue-500">.</span>DR
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 glass px-8 py-3 rounded-full border border-white/10 shadow-lg">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.name}
              onClick={(e) => scrollToSection(e, link.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-widest cursor-pointer bg-transparent border-none outline-none text-white"
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        {/* Placeholder for layout balance on desktop if needed, otherwise just the mobile toggle */}
        <div className="md:w-[120px] hidden md:block"></div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-lg font-medium hover:text-blue-400 text-left bg-transparent border-none outline-none text-white"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
