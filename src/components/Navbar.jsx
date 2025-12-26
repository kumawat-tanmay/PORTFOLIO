import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Briefcase, GraduationCap, Mail } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const options = { rootMargin: "-30% 0px -60% 0px", threshold: 0 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: <Home size={18} /> },
    { name: 'About', href: '#about', id: 'about', icon: <User size={18} /> },
    { name: 'Skills', href: '#skills', id: 'skills', icon: <Code size={18} /> },
    { name: 'Work', href: '#projects', id: 'projects', icon: <Briefcase size={18} /> },
    { name: 'Edu', href: '#education', id: 'education', icon: <GraduationCap size={18} /> },
    { name: 'Contact', href: '#contact', id: 'contact', icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* DESKTOP TOP NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 hidden md:block ${
        scrolled ? 'py-4 bg-zinc-950/70 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-10 flex justify-between items-center">
          <motion.a 
            href="#home" 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-white group"
          >
            TANMAY<span className="text-indigo-500 group-hover:animate-pulse">.</span>
          </motion.a>
          
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300 relative py-2 ${
                  activeSection === link.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {link.name}
                {/* Magnetic Sliding Underline */}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVIGATION (Floating Dock Style) */}
      <nav className="fixed bottom-8 left-0 w-full z-[100] md:hidden px-6">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl flex justify-around items-center py-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`relative flex flex-col items-center gap-1 transition-all duration-300 ${
                activeSection === link.id ? 'text-indigo-400' : 'text-zinc-500'
              }`}
            >
              <motion.div 
                whileTap={{ scale: 0.8 }}
                className={`p-1 ${activeSection === link.id ? 'scale-110' : 'scale-100'}`}
              >
                {link.icon}
              </motion.div>
              
              <span className="text-[8px] uppercase font-black tracking-tighter">
                {link.name}
              </span>
              
              {/* Floating Active Glow for Mobile */}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="mobileActive"
                  className="absolute -top-2 w-8 h-8 bg-indigo-500/10 blur-xl rounded-full -z-10"
                />
              )}
            </a>
          ))}
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;