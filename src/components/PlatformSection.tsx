import { useState } from 'react';
import { motion } from 'motion/react';
import { CAPABILITIES, CapabilityItem } from '../data/lumiData';
import { Check, ArrowUpRight } from 'lucide-react';

function CapabilityVisual({ item }: { item: CapabilityItem }) {
  const [activeSubTab, setActiveSubTab] = useState(0);

  if (item.previewType === 'research') {
    const signals = [
      { topic: 'Ingredient transparency reels', velocity: '+64%', audience: 'Skincare & Wellness buyers' },
      { topic: 'Behind-the-process studio cuts', velocity: '+41%', audience: 'Design-led founders' },
      { topic: '45-second founder commentary', velocity: '+29%', audience: 'B2B marketing leads' },
    ];
    return (
      <div className="rounded-xl border border-[#08080D]/10 bg-white p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-[#08080D]/8 pb-3">
          <span className="text-xs font-semibold text-[#08080D]">Audience & Competitor Radar</span>
          <span className="text-xs font-mono text-[#5A5A68]">Weekly signal scan</span>
        </div>
        <div className="space-y-2.5">
          {signals.map((s, idx) => (
            <button
              key={s.topic}
              type="button"
              onClick={() => setActiveSubTab(idx)}
              className={`w-full text-left p-3 rounded-lg border transition-colors ${
                activeSubTab === idx
                  ? 'bg-[#F2D9FF]/45 border-[#08080D]/20'
                  : 'bg-[#FAF9F6] border-[#08080D]/8 hover:border-[#08080D]/15'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-[#08080D]">{s.topic}</span>
                <span className="font-mono text-xs font-medium text-[#08080D] tabular-nums">{s.velocity}</span>
              </div>
              <div className="text-[11px] text-[#5A5A68] mt-1">{s.audience}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (item.previewType === 'content') {
    const formats = ['Reel Script', 'LinkedIn Essay', 'Carousel Outline'];
    const snippets = [
      'Hook (0–3s): Most social teams treat video as a separate channel. Here is how one brief feeds all four.',
      'Opening thesis: Consistency is rarely a creative problem—it is an operational fragmentation problem.',
      'Slide 01: Stop copying briefs across five tabs. Slide 02: Connect research directly to production.',
    ];
    return (
      <div className="rounded-xl border border-[#08080D]/10 bg-white p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#08080D]/8 pb-3">
          <span className="text-xs font-semibold text-[#08080D]">Campaign Brief #14 — Q4 Launch</span>
          <div className="inline-flex p-0.5 rounded-lg bg-[#F3F1EC]">
            {formats.map((f, idx) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveSubTab(idx)}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeSubTab === idx ? 'bg-[#08080D] text-white' : 'text-[#5A5A68] hover:text-[#08080D]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#08080D]/8 text-xs leading-relaxed text-[#181820]">
          {snippets[activeSubTab]}
        </div>
        <div className="flex items-center justify-between text-[11px] text-[#5A5A68]">
          <span>Tone: Editorial, confident, concise</span>
          <span className="font-mono text-[#08080D]">Brand alignment verified</span>
        </div>
      </div>
    );
  }

  if (item.previewType === 'video') {
    const models = ['Veo Lite', 'Veo Fast', 'HeyGen Avatar III'];
    return (
      <div className="rounded-xl border border-[#08080D]/12 bg-[#08080D] text-white p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <span className="text-xs font-semibold">AI Video Production Timeline</span>
          <div className="inline-flex p-0.5 rounded-lg bg-white/10">
            {models.map((m, idx) => (
              <button
                key={m}
                type="button"
                onClick={() => setActiveSubTab(idx)}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeSubTab === idx ? 'bg-[#F2D9FF] text-[#08080D]' : 'text-white/70 hover:text-white'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['01 Hook Frame', '02 Product Reveal', '03 End Card'].map((scene, idx) => (
            <div
              key={scene}
              className="rounded-lg p-3 border border-white/12 bg-white/5 space-y-2"
            >
              <div
                className="h-12 rounded-md"
                style={{
                  background:
                    idx === 0
                      ? 'linear-gradient(135deg, rgba(184,231,248,0.35), rgba(242,217,255,0.2))'
                      : idx === 1
                      ? 'linear-gradient(135deg, rgba(242,217,255,0.4), rgba(245,205,232,0.25))'
                      : 'linear-gradient(135deg, rgba(201,165,247,0.35), rgba(184,231,248,0.2))',
                }}
              />
              <div className="text-[11px] font-mono text-white/80">{scene}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-[11px] text-white/70 font-mono">
          <span>Model: {models[activeSubTab]}</span>
          <span>Subject to model duration limits</span>
        </div>
      </div>
    );
  }

  if (item.previewType === 'publishing') {
    const queue = [
      { time: 'Tue 09:30', channel: 'Instagram', title: 'Collection Story Reel', status: 'Auto-publish' },
      { time: 'Wed 11:00', channel: 'LinkedIn', title: 'Founder Product Note', status: 'Approved' },
      { time: 'Thu 16:45', channel: 'YouTube Shorts', title: 'Studio Walkthrough', status: 'Queued' },
    ];
    return (
      <div className="rounded-xl border border-[#08080D]/10 bg-white p-5 space-y-3">
        <div className="flex items-center justify-between border-b border-[#08080D]/8 pb-3">
          <span className="text-xs font-semibold text-[#08080D]">Publishing & Queue Matrix</span>
          <span className="text-xs font-mono text-[#5A5A68]">4 channels synced</span>
        </div>
        <div className="divide-y divide-[#08080D]/8">
          {queue.map((row) => (
            <div key={row.time} className="py-2.5 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-mono tabular-nums text-[#5A5A68] shrink-0">{row.time}</span>
                <span className="font-semibold text-[#08080D] shrink-0">{row.channel}</span>
                <span className="text-[#3F3F4B] truncate">{row.title}</span>
              </div>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F2D9FF]/60 text-[#08080D] shrink-0">
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (item.previewType === 'community') {
    return (
      <div className="rounded-xl border border-[#08080D]/10 bg-white p-5 space-y-3.5">
        <div className="flex items-center justify-between border-b border-[#08080D]/8 pb-3">
          <span className="text-xs font-semibold text-[#08080D]">Unified Community Inbox</span>
          <span className="text-xs font-mono text-[#5A5A68]">12 awaiting review</span>
        </div>
        <div className="p-3 rounded-lg bg-[#FAF9F6] border border-[#08080D]/8 space-y-2 text-xs">
          <div className="flex items-center justify-between text-[#5A5A68]">
            <span className="font-semibold text-[#08080D]">@claire.m · Instagram Comment</span>
            <span className="font-mono">6m ago</span>
          </div>
          <p className="text-[#3F3F4B]">“Does the new linen trench ship to Melbourne before December?”</p>
          <div className="pt-2 border-t border-[#08080D]/8 flex items-center justify-between gap-2">
            <span className="text-[#08080D]">
              Draft: “Yes — Australian express dispatch arrives in 4–6 business days.”
            </span>
            <button
              type="button"
              onClick={() => setActiveSubTab(1)}
              className="px-2.5 py-1 rounded-md bg-[#08080D] text-white text-[11px] font-medium shrink-0"
            >
              {activeSubTab === 1 ? 'Approved' : 'Approve'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (item.previewType === 'analytics') {
    const bars = [42, 58, 51, 74, 88, 96];
    return (
      <div className="rounded-xl border border-[#08080D]/10 bg-white p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-[#08080D]/8 pb-3">
          <span className="text-xs font-semibold text-[#08080D]">Retention & Reach Attribution</span>
          <span className="font-mono text-xs tabular-nums text-[#08080D]">+38.2% 30d reach</span>
        </div>
        <div className="flex items-end gap-2.5 h-24 pt-2">
          {bars.map((val, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
              <div
                className={`w-full rounded-t-md transition-all ${
                  idx === bars.length - 1 ? 'bg-[#08080D]' : 'bg-[#F2D9FF]'
                }`}
                style={{ height: `${val}%` }}
              />
              <span className="text-[10px] font-mono text-[#5A5A68]">W{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-[#08080D]/10 bg-white p-5 space-y-3.5">
      <div className="flex items-center justify-between border-b border-[#08080D]/8 pb-3">
        <span className="text-xs font-semibold text-[#08080D]">Team & Multi-Brand Workspace</span>
        <span className="text-xs font-mono text-[#5A5A68]">3 active brands</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        {[
          { role: 'Creative Director', action: 'Signed off Week 46 Calendar' },
          { role: 'Brand Strategist', action: 'Updated Audience Persona v3' },
        ].map((member) => (
          <div key={member.role} className="p-3 rounded-lg bg-[#FAF9F6] border border-[#08080D]/8">
            <div className="font-semibold text-[#08080D]">{member.role}</div>
            <div className="text-[#5A5A68] mt-1">{member.action}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface PlatformSectionProps {
  onOpenShowcase: () => void;
}

export function PlatformSection({ onOpenShowcase }: PlatformSectionProps) {
  return (
    <section id="platform" className="py-20 md:py-28 bg-white border-b border-[#08080D]/8">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 md:pb-16 border-b border-[#08080D]/10">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#5A5A68] mb-4">
              THE PLATFORM
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-[-0.03em] leading-[1.06] text-[#08080D] text-balance">
              One platform. An entire marketing department.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end gap-5">
            <p className="text-base sm:text-lg leading-relaxed text-[#3F3F4B]">
              From the first spark of an idea to your next breakthrough campaign, LUMI brings your entire social media
              workflow into one intelligent workspace.
            </p>
            <div>
              <button
                type="button"
                onClick={onOpenShowcase}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#08080D] hover:text-[#3F3F4B] border-b border-[#08080D] pb-0.5 transition-colors"
              >
                <span>Inspect the connected workspace</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Alternating 7 Editorial Capability Rows */}
        <div className="divide-y divide-[#08080D]/10">
          {CAPABILITIES.map((cap, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.article
                key={cap.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Copy Side */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-[#F2D9FF] font-mono text-xs font-medium text-[#08080D] tabular-nums">
                      {cap.number}
                    </span>
                    <span className="text-xs font-medium tracking-[0.08em] uppercase text-[#5A5A68]">
                      Capability
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#08080D]">
                    {cap.number} — {cap.title}
                  </h3>

                  <p className="text-base sm:text-lg font-medium text-[#181820] leading-relaxed">
                    {cap.summary}
                  </p>
                  <p className="text-sm sm:text-base text-[#5A5A68] leading-relaxed max-w-xl">
                    {cap.detail}
                  </p>

                  <ul className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {cap.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2 text-xs font-medium text-[#181820]">
                        <Check className="w-3.5 h-3.5 mt-0.5 text-[#08080D] shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Product Visual Side */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="p-3 sm:p-4 rounded-2xl bg-[#FAF9F6] border border-[#08080D]/8">
                    <CapabilityVisual item={cap} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
