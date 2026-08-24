import React from 'react';
import { ArrowUpRight, Check, Film, Layers, FileText, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';
import { servicesData, personalInfo } from '../data/siteData';

export default function Services() {
  const getServiceIcon = (id) => {
    switch (id) {
      case "01": return <Film className="w-5 h-5 text-[#ccff00]" />;
      case "02": return <TrendingUp className="w-5 h-5 text-[#ccff00]" />;
      case "03": return <FileText className="w-5 h-5 text-[#ccff00]" />;
      case "04": return <Layers className="w-5 h-5 text-[#ccff00]" />;
      default: return <Sparkles className="w-5 h-5 text-[#ccff00]" />;
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0b0b0b] text-white overflow-hidden editorial-grain">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ccff00] mb-2">
              <span className="font-bold">04 / SERVICES</span>
              <span>•</span>
              <span className="text-zinc-400">WHAT I DO</span>
            </div>

            <div className="flex items-center gap-3">
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
                What I Do
              </h1>
              <span className="font-script text-2xl sm:text-3xl text-[#ccff00] font-bold transform -rotate-3">
                Full-Service Execution
              </span>
            </div>
          </div>

          <p className="font-sans text-sm text-zinc-400 max-w-md leading-relaxed">
            Four specialized pillars designed to turn raw concepts into captivating, high-retention YouTube programming.
          </p>
        </div>

        {/* 4 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="group relative bg-[#131315] border border-white/10 hover:border-white/25 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-[#18181b] flex flex-col justify-between"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0b0b0b] border border-white/10 flex items-center justify-center">
                    {getServiceIcon(service.id)}
                  </div>
                  <div>
                    <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block">
                      Service {service.id}
                    </span>
                    <span className="font-script text-lg text-[#ccff00] font-bold">
                      {service.accent}
                    </span>
                  </div>
                </div>

                <span className="font-display font-black text-3xl sm:text-4xl text-white/10 group-hover:text-[#ccff00]/20 transition-colors">
                  0{service.id}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-[#ccff00] transition-colors mb-2">
                  {service.title}
                </h3>
                <span className="inline-block px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 font-mono text-[11px] mb-4">
                  {service.tagline}
                </span>

                <p className="text-sm text-zinc-300 font-sans leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-5 border-t border-white/10 space-y-2.5">
                <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider block mb-2">
                  KEY CAPABILITIES:
                </span>
                {service.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <div className="w-4 h-4 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#ccff00]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct Upwork Action Trigger */}
              <div className="mt-6 pt-4 flex items-center justify-between">
                <a
                  href={personalInfo.upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#ccff00] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Book this service on Upwork</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="font-mono text-[10px] text-zinc-600">
                  PIPELINE 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
