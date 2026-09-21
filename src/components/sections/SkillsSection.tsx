import React, { useState } from 'react';
import { Code2, GitBranch, Cpu, CheckCircle2, Layout, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | 'all'>('all');

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'HTML':
      case 'CSS':
      case 'JavaScript':
      case 'React':
        return <Code2 className="w-5 h-5 text-champagne-600" />;
      case 'Responsive Web Design':
        return <Layout className="w-5 h-5 text-champagne-600" />;
      case 'Git':
      case 'GitHub':
        return <GitBranch className="w-5 h-5 text-champagne-600" />;
      case 'AI-Assisted Development':
      case 'Google AI Studio':
        return <Cpu className="w-5 h-5 text-champagne-600" />;
      default:
        return <Terminal className="w-5 h-5 text-champagne-600" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="py-24 md:py-32 bg-[#EEEEEC] text-charcoal-950 relative border-b border-stone-300/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-mono text-xs font-bold text-champagne-600 tracking-widest uppercase">02 / COMPETENCIES</span>
              <div className="h-[1px] w-12 bg-champagne-500/40" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-tight">
              Technical Stack &amp; Tooling
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-graphite-600 leading-relaxed">
            A practical, modern toolset focused on building responsive, clean, and accessible web experiences from concept to production.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all uppercase ${
              activeTab === 'all'
                ? 'bg-charcoal-900 text-stone-100 shadow-md'
                : 'bg-white/80 text-graphite-700 hover:bg-white border border-stone-300'
            }`}
          >
            All Competencies (9)
          </button>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all uppercase ${
                activeTab === idx
                  ? 'bg-charcoal-900 text-stone-100 shadow-md'
                  : 'bg-white/80 text-graphite-700 hover:bg-white border border-stone-300'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, catIdx) => {
            if (activeTab !== 'all' && activeTab !== catIdx) return null;

            return (
              <div 
                key={cat.title}
                className="bg-white rounded-2xl p-7 border border-stone-300/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
                    <span className="font-mono text-xs font-bold text-champagne-600 uppercase tracking-wider">
                      Module 0{catIdx + 1}
                    </span>
                    <span className="text-xs font-mono text-graphite-400">
                      {cat.skills.length} Technologies
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-charcoal-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-graphite-600 mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div 
                        key={skill.name}
                        className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 hover:border-champagne-400/60 hover:bg-white transition-all group"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center space-x-2.5">
                            {getSkillIcon(skill.name)}
                            <span className="font-semibold text-sm text-charcoal-900 group-hover:text-champagne-700 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-stone-200/60 text-graphite-700">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-graphite-600 pl-7 leading-normal">
                          {skill.focus}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-graphite-500">
                  <span>Active Learning</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Focus Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white/60 border border-stone-300 text-center max-w-3xl mx-auto backdrop-blur-sm">
          <p className="text-xs sm:text-sm text-graphite-700 leading-relaxed font-sans">
            <span className="font-semibold text-charcoal-900">Learning Approach:</span> Focusing on building a solid foundation in HTML, CSS, JavaScript, and React while practicing version control with Git &amp; GitHub and exploring modern AI tools like Google AI Studio.
          </p>
        </div>

      </div>
    </section>
  );
};
