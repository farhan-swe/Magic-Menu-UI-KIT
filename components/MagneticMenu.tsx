
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { DEFAULT_ITEMS } from '../constants';

// Fixed: Using React.FC to properly handle key and children props in the JSX map
const MagneticButton: React.FC<{ children: React.ReactNode; color: string }> = ({ children, color }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x * 0.4, y: position.y * 0.4 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative w-20 h-20 rounded-full flex items-center justify-center group"
    >
      <motion.div 
        animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
        className="absolute inset-0 rounded-full border border-white/20 group-hover:bg-white/5 transition-colors"
      />
      <div 
        className="relative z-10 transition-transform duration-200 group-hover:scale-125"
        style={{ color }}
      >
        {children}
      </div>
    </motion.button>
  );
};

const MagneticMenu: React.FC = () => {
  return (
    <div className="flex gap-4">
      {DEFAULT_ITEMS.map((item) => (
        <MagneticButton key={item.id} color={item.color}>
          {item.icon}
        </MagneticButton>
      ))}
    </div>
  );
};

export default MagneticMenu;
