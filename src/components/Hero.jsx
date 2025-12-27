import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Send, FileText, Download, Loader2, Check } from 'lucide-react';

const Hero = () => {
  const [downloadStatus, setDownloadStatus] = useState('idle');
  const resumeUrl = "/tanmay_resume.pdf";

  // Function to handle the premium download animation
  const handleDownload = () => {
    if (downloadStatus !== 'idle') return;
    setDownloadStatus('loading');
    setTimeout(() => {
      setDownloadStatus('done');
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Tanmay_Resume.pdf';
      link.click();
      setTimeout(() => setDownloadStatus('idle'), 3000);
    }, 2000);
  };

  const nameLetter = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center pt-24 md:pt-40 px-6 max-w-6xl mx-auto text-center">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-visible">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-indigo-600/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-emerald-600/10 blur-[100px]" />
      </div>

      {/* Profile Image with Floating Effect */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 12 }}
        className="relative mb-8 md:mb-12"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 blur-2xl opacity-30 animate-pulse" />
        <motion.img 
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src="/tanmay-profile.png" 
          alt="Tanmay Kumawat" 
          className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-white/10 p-1.5 shadow-2xl object-cover z-10 bg-zinc-900/80 backdrop-blur-sm" 
        />
      </motion.div>

      {/* RESPONSIVE NAME: Stacked on Mobile, Row on Desktop */}
      <motion.h1 
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter flex flex-col md:flex-row items-center justify-center gap-0 md:gap-6 leading-[0.9] md:leading-tight"
      >
        <div className="flex">
          {"TANMAY".split("").map((char, i) => (
            <motion.span key={i} variants={nameLetter} className="text-white inline-block">{char}</motion.span>
          ))}
        </div>
        <div className="flex text-zinc-700">
          {"KUMAWAT".split("").map((char, i) => (
            <motion.span key={i} variants={nameLetter} className="inline-block">{char}</motion.span>
          ))}
        </div>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 text-zinc-400 text-sm md:text-xl max-w-2xl leading-relaxed font-light px-4"
      >
        High-performance <span className="text-white font-medium italic underline decoration-indigo-500/50 underline-offset-8 uppercase tracking-widest text-xs md:text-base">Full Stack Developer</span> 
        <br className="hidden md:block" /> based in Jaipur, specialized in MERN & AI workflows.
      </motion.p>

      {/* ACTION BUTTONS */}
      <div className="mt-12 flex flex-col sm:flex-row gap-5 items-center justify-center w-full max-w-lg">
        <motion.a 
          href="#projects"
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="group relative w-full sm:w-auto px-10 py-4 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
        >
          EXPLORE WORK
          <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
        </motion.a>

        <motion.a 
          href="#contact"
          whileHover={{ scale: 1.02, y: -4, backgroundColor: "rgba(255,255,255,0.05)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto px-10 py-4 border border-white/10 text-white font-bold rounded-2xl flex items-center justify-center gap-3 backdrop-blur-xl"
        >
          CONTACT
          <Send size={18} className="text-indigo-400" />
        </motion.a>
      </div>

      {/* RESUME BUTTONS WITH INTERACTIVE ANIMATIONS */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mt-16 flex flex-wrap gap-6 justify-center items-center pb-20"
      >
       
        <motion.a 
          href={resumeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
         
          onClick={(e) => {
         
            console.log("Opening Resume...");
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56, 189, 248, 0.2)" }}
          className="flex items-center gap-3 px-8 py-3 rounded-xl border border-sky-500/30 bg-sky-500/5 text-sky-400 text-xs font-black tracking-[0.2em] hover:bg-sky-500 hover:text-white transition-all duration-300"
        >
          <FileText size={16} />
          VIEW CV
        </motion.a>

        {/* DOWNLOAD BUTTON - GREEN THEME */}
        <motion.button 
          onClick={handleDownload}
          whileHover={{ scale: 1.05, boxShadow: downloadStatus === 'done' ? "0 0 30px rgba(16, 185, 129, 0.4)" : "0 0 30px rgba(255, 255, 255, 0.05)" }}
          className={`flex items-center gap-3 px-8 py-3 rounded-xl border font-black tracking-[0.2em] text-xs transition-all duration-500 min-w-[180px] justify-center
            ${downloadStatus === 'done' 
              ? 'border-emerald-500 bg-emerald-500 text-white' 
              : 'border-white/10 bg-white/5 text-zinc-400 hover:border-white/40 hover:text-white'}
          `}
        >
          <AnimatePresence mode="wait">
            {downloadStatus === 'idle' && (
              <motion.div key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Download size={16} /> DOWNLOAD
              </motion.div>
            )}
            {downloadStatus === 'loading' && (
              <motion.div key="loading" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Loader2 size={16} className="animate-spin" /> FETCHING
              </motion.div>
            )}
            {downloadStatus === 'done' && (
              <motion.div key="done" className="flex items-center gap-2" initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
                <Check size={18} strokeWidth={4} /> SUCCESS
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

    </div>
  );
};

export default Hero;