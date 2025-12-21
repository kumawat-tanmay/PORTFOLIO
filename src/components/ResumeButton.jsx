import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Loader2, Check } from 'lucide-react';

const ResumeButton = () => {
  const [status, setStatus] = useState('idle');

  const startDownload = () => {
    setStatus('loading');
    setTimeout(() => {
      setStatus('done');
      // This looks for resume.pdf in your 'public' folder
      const link = document.createElement('a');
      link.href = '/resume.pdf'; 
      link.download = 'Tanmay_Resume.pdf';
      link.click();
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <motion.button
      onClick={startDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`mt-8 px-8 py-4 rounded-2xl flex items-center gap-3 font-bold transition-all shadow-lg ${
        status === 'done' ? 'bg-emerald-500 text-white' : 'bg-white text-black'
      }`}
    >
      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.div key="1" className="flex items-center gap-2" initial={{opacity:0}} animate={{opacity:1}}>
            <Download size={20}/> Download Resume
          </motion.div>
        )}
        {status === 'loading' && (
          <motion.div key="2" className="flex items-center gap-2" initial={{opacity:0}} animate={{opacity:1}}>
            <Loader2 size={20} className="animate-spin" /> One Sec...
          </motion.div>
        )}
        {status === 'done' && (
          <motion.div key="3" className="flex items-center gap-2" initial={{opacity:0}} animate={{opacity:1}}>
            <Check size={20} /> Saved!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ResumeButton;