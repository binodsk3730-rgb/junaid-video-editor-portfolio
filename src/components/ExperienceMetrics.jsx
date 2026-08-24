import React from 'react';
import { experienceHighlights } from '../data/siteData';

export default function ExperienceMetrics() {
  return (
    <section className="relative py-24 md:py-32 bg-[#f4f2ec] text-[#0d0f12] overflow-hidden editorial-grain-light">
      {/* Ghost Number */}
      <div className="absolute top-8 left-12 text-[140px] md:text-[220px] font-display font-extrabold text-black/[0.03] select-none pointer-events-none">
        09
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-black/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">
              <span className="text-black font-bold">[ 09 / CREDIBILITY ]</span>
              <span>•</span>
              <span>SCALE & COMMITMENT</span>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#0d0f12]">
                Work That Goes Beyond the Timeline.
              </h2>
              <span className="font-script text-2xl sm:text-3xl text-[#6b8c00] font-bold transform -rotate-3">
                Proven Output
              </span>
            </div>
          </div>

          <p className="font-sans text-xs sm:text-sm text-zinc-600 max-w-md leading-relaxed">
            Real experience across high-retention long-form formats, multi-channel management, and full production lifecycles.
          </p>
        </div>

        {/* 4 Large Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experienceHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between group hover:border-black/30 transition-all duration-300"
            >
              <div>
                <span className="font-display font-black text-4xl sm:text-5xl text-[#0d0f12] group-hover:text-[#6b8c00] transition-colors block mb-2">
                  {item.number}
                </span>

                <h3 className="font-display font-bold text-lg text-[#0d0f12] mb-3">
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-black/5 flex items-center justify-between font-mono text-[10px] text-zinc-400">
                <span>PILLAR 0{idx + 1}</span>
                <span className="text-[#6b8c00] font-bold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
