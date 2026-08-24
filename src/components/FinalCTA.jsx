import React from 'react';
import { ExternalLink, Linkedin, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0b0b0b] text-white overflow-hidden editorial-grain">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Clean Charcoal Callout Card */}
        <div className="p-8 sm:p-12 md:p-16 bg-[#121214] border border-white/10 rounded-2xl shadow-xl relative">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-white/10 text-zinc-300 font-mono text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
            <span>PRIMARY HIRING PLATFORM — UPWORK</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Have a Channel Worth Growing?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-zinc-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Whether you need one professionally edited video or support for your complete YouTube content operation, let's build something your audience wants to keep watching.
          </p>

          {/* CTA Button Group — All Upwork Direct Links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={personalInfo.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ccff00] text-black font-display font-bold text-sm tracking-wider uppercase hover:bg-[#b8e600] transition-all duration-200 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Hire Me on Upwork</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personalInfo.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#18181b] border border-white/15 text-white font-display font-bold text-sm tracking-wider uppercase hover:bg-white/5 hover:border-[#ccff00] transition-all duration-200 cursor-pointer"
            >
              <span>Give Work / Start Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#ccff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs uppercase hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Linkedin className="w-4 h-4 text-[#ccff00]" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Subtext info */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ccff00]" />
              <span>Safe Upwork Contract & Escrow</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ccff00]" />
              <span>Fast Reliable Turnarounds</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ccff00]" />
              <span>18+ Niches & Full Pipeline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
