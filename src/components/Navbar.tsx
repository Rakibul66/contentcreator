import React from 'react';
import { Volume2, VolumeX, Sparkles, Layers, Award, Mail } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface NavbarProps {
  soundEnabled: boolean;
  toggleSound: () => void;
  onScrollToId: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundEnabled,
  toggleSound,
  onScrollToId
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-black/80 border-b border-amber-500/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo Icon Only */}
        <div
          onClick={() => {
            playClickSound();
            onScrollToId('hero-3d-stage');
          }}
          className="flex items-center cursor-pointer group"
          title="Mahmud Mamuru Zaman"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-[1px] shadow-lg shadow-amber-500/30 group-hover:scale-105 transition">
            <div className="w-full h-full bg-black rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Center Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-black/60 p-1.5 rounded-full border border-amber-500/30 backdrop-blur-md">
          <button
            onClick={() => {
              playClickSound();
              onScrollToId('showcase-sections');
            }}
            className="px-4 py-1.5 rounded-full text-xs font-medium text-gray-200 hover:text-white hover:bg-white/10 transition flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>কী কী সেকশনে কাজ করা হয়</span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              onScrollToId('founder-story');
            }}
            className="px-4 py-1.5 rounded-full text-xs font-medium text-gray-200 hover:text-white hover:bg-white/10 transition flex items-center gap-1.5"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Founder Story</span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              onScrollToId('contact-hub');
            }}
            className="px-4 py-1.5 rounded-full text-xs font-medium text-gray-200 hover:text-white hover:bg-white/10 transition flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Contact Desk</span>
          </button>
        </div>

        {/* Right Tools: Sound Effects */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Sound FX Toggle */}
          <button
            onClick={() => {
              toggleSound();
              playClickSound();
            }}
            title={soundEnabled ? 'Mute UI Sounds' : 'Enable UI Sounds'}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-amber-500/30 text-gray-300 hover:text-amber-400 transition"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-amber-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-gray-500" />
            )}
          </button>

        </div>

      </div>
    </header>
  );
};
