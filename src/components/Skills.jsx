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
    <div className="max-w-6xl mx-auto px-6 overflow-hidden py-10" ref={containerRef}>
      
      {/* Heading Section */}
      <div className="relative mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          Technical <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Arsenal</span>
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full"
        />
        
        <p className="text-zinc-600 text-[10px] font-mono mt-4 uppercase tracking-[0.3em] opacity-80">
          Full Stack & AI Integration (Drag icons)
        </p>
      </div>

      {/* Draggable Skills Grid */}
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-y-16 gap-x-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={containerRef}
            dragElastic={0.5}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
            whileDrag={{ scale: 1.2, zIndex: 50 }}
            className="flex flex-col items-center gap-4 cursor-grab active:cursor-grabbing"
          >
            {/* Icon Wrapper with Brand Glow */}
            <div 
              className={`w-20 h-20 flex items-center justify-center rounded-full transition-all duration-500 ${skill.dark ? 'invert opacity-80' : ''}`}
              style={{ 
                background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)` 
              }}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-10 h-10 pointer-events-none drop-shadow-xl" 
              />
            </div>
            
            <div className="text-center">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
                {skill.name}
                </span>
                {/* Specific sub-label for AI */}
                {skill.name === "Gemini AI" && (
                    <span className="text-[8px] text-indigo-400 font-mono">LLM Integration</span>
                )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;