
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Code, ChevronRight, Terminal } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-heading font-medium tracking-widest uppercase mb-4">
            Selected Works
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold">
            Innovation <span className="text-blue-400">Showcase</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="glass rounded-[32px] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col p-8">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Terminal size={24} />
                  </div>
                  <div className="flex flex-wrap justify-end gap-2 max-w-[60%]">
                    {project.tech.slice(0, 2).map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 text-white/40 rounded-full whitespace-nowrap">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h4 className="text-2xl font-heading font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-white/50 text-sm line-clamp-3 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-white/30 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                      Protocol details <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass rounded-[40px] border border-white/10 overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 glass rounded-full hover:bg-white/10 transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 flex flex-col">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8">
                  <Code size={32} />
                </div>
                
                <h4 className="text-4xl font-heading font-bold mb-6">{selectedProject.title}</h4>
                
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-10 mb-10">
                  <div>
                    <h5 className="text-xs uppercase font-bold text-blue-400 tracking-widest mb-4">Core Features</h5>
                    <ul className="space-y-3">
                      {selectedProject.features.map(feat => (
                        <li key={feat} className="flex items-start gap-2 text-white/50 text-sm">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-xs uppercase font-bold text-purple-400 tracking-widest mb-4">Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-3 py-1 glass rounded-lg text-xs font-medium text-white/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 bg-white text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/90 transition-all"
                    >
                      <Github size={20} /> View Repository
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 glass border border-white/10 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
                    >
                      <ExternalLink size={20} /> Live Application
                    </a>
                  )}
                  {!selectedProject.github && !selectedProject.demo && (
                    <p className="text-white/30 text-sm italic">Project links are currently private or under maintenance.</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
