import React from 'react';

export default function MarqueeNiches() {
  const niches = [
    "Crime Documentary",
    "NBA Sports Storytelling",
    "Scam & Fraud Exposed",
    "War History Chronicles",
    "AI Documentaries",
    "Finance & Economic Deep Dives",
    "Faceless YouTube Formats",
    "Creator Talking Head",
    "Multi-Cam Podcasts",
    "Historical Documentaries",
    "Aviation & Investigations",
    "Political Documentaries",
    "Tool & Educational Videos",
    "Travel & Cultural Stories",
    "Celebrity Biographies"
  ];

  return (
    <div className="relative py-4 bg-[#101012] border-y border-white/10 overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {niches.concat(niches).map((niche, idx) => (
          <div key={idx} className="inline-flex items-center gap-4 mx-4">
            <span className="font-display font-bold text-xs sm:text-sm tracking-wider uppercase text-zinc-300 hover:text-[#ccff00] transition-colors">
              {niche}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
          </div>
        ))}
      </div>
    </div>
  );
}
