import React from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import type { ProjectItem } from '../../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-300 shadow-2xl relative text-charcoal-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between z-20">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-bold text-champagne-600 uppercase tracking-wider">
              {project.category}
            </span>
            {project.isLive ? (
              <span className="inline-flex items-center text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Live Deployment
              </span>
            ) : (
              <span className="inline-flex items-center text-[10px] font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
                Concept &amp; Prototype
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-charcoal-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-charcoal-950 mb-2">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-graphite-600 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Graphical Mockup Presentation */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-stone-900 via-charcoal-800 to-graphite-900 text-white border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
              </span>
              <span>{project.id}.demo</span>
            </div>

            <div className="space-y-3 py-2">
              <span className="inline-block text-[11px] font-mono text-champagne-300 tracking-wider uppercase">
                Project Overview
              </span>
              <p className="text-sm text-stone-200 leading-relaxed font-sans">
                {project.description}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-graphite-500">
              Key Highlights:
            </h4>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-graphite-700">
                  <CheckCircle className="w-4 h-4 text-champagne-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2 pt-2 border-t border-stone-200">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-graphite-500 block">
              Technologies Utilized:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-stone-100 border border-stone-200 text-xs font-mono font-medium text-charcoal-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 flex flex-wrap gap-3">
            {project.isLive && project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-champagne-400 text-charcoal-950 font-bold text-xs tracking-wider uppercase hover:bg-champagne-300 transition-colors shadow-md"
              >
                <span>VISIT LIVE WEBSITE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : null}

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-charcoal-900 font-semibold text-xs tracking-wider uppercase transition-colors"
            >
              <span>Close Preview</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
