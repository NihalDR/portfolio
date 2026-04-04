
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-blue-500 font-heading font-medium tracking-widest uppercase mb-4">
                Personal Profile
              </h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Passionate about <span className="text-blue-400">solving</span> real-world problems.
              </h3>
              <p className="text-lg text-white/60 leading-relaxed">
                I am a highly motivated technologist with strong foundations in machine learning, data science, and full-stack development. My drive stems from a curiosity to understand the underlying mechanics of complex systems and a passion for creating data-driven solutions.
              </p>
              <p className="mt-4 text-lg text-white/60 leading-relaxed">
                Beyond my core curriculum, I actively participate in competitive programming and hackathons, constantly pushing my limits to learn and implement the latest advancements in AI and web technologies.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-12 h-12 flex items-center justify-center glass rounded-xl border border-white/5">
                  <MapPin className="text-blue-400" />
                </div>
                <div>
                  <div className="text-xs uppercase text-white/30 font-bold">Location</div>
                  <div>Bangalore, India</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-12 h-12 flex items-center justify-center glass rounded-xl border border-white/5">
                  <Calendar className="text-purple-400" />
                </div>
                <div>
                  <div className="text-xs uppercase text-white/30 font-bold">Academic Status</div>
                  <div>Final Year Student (Expected 2027)</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[40px] border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600/20 flex items-center justify-center rounded-2xl mb-8">
                <GraduationCap size={32} className="text-blue-400" />
              </div>
              <h4 className="text-3xl font-heading font-bold mb-2">Education</h4>
              <p className="text-blue-400 font-medium mb-6">{PERSONAL_INFO.education.degree}</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#3b82f6]"></div>
                  <div>
                    <p className="font-bold text-lg">{PERSONAL_INFO.education.institution}</p>
                    <p className="text-white/50">Bangalore, Karnataka</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="glass p-4 rounded-2xl border border-white/5">
                    <p className="text-white/30 text-xs uppercase font-bold tracking-widest mb-1">CGPA</p>
                    <p className="text-2xl font-bold text-white">{PERSONAL_INFO.education.cgpa}</p>
                  </div>
                  <div className="glass p-4 rounded-2xl border border-white/5">
                    <p className="text-white/30 text-xs uppercase font-bold tracking-widest mb-1">Graduation</p>
                    <p className="text-2xl font-bold text-white">{PERSONAL_INFO.education.graduation}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
