
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { DEFAULT_ITEMS } from '../constants';

const GooeyMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Ensure we reset state when the component mounts
  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-20">
      <div className="relative flex flex-col items-center" style={{ filter: 'url(#goo)' }}>
        <AnimatePresence>
          {DEFAULT_ITEMS.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ y: 0, scale: 0.5, opacity: 0 }}
              animate={{ 
                y: isOpen ? -(index + 1) * 75 : 0,
                scale: isOpen ? 1 : 0.5,
                opacity: isOpen ? 1 : 0
              }}
              transition={{ 
                type: "spring", 
                stiffness: 150, 
                damping: 12,
                delay: isOpen ? (DEFAULT_ITEMS.length - index) * 0.05 : index * 0.05
              }}
              className="absolute w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg pointer-events-auto"
              style={{ backgroundColor: item.color }}
            >
              <div className="filter-none">
                {item.icon}
              </div>
            </motion.button>
          ))}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          className="relative z-10 w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center shadow-xl transition-transform"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            className="text-white"
          >
            <Plus size={32} strokeWidth={2.5} />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
};

export default GooeyMenu;
