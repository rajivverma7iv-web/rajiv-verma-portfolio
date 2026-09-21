import React, { useState } from 'react';
import { ExternalLink, Eye, ArrowUpRight, Sparkles, Clock } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import type { ProjectItem } from '../../types';
import { ProjectModal } from '../ui/ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section 
      id="projects" 
      className="py-24 md:py-32 bg-stone-50 text-charcoal-950 relative border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-mono text-xs font-bold text-champagne-600 tracking-widest uppercase">04 / SELECTED WORKS</span>
              <div className="h-[1px] w-12 bg-champagne-500/40" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-tight">
              Featured Web Projects
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-graphite-600 leading-relaxed">
            A curated collection of live client work, architecture prototypes, and interactive engineering experiments.
          </p>
        </div>

        {/* Projects Grid: 2 Columns for spacious editorial showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, index) => {
            if (project.comingSoon) {
              return (
                <div 
                  key={project.id}
                  className="bg-white rounded-3xl p-8 border border-dashed border-stone-300 flex flex-col justify-between relative overflow-hidden group hover:border-champagne-500/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-100">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-graphite-400">
                        Index 0{index + 1}
                      </span>
                      <span className="inline-flex items-center space-x-1 text-[11px] font-mono text-champagne-700 bg-champagne-100/60 px-2.5 py-0.5 rounded-full">
                        <Clock className="w-3 h-3" />
                        <span>In Development</span>
                      </span>
                    </div>

                    <div className="h-44 sm:h-52 rounded-2xl bg-gradient-to-br from-stone-100 via-stone-50 to-stone-200 border border-stone-200 flex flex-col items-center justify-center p-6 text-center mb-6">
                      <Sparkles className="w-8 h-8 text-champagne-500 mb-3 animate-pulse" />
                      <h4 className="font-display font-bold text-lg text-charcoal-800">
                        Continuous Exploration
                      </h4>
                      <p className="text-xs text-graphite-500 max-w-xs mt-1">
                        Upcoming case studies in React 19, Three.js 3D kinetic visuals, and Google AI Studio integrations.
                      </p>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-champagne-600 uppercase tracking-wider mb-3">
                      {project.category}
                    </p>
                    <p className="text-sm text-graphite-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map(t => (
                        <span key={t} className="px-2 py-0.5 text-[11px] font-mono bg-stone-100 text-graphite-600 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className="text-xs font-semibold font-mono text-champagne-700 hover:text-champagne-800 flex items-center gap-1"
                    >
                      Propose Project &rarr;
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div 
                key={project.id}
                className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Card Header: Category & Live Indicator */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-100">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-graphite-400">
                      Index 0{index + 1} &bull; {project.category}
                    </span>
                    
                    {project.isLive ? (
                      <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Live Website</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-[11px] font-mono text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-full border border-stone-200">
                        Concept Showcase
                      </span>
                    )}
                  </div>

                  {/* Visual Preview Container */}
                  <div className="h-48 sm:h-56 rounded-2xl bg-charcoal-900 border border-stone-300/40 p-6 flex flex-col justify-between relative overflow-hidden mb-6 group-hover:border-champagne-400/40 transition-colors">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(204,168,120,0.15),transparent_70%)] pointer-events-none" />
                    
                    <div className="flex items-center justify-between text-xs font-mono text-stone-400 relative z-10">
                      <span className="tracking-widest uppercase">{project.metricsOrScope}</span>
                    </div>

                    <div className="relative z-10 space-y-1.5">
                      <h4 className="font-display font-bold text-xl sm:text-2xl text-white tracking-wide">
                        {project.title}
                      </h4>
                      <p className="text-xs text-stone-300 line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Interactive overlay on hover */}
                    <div className="relative z-10 pt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono backdrop-blur-sm transition-colors flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Project Details</span>
                      </button>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-graphite-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="text-xs text-graphite-700 flex items-start space-x-2">
                        <span className="text-champagne-600 font-bold">&bull;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges & Actions */}
                <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 rounded-md bg-stone-100 text-[11px] font-mono font-medium text-charcoal-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2">
                    {project.isLive && project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-champagne-400 text-charcoal-950 text-xs font-bold uppercase tracking-wider hover:bg-champagne-300 transition-colors shadow-sm"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center space-x-1 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-charcoal-800 text-xs font-semibold uppercase tracking-wider transition-colors"
                      >
                        <span>View Concept</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Render Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
