import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-stone-300 py-16 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-graphite-800 border border-champagne-400/40 flex items-center justify-center font-display font-bold text-xs text-champagne-300">
                RV
              </div>
              <span className="font-display font-bold tracking-widest text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              Diploma in Computer Engineering (5th Sem, 2027) &bull; Aspiring web developer crafting clean, responsive, and reliable digital experiences.
            </p>
            <div className="text-xs font-mono text-stone-500">
              Delhi, India &bull; Indian Standard Time (IST)
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold text-champagne-400 uppercase tracking-widest block">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#hero" className="hover:text-champagne-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-champagne-300 transition-colors">About &amp; Education</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-champagne-300 transition-colors">Technical Stack</a>
              </li>
              <li>
                <a href="#services" className="hover:text-champagne-300 transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-champagne-300 transition-colors">Selected Projects</a>
              </li>
              <li>
                <a href="#process" className="hover:text-champagne-300 transition-colors">Process</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-champagne-300 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Direct & Action (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono font-bold text-champagne-400 uppercase tracking-widest block">
              Direct Contact
            </span>
            <div className="space-y-2 text-xs font-mono text-stone-400">
              <p>Email: <span className="text-stone-200">{PERSONAL_INFO.contact.emailPlaceholder}</span></p>
              <p>WhatsApp: <span className="text-stone-200">{PERSONAL_INFO.contact.whatsappPlaceholder}</span></p>
              <p>Location: <span className="text-stone-200">{PERSONAL_INFO.location}</span></p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-graphite-800 border border-white/15 text-stone-300 hover:text-white hover:border-champagne-400 transition-colors text-xs font-mono"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript &amp; Three.js.
          </div>
          <div className="text-center sm:text-right">
            <span>Authentic student portfolio &bull; Delhi, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
