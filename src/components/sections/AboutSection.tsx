import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-24 md:py-32 bg-stone-50 text-charcoal-950 relative border-b border-stone-200 overflow-hidden"
    >
      {/* Editorial Decorative Watermark */}
      <div className="absolute right-[-2rem] top-10 font-display font-extrabold text-9xl text-stone-200/40 select-none pointer-events-none tracking-tighter">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Tag */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="font-mono text-xs font-bold text-champagne-600 tracking-widest uppercase">01 / OVERVIEW</span>
          <div className="h-[1px] w-12 bg-champagne-500/40" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Headline & Bio (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-tight leading-[1.15]">
              Dedicated to clean code practices, clear typography, and responsive web design.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-graphite-700 leading-relaxed font-normal">
              <p>
                {PERSONAL_INFO.about.bioParagraph1}
              </p>
              <p>
                {PERSONAL_INFO.about.bioParagraph2}
              </p>
            </div>

            {/* Core Values / Work Ethic */}
            <div className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {PERSONAL_INFO.about.coreValues.map((val, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-xs font-mono font-semibold text-champagne-600 tracking-wider uppercase">
                    0{idx + 1} &mdash; FOCUS
                  </span>
                  <h4 className="font-display font-bold text-charcoal-900 text-sm">
                    {val.title}
                  </h4>
                  <p className="text-xs text-graphite-600 leading-normal">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Academic & Technical Dossier (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-2xl bg-white border border-stone-200/80 shadow-xl shadow-stone-200/40 space-y-6">
              
              <div className="flex items-center justify-between pb-5 border-b border-stone-100">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-graphite-500">
                  Student Profile
                </span>
              </div>

              {/* Verified Details strictly following constraints */}
              <div className="space-y-4">
                
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-100 text-charcoal-900 border border-stone-200 mt-0.5">
                    <GraduationCap className="w-5 h-5 text-champagne-600" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-graphite-500 block uppercase tracking-wider">Education</span>
                    <span className="text-sm font-semibold text-charcoal-900 block mt-0.5">
                      {PERSONAL_INFO.about.degree}
                    </span>
                    <span className="text-xs text-graphite-600 block mt-0.5">
                      {PERSONAL_INFO.about.semester}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-100 text-charcoal-900 border border-stone-200 mt-0.5">
                    <Calendar className="w-5 h-5 text-champagne-600" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-graphite-500 block uppercase tracking-wider">Graduation Timeline</span>
                    <span className="text-sm font-semibold text-charcoal-900 block mt-0.5">
                      {PERSONAL_INFO.about.graduation}
                    </span>
                    <span className="text-xs text-graphite-600 block mt-0.5">
                      Active Technical Curriculum
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-100 text-charcoal-900 border border-stone-200 mt-0.5">
                    <MapPin className="w-5 h-5 text-champagne-600" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-graphite-500 block uppercase tracking-wider">Location Base</span>
                    <span className="text-sm font-semibold text-charcoal-900 block mt-0.5">
                      {PERSONAL_INFO.about.location}
                    </span>
                    <span className="text-xs text-graphite-600 block mt-0.5">
                      Available for remote & local collaboration
                    </span>
                  </div>
                </div>

              </div>

              {/* Technical Mindset Quote */}
              <div className="p-4 rounded-xl bg-stone-100/90 border border-stone-200/80 text-xs text-graphite-600 font-mono leading-relaxed">
                <span className="text-champagne-600 font-bold font-sans text-sm">&ldquo;</span>
                Focusing on the fundamentals: writing clean code, building responsive layouts, and continuously developing my skills in modern web development.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
