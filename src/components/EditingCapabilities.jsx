import React from 'react';
import { Tv, Video, Film, Layers, FastForward, Image, Mic, Headphones, Activity, Clock, ExternalLink } from 'lucide-react';
import { editingCapabilities, personalInfo } from '../data/siteData';

export default function EditingCapabilities() {
  const getIconForIndex = (index) => {
    switch (index) {
      case 0: return <Tv className="w-4 h-4 text-[#6b8c00]" />;
      case 1: return <Video className="w-4 h-4 text-[#6b8c00]" />;
      case 2: return <Film className="w-4 h-4 text-[#6b8c00]" />;
      case 3: return <Layers className="w-4 h-4 text-[#6b8c00]" />;
      case 4: return <FastForward className="w-4 h-4 text-[#6b8c00]" />;
      case 5: return <Image className="w-4 h-4 text-[#6b8c00]" />;
      case 6: return <Mic className="w-4 h-4 text-[#6b8c00]" />;
      case 7: return <Headphones className="w-4 h-4 text-[#6b8c00]" />;
      case 8: return <Activity className="w-4 h-4 text-[#6b8c00]" />;
      case 9: return <Clock className="w-4 h-4 text-[#6b8c00]" />;
      default: return <Film className="w-4 h-4 text-[#6b8c00]" />;
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#f4f2ec] text-[#0d0f12] overflow-hidden editorial-grain-light">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-black/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">
              <span className="text-black font-bold">06 / CAPABILITIES</span>
              <span>•</span>
              <span>EDITING ARSENAL</span>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#0d0f12]">
                Editing Built Around the Story.
              </h2>
              <span className="font-script text-2xl sm:text-3xl text-[#6b8c00] font-bold transform -rotate-3">
                Precision Cuts ↵
              </span>
            </div>
          </div>

          <p className="font-sans text-xs sm:text-sm text-zinc-600 max-w-md leading-relaxed">
            Every genre requires a distinct rhythm, sound design palette, and visual hierarchy. Here is the core editing toolkit I bring to every timeline.
          </p>
        </div>

        {/* 10 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {editingCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                cap.highlight
                  ? 'bg-white border-[#6b8c00]/30 shadow-sm hover:border-[#6b8c00]'
                  : 'bg-white/80 border-black/5 hover:border-black/20 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center group-hover:bg-[#0d0f12] group-hover:text-[#ccff00] transition-colors">
                    {getIconForIndex(idx)}
                  </div>
                  <span className="font-mono text-[10px] text-zinc-400 font-bold">
                    #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-[#0d0f12] group-hover:text-[#6b8c00] transition-colors mb-1.5 leading-snug">
                  {cap.name}
                </h3>
              </div>

              <div className="pt-3 border-t border-black/5 mt-3">
                <span className="font-mono text-[10px] text-zinc-500 block">
                  {cap.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Upwork CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#ccff00] text-black flex items-center justify-center font-bold text-sm">
              ✓
            </div>
            <span className="font-display font-bold text-sm text-[#0d0f12]">
              Need a custom style test or specialized genre breakdown?
            </span>
          </div>

          <a
            href={personalInfo.upworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0d0f12] text-white font-display font-bold text-xs tracking-wider uppercase hover:bg-zinc-800 transition-all cursor-pointer shadow-sm"
          >
            <span>Request A Style Test on Upwork</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#ccff00]" />
          </a>
        </div>
      </div>
    </section>
  );
}
