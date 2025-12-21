import React from 'react';
import { MapPin } from 'lucide-react';

const Education = () => {
  const edu = [
    { 
      school: "Poornima College of Engineering", 
      deg: "B.Tech", 
      info: "2025 Grad | 7.33 CGPA", 
      address: "Sitapura, Jaipur",
      active: false
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
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-white tracking-tight">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {edu.map((e, i) => (
          /* Added 'group' and specific hover utility classes */
          <div 
            key={i} 
            className={`group p-8 bg-zinc-950 border rounded-3xl transition-all duration-300 cursor-default
              ${e.active 
                ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/5' 
                : 'border-zinc-900 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5'
              }`}
          >
            {/* Degree Title - Changes color on group hover */}
            <p className="text-indigo-500 text-xs font-mono mb-2 uppercase tracking-widest font-bold group-hover:text-indigo-400">
              {e.deg}
            </p>
            
            {/* School Name - Changes color on group hover */}
            <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-white transition-colors">
              {e.school}
            </h3>
            
            {/* Address Row */}
            <div className="flex items-center gap-1.5 mb-3 text-zinc-500 group-hover:text-zinc-400 transition-colors">
              <MapPin size={12} />
              <p className="text-[11px] font-medium italic">{e.address}</p>
            </div>

            <p className="text-zinc-600 text-sm font-medium group-hover:text-zinc-500 transition-colors">
              {e.info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;