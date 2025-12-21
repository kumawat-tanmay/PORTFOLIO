import React from 'react';
import { Github, Bot, ShieldCheck, Zap, ArrowUpRight, ShoppingBasket, ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Grocery Management System",
    desc: "A full-stack RBAC (Role-Based Access Control) application featuring secure authentication. Admin side includes inventory control, category management, and delivery tracking, while customers enjoy a seamless shopping experience.",
    tags: ["MERN Stack", "JWT", "Protected Routes", "RBAC", "Cloudinary"],
    icon: <ShoppingBasket size={28} />,
    color: "emerald",
    hoverStyle: "group-hover:text-emerald-400 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]",
    link: "#", // Replace with your grocery link
    github: "#"
  },
  {
    title: "AI Text-to-Image Generator",
    desc: "A powerful creative tool that transforms text prompts into high-quality images. Integrated with industry-leading AI models, featuring a instant download capabilities.",
    tags: ["React", "AI Integration", "Node.js", "Express.js"],
    icon: <ImageIcon size={28} />,
    color: "fuchsia",
    hoverStyle: "group-hover:text-fuchsia-400 group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_40px_rgba(217,70,239,0.1)]",
    link: "#",
    github: "#"
  },
  {
    title: "Stress Checker ",
    desc: "A comprehensive behavioral platform featuring: (1) A 10-point psychometric mood assessment, (2) Real-time facial expression detection with music recommendations mapped from a curated library, (3) An integrated daily task management system for organized productivity, and (4) An AI companion for therapeutic dialogue.",
    tags: ["Computer Vision", "MERN Stack", "JWT", "OpenAI"],
    icon: <Bot size={28} />,
    color: "cyan",
    hoverStyle: "group-hover:text-cyan-400 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]",
    link: "https://github.com/kumawat-tanmay/AI-Stress-Reliever-Chatbot",
    github: "https://github.com/kumawat-tanmay/AI-Stress-Reliever-Chatbot"
  },
  {
    title: "AI Code Reviewer",
    desc: "Automated PR review tool that leverages Gemini Pro to detect bugs and security flaws. Provides real-time, line-by-line optimization suggestions for developers.",
    tags: ["Google Gemini", "React.js", "Tailwind", "Node.js"],
    icon: <Zap size={28} />,
    color: "indigo",
    hoverStyle: "group-hover:text-indigo-400 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_40px_rgba(129,140,248,0.1)]",
    link: "https://github.com/kumawat-tanmay/AI-Code-Reviewer"
  },
  {
    title: "MERN Auth System",
    desc: "Production-ready authentication system featuring JWT sessions, Bcrypt hashing, and SMTP integration for OTP-based email verification and recovery flows.",
    tags: ["JWT", "NodeMailer", "Bcrypt", "MongoDB"],
    icon: <ShieldCheck size={28} />,
    color: "emerald",
    hoverStyle: "group-hover:text-emerald-400 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_40px_rgba(52,211,153,0.1)]",
    link: "https://github.com/kumawat-tanmay/Authentication-System"
  }
];

const Projects = () => (
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
      <div>
        <h2 className="text-4xl font-bold mb-4 tracking-tight text-white">Selected <span className="text-zinc-600 font-light italic">Works</span></h2>
        <div className="h-0.5 w-12 bg-zinc-800"></div>
      </div>
      <a href="https://github.com/kumawat-tanmay" target="_blank" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono">
        git_check <ArrowUpRight size={14}/>
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((p, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`group p-10 bg-zinc-950 border border-zinc-900 rounded-[2.5rem] transition-all duration-500 flex flex-col h-full ${p.hoverStyle}`}
        >
          {/* Top Bar */}
          <div className="mb-12 flex justify-between items-center text-zinc-600">
            <div className="transition-transform duration-500 group-hover:scale-110 group-hover:text-white">
              {p.icon}
            </div>
            <a href={p.link} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github size={22}/>
            </a>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-4 tracking-tight text-white transition-colors duration-500">
            {p.title}
          </h3>
          
          {/* Description */}
          <p className="text-zinc-500 text-sm leading-relaxed mb-10 flex-grow">
            {p.desc}
          </p>

          {/* Tags Mapping */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {p.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-zinc-900 text-zinc-400 text-[10px] font-bold rounded-lg border border-white/5 transition-all duration-500 group-hover:border-white/10 group-hover:text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Projects;