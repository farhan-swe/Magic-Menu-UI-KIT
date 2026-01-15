
import React from 'react';
import { motion } from 'framer-motion';
import { DEFAULT_ITEMS } from '../constants';

const PerspectiveMenu: React.FC = () => {
  return (
    <div className="flex flex-col gap-[-20px] items-center perspective-[1000px]">
      {DEFAULT_ITEMS.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ rotateX: 45, y: idx * -10, scale: 1 - idx * 0.05 }}
          whileHover={{ 
            rotateX: 0, 
            y: 0, 
            scale: 1.1, 
            zIndex: 50,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
          className="w-48 h-16 bg-[#1a1a1a] border border-white/10 rounded-xl cursor-pointer flex items-center px-4 gap-4 shadow-2xl origin-bottom"
        >
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
            {item.icon}
          </div>
          <span className="font-bold text-gray-300 text-sm tracking-wide">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default PerspectiveMenu;
