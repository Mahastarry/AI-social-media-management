import { PRICING_TIERS, MODEL_USAGE_NOTES, PlanId } from '../data/lumiData';
import { Check, ArrowRight, Info } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planId: PlanId) => void;
}

const COMPARISON_ROWS = [
  {
    feature: 'Video generation allowance',
    starter: '30 videos / month',
    studio: 'Up to 30 videos / day',
    studioPlus: 'Up to 30 videos / day',
  },
  {
    feature: 'Video model access',
    starter: 'Standard pipeline',
    studio: 'Veo Lite & HeyGen Avatar III',
    studioPlus: 'Veo Fast & premium routing',
  },
  {
    feature: 'Content planning & calendar',
    starter: 'AI planning & calendar',
    studio: 'Advanced calendar & automation',
    studioPlus: 'Premium multi-workflow calendar',
  },
  {
    feature: 'AI orchestration & publishing',
    starter: 'Social media scheduling',
    studio: 'Agent orchestration & workflows',
    studioPlus: 'Advanced orchestration & priority',
  },
  {
    feature: 'Analytics & reporting',
    starter: 'Basic analytics',
    studio: 'Advanced analytics',
    studioPlus: 'Advanced analytics & reporting',
  },
  {
    feature: 'Support level',
    starter: 'Standard workspace support',
    studio: 'Standard workspace support',
    studioPlus: 'Priority support',
  },
];

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#08080D]/8">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#5A5A68] mb-4">
              PRICING
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-[-0.03em] leading-[1.06] text-[#08080D] text-balance">
              Transparent plans built for real production.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#3F3F4B] leading-relaxed">
              Monthly workspace subscriptions calibrated to your video cadence, model routing, and orchestration needs.
              Additional premium AI usage is metered transparently by model consumption.
            </p>
          </div>
        </div>

        {/* Founding Customer Pre-Booking Announcement */}
        <div className="mb-10 rounded-2xl bg-white border border-[#08080D]/12 p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-[#08080D] inline-block bg-[#F2D9FF] px-2.5 py-1 rounded-md">
              LUMI IS NOW ACCEPTING FOUNDING CUSTOMER PRE-BOOKINGS
            </p>
            <p className="text-sm sm:text-base text-[#3F3F4B] leading-relaxed">
              Secure your LUMI plan today. Your platform access and services are scheduled to begin on{' '}
              <span className="font-semibold text-[#08080D]">20 November 2026</span>.
            </p>
          </div>
          <div className="text-xs font-mono text-[#08080D] bg-[#FAF9F6] border border-[#08080D]/10 rounded-xl px-4 py-2.5 shrink-0">
            Scheduled launch: 20 November 2026
          </div>
        </div>

        {/* 3 Approved Pricing Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isRecommended = Boolean(tier.recommended);
            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between border transition-shadow ${
                  isRecommended
                    ? 'bg-white border-[#08080D] shadow-[0_24px_60px_-24px_rgba(8,8,13,0.18)] ring-1 ring-[#08080D]'
                    : 'bg-white border-[#08080D]/12'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <h3 className="font-display text-sm font-bold tracking-[0.12em] uppercase text-[#08080D]">
                      {tier.name}
                    </h3>
                    {isRecommended && (
                      <span className="px-3 py-1 rounded-md bg-[#F2D9FF] text-xs font-semibold text-[#08080D]">
                        Recommended
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-4xl sm:text-[2.75rem] font-bold tracking-[-0.03em] text-[#08080D] tabular-nums">
                      {tier.price}
                    </span>
                    <span className="text-sm font-medium text-[#5A5A68]">{tier.cadence}</span>
                  </div>

                  <p className="mt-3 text-sm text-[#3F3F4B] leading-relaxed min-h-[42px]">
                    {tier.audience}
                  </p>

                  {/* Allowance Summary Band */}
                  <div
                    className={`mt-5 p-3.5 rounded-xl border text-xs space-y-1 ${
                      isRecommended
                        ? 'bg-[#F2D9FF]/35 border-[#08080D]/12'
                        : 'bg-[#FAF9F6] border-[#08080D]/8'
                    }`}
                  >
                    <div className="font-semibold text-[#08080D]">{tier.videoAllowance}</div>
                    <div className="text-[#5A5A68]">{tier.modelAccess}</div>
                  </div>

                  <ul className="mt-6 pt-6 border-t border-[#08080D]/10 space-y-3">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-[#181820]">
                        <Check className="w-4 h-4 text-[#08080D] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#08080D]/10 space-y-3">
                  <a
                    href={tier.paymentUrl}
                    className={`w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08080D] ${
                      isRecommended
                        ? 'bg-[#08080D] text-white hover:bg-[#191924]'
                        : 'bg-[#F2D9FF] text-[#08080D] hover:bg-[#e8c3fd] border border-[#08080D]/12'
                    }`}
                  >
                    <span>{tier.ctaLabel}</span>
                    <ArrowRight className={`w-4 h-4 ${isRecommended ? 'text-[#F2D9FF]' : 'text-[#08080D]'}`} />
                  </a>
                  <p className="text-[11px] text-[#3F3F4B] text-center leading-relaxed">
                    Founding customer pre-booking. LUMI services are scheduled to begin on 20 November 2026.
                  </p>
                  <p className="text-[11px] text-[#5A5A68] text-center">
                    Model limits apply · Metered overage billed separately
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Plan Differentiation Matrix */}
        <div className="mt-14 rounded-2xl bg-white border border-[#08080D]/10 overflow-hidden">
          <div className="px-6 py-4 bg-[#FAF9F6] border-b border-[#08080D]/10 flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-display text-sm font-bold text-[#08080D]">
              Plan Capability & Model Comparison
            </h3>
            <span className="text-xs text-[#5A5A68]">All prices billed monthly in USD</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-[#08080D]/10 text-xs font-semibold uppercase tracking-[0.08em] text-[#5A5A68]">
                  <th className="py-3.5 px-6">Capability</th>
                  <th className="py-3.5 px-6">Starter ($549/mo)</th>
                  <th className="py-3.5 px-6 bg-[#F2D9FF]/30 text-[#08080D]">Studio ($949/mo)</th>
                  <th className="py-3.5 px-6">Studio Plus ($1,399/mo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#08080D]/8 text-sm">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="hover:bg-[#FAF9F6]/60 transition-colors">
                    <td className="py-3.5 px-6 font-medium text-[#08080D]">{row.feature}</td>
                    <td className="py-3.5 px-6 text-[#3F3F4B] tabular-nums">{row.starter}</td>
                    <td className="py-3.5 px-6 bg-[#F2D9FF]/20 font-medium text-[#08080D] tabular-nums">
                      {row.studio}
                    </td>
                    <td className="py-3.5 px-6 text-[#3F3F4B] tabular-nums">{row.studioPlus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transparent Model Limits & Metered AI Usage Disclosure */}
        <div className="mt-8 rounded-2xl bg-white border border-[#08080D]/10 p-6 sm:p-7">
          <div className="flex items-start gap-3 mb-5">
            <Info className="w-5 h-5 text-[#08080D] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display text-base font-bold text-[#08080D]">
                Model Limits & Usage Transparency
              </h3>
              <p className="text-sm text-[#5A5A68] mt-1">
                LUMI never labels third-party AI video generation as free or unlimited. Plan allowances and metered rates
                are displayed clearly before every render.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-[#08080D]/8">
            {MODEL_USAGE_NOTES.map((note) => (
              <div key={note.label} className="space-y-1.5">
                <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#08080D]">
                  {note.label}
                </div>
                <p className="text-xs sm:text-sm text-[#5A5A68] leading-relaxed">{note.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#08080D]/8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#3F3F4B]">
            <span className="font-medium text-[#08080D]">Illustrative metered overage rates beyond included allowance:</span>
            <div className="flex flex-wrap items-center gap-4 font-mono tabular-nums">
              <span>Veo Lite: $0.35 / sec</span>
              <span aria-hidden="true">·</span>
              <span>Veo Fast: $0.55 / sec</span>
              <span aria-hidden="true">·</span>
              <span>HeyGen Avatar III: $0.90 / min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
