
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink } from 'lucide-react';
import { CERTIFICATES } from '../constants/data';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-heading font-medium tracking-widest uppercase mb-4"
          >
            Credential Log
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold"
          >
            Professional <span className="text-blue-400">Certifications</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group glass p-8 rounded-[32px] border border-white/5 hover:bg-white/[0.05] transition-all relative overflow-hidden h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck size={64} className="text-blue-400" />
              </div>
              
              <div className="mb-6 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <Award className="text-blue-400" />
              </div>

              <h4 className="text-xl font-heading font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h4>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-white/40 text-sm font-bold tracking-widest uppercase">
                  {cert.issuer}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
