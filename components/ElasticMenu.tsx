
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { DEFAULT_ITEMS } from '../constants';

const ElasticMenu: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <motion.div
        animate={{ 
          width: expanded ? 320 : 64,
          height: expanded ? 64 : 64,
          borderRadius: expanded ? 32 : 32
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="bg-indigo-600 shadow-[0_10px_40px_rgba(79,70,229,0.4)] flex items-center overflow-hidden"
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-16 h-16 shrink-0 flex items-center justify-center text-white relative z-10"
        >
          {expanded ? <X /> : <Menu />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              className="flex items-center gap-6 pr-6"
            >
              {DEFAULT_ITEMS.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {item.icon}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ElasticMenu;
