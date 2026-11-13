import { useState } from 'react';
import { AUDIENCES, LUMI_ADVANTAGES } from '../data/lumiData';
import { Check, ArrowRight } from 'lucide-react';

interface AudienceAndAdvantageSectionProps {
  onOpenGetStarted: () => void;
}

export function AudienceAndAdvantageSection({ onOpenGetStarted }: AudienceAndAdvantageSectionProps) {
  const [selectedAudience, setSelectedAudience] = useState(0);
  const currentAudience = AUDIENCES[selectedAudience];

  return (
    <>
      {/* SECTION 06 — WHO IT'S FOR */}
      <section id="solutions" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#08080D]/8">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#5A5A68] mb-4">
              WHO IT’S FOR
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-[-0.03em] leading-[1.06] text-[#08080D] text-balance">
              Built for the people building what’s next.
            </h2>
          </div>

          {/* Editorial Split: Interactive Audience Index + Tailored Operation Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 divide-y divide-[#08080D]/12 border-y border-[#08080D]/12">
              {AUDIENCES.map((aud, idx) => {
                const isActive = selectedAudience === idx;
                return (
                  <button
                    key={aud.number}
                    type="button"
                    onClick={() => setSelectedAudience(idx)}
                    className={`w-full text-left py-6 px-4 sm:px-6 transition-colors flex items-start justify-between gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08080D] ${
                      isActive ? 'bg-white' : 'hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <span
                        className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-md tabular-nums shrink-0 mt-1 transition-colors ${
                          isActive ? 'bg-[#F2D9FF] text-[#08080D]' : 'bg-[#F3F1EC] text-[#5A5A68]'
                        }`}
                      >
                        {aud.number}
                      </span>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#08080D]">
                          {aud.number} — {aud.title}
                        </h3>
                        <p className="mt-1.5 text-sm sm:text-base text-[#3F3F4B] leading-relaxed">
                          {aud.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 shrink-0 mt-1.5 transition-transform ${
                        isActive ? 'text-[#08080D] translate-x-0.5' : 'text-[#5A5A68]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Asymmetric Spotlight Panel */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-[#08080D]/12 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-[#F2D9FF] text-[#08080D] tabular-nums">
                  {currentAudience.number}
                </span>
                <span className="text-xs font-medium text-[#5A5A68]">Configured Workspace</span>
              </div>

              <div>
                <h4 className="font-display text-2xl font-bold text-[#08080D]">{currentAudience.title}</h4>
                <p className="mt-2.5 text-sm sm:text-base text-[#3F3F4B] leading-relaxed">
                  {currentAudience.workflowSummary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#08080D]/10 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5A5A68]">
                  Primary Operational Stack
                </div>
                <ul className="space-y-2.5">
                  {currentAudience.stackFocus.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#08080D]">
                      <Check className="w-4 h-4 text-[#08080D] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={onOpenGetStarted}
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#08080D] text-white text-sm font-semibold hover:bg-[#191924] transition-colors"
              >
                <span>Configure for {currentAudience.title}</span>
                <ArrowRight className="w-4 h-4 text-[#F2D9FF]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — THE LUMI ADVANTAGE */}
      <section className="py-20 md:py-28 bg-white border-b border-[#08080D]/8">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 md:mb-16">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#5A5A68] mb-4">
                THE LUMI ADVANTAGE
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-[-0.03em] leading-[1.06] text-[#08080D] text-balance">
                Less managing tools. More moving brands forward.
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="text-base text-[#3F3F4B] leading-relaxed">
                Point tools generate isolated outputs without brand memory. LUMI unifies research, creative direction,
                video production, publishing, and measurement inside one connected operating system.
              </p>
            </div>
          </div>

          {/* Architectural Comparison Strip */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
            <div className="lg:col-span-5 rounded-2xl bg-[#FAF9F6] border border-[#08080D]/10 p-6 sm:p-7">
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5A5A68] mb-3">
                Fragmented Stack
              </div>
              <h3 className="font-display text-lg font-bold text-[#08080D] mb-4">
                Disconnected single-purpose AI tools
              </h3>
              <ul className="space-y-2.5 text-sm text-[#5A5A68]">
                <li>Separate subscriptions for writing, video, scheduling, and analytics</li>
                <li>Brand context re-uploaded manually in every prompt window</li>
                <li>No feedback loop between audience engagement and next week’s scripts</li>
              </ul>
            </div>

            <div className="lg:col-span-7 rounded-2xl bg-[#08080D] text-white p-6 sm:p-7 relative overflow-hidden">
              <div
                className="pointer-events-none absolute inset-0 opacity-35"
                style={{
                  background:
                    'radial-gradient(circle at 85% 20%, rgba(242,217,255,0.5), transparent 50%), radial-gradient(circle at 20% 80%, rgba(184,231,248,0.35), transparent 50%)',
                }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F2D9FF] mb-3">
                  Unified Operating System
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-4">
                  LUMI — An intelligent marketing department in one system
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/85">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#F2D9FF] mt-0.5 shrink-0" />
                    <span>Shared brand memory across every brief and render</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#F2D9FF] mt-0.5 shrink-0" />
                    <span>Coordinated AI agents from research to publishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#F2D9FF] mt-0.5 shrink-0" />
                    <span>Native Veo & HeyGen video workflows in one timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#F2D9FF] mt-0.5 shrink-0" />
                    <span>Live analytics shaping future creative decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6 Core Advantages Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#08080D]/10">
            {LUMI_ADVANTAGES.map((adv, idx) => (
              <div
                key={adv.title}
                className="p-6 sm:p-7 border-r border-b border-[#08080D]/10 bg-white hover:bg-[#FAF9F6] transition-colors"
              >
                <div className="font-mono text-xs text-[#5A5A68] tabular-nums mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-[#08080D]">{adv.title}</h3>
                <p className="mt-2 text-sm text-[#5A5A68] leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
