import { ArrowRight } from 'lucide-react';
import { LUMI_LOGO_SRC } from '../data/lumiData';

export type InfoDocType = 'about' | 'contact' | 'privacy' | 'terms' | 'resources';

interface FinalCtaAndFooterProps {
  onOpenGetStarted: () => void;
  onOpenInfoModal: (doc: InfoDocType) => void;
}

export function FinalCtaAndFooter({ onOpenGetStarted, onOpenInfoModal }: FinalCtaAndFooterProps) {
  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* SECTION 09 — FINAL CTA */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden border-b border-[#08080D]/8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 lumi-iridescent-wash opacity-80"
        />
        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-[-0.035em] leading-[1.05] text-[#08080D] text-balance">
              Your next chapter starts with{' '}
              <span className="inline-block bg-[#F2D9FF] px-3 py-0.5 rounded-xl">LUMI.</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#3F3F4B] leading-relaxed max-w-2xl mx-auto">
              Bring your social media operation together and discover what an intelligent team can make possible.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenGetStarted}
                className="group inline-flex items-center gap-2.5 px-7 py-4 min-h-[52px] rounded-xl bg-[#08080D] text-white font-semibold text-base hover:bg-[#191924] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08080D] focus-visible:ring-offset-2"
              >
                <span>Get started with LUMI</span>
                <ArrowRight className="w-4 h-4 text-[#F2D9FF] transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FOOTER */}
      <footer className="bg-[#08080D] text-white pt-16 pb-12">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/12">
            {/* Brand Column with Full Original Logo */}
            <div className="lg:col-span-4 space-y-5">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2D9FF] rounded-xl"
              >
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-black border border-white/15 overflow-hidden shrink-0">
                  <img
                    src={LUMI_LOGO_SRC}
                    alt="LUMI official star logo and wordmark"
                    className="h-full w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </span>
                <div>
                  <div className="font-display text-xl font-bold tracking-[-0.03em] text-white">LUMI</div>
                  <div className="text-xs text-white/60 mt-0.5">AI Social Media Operating System</div>
                </div>
              </a>

              <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                LUMI brings social strategy, audience research, AI content and video creation, publishing, community
                management, and analytics into one intelligent workspace.
              </p>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F2D9FF]">
                  Product
                </div>
                <ul className="space-y-2.5 text-white/75">
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('#platform')}
                      className="hover:text-white transition-colors text-left"
                    >
                      Platform
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('#showcase')}
                      className="hover:text-white transition-colors text-left"
                    >
                      Features
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('#solutions')}
                      className="hover:text-white transition-colors text-left"
                    >
                      Solutions
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('#pricing')}
                      className="hover:text-white transition-colors text-left"
                    >
                      Pricing
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F2D9FF]">
                  Resources
                </div>
                <ul className="space-y-2.5 text-white/75">
                  <li>
                    <button
                      type="button"
                      onClick={() => scrollToSection('#how-it-works')}
                      className="hover:text-white transition-colors text-left"
                    >
                      How LUMI works
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenInfoModal('resources')}
                      className="hover:text-white transition-colors text-left"
                    >
                      Resources & Model Limits
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F2D9FF]">
                  Company
                </div>
                <ul className="space-y-2.5 text-white/75">
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenInfoModal('about')}
                      className="hover:text-white transition-colors text-left"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenInfoModal('contact')}
                      className="hover:text-white transition-colors text-left"
                    >
                      Contact
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenInfoModal('privacy')}
                      className="hover:text-white transition-colors text-left"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenInfoModal('terms')}
                      className="hover:text-white transition-colors text-left"
                    >
                      Terms of Service
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F2D9FF]">
                  Connect
                </div>
                <ul className="space-y-2.5 text-white/75">
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenInfoModal('contact')}
                      className="hover:text-white transition-colors text-left"
                    >
                      LinkedIn (@lumi-os)
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenInfoModal('contact')}
                      className="hover:text-white transition-colors text-left"
                    >
                      Instagram (@lumi.operating)
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenInfoModal('contact')}
                      className="hover:text-white transition-colors text-left"
                    >
                      X (@lumisystem)
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenInfoModal('contact')}
                      className="hover:text-white transition-colors text-left"
                    >
                      YouTube (@lumisystem)
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/55">
            <span>© {new Date().getFullYear()} LUMI. All rights reserved.</span>
            <span>Your entire social media operation. One intelligent system.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
