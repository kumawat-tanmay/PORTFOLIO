import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, GraduationCap, Mail } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // 1. Handle background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Optimized Scroll Spy to detect Active Section
  // Updated Scroll Spy in Navbar.jsx
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const options = {
      // This Margin ensures that as soon as the section is 20% from the top, 
      // it becomes active.
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Active Section:", entry.target.id); // For debugging
          setActiveSection(entry.target.id);
        }
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
        scrolled ? 'py-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-xl font-black tracking-tighter text-white">
            TANMAY<span className="text-indigo-500">.</span>
          </a>
          
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 relative py-2 ${
                  activeSection === link.id ? 'text-indigo-400' : 'text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {link.name}
                {/* Underline indicator for Desktop */}
                {activeSection === link.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full" />
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM NAVIGATION (App Style) */}
      <nav className="fixed bottom-6 left-0 w-full z-[100] md:hidden px-4">
        <div className="bg-zinc-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl flex justify-around items-center py-3 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                activeSection === link.id ? 'text-indigo-400 scale-110' : 'text-zinc-500'
              }`}
            >
              <div className="p-1">
                {link.icon}
              </div>
              <span className="text-[7px] uppercase font-bold tracking-tighter">
                {link.name}
              </span>
              
              {/* Active Dot indicator for Mobile */}
              {activeSection === link.id && (
                <div className="w-1 h-1 bg-indigo-400 rounded-full mt-0.5 animate-pulse" />
              )}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;