import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function FloatingHireDock() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-bounce-subtle">
      <div className="flex items-center gap-3 bg-[#18181b]/95 border border-white/20 p-2 pl-3 rounded-full backdrop-blur-xl shadow-2xl shadow-black/80">
        {/* Profile Avatar */}
        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 shrink-0 bg-[#0e0e10]">
          <img
            src={personalInfo.profileStanding}
            alt="Muhammad Junaid Khattak"
            className="w-full h-full object-cover object-[center_12%]"
          />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#ccff00] ring-2 ring-[#18181b]" />
        </div>

        {/* Text */}
        <div className="hidden sm:flex flex-col pr-1">
          <span className="font-display font-bold text-xs text-white leading-tight">
            Muhammad Junaid Khattak
          </span>
          <span className="font-mono text-[10px] text-zinc-400">
            Available for YouTube Projects
          </span>
        </div>

        {/* Direct Upwork Button */}
        <a
          href={personalInfo.upworkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-[#ccff00] text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-[#b8e600] transition-colors cursor-pointer flex items-center gap-1.5 shadow-md"
        >
          <span>Hire Junaid</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-full"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
