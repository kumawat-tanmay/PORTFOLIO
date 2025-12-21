import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer (Summer Internship)",
      company: "PACE INFOTECH",
      duration: "June 2024 — August 2024",
      desc: "During this intensive summer internship, I specialized in the MERN stack to build scalable web solutions. I architected robust backend services using Node.js and Express, managed complex data relationships in MongoDB, and crafted dynamic user interfaces with React. I focused on optimizing API endpoints and implementing secure authentication flows, gaining hands-on experience in full-cycle software development.",
      skills: ["MERN Stack", "Backend Architecture", "API Optimization", "MongoDB", "Express.js"],
      color: "bg-indigo-500",
      shadow: "shadow-[0_0_15px_rgba(99,102,241,0.5)]",
      isLatest: true
    },
    {
      role: "Web Development (Summer Internship)",
      company: "LEARN AND BUILD ",
      duration: "June 2022 — July 2022",
      desc: "Focused on mastering the fundamentals of frontend engineering. I engineered responsive, mobile-first web pages using HTML5, CSS3, and JavaScript. I learned to translate design mockups into functional code, ensuring cross-browser compatibility and high-performance UI rendering through modern CSS techniques like Flexbox and Grid.",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI Foundations"],
      color: "bg-zinc-700",
      shadow: "",
      isLatest: false
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Title Section */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold tracking-tight text-white text-center md:text-left">
          Professional <span className="text-zinc-500 font-light italic">Journey</span>
        </h2>
        <div className="h-1 w-16 bg-indigo-500 mt-4 rounded-full mx-auto md:mx-0" />
      </div>

      <div className="relative space-y-20">
        {/* Vertical Line Connector */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-zinc-900" />

        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative pl-12 group"
          >
            {/* Timeline Dot */}
            <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full z-10 border-4 border-zinc-950 transition-all duration-300 group-hover:scale-125 ${exp.color} ${exp.shadow}`} />
            
            {/* Content Card */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-[10px] font-mono font-bold px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-zinc-500">
                  {exp.duration}
                </span>
              </div>
              
              <p className="text-indigo-400 font-mono text-sm font-bold tracking-widest">
                {exp.company}
              </p>
            </div>

            <p className="mt-6 text-zinc-400 leading-relaxed font-light text-base max-w-3xl">
              {exp.desc}
            </p>

            {/* Skill Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {exp.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-zinc-900/50 text-zinc-500 text-[10px] font-bold rounded-md border border-zinc-800 group-hover:border-indigo-500/30 transition-colors uppercase tracking-tighter"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;