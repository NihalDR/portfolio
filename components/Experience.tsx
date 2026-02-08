
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCES } from '../constants/data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-blue-500 font-heading font-medium tracking-widest uppercase mb-4">
              Career Journey
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold">
              Professional <span className="text-blue-400">Experience</span>
            </h3>
          </div>
          <div className="glass px-6 py-3 rounded-full border border-white/10 text-white/50 text-sm font-medium">
            2025 - Present
          </div>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-purple-600 before:to-transparent">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 glass shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all group-hover:scale-125 group-hover:border-blue-500/50">
                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:shadow-[0_0_10px_#3b82f6]"></div>
              </div>

              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 md:p-8 rounded-[32px] border border-white/5 hover:border-blue-500/20 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <time className="font-heading font-bold text-blue-400 text-sm tracking-widest flex items-center gap-2">
                    <Calendar size={14} /> {exp.duration}
                  </time>
                  <span className="text-white/30 text-xs font-bold uppercase tracking-wider">{exp.company}</span>
                </div>
                <div className="text-xl font-heading font-bold text-white mb-2">{exp.role}</div>
                <p className="text-white/50 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
