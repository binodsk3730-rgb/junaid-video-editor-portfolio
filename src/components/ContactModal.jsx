import React, { useState } from 'react';
import { X, Send, CheckCircle2, Copy, Check, ExternalLink, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: 'Video Editing',
    channelUrl: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(
      `Hi Junaid! I'm interested in collaborating with you for ${formData.service}. My details: Name: ${formData.name}, Contact: ${formData.contact}, Channel: ${formData.channelUrl}. Message: ${formData.message}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#131315] border border-white/20 rounded-2xl overflow-hidden shadow-2xl animate-scaleUp">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#0b0b0b]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
            <span className="font-display font-bold text-sm text-white">
              Start a Project • Muhammad Junaid Khattak
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Top Upwork & LinkedIn Quick Launch Card */}
        <div className="p-5 bg-[#18181b] border-b border-white/10">
          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-2">
            OFFICIAL HIRING PLATFORM
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ccff00] text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-[#b8e600] transition-colors shadow-sm"
            >
              <span>Hire on Upwork</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0b0b0b] border border-white/15 text-zinc-300 hover:text-white font-mono text-xs transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#ccff00]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/40 flex items-center justify-center mx-auto text-[#ccff00]">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h3 className="font-display font-extrabold text-2xl text-white">
                Project Inquiry Ready!
              </h3>

              <p className="font-sans text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name || 'there'}</strong>. Copy this summary and send it directly via Upwork or LinkedIn to kick off the project immediately.
              </p>

              <div className="p-3.5 rounded-xl bg-[#0b0b0b] border border-white/10 text-left font-mono text-xs text-zinc-300 space-y-1">
                <div><strong>Service:</strong> {formData.service}</div>
                {formData.contact && <div><strong>Contact:</strong> {formData.contact}</div>}
                {formData.channelUrl && <div><strong>Channel:</strong> {formData.channelUrl}</div>}
                {formData.message && <div><strong>Brief:</strong> {formData.message}</div>}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ccff00] text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-[#b8e600] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Inquiry Summary</span>
                    </>
                  )}
                </button>

                <a
                  href={personalInfo.upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/10 text-white font-mono text-xs hover:bg-white/20 transition-colors"
                >
                  <span>Open Upwork</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase tracking-wider">
                  Your Name / Creator Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b0b0b] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#ccff00] font-sans text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase tracking-wider">
                    Email / Contact Info *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="alex@channel.com"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b0b0b] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#ccff00] font-sans text-sm"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase tracking-wider">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b0b0b] border border-white/10 text-white focus:outline-none focus:border-[#ccff00] font-sans text-sm"
                  >
                    <option value="Video Editing">01 — Video Editing</option>
                    <option value="YouTube Channel Management">02 — YouTube Channel Management</option>
                    <option value="Script Writing">03 — Script Writing</option>
                    <option value="Full Production Pipeline">04 — Full YouTube Workflow</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase tracking-wider">
                  YouTube Channel Link (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://youtube.com/@yourchannel"
                  value={formData.channelUrl}
                  onChange={(e) => setFormData({ ...formData, channelUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b0b0b] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#ccff00] font-sans text-sm"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 mb-1.5 uppercase tracking-wider">
                  Project Details & Goals
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell me about your niche, video frequency, editing style reference, or channel goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0b0b0b] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#ccff00] font-sans text-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#ccff00] text-black font-display font-bold text-sm tracking-wider uppercase hover:bg-[#b8e600] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Format Project Brief</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
