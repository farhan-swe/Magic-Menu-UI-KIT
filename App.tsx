
import React, { useState } from 'react';
import { MenuStyle } from './types';
import RadialMenu from './components/RadialMenu';
import GooeyMenu from './components/GooeyMenu';
import GlassMenu from './components/GlassMenu';
import CyberMenu from './components/CyberMenu';
import BentoMenu from './components/BentoMenu';
import NeumorphicMenu from './components/NeumorphicMenu';
import DockMenu from './components/DockMenu';
import ElasticMenu from './components/ElasticMenu';
import PerspectiveMenu from './components/PerspectiveMenu';
import MagneticMenu from './components/MagneticMenu';

const STYLES: { id: MenuStyle; label: string; description: string }[] = [
  { id: 'radial', label: 'Radial Burst', description: 'Circular expansion with staggered animations.' },
  { id: 'gooey', label: 'Gooey Liquid', description: 'Metaball-inspired liquid fusion effect.' },
  { id: 'glass', label: 'Glass Float', description: 'Modern frosted glass with subtle depth.' },
  { id: 'cyberpunk', label: 'Cyberpunk Neon', description: 'High-contrast glows and angular aesthetics.' },
  { id: 'bento', label: 'Bento Grid', description: 'Structured modular layout with focal shifts.' },
  { id: 'neumorphic', label: 'Neumorphic Soft', description: 'Tactile extrusion using soft light and shadows.' },
  { id: 'dock', label: 'Mac Dock', description: 'Magnification effect reminiscent of macOS.' },
  { id: 'elastic', label: 'Elastic Slide', description: 'Spring-based playful movement and stretch.' },
  { id: 'perspective', label: '3D Perspective', description: 'Isotropic 3D rotation and depth stacking.' },
  { id: 'magnetic', label: 'Magnetic Hover', description: 'Elements that pull toward your cursor.' },
];

const App: React.FC = () => {
  const [activeStyle, setActiveStyle] = useState<MenuStyle>('radial');

  const renderActiveMenu = () => {
    switch (activeStyle) {
      case 'radial': return <RadialMenu />;
      case 'gooey': return <GooeyMenu />;
      case 'glass': return <GlassMenu />;
      case 'cyberpunk': return <CyberMenu />;
      case 'bento': return <BentoMenu />;
      case 'neumorphic': return <NeumorphicMenu />;
      case 'dock': return <DockMenu />;
      case 'elastic': return <ElasticMenu />;
      case 'perspective': return <PerspectiveMenu />;
      case 'magnetic': return <MagneticMenu />;
      default: return <RadialMenu />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center p-8 overflow-hidden">
      {/* Header */}
      <header className="max-w-4xl w-full text-center mb-12 animate-fade-in">
        <h1 className="text-5xl font-bold font-space mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
          Magic Menu Gallery
        </h1>
        <p className="text-gray-400 text-lg">
          Select a style below to see the menu in action. Each menu is fully interactive.
        </p>
      </header>

      {/* Style Selector Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-6xl w-full mb-16">
        {STYLES.map((style) => (
          <button
            key={style.id}
            onClick={() => setActiveStyle(style.id)}
            className={`px-4 py-3 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center text-center group ${
              activeStyle === style.id
                ? 'bg-white/10 border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            <span className={`font-semibold text-sm mb-1 ${activeStyle === style.id ? 'text-white' : 'text-gray-400'}`}>
              {style.label}
            </span>
            <div className={`w-1 h-1 rounded-full transition-all duration-300 ${activeStyle === style.id ? 'bg-blue-500 w-4' : 'bg-transparent'}`} />
          </button>
        ))}
      </div>

      {/* Interactive Area */}
      <main className="relative w-full max-w-4xl flex-1 flex items-center justify-center min-h-[500px] rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="text-center absolute top-8 left-1/2 -translate-x-1/2">
          <h2 className="text-xl font-medium text-gray-300">{STYLES.find(s => s.id === activeStyle)?.label}</h2>
          <p className="text-sm text-gray-500">{STYLES.find(s => s.id === activeStyle)?.description}</p>
        </div>
        
        {/* The Magic Menus Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {renderActiveMenu()}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-gray-600 text-sm italic">
        Powered by React, Tailwind & Framer Motion
      </footer>
    </div>
  );
};

export default App;
