import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const edu = [
    { 
      school: "Poornima College of Engineering", 
      deg: "B.Tech", 
      info: "2025 Grad | 7.33 CGPA", 
      address: "Sitapura, Jaipur",
      active: true // B.Tech ko active dikhana pro lagta hai
    },
    { 
      school: "Indo Bharat International", 
      deg: "12th Grade", 
      info: "2021 | 69%", 
      address: "Nirman Nagar, Jaipur",
      active: false 
    },
    { 
      school: "Indo Bharat International", 
      deg: "10th Grade", 
      info: "2019 | 62%", 
      address: "Nirman Nagar, Jaipur",
      active: false 
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-white tracking-tight">
          Academic <span className="text-zinc-600 font-light italic">Background</span>
        </h2>
        <div className="h-1 w-12 bg-indigo-500 mt-2 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {edu.map((e, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.2 }
            }}
            className={`group p-8 bg-zinc-950 border rounded-[2rem] transition-all duration-500 cursor-default relative overflow-hidden
              ${e.active 
                ? 'border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.1)]' 
                : 'border-zinc-900 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10'
              }`}
          >
            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Degree Title */}
            <motion.p 
              className="text-indigo-500 text-[10px] font-mono mb-4 uppercase tracking-[0.2em] font-black group-hover:text-indigo-400 transition-colors"
            >
              {e.deg}
            </motion.p>
            
            {/* School Name */}
            <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:tracking-tight transition-all duration-300">
              {e.school}
            </h3>
            
            {/* Address Row */}
            <div className="flex items-center gap-1.5 mb-6 text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin size={14} className={e.active ? "text-indigo-400" : ""} />
              </motion.div>
              <p className="text-xs font-medium italic font-mono">{e.address}</p>
            </div>

            {/* Stats / Info */}
            <div className="mt-auto pt-6 border-t border-zinc-900 group-hover:border-zinc-800 transition-colors">
              <p className="text-zinc-400 text-sm font-semibold tracking-wide flex justify-between items-center">
                <span>{e.info.split('|')[0]}</span>
                <span className="text-indigo-500/80 font-mono text-xs">{e.info.split('|')[1]}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;