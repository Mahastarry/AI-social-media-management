import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Calendar,
  Film,
  Layers,
  Play,
  TrendingUp,
  Users,
  Check,
  Sparkles,
} from 'lucide-react';
import { LUMI_LOGO_SRC } from '../data/lumiData';

interface HeroSectionProps {
  onExploreLumi: () => void;
  onSeeHowItWorks: () => void;
}

type BrandKey = 'atelier' | 'kanso';

const BRAND_CONSOLE_DATA: Record<
  BrandKey,
  {
    name: string;
    handle: string;
    reach: string;
    reachDelta: string;
    engagement: string;
    scheduledCount: string;
    videosReady: string;
    sparklinePoints: string;
    videoTitle: string;
    videoModel: string;
    videoDuration: string;
    videoStatus: string;
    calendarSlots: { day: string; channel: string; title: string; time: string; state: string }[];
    agents: { role: string; task: string; outcome: string }[];
    accounts: { platform: string; handle: string; activity: string }[];
  }
> = {
  atelier: {
    name: 'Atelier Nord',
    handle: '@atelier.nord',
    reach: '418.4K',
    reachDelta: '+38.2% vs prior 30d',
    engagement: '5.4%',
    scheduledCount: '24',
    videosReady: '9',
    sparklinePoints: '0,68 42,60 84,64 126,46 168,49 210,32 252,35 294,18 336,12',
    videoTitle: 'Autumn Capsule — Architectural Wool Series',
    videoModel: 'Veo Fast · 9:16 Vertical',
    videoDuration: '00:28',
    videoStatus: 'Ready for review',
    calendarSlots: [
      { day: 'Mon', channel: 'Instagram', title: 'Atelier Process Reel', time: '09:30', state: 'Scheduled' },
      { day: 'Tue', channel: 'LinkedIn', title: 'Supply Chain Transparency Carousel', time: '11:00', state: 'Approved' },
      { day: 'Wed', channel: 'TikTok', title: 'Pattern Studio Cutdown', time: '17:15', state: 'In render' },
      { day: 'Thu', channel: 'YouTube', title: 'Craftsmanship Lookbook', time: '14:00', state: 'Scheduled' },
    ],
    agents: [
      { role: 'Research Agent', task: 'Analysed 1,240 buyer comments on outerwear fit', outcome: '3 script hooks added' },
      { role: 'Video Director', task: 'Assembled 4 vertical cuts in Veo Fast', outcome: 'Captions synced' },
      { role: 'Publishing Agent', task: 'Balanced IG & TikTok afternoon windows', outcome: 'Zero overlap' },
    ],
    accounts: [
      { platform: 'Instagram', handle: '@atelier.nord', activity: '14 replies triaged today' },
      { platform: 'TikTok', handle: '@atelier.studio', activity: '62.1K views on latest reel' },
      { platform: 'LinkedIn', handle: 'Atelier Nord', activity: '480 shares this week' },
    ],
  },
  kanso: {
    name: 'Kanso Botanicals',
    handle: '@kansobotanicals',
    reach: '294.1K',
    reachDelta: '+44.6% vs prior 30d',
    engagement: '6.1%',
    scheduledCount: '19',
    videosReady: '12',
    sparklinePoints: '0,72 42,66 84,54 126,58 168,39 210,41 252,25 294,20 336,10',
    videoTitle: 'Morning Ritual — Cold-Pressed Serum Guide',
    videoModel: 'HeyGen Avatar III · 16:9 & 9:16',
    videoDuration: '00:42',
    videoStatus: 'Approved for Thursday',
    calendarSlots: [
      { day: 'Mon', channel: 'TikTok', title: 'Ingredient Origin Story', time: '08:45', state: 'Published' },
      { day: 'Tue', channel: 'Instagram', title: 'Texture Macro Loop', time: '12:30', state: 'Scheduled' },
      { day: 'Wed', channel: 'YouTube', title: 'Dermatologist Q&A Cut', time: '16:00', state: 'Approved' },
      { day: 'Thu', channel: 'LinkedIn', title: 'Refillable Packaging Report', time: '10:00', state: 'Scheduled' },
    ],
    agents: [
      { role: 'Trend Analyst', task: 'Tracked rising search intent on barrier repair', outcome: 'Brief #18 updated' },
      { role: 'Avatar Studio', task: 'Rendered bilingual presenter explainer', outcome: 'EN + JP variants' },
      { role: 'Community Lead', task: 'Drafted 18 ingredient sourcing answers', outcome: 'Awaiting 1-click send' },
    ],
    accounts: [
      { platform: 'Instagram', handle: '@kansobotanicals', activity: '29 DMs queued cleanly' },
      { platform: 'YouTube', handle: 'Kanso Lab', activity: '71% avg retention rate' },
      { platform: 'TikTok', handle: '@kansoskin', activity: '3.2K saves in 48 hours' },
    ],
  },
};

export function HeroSection({ onExploreLumi, onSeeHowItWorks }: HeroSectionProps) {
  const [selectedBrand, setSelectedBrand] = useState<BrandKey>('atelier');
  const [videoPlaying, setVideoPlaying] = useState(false);
  const consoleData = BRAND_CONSOLE_DATA[selectedBrand];

  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#08080D]/8">
      {/* Subtle iridescent fluid motion curves */}
      <div className="pointer-events-none absolute inset-0 lumi-iridescent-wash opacity-75" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 right-[-8%] w-[540px] h-[540px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(242,217,255,0.85) 0%, rgba(184,231,248,0.45) 45%, rgba(250,249,246,0) 75%)',
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* Editorial Hero Copy */}
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-semibold tracking-[0.18em] uppercase text-[#5A5A68] mb-5"
          >
            THE AI SOCIAL MEDIA OPERATING SYSTEM
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[2.45rem] sm:text-[3.5rem] lg:text-[4.65rem] font-bold tracking-[-0.035em] leading-[1.03] text-[#08080D] text-balance"
          >
            Your entire social media operation.{' '}
            <span className="inline-block bg-[#F2D9FF] px-2.5 py-0.5 rounded-xl text-[#08080D]">
              One intelligent system.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-[#3F3F4B]"
          >
            Meet the AI-powered team that researches, creates, publishes and optimises your social media presence.
            Everything works together. Everything works smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              onClick={onExploreLumi}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 min-h-[48px] rounded-xl bg-[#08080D] text-white font-semibold text-sm sm:text-base hover:bg-[#191924] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08080D] focus-visible:ring-offset-2"
            >
              <span>Explore LUMI</span>
              <ArrowRight className="w-4 h-4 text-[#F2D9FF] transition-transform duration-150 group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={onSeeHowItWorks}
              className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-white border border-[#08080D]/15 text-[#08080D] font-semibold text-sm sm:text-base hover:bg-[#F2D9FF]/45 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08080D]"
            >
              See how it works
            </button>
          </motion.div>
        </div>

        {/* Realistic Interactive LUMI Product OS Console */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 md:mt-16 rounded-2xl border border-[#08080D]/12 bg-white shadow-[0_24px_70px_-24px_rgba(8,8,13,0.12)] overflow-hidden"
        >
          {/* Console Top Workspace Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 sm:px-6 py-3.5 bg-[#FAF9F6] border-b border-[#08080D]/10">
            <div className="flex items-center gap-3 min-w-0">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#08080D] overflow-hidden shrink-0">
                <img
                  src={LUMI_LOGO_SRC}
                  alt="LUMI workspace emblem"
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </span>
              <span className="text-sm font-semibold text-[#08080D] whitespace-nowrap">LUMI Workspace</span>
              <span className="text-[#08080D]/25" aria-hidden="true">/</span>
              <span className="text-sm text-[#5A5A68] truncate">{consoleData.name}</span>
            </div>

            {/* Interactive Brand Switcher */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-xs text-[#5A5A68] mr-1">Sample workspace:</span>
              <div className="inline-flex p-1 rounded-lg bg-[#F3F1EC] border border-[#08080D]/8">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedBrand('atelier');
                    setVideoPlaying(false);
                  }}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    selectedBrand === 'atelier'
                      ? 'bg-[#08080D] text-white'
                      : 'text-[#5A5A68] hover:text-[#08080D]'
                  }`}
                >
                  Atelier Nord
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedBrand('kanso');
                    setVideoPlaying(false);
                  }}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    selectedBrand === 'kanso'
                      ? 'bg-[#08080D] text-white'
                      : 'text-[#5A5A68] hover:text-[#08080D]'
                  }`}
                >
                  Kanso Botanicals
                </button>
              </div>
            </div>
          </div>

          {/* Main 12-Column Product Workspace Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#08080D]/10">
            {/* Left Workspace Navigation + Social Account Activity (3 cols) */}
            <div className="lg:col-span-3 p-5 bg-[#FAF9F6]/60 flex flex-col justify-between gap-6">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#5A5A68] mb-3">
                  Operating Modules
                </div>
                <div className="space-y-1">
                  {[
                    { icon: Layers, label: 'Command Overview', active: true },
                    { icon: Film, label: 'AI Video Studio', active: false },
                    { icon: Calendar, label: 'Content Calendar', active: false },
                    { icon: Users, label: 'Community Inbox', active: false },
                    { icon: TrendingUp, label: 'Performance Analytics', active: false },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium ${
                          item.active
                            ? 'bg-[#F2D9FF] text-[#08080D]'
                            : 'text-[#5A5A68]'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-[#08080D]/10">
                <div className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#5A5A68] mb-3">
                  Social Account Activity
                </div>
                <div className="space-y-3">
                  {consoleData.accounts.map((acc) => (
                    <div key={acc.platform} className="text-xs">
                      <div className="flex items-center justify-between font-semibold text-[#08080D]">
                        <span>{acc.platform}</span>
                        <span className="font-mono text-[11px] text-[#5A5A68]">{acc.handle}</span>
                      </div>
                      <p className="text-[#5A5A68] mt-0.5">{acc.activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Dashboard: KPIs, Performance Curve & Content Calendar (5 cols) */}
            <div className="lg:col-span-5 p-5 sm:p-6 space-y-6 bg-white">
              {/* Performance Metrics */}
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <h2 className="font-display text-sm font-semibold text-[#08080D]">
                    Performance & Publishing Pulse
                  </h2>
                  <span className="text-xs font-mono tabular-nums text-[#5A5A68]">Last 30 days</span>
                </div>

                <div className="grid grid-cols-3 gap-3 pb-4 border-b border-[#08080D]/8">
                  <div>
                    <div className="text-xs text-[#5A5A68]">Total Reach</div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-[#08080D] tabular-nums mt-0.5">
                      {consoleData.reach}
                    </div>
                    <div className="text-[11px] text-[#5A5A68] mt-0.5">{consoleData.reachDelta}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#5A5A68]">Engagement</div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-[#08080D] tabular-nums mt-0.5">
                      {consoleData.engagement}
                    </div>
                    <div className="text-[11px] text-[#5A5A68] mt-0.5">Cross-channel avg</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#5A5A68]">Scheduled</div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-[#08080D] tabular-nums mt-0.5">
                      {consoleData.scheduledCount}
                    </div>
                    <div className="text-[11px] text-[#5A5A68] mt-0.5">
                      {consoleData.videosReady} videos ready
                    </div>
                  </div>
                </div>

                {/* Crisp SVG Trajectory Chart */}
                <div className="mt-4">
                  <svg viewBox="0 0 336 80" className="w-full h-20 overflow-visible" aria-label="Reach trajectory chart">
                    <defs>
                      <linearGradient id="lumiHeroArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C9A5F7" stopOpacity="0.38" />
                        <stop offset="100%" stopColor="#F2D9FF" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="20" x2="336" y2="20" stroke="#08080D" strokeOpacity="0.06" />
                    <line x1="0" y1="50" x2="336" y2="50" stroke="#08080D" strokeOpacity="0.06" />
                    <polygon
                      points={`0,80 ${consoleData.sparklinePoints} 336,80`}
                      fill="url(#lumiHeroArea)"
                    />
                    <polyline
                      fill="none"
                      stroke="#08080D"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={consoleData.sparklinePoints}
                    />
                  </svg>
                </div>
              </div>

              {/* Publishing Schedule & Content Calendar Strip */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-sm font-semibold text-[#08080D]">
                    Content Calendar & Publishing Schedule
                  </h3>
                  <span className="text-xs text-[#5A5A68]">This week</span>
                </div>
                <div className="divide-y divide-[#08080D]/8 border border-[#08080D]/10 rounded-xl overflow-hidden">
                  {consoleData.calendarSlots.map((slot) => (
                    <div
                      key={`${slot.day}-${slot.channel}`}
                      className="flex items-center justify-between gap-3 px-3.5 py-2.5 text-xs bg-white hover:bg-[#FAF9F6] transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-mono text-[#5A5A68] w-8 shrink-0">{slot.day}</span>
                        <span className="font-semibold text-[#08080D] w-16 shrink-0">{slot.channel}</span>
                        <span className="text-[#3F3F4B] truncate">{slot.title}</span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 font-mono tabular-nums">
                        <span className="text-[#5A5A68]">{slot.time}</span>
                        <span className="text-[#08080D] font-medium">{slot.state}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: AI Video Preview + AI Agent Activity (4 cols) */}
            <div className="lg:col-span-4 p-5 sm:p-6 bg-[#FAF9F6]/40 flex flex-col justify-between gap-6">
              {/* AI Video Preview Card */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-sm font-semibold text-[#08080D]">AI Video Preview</h3>
                  <span className="text-xs font-mono tabular-nums text-[#5A5A68]">{consoleData.videoDuration}</span>
                </div>

                <div className="rounded-xl bg-[#08080D] text-white p-4 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-45"
                    style={{
                      background:
                        'radial-gradient(circle at 75% 25%, rgba(242,217,255,0.45), transparent 55%), radial-gradient(circle at 20% 80%, rgba(184,231,248,0.35), transparent 55%)',
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex flex-col justify-between min-h-[148px]">
                    <div className="flex items-center justify-between text-[11px] text-white/75">
                      <span>{consoleData.videoModel}</span>
                      <span>{consoleData.videoStatus}</span>
                    </div>

                    <div className="my-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setVideoPlaying((p) => !p)}
                        aria-label={videoPlaying ? 'Pause preview' : 'Play preview'}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F2D9FF] text-[#08080D] hover:bg-white transition-colors shrink-0"
                      >
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </button>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white truncate">{consoleData.videoTitle}</div>
                        <div className="text-xs text-white/70 mt-0.5">
                          {videoPlaying ? 'Previewing storyboard cut · Scene 02/04' : 'Storyboard synced with brand kit'}
                        </div>
                      </div>
                    </div>

                    {/* Timeline bar */}
                    <div className="space-y-1.5">
                      <div className="h-1.5 w-full rounded-full bg-white/15 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-[#F2D9FF]"
                          animate={{ width: videoPlaying ? ['28%', '92%'] : '42%' }}
                          transition={{ duration: videoPlaying ? 4 : 0.3, ease: 'linear' }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] font-mono tabular-nums text-white/60">
                        <span>01 Hook</span>
                        <span>02 Product</span>
                        <span>03 Proof</span>
                        <span>04 CTA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Agent Activity */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-sm font-semibold text-[#08080D] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#08080D]" />
                    <span>AI Agent Orchestration</span>
                  </h3>
                  <span className="text-xs text-[#5A5A68]">Coordinated</span>
                </div>
                <div className="space-y-2.5">
                  {consoleData.agents.map((agent) => (
                    <div
                      key={agent.role}
                      className="p-3 rounded-xl bg-white border border-[#08080D]/10 text-xs"
                    >
                      <div className="flex items-center justify-between font-semibold text-[#08080D]">
                        <span>{agent.role}</span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#3F3F4B]">
                          <Check className="w-3 h-3" />
                          {agent.outcome}
                        </span>
                      </div>
                      <p className="text-[#5A5A68] mt-1 leading-relaxed">{agent.task}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
