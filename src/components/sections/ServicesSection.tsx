import React from 'react';
import { ArrowUpRight, Check, Sparkles, Building2, Rocket, Briefcase } from 'lucide-react';
import { SERVICES } from '../../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'business-websites':
        return <Building2 className="w-6 h-6 text-champagne-300" />;
      case 'landing-pages':
        return <Rocket className="w-6 h-6 text-champagne-300" />;
      case 'portfolio-websites':
        return <Briefcase className="w-6 h-6 text-champagne-300" />;
      default:
        return <Sparkles className="w-6 h-6 text-champagne-300" />;
    }
  };

  return (
    <section 
      id="services" 
      className="py-24 md:py-32 bg-graphite-900 text-stone-100 relative border-b border-white/10 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-champagne-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-graphite-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-mono text-xs font-bold text-champagne-300 tracking-widest uppercase">03 / CAPABILITIES</span>
              <div className="h-[1px] w-12 bg-champagne-400/30" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Services &amp; Digital Solutions
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-stone-400 leading-relaxed font-normal">
            Specialized web development solutions tailored to help brands, startups, and individuals present their work with distinction.
          </p>
        </div>

        {/* Services 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group bg-graphite-800/80 rounded-2xl p-8 border border-white/10 hover:border-champagne-400/50 hover:bg-graphite-800 transition-all duration-300 flex flex-col justify-between relative shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Top Bar: Number & Icon */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <span className="font-mono text-sm font-bold text-champagne-400">
                    {service.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-charcoal-900/80 border border-white/10 group-hover:border-champagne-400/40 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-champagne-300 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-champagne-300/80 mb-4 tracking-wide">
                  {service.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-sm text-stone-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                  <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block">
                    What's Included:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-stone-300">
                      <Check className="w-3.5 h-3.5 text-champagne-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: CTA */}
              <div className="pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 rounded-xl bg-charcoal-900 border border-white/15 text-stone-200 text-xs font-semibold tracking-wider uppercase group-hover:bg-champagne-400 group-hover:text-charcoal-950 group-hover:border-champagne-400 transition-all duration-300"
                >
                  <span>Inquire About Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
