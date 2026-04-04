
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, BarChart3, Globe, PenTool } from 'lucide-react';

const SERVICES = [
  {
    title: "AI Solutions",
    description: "Developing robust ML models, GenAI applications, and automation systems tailored for efficiency.",
    icon: Cpu,
    color: "blue"
  },
  {
    title: "Data Analysis",
    description: "Extracting actionable insights through advanced statistical methods and powerful visualizations.",
    icon: BarChart3,
    color: "purple"
  },
  {
    title: "Full Stack Development",
    description: "Building scalable, high-performance web applications with modern technology stacks.",
    icon: Globe,
    color: "cyan"
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and futuristic interfaces focusing on premium user experiences.",
    icon: PenTool,
    color: "orange"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-blue-500 font-heading font-medium tracking-widest uppercase mb-4">
              Offerings
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold">
              Premium <span className="text-blue-400">Digital</span> Services
            </h3>
          </div>
          <p className="max-w-md text-white/50">
            Transforming complex challenges into elegant, efficient, and data-driven digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 glass rounded-[32px] border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all"
            >
              {/* Hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="text-white/70 group-hover:text-blue-400" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-4">{service.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
