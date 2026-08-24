import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function Navbar({ currentView, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
    { label: 'Services', id: 'services' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0b0b]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Monomark */}
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-3 cursor-pointer text-left"
            >
              <div className="w-9 h-9 rounded-md bg-[#141416] border border-white/15 flex items-center justify-center group-hover:border-[#ccff00] transition-colors relative overflow-hidden">
                <span className="font-display font-bold text-sm tracking-wider text-[#ccff00]">JK</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-[#ccff00] transition-colors">
                  MUHAMMAD JUNAID KHATTAK
                </span>
                <span className="font-mono text-[10px] tracking-wider text-zinc-400 uppercase">
                  Video Editor • YouTube Specialist
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-[#131315]/90 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors font-sans cursor-pointer ${
                    currentView === link.id
                      ? 'bg-[#ccff00] text-black font-semibold'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Availability Badge, LinkedIn & Direct Upwork CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#131315] border border-white/15 flex items-center justify-center text-zinc-400 hover:text-[#ccff00] hover:border-[#ccff00] transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>

              <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181b] border border-white/10 text-zinc-300 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                <span>Available on Upwork</span>
              </div>

              <a
                href={personalInfo.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ccff00] text-black font-semibold text-xs tracking-wide uppercase hover:bg-[#b8e600] transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
              >
                <span>Hire on Upwork</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md bg-[#131315] border border-white/10 text-zinc-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#0b0b0b]/98 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#16181b] border border-white/10 text-zinc-300 text-xs font-mono w-fit mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
              <span>Available for YouTube Projects</span>
            </div>

            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between text-xl font-display font-semibold py-2 border-b border-white/5 transition-colors cursor-pointer text-left w-full ${
                  currentView === link.id ? 'text-[#ccff00]' : 'text-zinc-200 hover:text-[#ccff00]'
                }`}
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-zinc-600">0{idx + 1}</span>
              </button>
            ))}
          </div>

          <div className="pt-6 flex flex-col gap-3">
            <a
              href={personalInfo.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#ccff00] text-black font-display font-bold text-sm tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Hire Me on Upwork</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#131315] border border-white/15 text-zinc-300 hover:text-white font-mono text-xs uppercase text-center flex items-center justify-center gap-2 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>Connect on LinkedIn</span>
            </a>

            <p className="text-center font-mono text-[11px] text-zinc-500 mt-2">
              Muhammad Junaid Khattak • Long-Form YouTube Specialist
            </p>
          </div>
        </div>
      )}
    </>
  );
}
