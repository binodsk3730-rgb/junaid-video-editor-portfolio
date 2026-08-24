import React from 'react';
import { Quote } from 'lucide-react';
import { testimonialsData } from '../data/siteData';

export default function Testimonials({ onOpenContact }) {
  return (
    <section id="feedback" className="relative py-24 md:py-32 bg-[#0b0b0b] text-white overflow-hidden editorial-grain">
      {/* Watermark */}
      <div className="absolute top-12 left-10 text-[130px] md:text-[200px] font-display font-extrabold text-white/[0.02] select-none pointer-events-none">
        FEEDBACK
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-2">
              <span className="font-bold">[ 08 / FEEDBACK ]</span>
              <span>•</span>
              <span className="text-zinc-400">CLIENT COLLABORATIONS</span>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
                What Clients Say
              </h2>
              <span className="font-script text-2xl sm:text-3xl text-[#ccff00] font-bold transform -rotate-3">
                Real Feedback
              </span>
            </div>
          </div>

          <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-md leading-relaxed">
            Direct collaboration highlights from ongoing channel productions, long-form documentary edits, and creator workflows.
          </p>
        </div>

        {/* 3 Editorial Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#131315] border border-white/10 hover:border-[#ccff00]/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-[#18181b] flex flex-col justify-between relative group"
            >
              {/* Quote Mark */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full bg-[#0b0b0b] border border-white/10 flex items-center justify-center text-[#ccff00]">
                  <Quote className="w-4 h-4 fill-current" />
                </div>
                <span className="font-mono text-xs text-zinc-500 font-bold">
                  0{idx + 1}
                </span>
              </div>

              {/* Feedback Content */}
              <blockquote className="font-sans text-sm sm:text-base text-zinc-200 leading-relaxed italic mb-8">
                "{item.feedback}"
              </blockquote>

              {/* Client Info Strip */}
              <div className="pt-5 border-t border-white/10 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-[#ccff00] transition-colors">
                    {item.client}
                  </h4>
                  <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
                </div>
                <span className="font-mono text-xs text-zinc-400">
                  {item.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="mt-12 text-center font-mono text-xs text-zinc-500">
          Focused on clear communication, prompt revisions, and deadline reliability on every video project.
        </div>
      </div>
    </section>
  );
}
