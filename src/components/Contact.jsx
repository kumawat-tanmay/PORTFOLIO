import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Phone } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: "Email",
      label: "tanmaymk03@gmail.com",
      href: "mailto:tanmaymk03@gmail.com",
      icon: <Mail size={28} />,
      color: "group-hover:text-red-400"
    },
    {
      name: "Phone",
      label: "+91 8949386859",
      href: "tel:+918949386859",
      icon: <Phone size={28} />,
      color: "group-hover:text-green-400"
    },
    {
      name: "LinkedIn",
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/tanmay-kumawat/", 
      icon: <Linkedin size={28} />,
      color: "group-hover:text-blue-400"
    },
    {
      name: "GitHub",
      label: "Follow on GitHub",
      href: "https://github.com/kumawat-tanmay",
      icon: <Github size={28} />,
      color: "group-hover:text-white"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 text-center py-20 overflow-hidden">
      {/* Heading with Reveal Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Let's <span className="text-zinc-600 font-light italic">Connect</span>
        </h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-indigo-500 mt-4 rounded-full mx-auto" 
        />
      </motion.div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-zinc-400 mb-16 font-light max-w-lg mx-auto leading-relaxed text-sm md:text-base"
      >
        Currently seeking <span className="text-white font-medium">Full Stack opportunities</span> for 2025. 
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </motion.p>

      {/* Grid with Staggered Children */}
      <motion.div 
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {socialLinks.map((link, i) => (
          <motion.a 
            key={i}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 20 },
              show: { opacity: 1, scale: 1, y: 0 }
            }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            className="group p-6 md:p-8 bg-zinc-950 border border-zinc-900 rounded-[2rem] transition-all duration-500 relative overflow-hidden flex flex-col items-center justify-center shadow-2xl"
          >
            {/* Hover Shine Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Arrow Icon */}
            <div className="absolute top-4 right-4 text-zinc-800 group-hover:text-indigo-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              <ArrowUpRight size={18} />
            </div>

            {/* Main Icon */}
            <motion.div 
              className={`text-zinc-600 transition-all duration-500 mb-4 ${link.color} group-hover:scale-110`}
            >
              {link.icon}
            </motion.div>
            
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 mb-2 group-hover:text-indigo-400 transition-colors">
              {link.name}
            </p>
            
            <p className="font-bold text-[10px] md:text-xs text-zinc-400 group-hover:text-white transition-colors truncate w-full px-2">
              {link.label}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;