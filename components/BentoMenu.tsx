
import React from 'react';
import { motion } from 'framer-motion';
import { ALL_ITEMS } from '../constants';

const BentoMenu: React.FC = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-[2.5rem] w-[400px] h-[220px]">
      {ALL_ITEMS.slice(0, 8).map((item, idx) => {
        const isBig = idx === 0 || idx === 7;
        return (
          <motion.div
            key={item.id}
            whileHover={{ scale: 0.98, y: -2 }}
            className={`cursor-pointer group relative flex flex-col items-center justify-center rounded-3xl p-4 transition-colors ${
              isBig ? 'col-span-2' : 'col-span-1'
            } border border-white/5 hover:border-white/20`}
            style={{ 
              backgroundColor: `${item.color}15`,
            }}
          >
            <div 
              className="mb-2 transition-transform group-hover:scale-110"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>
            {isBig && (
              <span className="text-xs font-semibold text-gray-400 opacity-60 uppercase tracking-tighter">
                {item.label}
              </span>
            )}
            
            {/* Subtle glow effect on hover */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500"
              style={{ boxShadow: `inset 0 0 20px ${item.color}` }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default BentoMenu;
