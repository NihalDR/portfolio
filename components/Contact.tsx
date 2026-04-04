
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Smartphone, MapPin, Send, Github, Linkedin, MessageSquare, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/data';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS Configuration from provided user credentials
    const SERVICE_ID = 'service_dkhsbjc';
    const TEMPLATE_ID = 'template_diaew2m';
    const PUBLIC_KEY = '8MK20F4scz3zTMh7-';

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      to_name: PERSONAL_INFO.name,
      message: formState.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      setStatus('sent');
      // Reset form after a delay
      setTimeout(() => {
        setStatus('idle');
        setFormState({ name: '', email: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      // Revert to idle after error message
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-10 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-heading font-medium tracking-widest uppercase mb-4">
            Connect
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold">
            Start a <span className="text-blue-400">Conversation</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[32px] border border-white/5"
            >
              <h4 className="text-2xl font-heading font-bold mb-8">Contact Information</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/70 group">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-blue-500/50 transition-all">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Email Me</div>
                    <div className="text-sm font-medium">{PERSONAL_INFO.socials.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/70 group">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-purple-500/50 transition-all">
                    <Smartphone size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Call Me</div>
                    <div className="text-sm font-medium">{PERSONAL_INFO.socials.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/70 group">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-cyan-500/50 transition-all">
                    <MapPin size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-white/30 tracking-widest">Location</div>
                    <div className="text-sm font-medium">Bangalore, Karnataka, India</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all"><Linkedin size={20} /></a>
                <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all"><Github size={20} /></a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[32px] border border-white/5 bg-gradient-to-br from-blue-600/10 to-transparent"
            >
              <h4 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
                <MessageSquare className="text-blue-400" /> Open for Opportunities
              </h4>
              <p className="text-white/50 text-sm">
                I'm currently looking for internships and collaborative projects in AI, Data Science, and Full Stack Dev.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass p-8 md:p-12 rounded-[40px] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] pointer-events-none"></div>
            
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 border border-blue-500/30">
                    <CheckCircle2 size={40} className="text-blue-400" />
                  </div>
                  <h4 className="text-3xl font-heading font-bold mb-4 text-white">Transmission Successful</h4>
                  <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
                    Your message has been successfully encrypted and dispatched to my neural network. I'll get back to you shortly!
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-blue-400 font-bold hover:underline"
                  >
                    Send another transmission
                  </button>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div 
                  key="error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6 border border-red-500/30">
                    <AlertCircle size={40} className="text-red-400" />
                  </div>
                  <h4 className="text-3xl font-heading font-bold mb-4 text-white">Upload Interrupted</h4>
                  <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
                    There was an error in the transmission process. Please check your connection or try again later.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-red-400 font-bold hover:underline"
                  >
                    Try Re-transmitting
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="relative z-10 space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Identity/Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-white/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Contact/Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-white/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Data/Message</label>
                    <textarea 
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Share your objectives or project details..."
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 transition-all text-white resize-none placeholder:text-white/20"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full ${status === 'sending' ? 'bg-blue-600/50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group`}
                  >
                    {status === 'sending' ? (
                      <>Encrypting & Sending <Loader2 size={20} className="animate-spin" /></>
                    ) : (
                      <>Initiate Dispatch <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
