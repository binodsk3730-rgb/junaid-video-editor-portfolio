import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#131315] border border-white/20 rounded-2xl overflow-hidden shadow-2xl animate-scaleUp">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0b0b0b]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
            <span className="font-mono text-xs text-zinc-300 uppercase tracking-wider">
              {project.categoryLabel}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Visual Banner with Verified 16:9 Image */}
        <div className="relative aspect-video bg-[#0e0e10] overflow-hidden border-b border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute top-3 left-3 right-3 flex justify-between items-center font-mono text-xs text-zinc-300 pointer-events-none">
            <span className="bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded border border-white/15">
              {project.aspect}
            </span>
            <span className="text-[#ccff00] bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded border border-white/15">
              {project.fps}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-1">
              EDITING & PACING BREAKDOWN
            </span>
            <p className="font-sans text-sm sm:text-base text-zinc-200 leading-relaxed">
              {project.style}
            </p>
          </div>

          {/* Tags */}
          <div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider block mb-2">
              APPLIED TECHNIQUES
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-zinc-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <a
              href={project.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-mono text-xs hover:bg-white/20 transition-colors"
            >
              <span>Open Google Drive Folder</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={personalInfo.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ccff00] text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-[#b8e600] transition-colors shadow-md"
            >
              <span>Hire for This Style on Upwork</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
