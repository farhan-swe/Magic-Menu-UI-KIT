
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ALL_ITEMS } from '../constants';
import { MenuItem } from '../types';

// Fixed: Using React.FC to properly handle key and children props in the JSX map
const DockItem: React.FC<{ item: MenuItem; mouseX: any }> = ({ item, mouseX }) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [48, 80, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer group relative"
    >
      <div className="text-white group-hover:scale-110 transition-transform">
        {item.icon}
      </div>
      
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 border border-white/10 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {item.label}
      </div>
    </motion.div>
  );
};

const DockMenu: React.FC = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex items-end gap-3 px-4 pb-3 pt-4 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-lg"
    >
      {ALL_ITEMS.slice(0, 7).map((item) => (
        <DockItem key={item.id} item={item} mouseX={mouseX} />
      ))}
    </motion.div>
  );
};

export default DockMenu;
