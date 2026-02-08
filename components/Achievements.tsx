
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants/data';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-transparent to-blue-900/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-heading font-medium tracking-widest uppercase mb-4">
            Recognition
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold">
            Awards & <span className="text-blue-400">Honors</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((award, idx) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group glass p-8 rounded-[32px] border border-white/5 hover:bg-white/[0.05] transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-blue-500/10 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                  <Trophy className="text-blue-400" />
                </div>
                {award.year && (
                  <span className="text-xs font-bold text-white/30 glass px-3 py-1 rounded-full border border-white/5">
                    {award.year}
                  </span>
                )}
              </div>
              <h4 className="text-xl font-heading font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {award.title}
              </h4>
              <p className="text-white/50 text-sm leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
