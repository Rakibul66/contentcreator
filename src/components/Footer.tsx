import React from 'react';
import { Instagram, Video, Youtube, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full border-t border-white/10 bg-black/80 py-12 px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-xs">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Social Media Circular Buttons (Matching Image 1 & Image 3) */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="p-3 rounded-full bg-white/5 hover:bg-amber-500 hover:text-black border border-white/10 text-gray-300 transition-all transform hover:scale-110"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="p-3 rounded-full bg-white/5 hover:bg-amber-500 hover:text-black border border-white/10 text-gray-300 transition-all transform hover:scale-110"
            title="TikTok"
          >
            <Video className="w-4 h-4" />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="p-3 rounded-full bg-white/5 hover:bg-amber-500 hover:text-black border border-white/10 text-gray-300 transition-all transform hover:scale-110"
            title="YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="p-3 rounded-full bg-white/5 hover:bg-amber-500 hover:text-black border border-white/10 text-gray-300 transition-all transform hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="mailto:contact@mahmud.com"
            onClick={playClickSound}
            className="p-3 rounded-full bg-white/5 hover:bg-amber-500 hover:text-black border border-white/10 text-gray-300 transition-all transform hover:scale-110"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright Note */}
        <div className="space-y-1">
          <p className="font-sans text-gray-300">
            © 2026 Mahmud Mamuru Zaman — All rights reserved.
          </p>
          <p className="font-mono text-gray-500 text-[11px]">
            Built as personal portfolio · <span className="text-amber-400 font-semibold">Alixa Parfums & Studio</span>
          </p>
        </div>

        {/* Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-amber-300 text-[11px] font-mono transition"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
