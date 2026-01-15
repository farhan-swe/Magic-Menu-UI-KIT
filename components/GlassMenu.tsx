
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DEFAULT_ITEMS } from '../constants';

const GlassMenu: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex gap-2">
      {DEFAULT_ITEMS.map((item) => (
        <button
          key={item.id}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="relative px-6 py-4 flex flex-col items-center gap-2 group transition-all"
        >
          {hoveredId === item.id && (
            <motion.div
              layoutId="glass-active"
              className="absolute inset-0 bg-white/10 rounded-xl border border-white/20"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <div 
            className="relative z-10 p-2 rounded-lg transition-colors"
            style={{ color: hoveredId === item.id ? item.color : '#94a3b8' }}
          >
            {item.icon}
          </div>
          <span className={`relative z-10 text-xs font-medium transition-colors ${hoveredId === item.id ? 'text-white' : 'text-gray-500'}`}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default GlassMenu;
