import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const CtaSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section 
      id="cta" 
      className="py-24 md:py-28 bg-charcoal-900 text-stone-100 relative border-b border-white/10 overflow-hidden"
    >
      {/* Subtle Studio Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-champagne-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 bg-graphite-800/90 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-champagne-300 uppercase">
            {PERSONAL_INFO.contact.availability}
          </span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] max-w-3xl mx-auto">
          Have an idea or website project in mind? Let&rsquo;s discuss it.
        </h2>

        <p className="text-base sm:text-lg text-stone-300 max-w-xl mx-auto leading-relaxed">
          Whether you need a business website, a conversion-focused landing page, or a custom portfolio, I am ready to bring engineering rigor and clean design to your project.
        </p>

        {/* Direct Action Hub */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#contact"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-champagne-400 text-charcoal-950 font-bold text-sm tracking-wider uppercase hover:bg-champagne-300 transition-all duration-300 shadow-xl shadow-champagne-400/10"
          >
            <span>SEND A MESSAGE</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => copyToClipboard(PERSONAL_INFO.contact.emailPlaceholder, 'email')}
            className="inline-flex items-center space-x-2 px-6 py-4 rounded-full bg-graphite-800/90 border border-white/15 text-stone-200 text-sm font-semibold hover:border-champagne-400/60 hover:text-champagne-300 transition-colors"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copied: {PERSONAL_INFO.contact.emailPlaceholder}</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-champagne-400" />
                <span>Copy Email: {PERSONAL_INFO.contact.emailPlaceholder}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => copyToClipboard(PERSONAL_INFO.contact.whatsappPlaceholder, 'phone')}
            className="inline-flex items-center space-x-2 px-6 py-4 rounded-full bg-graphite-800/90 border border-white/15 text-stone-200 text-sm font-semibold hover:border-champagne-400/60 hover:text-champagne-300 transition-colors"
          >
            {copiedPhone ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Copied: {PERSONAL_INFO.contact.whatsappPlaceholder}</span>
              </>
            ) : (
              <>
                <Phone className="w-4 h-4 text-champagne-400" />
                <span>Copy WhatsApp: {PERSONAL_INFO.contact.whatsappPlaceholder}</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Placeholders Banner */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-stone-400">
          <div className="flex items-center space-x-2">
            <span className="text-champagne-400">Email:</span>
            <span className="text-stone-300">{PERSONAL_INFO.contact.emailPlaceholder}</span>
          </div>
          <span className="text-white/20 hidden sm:inline">&bull;</span>
          <div className="flex items-center space-x-2">
            <span className="text-champagne-400">WhatsApp:</span>
            <span className="text-stone-300">{PERSONAL_INFO.contact.whatsappPlaceholder}</span>
          </div>
          <span className="text-white/20 hidden sm:inline">&bull;</span>
          <div className="flex items-center space-x-2">
            <span className="text-champagne-400">Location:</span>
            <span className="text-stone-300">{PERSONAL_INFO.location}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
