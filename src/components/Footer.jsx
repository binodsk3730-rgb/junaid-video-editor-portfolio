import React from 'react';
import { ArrowUp, ExternalLink, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#09090b] text-zinc-400 border-t border-white/10 pt-16 pb-12 overflow-hidden editorial-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded bg-[#131315] border border-white/15 flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-[#ccff00]">JK</span>
                </div>
                <h3 className="font-display font-extrabold text-lg text-white tracking-tight">
                  MUHAMMAD JUNAID KHATTAK
                </h3>
              </div>

              <p className="font-sans text-xs text-zinc-400 max-w-sm leading-relaxed mb-4">
                Video Editor & YouTube Content Specialist. Specialized in long-form documentary storytelling, faceless content formats, and complete channel management.
              </p>
            </div>

            <div className="font-mono text-xs text-zinc-500">
              <span className="text-[#ccff00]">●</span> ALL STORIES CRAFTED FOR HIGH RETENTION
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 font-mono text-xs">
            <div>
              <span className="text-white font-bold block mb-3 uppercase tracking-wider text-[11px]">
                PAGES
              </span>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => { onNavigate('home'); scrollToTop(); }}
                    className="hover:text-[#ccff00] transition-colors cursor-pointer text-left"
                  >
                    01 / Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('about'); scrollToTop(); }}
                    className="hover:text-[#ccff00] transition-colors cursor-pointer text-left"
                  >
                    02 / About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('work'); scrollToTop(); }}
                    className="hover:text-[#ccff00] transition-colors cursor-pointer text-left"
                  >
                    03 / Master Work
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { onNavigate('services'); scrollToTop(); }}
                    className="hover:text-[#ccff00] transition-colors cursor-pointer text-left"
                  >
                    04 / Services & Workflow
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-white font-bold block mb-3 uppercase tracking-wider text-[11px]">
                OFFICIAL PROFILES
              </span>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={personalInfo.upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ccff00] transition-colors flex items-center gap-1.5 text-zinc-300 font-semibold"
                  >
                    <span>Upwork Profile</span>
                    <ExternalLink className="w-3 h-3 text-[#ccff00]" />
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ccff00] transition-colors flex items-center gap-1.5 text-zinc-300 font-semibold"
                  >
                    <span>LinkedIn Profile</span>
                    <Linkedin className="w-3 h-3 text-[#ccff00]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1ePiMjSIY8v4OfXqOiW9lfWYrjF_h7bjF?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ccff00] transition-colors flex items-center gap-1.5"
                  >
                    <span>Google Drive Archive</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Direct Action */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <span className="text-white font-bold block mb-3 uppercase tracking-wider text-[11px] font-mono">
                WORK WITH ME
              </span>
              <a
                href={personalInfo.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ccff00] text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-[#b8e600] transition-all cursor-pointer shadow-md"
              >
                <span>Hire on Upwork</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 p-2.5 rounded-full bg-[#131315] border border-white/10 hover:border-[#ccff00] hover:text-[#ccff00] transition-colors cursor-pointer flex items-center gap-2 font-mono text-xs"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Muhammad Junaid Khattak. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>UPWORK VERIFIED FREELANCER</span>
            <span>•</span>
            <span>HIGH RETENTION YOUTUBE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
