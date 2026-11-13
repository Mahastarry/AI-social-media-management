import { useState } from 'react';
import { motion } from 'motion/react';
import {
  LayoutGrid,
  Film,
  Calendar,
  MessageSquare,
  BarChart3,
  Users,
  Check,
  Play,
  SlidersHorizontal,
} from 'lucide-react';

type ShowcaseTab =
  | 'content-dashboard'
  | 'video-studio'
  | 'content-calendar'
  | 'community'
  | 'analytics'
  | 'team-workspace';

const TABS: { id: ShowcaseTab; label: string; icon: typeof LayoutGrid }[] = [
  { id: 'content-dashboard', label: 'Content dashboard', icon: LayoutGrid },
  { id: 'video-studio', label: 'AI Video Studio', icon: Film },
  { id: 'content-calendar', label: 'Content calendar', icon: Calendar },
  { id: 'community', label: 'Community management', icon: MessageSquare },
  { id: 'analytics', label: 'Analytics dashboard', icon: BarChart3 },
  { id: 'team-workspace', label: 'Team workspace', icon: Users },
];

export function ProductShowcaseSection() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>('content-dashboard');

  // Interactive states for each showcase module
  const [contentFilter, setContentFilter] = useState<'all' | 'review' | 'approved'>('all');
  const [selectedBriefIdx, setSelectedBriefIdx] = useState(0);

  const [videoModel, setVideoModel] = useState<'Veo Lite' | 'Veo Fast' | 'HeyGen Avatar III'>('Veo Fast');
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '16:9'>('9:16');
  const [activeScene, setActiveScene] = useState(0);

  const [calendarChannel, setCalendarChannel] = useState<'All' | 'Instagram' | 'TikTok' | 'LinkedIn'>('All');
  const [selectedSlotIdx, setSelectedSlotIdx] = useState(0);

  const [approvedReplies, setApprovedReplies] = useState<Record<number, boolean>>({});
  const [selectedThreadIdx, setSelectedThreadIdx] = useState(0);

  const [analyticsRange, setAnalyticsRange] = useState<'7D' | '30D' | '90D'>('30D');
  const [selectedBrandIdx, setSelectedBrandIdx] = useState(0);

  // Data
  const briefs = [
    {
      title: 'Winter Outerwear Material Study',
      channel: 'Instagram + TikTok',
      status: 'review' as const,
      statusLabel: 'In Review',
      hook: '“Why heavyweight merino regulates temperature differently than synthetic fleece.”',
      format: '28s Vertical Video + 5-Slide Carousel',
    },
    {
      title: 'Founder Note: Designing for Longevity',
      channel: 'LinkedIn',
      status: 'approved' as const,
      statusLabel: 'Approved',
      hook: '“We cut our SKU count by 40% this year. Here is what happened to repeat customer retention.”',
      format: 'Editorial Post + Quote Card',
    },
    {
      title: 'Studio Craftsmanship Cutdown',
      channel: 'YouTube Shorts + Reels',
      status: 'approved' as const,
      statusLabel: 'Approved',
      hook: '“Inside the Milan pattern workshop where every seam is pressure-tested.”',
      format: '34s Narrative Short',
    },
  ];

  const filteredBriefs = briefs.filter((b) => contentFilter === 'all' || b.status === contentFilter);
  const currentBrief = filteredBriefs[selectedBriefIdx] || filteredBriefs[0] || briefs[0];

  const scenes = [
    { name: '01 Hook', duration: '0–4s', prompt: 'Macro daylight pan over textured brushed wool weave in architectural studio.' },
    { name: '02 Detail', duration: '4–14s', prompt: 'Clean tailoring cut showing seam construction and subtle movement.' },
    { name: '03 Context', duration: '14–22s', prompt: 'Model walking across minimalist limestone courtyard in crisp morning light.' },
    { name: '04 Outro', duration: '22–28s', prompt: 'Minimal product lockup with understated editorial caption.' },
  ];

  const calendarSlots = [
    { day: 'Mon 18', time: '09:30', channel: 'Instagram' as const, title: 'Material Study Reel', owner: 'Studio Team' },
    { day: 'Tue 19', time: '11:00', channel: 'LinkedIn' as const, title: 'Designing for Longevity Essay', owner: 'Elena R.' },
    { day: 'Wed 20', time: '17:15', channel: 'TikTok' as const, title: 'Pattern Studio Cutdown', owner: 'Video Agent' },
    { day: 'Thu 21', time: '14:00', channel: 'Instagram' as const, title: 'Capsule Lookbook Carousel', owner: 'Studio Team' },
    { day: 'Fri 22', time: '10:30', channel: 'LinkedIn' as const, title: 'Q4 Retail Partner Spotlight', owner: 'Marcus T.' },
  ];
  const filteredSlots = calendarSlots.filter(
    (s) => calendarChannel === 'All' || s.channel === calendarChannel
  );
  const activeSlot = filteredSlots[selectedSlotIdx] || filteredSlots[0];

  const inboxThreads = [
    {
      author: '@hana.arch',
      platform: 'Instagram',
      time: '12m ago',
      message: 'Is the Slate Coat cut oversized enough to layer over structured knitwear?',
      draft: 'Hi Hana — yes, the Slate Coat features a dropped shoulder specifically tailored for heavy layering.',
    },
    {
      author: 'David Lindqvist',
      platform: 'LinkedIn',
      time: '41m ago',
      message: 'Great breakdown on SKU discipline. Are you sharing the supplier audit metrics publicly?',
      draft: 'Thank you, David. Our annual transparency summary publishes next Tuesday—happy to share the link.',
    },
    {
      author: '@studiomomo',
      platform: 'TikTok',
      time: '1h ago',
      message: 'Which wool mill did you partner with for this capsule?',
      draft: 'This series is woven with our family-run partner mill in Biella using certified traceable merino.',
    },
  ];
  const activeThread = inboxThreads[selectedThreadIdx];

  const analyticsByRange = {
    '7D': { reach: '112.4K', engagement: '5.7%', watchTime: '74%', posts: '11', curve: '0,62 56,54 112,48 168,42 224,30 280,22 336,16' },
    '30D': { reach: '418.4K', engagement: '5.4%', watchTime: '71%', posts: '42', curve: '0,68 56,60 112,56 168,40 224,35 280,24 336,12' },
    '90D': { reach: '1.28M', engagement: '5.1%', watchTime: '68%', posts: '126', curve: '0,74 56,64 112,52 168,45 224,31 280,19 336,9' },
  }[analyticsRange];

  const brands = [
    { name: 'Atelier Nord', accounts: '4 connected channels', pending: '3 items awaiting sign-off', members: '6 collaborators' },
    { name: 'Kanso Botanicals', accounts: '3 connected channels', pending: '1 item awaiting sign-off', members: '4 collaborators' },
    { name: 'Vesper Audio', accounts: '5 connected channels', pending: 'All scheduled for week', members: '8 collaborators' },
  ];

  return (
    <section id="showcase" className="py-20 md:py-28 bg-white border-b border-[#08080D]/8">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 md:mb-12 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#5A5A68] mb-4">
              PRODUCT EXPERIENCE
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-bold tracking-[-0.03em] leading-[1.06] text-[#08080D] text-balance">
              Everything connected. Nothing fragmented.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#5A5A68] leading-relaxed">
              Explore the six core workspaces inside LUMI. Select a module below to interact with live sample
              workflows across content, video, scheduling, community, analytics, and team governance.
            </p>
          </div>
        </div>

        {/* 6-Module Interactive Switcher */}
        <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="LUMI workspace modules">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 min-h-[42px] rounded-xl text-xs sm:text-sm font-semibold border transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08080D] ${
                  isActive
                    ? 'bg-[#08080D] text-white border-[#08080D]'
                    : 'bg-[#FAF9F6] text-[#3F3F4B] border-[#08080D]/10 hover:bg-[#F2D9FF]/45 hover:text-[#08080D]'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#F2D9FF]' : 'text-[#5A5A68]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Preview Frame */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-[#08080D]/12 bg-[#FAF9F6] overflow-hidden shadow-[0_24px_64px_-28px_rgba(8,8,13,0.14)]"
        >
          {/* Preview Chrome Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-white border-b border-[#08080D]/10">
            <div className="flex items-center gap-2 text-xs font-medium text-[#08080D]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#C9A5F7]" aria-hidden="true" />
              <span>Interactive Interface Preview</span>
              <span className="text-[#08080D]/25" aria-hidden="true">·</span>
              <span className="text-[#5A5A68]">{TABS.find((t) => t.id === activeTab)?.label}</span>
            </div>
            <span className="text-xs text-[#5A5A68]">Sample operational data</span>
          </div>

          {/* 1. Content Dashboard */}
          {activeTab === 'content-dashboard' && (
            <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-base font-bold text-[#08080D]">Active Campaign Queue</h3>
                  <div className="inline-flex p-1 rounded-lg bg-white border border-[#08080D]/10">
                    {(['all', 'review', 'approved'] as const).map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => {
                          setContentFilter(status);
                          setSelectedBriefIdx(0);
                        }}
                        className={`px-3 py-1 rounded-md text-xs font-medium capitalize transition-colors ${
                          contentFilter === status ? 'bg-[#F2D9FF] text-[#08080D]' : 'text-[#5A5A68]'
                        }`}
                      >
                        {status === 'all' ? 'All' : status === 'review' ? 'In Review' : 'Approved'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5">
                  {filteredBriefs.map((brief, idx) => (
                    <button
                      key={brief.title}
                      type="button"
                      onClick={() => setSelectedBriefIdx(idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-colors ${
                        currentBrief.title === brief.title
                          ? 'bg-white border-[#08080D]'
                          : 'bg-white/60 border-[#08080D]/10 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-[#08080D]">{brief.title}</span>
                        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-[#F2D9FF]/60 text-[#08080D] shrink-0">
                          {brief.statusLabel}
                        </span>
                      </div>
                      <div className="mt-1.5 flex items-center gap-2 text-xs text-[#5A5A68]">
                        <span>{brief.channel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{brief.format}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 rounded-xl bg-white border border-[#08080D]/10 p-5 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5A5A68]">
                    Selected Creative Brief
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#08080D]">{currentBrief.title}</h4>
                  <div className="p-3.5 rounded-lg bg-[#FAF9F6] border border-[#08080D]/8 text-sm text-[#181820] leading-relaxed">
                    {currentBrief.hook}
                  </div>
                </div>
                <div className="pt-4 border-t border-[#08080D]/8 flex items-center justify-between text-xs text-[#5A5A68]">
                  <span>Channels: {currentBrief.channel}</span>
                  <span className="font-semibold text-[#08080D]">{currentBrief.statusLabel}</span>
                </div>
              </div>
            </div>
          )}

          {/* 2. AI Video Studio */}
          {activeTab === 'video-studio' && (
            <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 rounded-xl bg-[#08080D] text-white p-5 sm:p-6 flex flex-col justify-between min-h-[300px] relative overflow-hidden">
                <div
                  className="pointer-events-none absolute inset-0 opacity-45"
                  style={{
                    background:
                      'radial-gradient(circle at 80% 20%, rgba(242,217,255,0.45), transparent 52%), radial-gradient(circle at 18% 85%, rgba(184,231,248,0.35), transparent 55%)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 text-xs text-white/75">
                  <span className="font-mono">
                    {videoModel} · {aspectRatio}
                  </span>
                  <span>Subject to model duration & generation limits</span>
                </div>

                <div className="relative z-10 my-6 flex items-center justify-center">
                  <div
                    className={`rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm p-5 flex flex-col justify-between transition-all ${
                      aspectRatio === '9:16' ? 'w-52 h-64' : 'w-full max-w-md h-48'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                      <span>{scenes[activeScene].name}</span>
                      <span>{scenes[activeScene].duration}</span>
                    </div>
                    <div className="flex justify-center">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#F2D9FF] text-[#08080D]">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </span>
                    </div>
                    <p className="text-xs text-white/85 leading-relaxed">{scenes[activeScene].prompt}</p>
                  </div>
                </div>

                <div className="relative z-10 grid grid-cols-4 gap-2">
                  {scenes.map((sc, idx) => (
                    <button
                      key={sc.name}
                      type="button"
                      onClick={() => setActiveScene(idx)}
                      className={`p-2 rounded-lg text-left text-[11px] font-mono border transition-colors ${
                        activeScene === idx
                          ? 'bg-[#F2D9FF] text-[#08080D] border-[#F2D9FF]'
                          : 'bg-white/5 text-white/75 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="font-semibold">{sc.name}</div>
                      <div className="opacity-75">{sc.duration}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 rounded-xl bg-white border border-[#08080D]/10 p-5 space-y-5">
                <div className="flex items-center gap-2 text-sm font-bold text-[#08080D]">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Production Controls</span>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-[#5A5A68]">Model Selection</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {(['Veo Lite', 'Veo Fast', 'HeyGen Avatar III'] as const).map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setVideoModel(m)}
                        className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                          videoModel === m
                            ? 'bg-[#08080D] text-white border-[#08080D]'
                            : 'bg-[#FAF9F6] text-[#08080D] border-[#08080D]/10 hover:bg-[#F2D9FF]/40'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-[#5A5A68]">Output Aspect Ratio</div>
                  <div className="grid grid-cols-2 gap-2">
                    {(['9:16', '16:9'] as const).map((ratio) => (
                      <button
                        key={ratio}
                        type="button"
                        onClick={() => setAspectRatio(ratio)}
                        className={`px-3 py-2 rounded-lg text-xs font-mono font-semibold border transition-colors ${
                          aspectRatio === ratio
                            ? 'bg-[#F2D9FF] text-[#08080D] border-[#08080D]/20'
                            : 'bg-[#FAF9F6] text-[#5A5A68] border-[#08080D]/10'
                        }`}
                      >
                        {ratio === '9:16' ? '9:16 Vertical' : '16:9 Landscape'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#FAF9F6] border border-[#08080D]/8 text-xs text-[#5A5A68] leading-relaxed">
                  Plan inclusion varies by tier (Starter: 30/month; Studio & Studio Plus: up to 30/day). Additional
                  premium model generations are billed transparently according to consumption.
                </div>
              </div>
            </div>
          )}

          {/* 3. Content Calendar */}
          {activeTab === 'content-calendar' && (
            <div className="p-5 sm:p-7 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-base font-bold text-[#08080D]">Weekly Publishing Schedule</h3>
                <div className="inline-flex p-1 rounded-lg bg-white border border-[#08080D]/10">
                  {(['All', 'Instagram', 'TikTok', 'LinkedIn'] as const).map((ch) => (
                    <button
                      key={ch}
                      type="button"
                      onClick={() => {
                        setCalendarChannel(ch);
                        setSelectedSlotIdx(0);
                      }}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                        calendarChannel === ch ? 'bg-[#08080D] text-white' : 'text-[#5A5A68]'
                      }`}
                    >
                      {ch}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div className="lg:col-span-8 divide-y divide-[#08080D]/8 rounded-xl bg-white border border-[#08080D]/10 overflow-hidden">
                  {filteredSlots.map((slot, idx) => (
                    <button
                      key={`${slot.day}-${slot.title}`}
                      type="button"
                      onClick={() => setSelectedSlotIdx(idx)}
                      className={`w-full text-left px-4 py-3.5 flex items-center justify-between gap-4 transition-colors ${
                        activeSlot.title === slot.title ? 'bg-[#F2D9FF]/45' : 'hover:bg-[#FAF9F6]'
                      }`}
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <span className="font-mono text-xs tabular-nums text-[#5A5A68] w-16 shrink-0">
                          {slot.day}
                        </span>
                        <span className="text-xs font-semibold text-[#08080D] w-20 shrink-0">{slot.channel}</span>
                        <span className="text-sm font-medium text-[#08080D] truncate">{slot.title}</span>
                      </div>
                      <span className="font-mono text-xs tabular-nums text-[#5A5A68] shrink-0">{slot.time}</span>
                    </button>
                  ))}
                </div>

                {activeSlot && (
                  <div className="lg:col-span-4 rounded-xl bg-white border border-[#08080D]/10 p-5 space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5A5A68]">
                      Scheduled Slot
                    </div>
                    <h4 className="font-display text-lg font-bold text-[#08080D]">{activeSlot.title}</h4>
                    <div className="text-xs text-[#5A5A68] space-y-1.5 pt-2 border-t border-[#08080D]/8">
                      <div>Channel: {activeSlot.channel}</div>
                      <div className="font-mono tabular-nums">
                        Publish Window: {activeSlot.day} at {activeSlot.time}
                      </div>
                      <div>Owner: {activeSlot.owner}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 4. Community Management */}
          {activeTab === 'community' && (
            <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 space-y-2.5">
                {inboxThreads.map((thread, idx) => (
                  <button
                    key={thread.author}
                    type="button"
                    onClick={() => setSelectedThreadIdx(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-colors ${
                      selectedThreadIdx === idx
                        ? 'bg-white border-[#08080D]'
                        : 'bg-white/70 border-[#08080D]/10 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#08080D]">{thread.author}</span>
                      <span className="font-mono text-[#5A5A68]">{thread.time}</span>
                    </div>
                    <div className="text-[11px] text-[#5A5A68] mt-0.5">{thread.platform}</div>
                    <p className="text-xs text-[#181820] mt-2 line-clamp-2">{thread.message}</p>
                  </button>
                ))}
              </div>

              <div className="lg:col-span-7 rounded-xl bg-white border border-[#08080D]/10 p-5 sm:p-6 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#5A5A68] pb-3 border-b border-[#08080D]/8">
                    <span className="font-semibold text-[#08080D]">
                      {activeThread.author} · {activeThread.platform}
                    </span>
                    <span className="font-mono">{activeThread.time}</span>
                  </div>
                  <p className="text-sm text-[#08080D] leading-relaxed">{activeThread.message}</p>

                  <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#08080D]/10 space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5A5A68]">
                      LUMI Brand-Aligned Draft
                    </div>
                    <p className="text-sm text-[#181820] leading-relaxed">{activeThread.draft}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-[#5A5A68]">Human review required before sending</span>
                  <button
                    type="button"
                    onClick={() =>
                      setApprovedReplies((prev) => ({ ...prev, [selectedThreadIdx]: true }))
                    }
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                      approvedReplies[selectedThreadIdx]
                        ? 'bg-[#F2D9FF] text-[#08080D]'
                        : 'bg-[#08080D] text-white hover:bg-[#191924]'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{approvedReplies[selectedThreadIdx] ? 'Reply Queued' : 'Approve & Send'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 5. Analytics Dashboard */}
          {activeTab === 'analytics' && (
            <div className="p-5 sm:p-7 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-base font-bold text-[#08080D]">Cross-Channel Performance</h3>
                <div className="inline-flex p-1 rounded-lg bg-white border border-[#08080D]/10">
                  {(['7D', '30D', '90D'] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setAnalyticsRange(r)}
                      className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-colors ${
                        analyticsRange === r ? 'bg-[#08080D] text-white' : 'text-[#5A5A68]'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Total Reach', val: analyticsByRange.reach },
                  { label: 'Engagement Rate', val: analyticsByRange.engagement },
                  { label: '3s Hook Retention', val: analyticsByRange.watchTime },
                  { label: 'Published Assets', val: analyticsByRange.posts },
                ].map((metric) => (
                  <div key={metric.label} className="p-4 rounded-xl bg-white border border-[#08080D]/10">
                    <div className="text-xs text-[#5A5A68]">{metric.label}</div>
                    <div className="font-display text-2xl font-bold text-[#08080D] tabular-nums mt-1">
                      {metric.val}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#08080D]/10">
                <svg viewBox="0 0 336 80" className="w-full h-28 overflow-visible" aria-label="Analytics trend curve">
                  <line x1="0" y1="25" x2="336" y2="25" stroke="#08080D" strokeOpacity="0.06" />
                  <line x1="0" y1="55" x2="336" y2="55" stroke="#08080D" strokeOpacity="0.06" />
                  <polyline
                    fill="none"
                    stroke="#08080D"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={analyticsByRange.curve}
                  />
                </svg>
              </div>
            </div>
          )}

          {/* 6. Team Workspace */}
          {activeTab === 'team-workspace' && (
            <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 space-y-2.5">
                {brands.map((brand, idx) => (
                  <button
                    key={brand.name}
                    type="button"
                    onClick={() => setSelectedBrandIdx(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-colors ${
                      selectedBrandIdx === idx
                        ? 'bg-white border-[#08080D]'
                        : 'bg-white/70 border-[#08080D]/10 hover:bg-white'
                    }`}
                  >
                    <div className="text-sm font-bold text-[#08080D]">{brand.name}</div>
                    <div className="text-xs text-[#5A5A68] mt-1">{brand.accounts}</div>
                  </button>
                ))}
              </div>

              <div className="lg:col-span-7 rounded-xl bg-white border border-[#08080D]/10 p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#08080D]/8 pb-3">
                  <div>
                    <h4 className="font-display text-lg font-bold text-[#08080D]">
                      {brands[selectedBrandIdx].name}
                    </h4>
                    <p className="text-xs text-[#5A5A68] mt-0.5">{brands[selectedBrandIdx].members}</p>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-[#F2D9FF] text-xs font-semibold text-[#08080D]">
                    Brand Kit Synced
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-lg bg-[#FAF9F6] border border-[#08080D]/8">
                    <div className="font-semibold text-[#08080D]">Approval Queue</div>
                    <div className="text-[#5A5A68] mt-1">{brands[selectedBrandIdx].pending}</div>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#FAF9F6] border border-[#08080D]/8">
                    <div className="font-semibold text-[#08080D]">Brand Isolation</div>
                    <div className="text-[#5A5A68] mt-1">Dedicated voice, assets & analytics</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
