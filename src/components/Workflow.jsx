import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { workflowSteps, personalInfo } from '../data/siteData';

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="workflow" className="relative py-24 md:py-32 bg-[#f4f2ec] text-[#0d0f12] overflow-hidden editorial-grain-light">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-black/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 mb-2">
              <span className="text-black font-bold">05 / WORKFLOW</span>
              <span>•</span>
              <span>PRODUCTION PIPELINE</span>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#0d0f12]">
                From Idea to Upload.
              </h2>
              <span className="font-script text-2xl sm:text-3xl text-[#6b8c00] font-bold transform -rotate-3">
                Full Lifecycle ⚡
              </span>
            </div>
          </div>

          <div className="max-w-md">
            <p className="font-display font-medium text-base text-[#0d0f12]">
              Need more than an editor?
            </p>
            <p className="font-sans text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
              I can support the entire content process — ensuring consistency, visual quality, and reliable delivery.
            </p>
          </div>
        </div>

        {/* 7-Step Interactive Pipeline Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Step Selector Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
            {workflowSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#0d0f12] text-white shadow-md scale-[1.01]'
                      : 'bg-white text-zinc-700 hover:bg-zinc-50 border border-black/5'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                        isActive
                          ? 'bg-[#ccff00] text-black'
                          : 'bg-zinc-100 text-zinc-600'
                      }`}
                    >
                      {step.step}
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm sm:text-base">
                        {step.title}
                      </div>
                      <div
                        className={`text-xs font-sans ${
                          isActive ? 'text-zinc-400' : 'text-zinc-500'
                        }`}
                      >
                        {step.subtitle}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive
                        ? 'text-[#ccff00] translate-x-1'
                        : 'text-zinc-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Active Step Visual Detail Box */}
          <div className="lg:col-span-7">
            <div className="h-full bg-white border border-black/10 rounded-2xl p-6 sm:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div>
                {/* Step Pill Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d0f12] text-[#ccff00] font-mono text-xs font-bold">
                    <span>STAGE {workflowSteps[activeStep].step} OF 07</span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
                    <CheckCircle2 className="w-4 h-4 text-[#6b8c00]" />
                    <span>VERIFIED STAGE</span>
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[#0d0f12] mb-3">
                  {workflowSteps[activeStep].title}
                </h3>

                <p className="font-mono text-xs sm:text-sm text-[#6b8c00] font-semibold mb-6">
                  {workflowSteps[activeStep].subtitle}
                </p>

                <p className="text-base sm:text-lg text-zinc-700 font-sans leading-relaxed">
                  {workflowSteps[activeStep].description}
                </p>

                {/* Tactical Detail Badges */}
                <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-black/5">
                  <div className="bg-[#f4f2ec] p-3.5 rounded-lg font-mono text-xs text-zinc-600">
                    <span className="text-black font-bold block mb-0.5">STANDARDIZED:</span>
                    Quality-checked at every milestone
                  </div>
                  <div className="bg-[#f4f2ec] p-3.5 rounded-lg font-mono text-xs text-zinc-600">
                    <span className="text-black font-bold block mb-0.5">SPEED:</span>
                    Reliable turnarounds & clear updates
                  </div>
                </div>
              </div>

              {/* Bottom Navigation & Direct Upwork Action */}
              <div className="mt-10 pt-6 border-t border-black/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 6))}
                  className="font-mono text-xs font-bold text-zinc-600 hover:text-black transition-colors cursor-pointer"
                >
                  ← Previous Stage
                </button>

                <a
                  href={personalInfo.upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0d0f12] text-white font-display font-bold text-xs tracking-wider uppercase hover:bg-zinc-800 transition-all cursor-pointer shadow-sm"
                >
                  <span>Integrate Workflow on Upwork</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#ccff00]" />
                </a>

                <button
                  onClick={() => setActiveStep((prev) => (prev < 6 ? prev + 1 : 0))}
                  className="font-mono text-xs font-bold text-zinc-600 hover:text-black transition-colors cursor-pointer"
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
