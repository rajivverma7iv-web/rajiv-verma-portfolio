import React from 'react';
import { Search, Compass, Code, CheckCircle, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Search className="w-5 h-5 text-champagne-600" />;
      case '02':
        return <Compass className="w-5 h-5 text-champagne-600" />;
      case '03':
        return <Code className="w-5 h-5 text-champagne-600" />;
      case '04':
        return <CheckCircle className="w-5 h-5 text-champagne-600" />;
      default:
        return <Code className="w-5 h-5 text-champagne-600" />;
    }
  };

  return (
    <section 
      id="process" 
      className="py-24 md:py-32 bg-[#EFEFED] text-charcoal-950 relative border-b border-stone-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-mono text-xs font-bold text-champagne-600 tracking-widest uppercase">05 / METHODOLOGY</span>
              <div className="h-[1px] w-12 bg-champagne-500/40" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-tight">
              Development Process
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-graphite-600 leading-relaxed">
            A structured, step-by-step approach ensuring clarity, timely delivery, and exceptional code quality on every project.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((item) => (
            <div 
              key={item.step}
              className="bg-white rounded-2xl p-7 border border-stone-300 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
                  <span className="font-mono text-2xl font-black text-champagne-600">
                    {item.step}
                  </span>
                  <div className="p-2 rounded-xl bg-stone-100 border border-stone-200 group-hover:border-champagne-400/60 transition-colors">
                    {getStepIcon(item.step)}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display font-bold text-xl text-charcoal-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-champagne-700 mb-4">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Outcomes list */}
              <div className="pt-4 border-t border-stone-100 space-y-2">
                <span className="text-[10px] font-mono text-graphite-500 uppercase tracking-wider block">
                  Key Outcomes:
                </span>
                {item.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-graphite-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-500" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Assurance */}
        <div className="mt-12 p-6 rounded-2xl bg-white/70 border border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-charcoal-900 font-semibold">
              Transparent Communication &bull; Direct Developer Interaction
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-champagne-700 hover:text-champagne-900 uppercase tracking-wider"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
