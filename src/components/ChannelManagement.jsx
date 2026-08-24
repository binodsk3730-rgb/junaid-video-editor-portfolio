import React from 'react';
import { Youtube, ExternalLink, ShieldCheck, Sliders, PlaySquare } from 'lucide-react';
import { channelManagementData, personalInfo } from '../data/siteData';

export default function ChannelManagement() {
  return (
    <section id="channels" className="relative py-24 md:py-32 bg-[#0b0b0b] text-white overflow-hidden editorial-grain">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-2">
              <span className="font-bold">07 / MANAGEMENT</span>
              <span>•</span>
              <span className="text-zinc-400">YOUTUBE OPERATIONS</span>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
                {channelManagementData.heading}
              </h2>
              <span className="font-script text-2xl sm:text-3xl text-[#ccff00] font-bold transform -rotate-3">
                Full Operations ⚡
              </span>
            </div>
          </div>

          <p className="font-sans text-sm text-zinc-300 max-w-md leading-relaxed">
            {channelManagementData.copy}
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {channelManagementData.channels.map((channel, idx) => (
            <div
              key={idx}
              className="group bg-[#131315] border border-white/10 hover:border-white/25 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-[#18181b] flex flex-col justify-between"
            >
              <div>
                {/* Card Top Strip */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-200 group-hover:text-[#ccff00] transition-colors">
                      <Youtube className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-[#ccff00] transition-colors">
                        {channel.name}
                      </h3>
                      <span className="font-mono text-xs text-zinc-400">
                        {channel.handle}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#ccff00]">
                    {channel.status}
                  </span>
                </div>

                {/* Channel Role and Focus */}
                <div className="space-y-3 my-4">
                  <div className="bg-[#0e0e10] p-3.5 rounded-xl border border-white/5">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">
                      MANAGEMENT ROLE & SCOPE
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-200 font-medium">
                      {channel.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                    <span>Focus: {channel.focus}</span>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#ccff00] hover:text-white transition-colors"
                >
                  <span>Visit Verified Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={personalInfo.upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-zinc-400 hover:text-white transition-colors"
                >
                  Hire on Upwork →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Highlights Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#131315] border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-white">Consistent Publishing</h4>
              <p className="text-xs text-zinc-400 mt-1">
                Zero missed deadlines with structured asset queues, turnaround schedules, and delivery milestones.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] shrink-0">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-white">Packaging & Retention</h4>
              <p className="text-xs text-zinc-400 mt-1">
                Aligning titles, hooks, thumbnails, and pacing to build steady audience return rates.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] shrink-0">
              <PlaySquare className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-white">End-to-End Operations</h4>
              <p className="text-xs text-zinc-400 mt-1">
                Freeing up creators from daily operational chaos so they can concentrate on macro channel growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
