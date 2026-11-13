import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PlatformSection } from './components/PlatformSection';
import { WorkflowSection } from './components/WorkflowSection';
import { ProductShowcaseSection } from './components/ProductShowcaseSection';
import { AudienceAndAdvantageSection } from './components/AudienceAndAdvantageSection';
import { PricingSection } from './components/PricingSection';
import { FinalCtaAndFooter, InfoDocType } from './components/FinalCtaAndFooter';
import { InfoModal, OnboardingModal } from './components/InteractiveModals';
import { PlanId } from './data/lumiData';

export default function App() {
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('studio');
  const [infoDoc, setInfoDoc] = useState<InfoDocType | null>(null);

  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenPlan = (planId: PlanId) => {
    setSelectedPlan(planId);
    setOnboardingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#08080D] overflow-x-hidden">
      <Navbar
        onOpenGetStarted={() => handleOpenPlan('studio')}
      />

      <main>
        <HeroSection
          onExploreLumi={() => scrollTo('#platform')}
          onSeeHowItWorks={() => scrollTo('#how-it-works')}
        />

        <PlatformSection onOpenShowcase={() => scrollTo('#showcase')} />

        <WorkflowSection />

        <ProductShowcaseSection />

        <AudienceAndAdvantageSection onOpenGetStarted={() => handleOpenPlan('studio')} />

        <PricingSection onSelectPlan={handleOpenPlan} />
      </main>

      <FinalCtaAndFooter
        onOpenGetStarted={() => handleOpenPlan('studio')}
        onOpenInfoModal={(doc) => setInfoDoc(doc)}
      />

      <OnboardingModal
        open={onboardingOpen}
        initialPlan={selectedPlan}
        onClose={() => setOnboardingOpen(false)}
      />

      <InfoModal doc={infoDoc} onClose={() => setInfoDoc(null)} />
    </div>
  );
}
