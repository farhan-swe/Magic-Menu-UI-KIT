
import React, { useState } from 'react';
import { DEFAULT_ITEMS } from '../constants';

const NeumorphicMenu: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-[#121212] p-10 rounded-[3rem] shadow-[15px_15px_30px_#050505,-15px_-15px_30px_#1f1f1f] flex gap-8">
      {DEFAULT_ITEMS.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onMouseDown={() => setActive(item.id)}
            onMouseUp={() => setActive(null)}
            onMouseLeave={() => setActive(null)}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200 border border-white/5 ${
              isActive 
                ? 'shadow-[inset_4px_4px_8px_#050505,inset_-4px_-4px_8px_#1f1f1f] translate-y-0.5' 
                : 'shadow-[6px_6px_12px_#050505,-6px_-6px_12px_#1f1f1f] hover:shadow-[4px_4px_8px_#050505,-4px_-4px_8px_#1f1f1f]'
            }`}
          >
            <div style={{ color: isActive ? item.color : '#666' }}>
              {item.icon}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default NeumorphicMenu;
