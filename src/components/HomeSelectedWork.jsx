import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import crimeDocImg from '../../photos/portfolio/crime-documentary.png';
import nbaSportsImg from '../../photos/portfolio/nba-player-game-stories.png';
import talkingHeadImg from '../../photos/portfolio/talking-head-personal-brand.png';

export default function HomeSelectedWork({ onSelectProject, onNavigate }) {
  // 3 major showcase categories for the concise homepage
  const showcaseProjects = [
    {
      id: 'crime-doc',
      category: 'documentary',
      title: 'Crime Documentary Series',
      categoryLabel: 'DOCUMENTARY & FACELESS',
      image: crimeDocImg,
      style: 'High-retention investigative pacing, archival restoration, and tension soundscapes.',
      driveUrl: 'https://drive.google.com/drive/folders/1ePiMjSIY8v4OfXqOiW9lfWYrjF_h7bjF?usp=drive_link',
      fps: '24 FPS',
      duration: '18:42',
      tags: ['Crime', 'Investigation', 'Pacing']
    },
    {
      id: 'nba-sports',
      category: 'sports',
      title: 'NBA Player & Game Stories',
      categoryLabel: 'SPORTS STORYTELLING',
      image: nbaSportsImg,
      style: 'Speed-ramped velocity curves, player stats graphics, and impactful audio sync.',
      driveUrl: 'https://drive.google.com/drive/folders/13yoR1sk0eJgJkHtYX40vdutEF3RtI7CT?usp=sharing',
      fps: '60 FPS',
      duration: '12:15',
      tags: ['NBA', 'SpeedRamps', 'DynamicAudio']
    },
    {
      id: 'talking-head',
      category: 'creator',
      title: 'Talking Head & Personal Brand',
      categoryLabel: 'CREATOR / YOUTUBE CONTENT',
      image: talkingHeadImg,
      style: 'Multi-cam jump smoothing, zoom reframing, animated B-roll popups, and speech mastering.',
      driveUrl: 'https://drive.google.com/drive/folders/1ios1NsdRKRCs0rXbiz8kBn7sUxQDu_EZ?usp=sharing',
      fps: '60 FPS',
      duration: '14:30',
      tags: ['Creator', 'MultiCam', 'Retention']
    }
  ];

  return (
    <section id="work" className="relative py-24 md:py-32 bg-[#0b0b0b] text-white overflow-hidden editorial-grain">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-2">
              <span className="font-bold">03 / SELECTED WORK</span>
              <span>•</span>
              <span className="text-zinc-400">FEATURED SHOWCASES</span>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
                Selected Work
              </h2>
              <span className="font-script text-2xl sm:text-3xl text-[#ccff00] font-bold transform -rotate-3">
                Featured Edits ⚡
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('work')}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141416] border border-white/15 text-zinc-200 hover:text-white font-mono text-xs hover:border-[#ccff00] transition-colors cursor-pointer"
            >
              <span>View All 18 Niches</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#ccff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Showcase Cards with 16:9 Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {showcaseProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#131315] border border-white/10 hover:border-white/25 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#18181b] flex flex-col justify-between"
            >
              {/* Visual Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#0e0e10] border-b border-white/10 rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm border border-white/15 text-[10px] font-mono text-[#ccff00] font-medium">
                    {project.categoryLabel}
                  </span>

                  <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-sm border border-white/15 text-[10px] font-mono text-zinc-300">
                    {project.fps}
                  </span>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
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
                        className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <a
                    href={project.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#ccff00] hover:text-white transition-colors"
                  >
                    <span>View Work in Drive</span>
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

        {/* View All Work Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('work')}
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#131315] border border-white/20 text-white font-display font-bold text-xs tracking-wider uppercase hover:border-[#ccff00] hover:text-[#ccff00] transition-all cursor-pointer shadow-md"
          >
            <span>View All 18 Portfolio Niches</span>
            <ArrowUpRight className="w-4 h-4 text-[#ccff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
