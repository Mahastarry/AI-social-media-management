import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LUMI_LOGO_SRC, NAV_LINKS } from '../data/lumiData';

interface NavbarProps {
  onOpenGetStarted: () => void;
}

export function Navbar({ onOpenGetStarted }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('platform');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);

      const offsets = NAV_LINKS.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: Math.abs(rect.top - 140) };
      });
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0] && offsets[0].top < 650) {
        setActiveId(offsets[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (href: string, id: string) => {
    setActiveId(id);
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#08080D]/8'
          : 'bg-[#FAF9F6]/75 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 h-16 md:h-[72px] flex items-center justify-between gap-8">
        {/* Left: Original LUMI Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08080D] rounded-lg"
          aria-label="LUMI home"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#08080D] overflow-hidden shrink-0 border border-[#08080D]/10">
            <img
              src={LUMI_LOGO_SRC}
              alt="LUMI iridescent star logo"
              className="h-full w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </span>
          <span className="font-display text-lg font-bold tracking-[-0.03em] text-[#08080D] whitespace-nowrap shrink-0">
            LUMI
          </span>
        </a>

        {/* Centre: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick(link.href, link.id);
                }}
                className={`relative py-1 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08080D] rounded ${
                  isActive ? 'text-[#08080D]' : 'text-[#5A5A68] hover:text-[#08080D]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100 bg-[#08080D]' : 'scale-x-0 bg-[#C9A5F7]'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right: Primary CTA */}
        <div className="hidden lg:flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenGetStarted}
            className="px-5 py-2 text-sm font-semibold text-[#08080D] bg-[#F2D9FF] hover:bg-[#e8c3fd] border border-[#08080D]/12 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08080D]"
          >
            Get Early Access
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#08080D]/12 bg-white text-[#08080D] hover:bg-[#F3F1EC] transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#08080D]/10 bg-[#FAF9F6] px-5 py-5 space-y-4">
          <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick(link.href, link.id);
                }}
                className="flex items-center justify-between px-3 min-h-[44px] text-base font-medium text-[#08080D] rounded-lg hover:bg-[#F2D9FF]/40 transition-colors"
              >
                <span>{link.label}</span>
                {activeId === link.id && (
                  <span className="h-1.5 w-6 rounded-full bg-[#08080D]" aria-hidden="true" />
                )}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#08080D]/10">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenGetStarted();
              }}
              className="w-full min-h-[44px] px-4 py-2.5 text-sm font-semibold text-[#08080D] bg-[#F2D9FF] border border-[#08080D]/12 rounded-lg"
            >
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
