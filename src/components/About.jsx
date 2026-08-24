import React from 'react';
import { ExternalLink, Linkedin } from 'lucide-react';
import { aboutData, personalInfo } from '../data/siteData';

export default function About({ onNavigate, isFullPage = false }) {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#f4f2ec] text-[#0d0f12] overflow-hidden editorial-grain-light">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16 border-b border-black/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">
              <span className="text-black font-bold">02 / ABOUT</span>
              <span>•</span>
              <span>BIOGRAPHY & PHILOSOPHY</span>
            </div>
            
            <div className="flex items-center gap-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#0d0f12]">
                {aboutData.heading}
              </h2>
              <span className="hidden sm:inline-block font-script text-2xl md:text-3xl text-[#6b8c00] font-bold transform -rotate-3">
                About me ↵
              </span>
            </div>
          </div>

          <p className="font-mono text-xs text-zinc-500 max-w-xs">
            Long-form video editing, retention-first pacing, and YouTube channel operations.
          </p>
        </div>

        {/* Editorial 2-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Profile Photograph Card (Clean, Sharp, No Fake Badges) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-sm border border-black/10">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-100 border border-black/5">
                  <img
                    src={personalInfo.profileSeated}
                    alt="Muhammad Junaid Khattak"
                    className="w-full h-full object-cover object-[center_10%]"
                    loading="lazy"
                  />
                </div>

                {/* Sub-label under photo */}
                <div className="mt-3 flex items-center justify-between px-1 font-mono text-[11px] text-zinc-600">
                  <span className="font-medium">Muhammad Junaid Khattak</span>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-black hover:text-[#6b8c00] transition-colors flex items-center gap-1"
                  >
                    <Linkedin className="w-3 h-3" />
                    <span>LINKEDIN</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Text & Philosophy Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="space-y-4 text-base sm:text-lg text-zinc-700 font-sans leading-relaxed">
              <p className="text-xl sm:text-2xl font-display font-semibold text-[#0d0f12] leading-snug">
                {aboutData.bio[0]}
              </p>
              <p>
                {aboutData.bio[1]}
              </p>
              <p>
                {aboutData.bio[2]}
              </p>
              
              {/* Highlighted Quote Box */}
              <div className="my-6 p-5 rounded-xl bg-white border-l-4 border-[#6b8c00] shadow-xs">
                <span className="font-mono text-xs uppercase tracking-widest text-[#6b8c00] font-bold block mb-1">
                  CORE COMMITMENT
                </span>
                <p className="font-display font-bold text-lg sm:text-xl text-[#0d0f12]">
                  "{aboutData.bio[3]}"
                </p>
              </div>
            </div>

            {/* 3 Core Editorial Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-black/10">
              {aboutData.pillars.map((pillar, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-black/5 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-[#6b8c00]">
                      0{idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-sm text-[#0d0f12]">
                      {pillar.label}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-600 leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={personalInfo.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0d0f12] text-white font-display font-bold text-xs tracking-wider uppercase hover:bg-zinc-800 transition-all cursor-pointer shadow-md"
              >
                <span>Hire Me on Upwork</span>
                <ExternalLink className="w-4 h-4 text-[#ccff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-black/10 text-zinc-700 hover:text-black font-mono text-xs hover:border-black/30 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>

              {!isFullPage && onNavigate && (
                <button
                  onClick={() => onNavigate('about')}
                  className="font-mono text-xs font-semibold text-zinc-700 hover:text-black transition-colors underline underline-offset-4 cursor-pointer"
                >
                  Full Bio & Metrics →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
