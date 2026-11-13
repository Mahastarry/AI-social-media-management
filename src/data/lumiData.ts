export type PlanId = 'starter' | 'studio' | 'studio-plus';

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
  outcomes: string[];
  previewType: 'research' | 'content' | 'video' | 'publishing' | 'community' | 'analytics' | 'team';
}

export interface WorkflowStage {
  number: string;
  title: string;
  description: string;
  inputs: string[];
  systemAction: string;
  outputMetric: string;
}

export interface AudienceItem {
  number: string;
  title: string;
  description: string;
  stackFocus: string[];
  workflowSummary: string;
}

export interface PricingTier {
  id: PlanId;
  name: string;
  price: string;
  cadence: string;
  audience: string;
  recommended?: boolean;
  ctaLabel: string;
  paymentUrl: string;
  videoAllowance: string;
  modelAccess: string;
  features: string[];
}

export const LUMI_LOGO_SRC = '/assets/aistudio/LUMI_Iridescent_Star_Logo_f546bd4b.png';

export const NAV_LINKS = [
  { label: 'Platform', href: '#platform', id: 'platform' },
  { label: 'Solutions', href: '#solutions', id: 'solutions' },
  { label: 'Features', href: '#showcase', id: 'showcase' },
  { label: 'Pricing', href: '#pricing', id: 'pricing' },
  { label: 'Resources', href: '#how-it-works', id: 'how-it-works' },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'intelligence-research',
    number: '01',
    title: 'Intelligence & Research',
    summary: 'Understand audiences, discover trends, research competitors and identify opportunities.',
    detail:
      'LUMI continuously monitors category conversations, competitor cadence, and audience sentiment so every brief begins with verified cultural and performance signals.',
    outcomes: ['Audience cluster mapping', 'Competitor cadence benchmarks', 'Emerging format alerts'],
    previewType: 'research',
  },
  {
    id: 'content-studio',
    number: '02',
    title: 'Content Studio',
    summary: 'Generate, organise and manage high-quality social media content.',
    detail:
      'Turn strategic insights into structured campaigns, platform-native scripts, carousels, and copy locked to your brand voice guidelines.',
    outcomes: ['Brand-calibrated scriptwriting', 'Multi-format campaign kits', 'Versioned creative briefs'],
    previewType: 'content',
  },
  {
    id: 'video-studio',
    number: '03',
    title: 'Video Studio',
    summary: 'Create engaging AI-powered video content for modern social platforms.',
    detail:
      'Direct short-form reels, product showcases, and presenter-led explainers using integrated Veo and HeyGen workflows inside one production timeline.',
    outcomes: ['Veo & HeyGen model routing', '9:16 & 16:9 native framing', 'Automated caption pacing'],
    previewType: 'video',
  },
  {
    id: 'publishing-scheduling',
    number: '04',
    title: 'Publishing & Scheduling',
    summary: 'Manage content calendars and publishing workflows across connected accounts.',
    detail:
      'Coordinate launches across Instagram, TikTok, LinkedIn, and YouTube Shorts with approval gates, optimal posting windows, and queue balancing.',
    outcomes: ['Cross-channel calendar sync', 'Automated publishing queues', 'Conflict & gap detection'],
    previewType: 'publishing',
  },
  {
    id: 'community',
    number: '05',
    title: 'Community',
    summary: 'Bring audience interactions and community management into one workspace.',
    detail:
      'Triage comments, direct messages, and high-intent brand mentions in a single queue with brand-safe response drafts ready for team review.',
    outcomes: ['Unified multi-account inbox', 'Intent & priority routing', 'Human-approved reply drafts'],
    previewType: 'community',
  },
  {
    id: 'analytics',
    number: '06',
    title: 'Analytics',
    summary: 'Understand performance, measure growth and turn insights into action.',
    detail:
      'Connect creative formats directly to retention, engagement velocity, and audience growth so next week’s briefs improve automatically.',
    outcomes: ['Format-level attribution', 'Retention & hook diagnostics', 'Executive campaign reporting'],
    previewType: 'analytics',
  },
  {
    id: 'team-workspace',
    number: '07',
    title: 'Team Workspace',
    summary: 'Collaborate with your team, manage brands and coordinate marketing operations.',
    detail:
      'Keep brand kits, asset libraries, review permissions, and multi-brand workspaces organised under clear operational ownership.',
    outcomes: ['Multi-brand isolation', 'Role-based sign-off flows', 'Shared brand intelligence'],
    previewType: 'team',
  },
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'LUMI learns your brand, audience, industry and objectives.',
    inputs: ['Brand voice & visual guidelines', 'Connected social accounts', 'Competitor & category benchmarks'],
    systemAction: 'Builds a persistent Brand Intelligence Graph that anchors every prompt, hook, and visual style.',
    outputMetric: 'Unified strategy brief & audience map',
  },
  {
    number: '02',
    title: 'Create',
    description: 'Your AI-powered workspace transforms research into strategies, content and campaigns.',
    inputs: ['Weekly campaign themes', 'Model selection (Veo / HeyGen)', 'Channel format rules'],
    systemAction: 'Orchestrates scriptwriting, AI video production, and multi-platform asset variations simultaneously.',
    outputMetric: 'Review-ready video & post pipeline',
  },
  {
    number: '03',
    title: 'Grow',
    description: 'Publish, analyse, optimise and continuously improve your social media presence.',
    inputs: ['Approved calendar slots', 'Audience replies & DMs', 'Watch-time & conversion signals'],
    systemAction: 'Publishes across channels, routes community responses, and feeds performance data back into strategy.',
    outputMetric: 'Compounding reach & retention gains',
  },
];

export const AUDIENCES: AudienceItem[] = [
  {
    number: '01',
    title: 'Creators',
    description: 'Turn ideas into consistent, high-quality content.',
    stackFocus: ['AI scriptwriting & hook testing', 'Short-form AI video production', 'Automated cross-platform scheduling'],
    workflowSummary: 'Go from raw voice note or concept to a full week of platform-native video and editorial posts in one sitting.',
  },
  {
    number: '02',
    title: 'Growing Businesses',
    description: 'Build a recognisable digital presence without managing multiple disconnected tools.',
    stackFocus: ['Brand intelligence & consistency', 'Content calendar & publishing', 'Actionable growth analytics'],
    workflowSummary: 'Replace five disconnected subscriptions with one guided system that maintains visual and verbal consistency every day.',
  },
  {
    number: '03',
    title: 'Marketing Teams',
    description: 'Coordinate campaigns, content and performance from one workspace.',
    stackFocus: ['AI agent orchestration', 'Multi-channel approval workflows', 'Unified community & reporting'],
    workflowSummary: 'Align strategists, copywriters, and video editors around shared briefs, live render queues, and attribution metrics.',
  },
  {
    number: '04',
    title: 'Agencies',
    description: 'Manage multiple brands and streamline client marketing operations.',
    stackFocus: ['Isolated client workspaces', 'Scalable video & campaign pipelines', 'Client-ready performance reporting'],
    workflowSummary: 'Operate distinct client brand brains side by side with repeatable production workflows and clear sign-off controls.',
  },
];

export const LUMI_ADVANTAGES = [
  {
    title: 'Connected AI workflows',
    description: 'Research, scripting, video generation, and scheduling share live context instead of resetting in isolated prompt boxes.',
  },
  {
    title: 'Centralised brand intelligence',
    description: 'Tone of voice, visual rules, product facts, and audience insights persist across every campaign automatically.',
  },
  {
    title: 'Consistent content production',
    description: 'Maintain reliable daily and weekly publishing output across channels without sacrificing editorial quality.',
  },
  {
    title: 'Integrated marketing operations',
    description: 'Content planning, asset approvals, community replies, and publishing live inside a single operating system.',
  },
  {
    title: 'Actionable performance insights',
    description: 'See which hooks, topics, and video formats drive retention—and apply those learnings directly to upcoming briefs.',
  },
  {
    title: 'Scalable team collaboration',
    description: 'Move seamlessly from solo founder workflows to multi-brand agency operations with structured permissions.',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'STARTER',
    price: '$549',
    cadence: '/month',
    audience: 'For creators and emerging brands building consistent output.',
    ctaLabel: 'Choose Starter',
    paymentUrl: 'https://rzp.io/rzp/GffnfKKs',
    videoAllowance: '30 videos per month',
    modelAccess: 'Standard AI video generation pipeline',
    features: [
      '30 videos per month',
      'AI-powered content planning',
      'Content calendar',
      'AI scriptwriting',
      'Social media scheduling',
      'Basic analytics',
      'LUMI workspace access',
    ],
  },
  {
    id: 'studio',
    name: 'STUDIO',
    price: '$949',
    cadence: '/month',
    audience: 'For growing brands and marketing teams scaling daily production.',
    recommended: true,
    ctaLabel: 'Start with Studio',
    paymentUrl: 'https://rzp.io/rzp/2c5Lpk3g',
    videoAllowance: 'Up to 30 videos per day',
    modelAccess: 'Veo Lite & HeyGen Avatar III access',
    features: [
      'Up to 30 videos per day',
      'Veo Lite access',
      'HeyGen Avatar III access',
      'AI content planning',
      'Advanced content calendar',
      'Automated publishing workflows',
      'Advanced analytics',
      'AI agent orchestration',
    ],
  },
  {
    id: 'studio-plus',
    name: 'STUDIO PLUS',
    price: '$1,399',
    cadence: '/month',
    audience: 'For high-volume brands and agencies requiring priority velocity.',
    ctaLabel: 'Choose Studio Plus',
    paymentUrl: 'https://rzp.io/rzp/Lcu5b9IO',
    videoAllowance: 'Up to 30 videos per day',
    modelAccess: 'Veo Fast & premium workflow routing',
    features: [
      'Up to 30 videos per day',
      'Veo Fast access',
      'Premium content creation workflows',
      'Advanced AI orchestration',
      'Automated publishing',
      'Advanced analytics and reporting',
      'Priority support',
    ],
  },
];

export const MODEL_USAGE_NOTES = [
  {
    label: 'Model limits & duration',
    detail: 'Video duration, resolution, model availability, and generation allowances are subject to applicable underlying model provider limits.',
  },
  {
    label: 'Metered additional usage',
    detail: 'Additional premium AI usage beyond included plan allowances is billed separately at transparent per-unit rates based on selected model and actual consumption.',
  },
  {
    label: 'Transparent model routing',
    detail: 'You always see the selected model (Veo Lite, Veo Fast, HeyGen Avatar III) and estimated generation units before rendering.',
  },
];
