import React from 'react';
import { Github, Bot, ShieldCheck, Zap, ArrowUpRight, ShoppingBasket, ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Grocery Management System",
    desc: "A full-stack RBAC application featuring secure authentication. Admin side includes inventory control and delivery tracking, while customers enjoy a seamless shopping experience.",
    tags: ["MERN Stack", "JWT", "RBAC", "Cloudinary"],
    icon: <ShoppingBasket size={28} />,
    color: "#10b981", // Emerald
    link: "#", 
  },
  {
    title: "AI Text-to-Image Generator",
    desc: "A powerful creative tool that transforms text prompts into high-quality images. Integrated with industry-leading AI models, featuring instant download capabilities.",
    tags: ["React", "AI Integration", "Node.js", "Express.js"],
    icon: <ImageIcon size={28} />,
    color: "#d946ef", // Fuchsia
    link: "https://github.com/kumawat-tanmay/AI-Text-to-Image-generator",
  },
  {
    title: "Stress Checker",
    desc: "Behavioral platform with psychometric mood assessment, real-time facial expression detection with music recommendations, and an AI companion.",
    tags: ["Computer Vision", "MERN", "JWT", "OpenAI"],
    icon: <Bot size={28} />,
    color: "#22d3ee", // Cyan
    link: "https://github.com/kumawat-tanmay/Stress-Checker",
  },
  {
    title: "AI Code Reviewer",
    desc: "Automated PR review tool leveraging Gemini Pro to detect bugs and security flaws. Provides real-time, line-by-line optimization suggestions.",
    tags: ["Google Gemini", "React.js", "Tailwind", "Node.js"],
    icon: <Zap size={28} />,
    color: "#818cf8", // Indigo
    link: "https://github.com/kumawat-tanmay/AI-Code-Reviewer"
  },
  {
    title: "MERN Auth System",
    desc: "Production-ready authentication system featuring JWT sessions, Bcrypt hashing, and SMTP integration for OTP-based email verification.",
    tags: ["JWT", "NodeMailer", "Bcrypt", "MongoDB"],
    icon: <ShieldCheck size={28} />,
    color: "#34d399", // Emerald
    link: "https://github.com/kumawat-tanmay/Authentication-System"
  }
];

const Projects = () => (
  <div className="max-w-6xl mx-auto px-6 py-20">
    {/* Heading Section */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
          Featured <span className="text-zinc-600 font-light italic">Creations</span>
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-indigo-500 rounded-full"
        />
      </motion.div>
      
      <motion.a 
        whileHover={{ x: 5 }}
        href="https://github.com/kumawat-tanmay" 
        target="_blank" 
        rel="noreferrer"
        className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-widest"
      >
        view_all_repositories <ArrowUpRight size={14}/>
      </motion.a>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="group relative p-8 bg-zinc-950 border border-zinc-900 rounded-[2rem] flex flex-col h-full overflow-hidden"
        >
          {/* Subtle Background Glow on Hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(circle at center, ${p.color}, transparent 70%)` }}
          />

          {/* Top Bar */}
          <div className="mb-8 flex justify-between items-center relative z-10">
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="p-3 bg-zinc-900 rounded-2xl text-zinc-400 group-hover:text-white transition-colors duration-500"
              style={{ border: `1px solid transparent` }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = p.color}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
            >
              {p.icon}
            </motion.div>
            <a 
              href={p.link} 
              target="_blank" 
              rel="noreferrer" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
            >
              <Github size={20}/>
            </a>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 tracking-tight text-white group-hover:text-zinc-200 transition-colors relative z-10">
            {p.title}
          </h3>
          
          {/* Description */}
          <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow font-light relative z-10">
            {p.desc}
          </p>

          {/* Tags Mapping */}
          <div className="flex flex-wrap gap-2 mt-auto relative z-10">
            {p.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-zinc-900/50 text-zinc-500 text-[10px] font-bold rounded-lg border border-white/5 group-hover:border-zinc-700 group-hover:text-zinc-300 transition-all duration-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom Corner Accent */}
          <div 
            className="absolute bottom-0 right-0 w-1 h-0 group-hover:h-20 transition-all duration-500"
            style={{ backgroundColor: p.color }}
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export default Projects;