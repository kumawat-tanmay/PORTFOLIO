import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "rgba(97, 218, 251, 0.4)" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "rgba(104, 160, 99, 0.4)" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "rgba(71, 162, 72, 0.4)" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "rgba(0, 117, 143, 0.4)" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "rgba(247, 223, 30, 0.4)" },
  { name: "Tailwind", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", color: "rgba(6, 182, 212, 0.4)" },
  { name: "Express", icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg", color: "rgba(255, 255, 255, 0.2)", dark: true },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", color: "rgba(255, 108, 10, 0.4)" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "rgba(240, 80, 50, 0.4)" }
];

const Skills = () => {
  const containerRef = useRef(null);

  return (
    <div className="max-w-6xl mx-auto px-4 overflow-hidden py-16" ref={containerRef}>
      
      {/* Header Section */}
      <div className="relative mb-16 md:mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          Technical <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">Arsenal</span>
        </motion.h2>
        <p className="text-zinc-500 text-[9px] md:text-[10px] font-mono mt-4 uppercase tracking-[0.3em]">
          Interactive Modules • Drag to Explore
        </p>
      </div>

      {/* Grid: 3 cols on mobile, 5 on desktop */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-4 md:gap-x-10">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={containerRef}
            dragElastic={0.6}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="group flex flex-col items-center relative"
          >
            {/* Icon Wrapper - Size reduced for mobile (w-16 h-16) and larger for desktop (w-24 h-24) */}
            <div 
              className={`relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center rounded-xl md:rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 ${skill.dark ? 'invert opacity-80' : ''}`}
              style={{ 
                boxShadow: `0 0 20px -10px ${skill.color}` 
              }}
            >
              {/* Icon Image - Adjusted for mobile */}
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 md:w-12 md:h-12 pointer-events-none group-hover:scale-110 transition-transform" 
              />
              
              {/* Subtle radial glow */}
              <div 
                className="absolute inset-0 rounded-xl md:rounded-2xl -z-10 opacity-10 group-hover:opacity-30"
                style={{ background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)` }}
              />
            </div>
            
            {/* Text Label - Smaller on mobile */}
            <div className="mt-3 text-center">
              <span className="text-[9px] md:text-[11px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;