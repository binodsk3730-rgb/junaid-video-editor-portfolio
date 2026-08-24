import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/siteData';
import docFacelessSpotlightImg from '../../photos/featured/documentary-faceless-spotlight.png';
import sportsNbaSpotlightImg from '../../photos/featured/sports-nba-spotlight.png';
import creatorPodcastToolsSpotlightImg from '../../photos/featured/creator-podcast-tools-spotlight.png';

export default function CategorySpotlights({ onNavigate }) {
  return (
    <div className="bg-[#0b0b0b] text-white editorial-grain">
      {/* 1. DOCUMENTARY & FACELESS STORYTELLING SPOTLIGHT */}
      <section className="relative py-20 md:py-28 border-t border-white/10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Craft Breakdown */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-3">
                <span className="font-bold">SPOTLIGHT 01</span>
                <span>•</span>
                <span className="text-zinc-400">DOCUMENTARY & FACELESS</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Documentary Storytelling & Faceless Formats
              </h3>

              <p className="mt-4 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Crime, scam & fraud investigations, war history, geopolitics, and deep-dive economic analysis. 
                Built with tension-building audio design, archival 2.5D photo animation, and kinetic chapter structures.
              </p>

              <div className="mt-6 space-y-3 font-sans text-xs sm:text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mt-2 shrink-0" />
                  <span><strong>Investigative Pacing:</strong> Hook-driven cold opens followed by carefully paced evidence reveals.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mt-2 shrink-0" />
                  <span><strong>Archival Restoration:</strong> Historical footage treatments, newspaper clippings, and 2.5D photo camera projection.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mt-2 shrink-0" />
                  <span><strong>Layered Soundscapes:</strong> Multi-track SFX, atmospheric ambient drones, and strategic silence for maximum impact.</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://drive.google.com/drive/folders/1ePiMjSIY8v4OfXqOiW9lfWYrjF_h7bjF?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ccff00] text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-[#b8e600] transition-all cursor-pointer shadow-md"
                >
                  <span>Open Crime & History Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalInfo.upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#141416] border border-white/15 text-zinc-200 hover:text-white font-mono text-xs hover:border-[#ccff00] transition-colors"
                >
                  <span>Hire on Upwork</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#ccff00]" />
                </a>
              </div>
            </div>

            {/* Right: Primary Spotlight Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#131315] shadow-2xl group aspect-[16/9]">
                <img
                  src={docFacelessSpotlightImg}
                  alt="Documentary Storytelling & Faceless Formats"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPORTS & NBA STORYTELLING SPOTLIGHT */}
      <section className="relative py-20 md:py-28 bg-[#101012] border-t border-white/10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Sports Primary Visual Display */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#131315] shadow-2xl group aspect-[16/9]">
                <img
                  src={sportsNbaSpotlightImg}
                  alt="High-Energy Sports & NBA Narratives"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right: Sports Narrative Description */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-3">
                <span className="font-bold">SPOTLIGHT 02</span>
                <span>•</span>
                <span className="text-zinc-400">SPORTS STORYTELLING</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                High-Energy Sports & NBA Narratives
              </h3>

              <p className="mt-4 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Fast-paced sports and NBA content combining narrative tension, dynamic visual energy, 
                and rhythmic cutting that keeps sports fans locked in through the entire breakdown.
              </p>

              <div className="mt-6 space-y-3 font-sans text-xs sm:text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mt-2 shrink-0" />
                  <span><strong>Speed-Ramping Mastery:</strong> Precise velocity curves that emphasize critical plays, clutch moments, and momentum shifts.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mt-2 shrink-0" />
                  <span><strong>Clean Stat Overlays:</strong> Dynamic player scorecards, matchup charts, and broadcast-level lower-thirds.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mt-2 shrink-0" />
                  <span><strong>Commentary Synchronicity:</strong> Audio ducking and sub-bass hits tuned to highlight commentator reactions.</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://drive.google.com/drive/folders/13yoR1sk0eJgJkHtYX40vdutEF3RtI7CT?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ccff00] text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-[#b8e600] transition-all cursor-pointer shadow-md"
                >
                  <span>Open NBA & Sports Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalInfo.upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#141416] border border-white/15 text-zinc-200 hover:text-white font-mono text-xs hover:border-[#ccff00] transition-colors"
                >
                  <span>Hire on Upwork</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#ccff00]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CREATOR & TALKING HEAD CONTENT SPOTLIGHT */}
      <section className="relative py-20 md:py-28 border-t border-white/10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Creator Content Description */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-3">
                <span className="font-bold">SPOTLIGHT 03</span>
                <span>•</span>
                <span className="text-zinc-400">CREATOR & PODCAST</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Talking Head, Podcasts & Educational Tool Formats
              </h3>

              <p className="mt-4 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Talking-head videos, multi-cam podcast episodes, educational tutorials, and tool-based YouTube videos 
                presented with crisp jump-cut smoothing, zoom reframing, and clean B-roll synchronization.
              </p>

              <div className="mt-6 space-y-3 font-sans text-xs sm:text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mt-2 shrink-0" />
                  <span><strong>Zoom Reframing:</strong> Converting single 4K camera angles into multi-cam dynamic shots to eliminate static boredom.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mt-2 shrink-0" />
                  <span><strong>B-Roll & Graphic Popups:</strong> Supporting every key talking point with high-context illustrative visuals.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] mt-2 shrink-0" />
                  <span><strong>Podcast Balancing:</strong> Speech leveling, audio cleaning, and chapter structuring.</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://drive.google.com/drive/folders/1ios1NsdRKRCs0rXbiz8kBn7sUxQDu_EZ?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ccff00] text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-[#b8e600] transition-all cursor-pointer shadow-md"
                >
                  <span>Open Creator & Tool Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalInfo.upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#141416] border border-white/15 text-zinc-200 hover:text-white font-mono text-xs hover:border-[#ccff00] transition-colors"
                >
                  <span>Hire on Upwork</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#ccff00]" />
                </a>
              </div>
            </div>

            {/* Right: Creator Frame Primary Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#131315] shadow-2xl group aspect-[16/9]">
                <img
                  src={creatorPodcastToolsSpotlightImg}
                  alt="Talking Head, Podcasts & Educational Tool Formats"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Master 18 Niches (when onNavigate available) */}
      {onNavigate && (
        <section className="py-12 bg-[#0b0b0b] border-t border-white/10 text-center">
          <div className="max-w-7xl mx-auto px-4">
            <button
              onClick={() => onNavigate('work')}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#131315] border border-white/20 text-white font-display font-bold text-xs tracking-wider uppercase hover:border-[#ccff00] hover:text-[#ccff00] transition-all cursor-pointer shadow-lg"
            >
              <span>Explore All 18 Portfolio Niches & Real Folders</span>
              <ArrowUpRight className="w-4 h-4 text-[#ccff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
