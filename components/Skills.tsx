
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Cpu, BarChart3, Globe, Database, Wrench 
} from 'lucide-react';
import { SKILLS } from '../constants/data';

const iconMap: Record<string, any> = {
  Code: Code2,
  Cpu: Cpu,
  BarChart3: BarChart3,
  Globe: Globe,
  Database: Database,
  Wrench: Wrench
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-10 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-heading font-medium tracking-widest uppercase mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold"
          >
            Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Capabilities</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, idx) => {
            const IconComponent = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-[32px] border border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center rounded-2xl mb-6 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all">
                  <IconComponent size={28} className="text-blue-400" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-6">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 glass rounded-lg border border-white/5 text-xs text-white/60 font-medium hover:text-white hover:border-blue-500/50 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
