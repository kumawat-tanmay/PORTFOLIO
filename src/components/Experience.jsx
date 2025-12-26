import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer (Summer Internship)",
      company: "PACE INFOTECH",
      duration: "June 2024 — August 2024",
      desc: "During this intensive summer internship, I specialized in the MERN stack to build scalable web solutions. I architected robust backend services using Node.js and Express, managed complex data relationships in MongoDB, and crafted dynamic user interfaces with React.",
      skills: ["MERN Stack", "Backend Architecture", "API Optimization", "MongoDB", "Express.js"],
      color: "bg-indigo-500",
      accent: "text-indigo-400",
      shadow: "shadow-[0_0_20px_rgba(99,102,241,0.6)]"
    },
    {
      role: "Web Development (Summer Internship)",
      company: "LEARN AND BUILD ",
      duration: "June 2022 — July 2022",
      desc: "Focused on mastering the fundamentals of frontend engineering. I engineered responsive, mobile-first web pages using HTML5, CSS3, and JavaScript. I learned to translate design mockups into functional code, ensuring cross-browser compatibility.",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI Foundations"],
      color: "bg-zinc-600",
      accent: "text-zinc-500",
      shadow: "shadow-[0_0_15px_rgba(255,255,255,0.1)]"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Professional <span className="text-zinc-600 font-light italic text-3xl md:text-4xl">Journey</span>
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 1, ease: "circOut" }}
          className="h-1 bg-indigo-600 mt-4 rounded-full mx-auto md:mx-0" 
        />
      </motion.div>

      <div className="relative">
        {/* The Animated Line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-zinc-900" />
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-[7px] top-2 w-[2px] bg-gradient-to-b from-indigo-500 to-cyan-500 z-0"
        />

        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-12 group"
            >
              {/* Animated Timeline Dot */}
              <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full z-10 border-[3px] border-zinc-950 transition-all duration-500 group-hover:scale-150 ${exp.color} ${exp.shadow}`} />
              
              {/* Background Highlight on Hover */}
              <div className="absolute -inset-y-6 -inset-x-4 bg-zinc-900/0 group-hover:bg-zinc-900/20 rounded-3xl transition-colors duration-500 -z-10" />

              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="w-fit text-[10px] font-mono font-bold px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 group-hover:border-indigo-500/50"
                  >
                    {exp.duration}
                  </motion.span>
                </div>
                
                <p className={`${exp.accent} font-mono text-sm font-bold tracking-widest uppercase flex items-center gap-2`}>
                  <span className="w-4 h-[1px] bg-current opacity-50" />
                  {exp.company}
                </p>
              </div>

              <p className="mt-6 text-zinc-500 leading-relaxed font-light text-base max-w-2xl group-hover:text-zinc-400 transition-colors duration-300">
                {exp.desc}
              </p>

              {/* Skill Tags with Hover Animation */}
              <div className="mt-8 flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <motion.span 
                    key={idx} 
                    whileHover={{ y: -2, backgroundColor: "rgba(99, 102, 241, 0.1)", color: "#818cf8" }}
                    className="px-3 py-1 bg-zinc-900/50 text-zinc-600 text-[10px] font-bold rounded-lg border border-zinc-800 transition-all uppercase tracking-tighter"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;