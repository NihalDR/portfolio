
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Zap, Sparkles, Activity } from 'lucide-react';
import { PATENTS } from '../constants/data';

const Patents: React.FC = () => {
  return (
    <section id="patents" className="py-10 bg-[#080808]/50 border-y border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-blue-500 font-heading font-medium tracking-widest uppercase mb-4">
              Intellectual Property
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold">
              Research & <span className="text-blue-400">Patents</span>
            </h3>
          </div>
        </div>

        <div className="grid gap-8">
          {PATENTS.map((patent, idx) => (
            <motion.div
              key={patent.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[40px] border border-blue-500/10 relative group"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] rounded-full border border-blue-500/20">
                      {patent.status}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  </div>
                  
                  <h4 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">
                    {patent.title}
                  </h4>
                  
                  <p className="text-xl text-white/60 mb-8 leading-relaxed max-w-2xl">
                    {patent.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="glass p-6 rounded-2xl border border-white/5">
                      <div className="flex items-center gap-3 mb-3">
                        <Zap className="text-blue-400" size={20} />
                        <span className="text-xs font-bold uppercase tracking-widest text-white/30">Technical Innovation</span>
                      </div>
                      <p className="text-white/70 text-sm">Bio-electrochemical cell optimization</p>
                    </div>
                    <div className="glass p-6 rounded-2xl border border-white/5">
                      <div className="flex items-center gap-3 mb-3">
                        <Activity className="text-purple-400" size={20} />
                        <span className="text-xs font-bold uppercase tracking-widest text-white/30">Key Metric</span>
                      </div>
                      <p className="text-white/70 text-sm">{patent.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/3 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border border-dashed border-blue-500/20 rounded-full"
                    />
                    <div className="absolute inset-4 glass rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                      <FileText size={64} className="text-blue-500" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 glass rounded-2xl flex items-center justify-center border border-white/10">
                      <Sparkles className="text-yellow-400" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;
