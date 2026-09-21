import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { HeroSculpture } from '../3d/HeroSculpture';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] lg:min-h-screen bg-charcoal-900 text-stone-100 flex items-center pt-24 pb-16 overflow-hidden border-b border-white/5"
    >
      {/* Subtle Background Glows (Studio Lighting feel) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-champagne-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-graphite-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(204,168,120,0.05),transparent_60%)] pointer-events-none" />
      
      {/* Editorial Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7 text-left">
            
            {/* Location & Academic Badge */}
            <div className="inline-flex items-center space-x-2 bg-graphite-800/90 border border-white/10 px-3.5 py-1.5 rounded-full w-fit backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-champagne-400 animate-pulse" />
              <span className="text-xs font-mono tracking-wider text-stone-300 uppercase">
                {PERSONAL_INFO.location} &bull; Diploma Comp. Engg.
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h2 className="font-display font-bold tracking-widest text-sm sm:text-base text-champagne-300/90 uppercase tracking-[0.2em]">
                {PERSONAL_INFO.name}
              </h2>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08]">
                Building <span className="font-serif italic font-normal text-champagne-300">Digital</span> Experiences.
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-xl font-normal leading-relaxed text-balance">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="group inline-flex items-center space-x-3 px-7 py-4 rounded-full bg-champagne-400 text-charcoal-950 font-bold text-sm tracking-wider uppercase hover:bg-champagne-300 transition-all duration-300 shadow-lg shadow-champagne-400/10 hover:shadow-champagne-400/20 active:scale-[0.98]"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2.5 px-7 py-4 rounded-full bg-graphite-800/80 border border-white/15 text-stone-200 font-semibold text-sm tracking-wider uppercase hover:border-champagne-400/60 hover:text-champagne-300 hover:bg-graphite-700 transition-all duration-300 active:scale-[0.98]"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Pillars Strip */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 max-w-lg">
              <div className="flex flex-col space-y-1">
                <span className="text-[11px] font-mono text-champagne-400 tracking-wider uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Clean Code
                </span>
                <span className="text-xs text-stone-400">Semantic & Scalable</span>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-[11px] font-mono text-champagne-400 tracking-wider uppercase flex items-center gap-1">
                  <Layers className="w-3 h-3" /> Fluid Systems
                </span>
                <span className="text-xs text-stone-400">Mobile to Ultra-Wide</span>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-[11px] font-mono text-champagne-400 tracking-wider uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Modern AI
                </span>
                <span className="text-xs text-stone-400">Google AI Studio</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Kinetic Sculpture (5 Cols on desktop) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient circular frame behind the 3D Canvas */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-champagne-400/20 bg-graphite-800/40 blur-sm pointer-events-none" />
            <div className="absolute w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full border border-white/5 pointer-events-none" />

            {/* 3D Canvas */}
            <div className="w-full relative z-10">
              <HeroSculpture />
              <div className="text-center mt-[-10px] sm:mt-[-20px]">
                <span className="inline-block text-[10px] font-mono tracking-widest text-stone-400/80 uppercase bg-charcoal-950/60 px-3 py-1 rounded-full border border-white/5 backdrop-blur-sm">
                  Abstract Kinetic Architecture &bull; Interactive 3D
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-stone-500 hover:text-champagne-300 transition-colors"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase mb-1">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
};
