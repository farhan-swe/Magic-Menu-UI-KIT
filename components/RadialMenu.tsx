
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { DEFAULT_ITEMS } from '../constants';

const RadialMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const radius = 110;

  return (
    <div className="relative h-72 w-72 flex items-center justify-center">
      <AnimatePresence>
        {isOpen && 
          DEFAULT_ITEMS.map((item, index) => {
            const angle = (index * (360 / DEFAULT_ITEMS.length)) - 90;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
                animate={{ opacity: 1, x, y, scale: 1 }}
                exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 18, 
                  delay: index * 0.04 
                }}
                className="absolute w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-115 active:scale-90 transition-transform z-0"
                style={{ backgroundColor: item.color }}
                title={item.label}
              >
                <div className="text-white">
                  {item.icon}
                </div>
              </motion.button>
            );
          })
        }
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ 
          rotate: isOpen ? 135 : 0,
          scale: isOpen ? 0.9 : 1
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-shadow text-black"
      >
        <Plus size={32} strokeWidth={2.5} />
      </motion.button>
    </div>
  );
};

export default RadialMenu;
