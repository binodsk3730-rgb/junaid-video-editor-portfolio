import React, { useState } from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { portfolioCategories, portfolioProjects } from '../data/siteData';

export default function SelectedWork({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#0b0b0b] text-white overflow-hidden editorial-grain">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-2">
              <span className="font-bold">MASTER PORTFOLIO</span>
              <span>•</span>
              <span className="text-zinc-400">18 VERIFIED NICHES</span>
            </div>

            <div className="flex items-center gap-3">
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
                Selected Work & Archives
              </h1>
              <span className="font-script text-2xl sm:text-3xl text-[#ccff00] font-bold transform -rotate-3">
                Real Edits ⚡
              </span>
            </div>
          </div>

          <div className="max-w-md">
            <p className="font-display font-medium text-base text-zinc-200">
              High-retention storytelling across 18 specialized genres.
            </p>
            <p className="font-sans text-xs text-zinc-400 mt-1">
              Select any project to inspect pacing details, or click "View Work" to open the verified Google Drive folder.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#ccff00] text-black font-bold shadow-md shadow-[#ccff00]/10 scale-105'
                    : 'bg-[#131315] text-zinc-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-zinc-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid with 18 Verified 16:9 Cover Artwork Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#131315] border border-white/10 hover:border-white/25 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#18181b] flex flex-col justify-between"
            >
              {/* Portfolio Image Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#0e0e10] border-b border-white/10 rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Top Metadata Badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-0.5 rounded bg-black/75 backdrop-blur-sm border border-white/15 text-[10px] font-mono text-[#ccff00]">
                    {project.categoryLabel}
                  </span>

                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm border border-white/15 text-[10px] font-mono text-zinc-300">
                    <span>{project.fps}</span>
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-[#ccff00] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed mb-4">
                    {project.style}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <a
                    href={project.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#ccff00] hover:text-white transition-colors"
                  >
                    <span>View in Drive</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="font-mono text-[11px] text-zinc-400 hover:text-white transition-colors cursor-pointer px-2.5 py-1 rounded bg-white/5 hover:bg-white/10"
                  >
                    Specs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Master Portfolio Drive Callout Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#131315] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#ccff00] uppercase mb-1">
              <Folder className="w-3.5 h-3.5" />
              <span>Full Video Archive</span>
            </div>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              Looking for a specific genre or master raw footage?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              All 18+ niche folders contain real long-form projects, pacing cuts, and master renders.
            </p>
          </div>

          <a
            href="https://drive.google.com/drive/folders/1ePiMjSIY8v4OfXqOiW9lfWYrjF_h7bjF?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#ccff00] text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-[#b8e600] transition-all duration-200 shadow-md cursor-pointer"
          >
            <span>Explore Master Drive</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
