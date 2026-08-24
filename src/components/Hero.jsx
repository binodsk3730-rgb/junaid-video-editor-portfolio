import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function Hero({ onNavigate }) {
  return (
    <section className="relative min-h-[88vh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center bg-[#0b0b0b] editorial-grain">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#131315] border border-white/10 text-zinc-300 font-mono text-xs tracking-wider">
            <span className="text-[#ccff00] font-bold">01</span>
            <span className="text-zinc-400">VIDEO EDITING</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">YOUTUBE CONTENT</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">CHANNEL MANAGEMENT</span>
          </div>

          <div className="hidden md:flex items-center gap-3 font-mono text-xs text-zinc-500">
            <span>LONG-FORM SPECIALIST</span>
            <span>•</span>
            <span className="text-zinc-400">MUHAMMAD JUNAID KHATTAK</span>
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Clean Typography & Headline */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-6">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.02] tracking-tight text-white">
                <span>{personalInfo.headline.line1}</span>
                <span className="block mt-1 text-[#ccff00]">
                  {personalInfo.headline.line2}
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-2xl font-normal">
                {personalInfo.subheadline}
              </p>
            </div>

            {/* CTAs & Official Upwork Hiring Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={personalInfo.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#ccff00] text-black font-display font-bold text-sm tracking-wider uppercase hover:bg-[#b8e600] transition-all duration-200 shadow-md hover:translate-y-[-2px] cursor-pointer"
              >
                <span>Hire Junaid on Upwork</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personalInfo.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#141416] border border-white/15 text-white font-display font-bold text-sm tracking-wider uppercase hover:bg-white/5 hover:border-[#ccff00] transition-all duration-200 cursor-pointer"
              >
                <span>Give Work / Start Project</span>
                <ExternalLink className="w-4 h-4 text-[#ccff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={() => onNavigate('work')}
                className="font-mono text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer px-3 py-2 flex items-center gap-1"
              >
                <span>View Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#ccff00]" />
              </button>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-6 border-t border-white/10">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-display font-bold text-xl sm:text-2xl text-white">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Editorial Portrait Card (No Fake Badges, No Fake Metadata) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative bg-[#131315] border border-white/15 rounded-2xl p-3 sm:p-4 shadow-2xl overflow-hidden">
                {/* High-Resolution Portrait Container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#0c0c0e]">
                  <img
                    src={personalInfo.profileStanding}
                    alt="Muhammad Junaid Khattak — Professional Video Editor"
                    className="w-full h-full object-cover object-[center_10%] transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                </div>

                {/* Sub-label under portrait */}
                <div className="mt-3 px-1.5 flex items-center justify-between font-mono text-[11px] text-zinc-400">
                  <span className="text-zinc-300 font-medium">Muhammad Junaid Khattak</span>
                  <span className="text-zinc-500">Video Editor & YouTube Strategist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
