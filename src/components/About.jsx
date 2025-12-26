import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Layout } from 'lucide-react';

const About = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-indigo-400" size={20} />,
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"]
    },
    {
      title: "Backend",
      icon: <Terminal className="text-cyan-400" size={20} />,
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database & Tools",
      icon: <Database className="text-emerald-400" size={20} />,
      skills: ["MongoDB", "SQL", "Git & GitHub", "Postman", "Cloudinary"]
    },
    {
      title: "Security & AI",
      icon: <Cpu className="text-fuchsia-400" size={20} />,
      skills: ["JWT Auth", "Bcrypt Encryption", "ChatGPT", "Gemini"]
    }
  ];

  // Animation Variants for the Grid (Parent)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Har card ke beech ka delay
      },
    },
  };

  // Animation Variants for each Card (Child)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-24 scroll-mt-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-white">
            Beyond the <span className="text-indigo-500 italic">Pixels</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-indigo-500 rounded-full" 
          />
          
          <p className="text-zinc-400 leading-relaxed text-lg font-light">
            I am a <span className="text-white font-medium">Full Stack Developer</span> graduating in 2025. 
            I specialize in building digital solutions that bridge complex logic with intuitive design.
          </p>
          
          <p className="text-zinc-500 leading-relaxed font-light">
            My journey into IT led me to master the <span className="text-zinc-300">MERN stack</span>. 
            During my summer internship at <span className="text-indigo-400">PACE INFOTECH</span>, I gained 
            hands-on experience in the full development lifecycle.
          </p>

          <div className="pt-4 flex gap-8">
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-default">
              <p className="text-2xl font-bold text-white">7.33</p>
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">CGPA</p>
            </motion.div>
            <div className="w-[1px] h-10 bg-zinc-800" />
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-default">
              <p className="text-2xl font-bold text-white">2+</p>
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Internships</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Skill Cards with Stagger Effect */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                borderColor: "rgba(99, 102, 241, 0.4)", // Indigo glow on hover
                backgroundColor: "rgba(9, 9, 11, 1)" 
              }}
              className="p-6 bg-zinc-950 border border-zinc-900 rounded-2xl transition-colors duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  initial={{ rotate: -20 }}
                  whileInView={{ rotate: 0 }}
                  transition={{ delay: 0.2 * i, type: "spring" }}
                >
                  {cat.icon}
                </motion.div>
                <h3 className="font-bold text-white uppercase text-[10px] tracking-widest">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.skills.map((skill, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="text-zinc-500 text-sm flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-indigo-500/50 rounded-full" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;