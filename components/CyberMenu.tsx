
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DEFAULT_ITEMS } from '../constants';

const CyberMenu: React.FC = () => {
  const [activeId, setActiveId] = useState(DEFAULT_ITEMS[0].id);

  return (
    <div className="flex flex-col gap-3">
      {DEFAULT_ITEMS.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className="relative flex items-center gap-4 group"
          >
            {/* Background Trace */}
            <div className={`absolute -inset-x-4 -inset-y-2 border-l-2 border-t transition-all duration-300 ${
              isActive ? 'border-cyan-400 opacity-100' : 'border-transparent opacity-0'
            }`} />
            
            <div className={`w-12 h-12 flex items-center justify-center border-2 skew-x-[-12deg] transition-all duration-300 ${
              isActive 
                ? 'bg-cyan-400/20 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]' 
                : 'bg-black border-gray-800 hover:border-gray-500'
            }`}>
              <div className="skew-x-[12deg]" style={{ color: isActive ? '#22d3ee' : '#64748b' }}>
                {item.icon}
              </div>
            </div>

            <span className={`font-space font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
              isActive ? 'text-cyan-400 translate-x-2' : 'text-gray-600 group-hover:text-gray-300'
            }`}>
              {item.label}
              {isActive && (
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                  className="ml-2"
                >_</motion.span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CyberMenu;
