import { FormEvent, useEffect, useState } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { LUMI_LOGO_SRC, PlanId, PRICING_TIERS } from '../data/lumiData';
import { InfoDocType } from './FinalCtaAndFooter';

interface OnboardingModalProps {
  open: boolean;
  initialPlan: PlanId;
  onClose: () => void;
}

export function OnboardingModal({ open, initialPlan, onClose }: OnboardingModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>(initialPlan);

  useEffect(() => {
    setSelectedPlan(initialPlan);
  }, [initialPlan]);

  if (!open) return null;

  const activeTier = PRICING_TIERS.find((t) => t.id === selectedPlan) || PRICING_TIERS[1];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08080D]/55 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-modal-title"
    >
      <div className="w-full max-w-xl rounded-2xl bg-white border border-[#08080D]/12 shadow-2xl overflow-hidden my-auto">
        <div className="flex items-center justify-between px-6 py-4 bg-[#FAF9F6] border-b border-[#08080D]/10">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#08080D] overflow-hidden">
              <img
                src={LUMI_LOGO_SRC}
                alt="LUMI logo"
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </span>
            <span id="onboarding-modal-title" className="font-display text-base font-bold text-[#08080D]">
              Founding Customer Pre-Booking
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close onboarding modal"
            className="p-2 rounded-lg text-[#5A5A68] hover:text-[#08080D] hover:bg-[#08080D]/5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className="p-3.5 rounded-xl bg-[#F2D9FF]/45 border border-[#08080D]/12 text-xs text-[#08080D] leading-relaxed">
            <div className="font-semibold">
              Founding customer pre-booking. LUMI services are scheduled to begin on 20 November 2026.
            </div>
            <p className="mt-1 text-[#3F3F4B]">
              You are completing a pre-booking payment via Razorpay. Platform access and services are not immediately
              active and are scheduled to commence on 20 November 2026.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold text-[#08080D] mb-2">Select monthly plan</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {PRICING_TIERS.map((tier) => {
                const isSelected = selectedPlan === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedPlan(tier.id)}
                    className={`text-left p-3 rounded-xl border transition-colors ${
                      isSelected
                        ? 'bg-[#F2D9FF]/55 border-[#08080D]'
                        : 'bg-[#FAF9F6] border-[#08080D]/12 hover:bg-white'
                    }`}
                  >
                    <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#08080D]">
                      {tier.name}
                    </div>
                    <div className="font-display text-lg font-bold text-[#08080D] tabular-nums mt-0.5">
                      {tier.price}
                      <span className="text-xs font-normal text-[#5A5A68]">/mo</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#08080D]/10 text-xs text-[#3F3F4B] space-y-1.5">
            <div className="font-semibold text-[#08080D]">
              Selected Plan: {activeTier.name} — {activeTier.price}/month (Pre-booking payment)
            </div>
            <div>
              Includes {activeTier.videoAllowance} · {activeTier.modelAccess}.
            </div>
            <div>
              Video duration, model availability, and generation allowances are subject to applicable model limits.
              Additional premium AI usage may be charged separately according to the selected model and actual
              consumption.
            </div>
          </div>

          <a
            href={activeTier.paymentUrl}
            className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#08080D] text-white text-sm font-semibold hover:bg-[#191924] transition-colors"
          >
            <span>Proceed to Razorpay ({activeTier.name} — {activeTier.price}/mo)</span>
            <ArrowRight className="w-4 h-4 text-[#F2D9FF]" />
          </a>
        </div>
      </div>
    </div>
  );
}

interface InfoModalProps {
  doc: InfoDocType | null;
  onClose: () => void;
}

export function InfoModal({ doc, onClose }: InfoModalProps) {
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactError, setContactError] = useState('');
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    setContactError('');
    setContactSent(false);
  }, [doc]);

  if (!doc) return null;

  const titles: Record<InfoDocType, string> = {
    about: 'About LUMI',
    contact: 'Contact LUMI',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    resources: 'Resources & Model Usage Limits',
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!contactEmail.trim() || !contactEmail.includes('@')) {
      setContactError('Please enter a valid email address.');
      return;
    }
    if (contactMessage.trim().length < 10) {
      setContactError('Please share a brief note about your team or question.');
      return;
    }
    setContactError('');
    setContactSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08080D]/55 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
    >
      <div className="w-full max-w-lg rounded-2xl bg-white border border-[#08080D]/12 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-[#FAF9F6] border-b border-[#08080D]/10">
          <h3 id="info-modal-title" className="font-display text-base font-bold text-[#08080D]">
            {titles[doc]}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-[#5A5A68] hover:text-[#08080D] hover:bg-[#08080D]/5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 text-sm text-[#3F3F4B] leading-relaxed space-y-4 max-h-[75vh] overflow-y-auto">
          {doc === 'about' && (
            <>
              <p>
                LUMI is the AI-powered social media operating system designed to replace fragmented point tools with one
                coordinated system.
              </p>
              <p>
                Built for creators, growing businesses, marketing teams, and agencies, LUMI brings audience intelligence,
                content planning, AI video production, publishing, community management, and analytics into a single
                workspace.
              </p>
            </>
          )}

          {doc === 'resources' && (
            <>
              <p>
                <strong>Plan Allowances & Model Limits:</strong> Starter includes 30 videos per month. Studio and Studio
                Plus include up to 30 videos per day. Video duration, resolution, and model availability (including Veo
                Lite, Veo Fast, and HeyGen Avatar III) are subject to applicable model limits.
              </p>
              <p>
                <strong>Metered Usage:</strong> Additional premium AI usage beyond included plan allowances is billed
                separately according to the selected model and actual consumption.
              </p>
            </>
          )}

          {doc === 'privacy' && (
            <>
              <p>
                LUMI isolates brand intelligence, creative assets, and connected social account data per workspace. Your
                brand guidelines and proprietary campaign materials are never shared across other customer workspaces.
              </p>
              <p>
                Connected social channels authenticate via official provider OAuth scopes and can be revoked at any time
                from workspace settings.
              </p>
            </>
          )}

          {doc === 'terms' && (
            <>
              <p>
                LUMI subscriptions (Starter at $549/month, Studio at $949/month, Studio Plus at $1,399/month) govern
                access to workspace seats, orchestration workflows, and included monthly or daily video allowances.
              </p>
              <p>
                Usage exceeding plan allowances or invoking metered premium models incurs transparent consumption-based
                charges. Video duration and generation quotas remain subject to underlying model provider limits.
              </p>
            </>
          )}

          {doc === 'contact' &&
            (contactSent ? (
              <div className="py-4 text-center space-y-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#F2D9FF] text-[#08080D]">
                  <Check className="w-5 h-5" />
                </div>
                <div className="font-display text-lg font-bold text-[#08080D]">Message received</div>
                <p className="text-sm text-[#5A5A68]">
                  Our team will respond to <span className="font-semibold text-[#08080D]">{contactEmail}</span>{' '}
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-[#08080D] mb-1.5">
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-3.5 py-2.5 min-h-[44px] rounded-xl border border-[#08080D]/15 bg-[#FAF9F6] text-sm text-[#08080D] focus:outline-none focus:ring-2 focus:ring-[#08080D]"
                  />
                </div>
                <div>
                  <label htmlFor="contact-msg" className="block text-xs font-semibold text-[#08080D] mb-1.5">
                    How can we help?
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={3}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Tell us about your team, brands, or deployment questions..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#08080D]/15 bg-[#FAF9F6] text-sm text-[#08080D] focus:outline-none focus:ring-2 focus:ring-[#08080D]"
                  />
                </div>
                {contactError && <p className="text-xs font-medium text-red-700">{contactError}</p>}
                <button
                  type="submit"
                  className="w-full min-h-[44px] rounded-xl bg-[#08080D] text-white text-sm font-semibold hover:bg-[#191924] transition-colors"
                >
                  Send message
                </button>
              </form>
            ))}
        </div>
      </div>
    </div>
  );
}
