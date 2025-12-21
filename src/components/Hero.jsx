import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, FileText, Download } from 'lucide-react';

const Hero = () => {
  // Path to your resume in the public folder
  const resumeUrl = "/Tanmay_Kumawat_Resume.pdf";

  return (
    <div className="flex flex-col items-center justify-center pt-40 px-6 max-w-5xl mx-auto text-center">
      
      {/* Profile Image with Glow Effect */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative mb-10"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>
        <img 
          src="/tanmay-profile.png" 
          alt="Tanmay Kumawat Professional" 
          className="relative w-44 h-44 rounded-full border-2 border-white/10 p-1 shadow-2xl object-cover z-10" 
        />
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-6xl md:text-8xl font-black tracking-tighter"
      >
        TANMAY <span className="text-zinc-500">KUMAWAT</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
      >
        A highly motivated <span className="text-white font-medium">Full Stack Developer</span> graduating in 2025. 
        MERN stack specialist with a <span className="text-white font-medium italic">7.33 CGPA</span>.
      </motion.p>

      {/* PRIMARY ACTIONS: Projects & Contact */}
      <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center items-center">
        <motion.a 
          href="#projects"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-10 py-4 bg-white text-black font-bold rounded-xl flex items-center gap-3 overflow-hidden transition-all duration-300 w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <span className="relative z-10">Explore Work</span>
          <ArrowUpRight size={20} className="relative z-10 group-hover:rotate-45 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </motion.a>

        <motion.a 
          href="#contact"
          whileHover={{ y: -4 }}
          className="group px-10 py-4 bg-zinc-900/50 backdrop-blur-md border border-white/10 text-white font-medium rounded-xl flex items-center gap-3 hover:bg-zinc-800 transition-all duration-300 w-full sm:w-auto justify-center"
        >
          <span>Get in touch</span>
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-fuchsia-500 transition-colors duration-300">
            <Send size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </motion.a>
      </div>

      {/* HIGHLIGHTED RESUME SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex flex-wrap gap-4 justify-center items-center"
      >
        {/* View Resume Button */}
        <motion.a 
          href={resumeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 hover:text-blue-300 transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)]"
        >
          <div className="p-2 bg-blue-500/10 rounded-full">
            <FileText size={18} />
          </div>
          <span className="text-sm font-semibold tracking-wide">VIEW RESUME</span>
        </motion.a>

        {/* Download CV Button */}
        <motion.a 
          href={resumeUrl} 
          download="Tanmay_Kumawat_Resume.pdf"
          whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/5 border border-green-500/20 text-green-400 hover:text-green-300 transition-all shadow-[0_0_15px_rgba(34,197,94,0.1)]"
        >
          <div className="p-2 bg-green-500/10 rounded-full">
            <Download size={18} />
          </div>
          <span className="text-sm font-semibold tracking-wide">DOWNLOAD RESUME</span>
        </motion.a>
      </motion.div>

    </div>
  );
};

export default Hero;