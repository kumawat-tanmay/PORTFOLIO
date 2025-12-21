import React from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Phone } from 'lucide-react'; // Added Phone icon

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      label: "tanmaymk03@gmail.com",
      href: "mailto:tanmaymk03@gmail.com",
      icon: <Mail size={28} />
    },
    {
      name: "Phone",
      label: "+91 8949386859", // Updated with your number
      href: "tel:+918949386859",
      icon: <Phone size={28} />
    },
    {
      name: "LinkedIn",
      label: "Connect on LinkedIn",
      href: "https://linkedin.com/in/kumawat-tanmay",
      icon: <Linkedin size={28} />
    },
    {
      name: "GitHub",
      label: "Follow on GitHub",
      href: "https://github.com/kumawat-tanmay",
      icon: <Github size={28} />
    },
    
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 text-center">
      {/* Heading */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          Let's <span className="text-zinc-500 font-light italic">Connect</span>
        </h2>
        <div className="h-1 w-12 bg-indigo-500 mt-4 rounded-full mx-auto" />
      </div>

      <p className="text-zinc-400 mb-12 font-light max-w-lg mx-auto leading-relaxed">
        Currently seeking Full Stack opportunities for 2025. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      {/* Grid updated to cols-2 for mobile and cols-4 for desktop to fit 4 items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {socialLinks.map((link, i) => (
          <a 
            key={i}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="group p-8 bg-zinc-950 border border-zinc-900 rounded-[2rem] hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.05)] transition-all duration-500 relative overflow-hidden flex flex-col items-center justify-center"
          >
            {/* Background Accent for Hover */}
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="text-indigo-500" size={14} />
            </div>

            <div className="text-zinc-600 group-hover:text-indigo-400 mb-4 transition-colors duration-500">
              {link.icon}
            </div>
            
            <p className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-600 mb-2 group-hover:text-zinc-400 transition-colors">
              {link.name}
            </p>
            
            <p className="font-bold text-xs text-zinc-300 group-hover:text-white transition-colors truncate w-full">
              {link.label}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;