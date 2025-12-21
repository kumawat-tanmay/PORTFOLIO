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
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-white">
            Beyond the <span className="text-indigo-500 italic">Pixels</span>
          </h2>
          <div className="h-1 w-16 bg-indigo-500 rounded-full" />
          
          <p className="text-zinc-400 leading-relaxed text-lg font-light">
            I am a <span className="text-white font-medium">Full Stack Developer</span> graduating in 2025. 
            I specialize in building digital solutions that bridge complex logic with intuitive design.
          </p>
          
          <p className="text-zinc-500 leading-relaxed font-light">
            My journey into IT led me to master the <span className="text-zinc-300">MERN stack</span>. 
            During my summer internship at <span className="text-indigo-400">PACE INFOTECH</span>, I gained 
            hands-on experience in the full development lifecycle—from designing user interfaces to 
            managing databases. I focused on strengthening my foundation in <span className="text-zinc-300">JavaScript </span> 
            and learning how to build scalable components that provide a great user experience.
          </p>

          <div className="pt-4 flex gap-8">
            <div>
              <p className="text-2xl font-bold text-white">7.33</p>
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">CGPA</p>
            </div>
            <div className="w-[1px] h-10 bg-zinc-800" />
            <div>
              <p className="text-2xl font-bold text-white">2+</p>
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Internships</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((cat, i) => (
            <div 
              key={i}
              className="p-6 bg-zinc-950 border border-zinc-900 rounded-2xl transition-all shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                {cat.icon}
                <h3 className="font-bold text-white uppercase text-[10px] tracking-widest">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.skills.map((skill, idx) => (
                  <li key={idx} className="text-zinc-500 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-zinc-800 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;