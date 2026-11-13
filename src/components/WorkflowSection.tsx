import { useState } from 'react';
import { motion } from 'motion/react';
import { WORKFLOW_STAGES } from '../data/lumiData';
import { ArrowRight } from 'lucide-react';

export function WorkflowSection() {
  const [activeStage, setActiveStage] = useState(0);
  const current = WORKFLOW_STAGES[activeStage];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAF9F6] border-b border-[#08080D]/8 overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="max-w-3xl mb-14 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#5A5A68] mb-4">
            THE WORKFLOW
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-[-0.03em] leading-[1.06] text-[#08080D] text-balance">
            From an idea to an entire operation.
          </h2>
        </div>

        {/* Connecting Editorial Stage Track */}
        <div className="relative">
          {/* Desktop Connecting Path Line */}
          <div className="hidden lg:block absolute top-11 left-[8%] right-[8%] h-[1px] bg-[#08080D]/12" aria-hidden="true">
            <motion.div
              className="h-[2px] -mt-[0.5px] bg-gradient-to-r from-[#B8E7F8] via-[#C9A5F7] to-[#F5CDE8]"
              animate={{ width: activeStage === 0 ? '33%' : activeStage === 1 ? '66%' : '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {WORKFLOW_STAGES.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`text-left rounded-2xl p-6 sm:p-8 border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08080D] ${
                    isSelected
                      ? 'bg-white border-[#08080D] shadow-[0_18px_45px_-22px_rgba(8,8,13,0.16)]'
                      : 'bg-white/75 border-[#08080D]/10 hover:bg-white hover:border-[#08080D]/25'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`inline-flex items-center justify-center w-11 h-11 rounded-xl font-mono text-sm font-semibold tabular-nums transition-colors ${
                        isSelected
                          ? 'bg-[#F2D9FF] text-[#08080D]'
                          : 'bg-[#F3F1EC] text-[#08080D]'
                      }`}
                    >
                      {stage.number}
                    </span>
                    <span className="text-xs font-medium text-[#5A5A68]">
                      Stage {stage.number} of 03
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold tracking-[-0.025em] text-[#08080D]">
                    {stage.number} — {stage.title}
                  </h3>
                  <p className="mt-3 text-base text-[#3F3F4B] leading-relaxed">
                    {stage.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#08080D]/8 flex items-center justify-between text-xs font-medium text-[#08080D]">
                    <span>{stage.outputMetric}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-0.5' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Connected Stage Architecture Detail Strip */}
        <motion.div
          key={current.number}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 rounded-2xl bg-white border border-[#08080D]/10 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5A5A68]">
              Stage {current.number} Inputs
            </div>
            <ul className="space-y-1.5 text-sm text-[#181820]">
              {current.inputs.map((inp) => (
                <li key={inp} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A5F7] shrink-0" aria-hidden="true" />
                  <span>{inp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:border-x border-[#08080D]/10 lg:px-8 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5A5A68]">
              LUMI System Processing
            </div>
            <p className="text-sm sm:text-base text-[#08080D] leading-relaxed font-medium">
              {current.systemAction}
            </p>
          </div>

          <div className="lg:col-span-3 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5A5A68]">
              Connected Output
            </div>
            <div className="inline-block px-3.5 py-2 rounded-lg bg-[#F2D9FF] text-sm font-semibold text-[#08080D]">
              {current.outputMetric}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
