import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShowcaseItem } from './types';
import { THREE_PORTFOLIO_ITEMS } from './data/showcaseData';
import { Navbar } from './components/Navbar';
import { CoverflowCarousel } from './components/3DCoverflow/CoverflowCarousel';
import { SectionBreakdown } from './components/SectionBreakdown';
import { FounderTimeline } from './components/FounderTimeline';
import { ContactTerminal } from './components/ContactTerminal';
import { ItemDetailModal } from './components/ItemDetailModal';
import { Footer } from './components/Footer';
import { setSoundEnabled } from './utils/audio';

export default function App() {
  const [items] = useState<ShowcaseItem[]>(THREE_PORTFOLIO_ITEMS);
  const [activeIndex, setActiveIndex] = useState<number>(1); // Center on "Content Creator" by default (index 1 of 3)
  const [soundEnabled, setSoundState] = useState<boolean>(true);

  // Active item for modal detail
  const [activeDetailItem, setActiveDetailItem] = useState<ShowcaseItem | null>(null);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundState(next);
    setSoundEnabled(next);
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070708] text-white font-sans antialiased selection:bg-amber-500 selection:text-black overflow-x-hidden">
      
      {/* Top Navbar Header */}
      <Navbar
        soundEnabled={soundEnabled}
        toggleSound={toggleSound}
        onScrollToId={scrollToId}
      />

      {/* Main Content Flow */}
      <main className="relative z-10 space-y-12 pb-16">
        
        {/* Hero Section: Personal Brand Intro Banner */}
        <motion.section
          initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 pb-2 px-4 max-w-4xl mx-auto text-center space-y-3"
        >
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            Content Creator · Production House Owner · Founder of Alixa
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Mahmud Mamuru Zaman
          </h1>

          <p className="text-sm sm:text-base text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Bangladesh's first luxury perfumer — fusing traditional craftsmanship with modern perfumery, and telling Bangladesh's story through cinematic content and scent.
          </p>
        </motion.section>

        {/* 1. Hero 3D Coverflow Stage */}
        <div id="hero-3d-stage">
          <CoverflowCarousel
            items={items}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            onOpenDetailModal={(item) => setActiveDetailItem(item)}
          />
        </div>

        {/* 2. "Ki Ki Section e Kaj Kore" Breakdown Matrix */}
        <SectionBreakdown
          onSelectSectionIndex={(idx) => {
            setActiveIndex(idx);
            scrollToId('hero-3d-stage');
          }}
          onOpenContactHub={() => scrollToId('contact-hub')}
        />

        {/* 3. Founder Story & Timeline Milestones */}
        <FounderTimeline />

        {/* 4. Direct Contact & Collaboration Terminal */}
        <ContactTerminal />

      </main>

      {/* Item Detail Modal */}
      <ItemDetailModal
        item={activeDetailItem}
        onClose={() => setActiveDetailItem(null)}
        onOpenContactHub={() => scrollToId('contact-hub')}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
