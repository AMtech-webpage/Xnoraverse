import { FeatureItem, FAQItem, ScreenshotMockup, CommunityGuidelineItem, SupportLinkGroup } from './types';

export const FEATURES: FeatureItem[] = [
  {
    id: 'shorts',
    title: 'Short Videos',
    description: 'Immerse yourself in high-definition vertical content. Watch, upload, and swipe seamlessly with custom soundboards and AR filters.',
    iconName: 'Clapperboard',
    category: 'social',
    badge: 'Popular'
  },
  {
    id: 'chat',
    title: 'Instant Messaging',
    description: 'Ultra-fast, fully encrypted messaging with custom text styles, interactive emojis, custom stickers, and automatic message self-destruction.',
    iconName: 'MessageSquare',
    category: 'social'
  },
  {
    id: 'calls',
    title: 'Voice & Video Calls',
    description: 'Crystal-clear audio and 4K video calling with noise cancellation, screen-sharing, and interactive background visualizer overlays.',
    iconName: 'PhoneCall',
    category: 'social'
  },
  {
    id: 'ai-assistant',
    title: 'XNORA AI Assistant',
    description: 'Your 24/7 personal copilot. Generate AI content, summarize channels, translate calls in real-time, and draft responses with Gemini models.',
    iconName: 'Sparkles',
    category: 'system',
    badge: 'AI Powered'
  },
  {
    id: 'creator-dashboard',
    title: 'Creator Dashboard',
    description: 'Advanced real-time statistics tracking your views, monetization, subscriber analytics, and engagement metrics at a glance.',
    iconName: 'LayoutDashboard',
    category: 'creator',
    badge: 'Pro Tools'
  },
  {
    id: 'wallet',
    title: 'Secure Crypto Wallet',
    description: 'Built-in multi-chain digital wallet. Store, swap, and withdraw your earned USDT and platform tokens with biometric verification.',
    iconName: 'Wallet',
    category: 'wallet',
    badge: 'Web3'
  },
  {
    id: 'live',
    title: 'Live Streaming',
    description: 'Stream directly to your community with sub-second latency, interactive polls, viewer tipping in USDT, and private VIP tiers.',
    iconName: 'Tv',
    category: 'social'
  },
  {
    id: 'communities',
    title: 'Tokenized Communities',
    description: 'Create and join communities gated by subscription, special badges, or NFTs. Coordinate governance voting and host events.',
    iconName: 'Users',
    category: 'social'
  },
  {
    id: 'bluetooth',
    title: 'Nearby Bluetooth Msg',
    description: 'Offline-first mesh network communication. Share secure texts and assets with nearby peers even when you have no internet access.',
    iconName: 'Cpu',
    category: 'system',
    badge: 'Unique'
  },
  {
    id: 'theme-mode',
    title: 'Dark & Light Mode',
    description: 'Silky smooth transition between dark cyber-midnight and clean day-slate. Eye-safe palettes optimized for prolonged viewing comfort.',
    iconName: 'SunMoon',
    category: 'system'
  },
  {
    id: 'performance',
    title: 'Sub-Millisecond Speed',
    description: 'Engineered with a rust-based networking layer and light SPA rendering to achieve near-instant loading times and optimal FPS.',
    iconName: 'Zap',
    category: 'system'
  },
  {
    id: 'security',
    title: 'Privacy & Security First',
    description: 'Zero-knowledge encryption for chats, self-custodial options for wallets, and granular privacy controls giving you ownership of your data.',
    iconName: 'ShieldCheck',
    category: 'system'
  }
];

export const CREATOR_MONETIZATION = {
  headerTitle: "Monetize Your Influence on XNORA",
  description: "XNORA Verse flips the script on traditional social networks. Here, you are a co-owner of the ecosystem. We believe that attention is valuable, so we reward creators and viewers alike with real-time USDT payments.",
  benefits: [
    {
      title: "View-Based Rewards",
      desc: "Earn USDT directly from high-yield advertisements played on your vertical videos and posts. Your revenue shares accumulate in real-time.",
      metric: "Keep up to 80% of Ad Revenue"
    },
    {
      title: "Premium Subscriptions",
      desc: "Gate exclusive premium content, behind-the-scenes streams, and special chat communities under custom monthly tiers configured by you.",
      metric: "Custom monthly pricing"
    },
    {
      title: "Direct Digital Tipping",
      desc: "Viewers can express appreciation by directly tipping USDT during your live streams, chats, or on your video content with minimal platform fees.",
      metric: "Instant payout withdrawal"
    },
    {
      title: "Creator Analytics Dashboard",
      desc: "Unleash the full potential of your channel with professional charts, retention analysis, audience demographics, and real-time revenue stats.",
      metric: "Enterprise-grade charts"
    }
  ]
};

export const SCREENSHOT_MOCKUPS: ScreenshotMockup[] = [
  {
    id: 'screen-splash',
    title: 'Splash Screen',
    subtitle: 'Welcome to the Future',
    tagline: 'Connect. Create. Learn. Earn.',
    screenType: 'splash',
    previewBg: 'from-purple-900/40 via-blue-950/40 to-slate-900/40'
  },
  {
    id: 'screen-feed',
    title: 'Home Feed',
    subtitle: 'Explore XNORA Feed',
    tagline: 'Decentralized timeline curated by user interests.',
    screenType: 'feed',
    previewBg: 'from-fuchsia-950/40 via-slate-900/40 to-indigo-950/40'
  },
  {
    id: 'screen-shorts',
    title: 'Shorts Reel',
    subtitle: 'Vertical Videos',
    tagline: 'Fast-paced entertainment with built-in instant rewards.',
    screenType: 'shorts',
    previewBg: 'from-indigo-950/40 via-purple-950/40 to-blue-950/40'
  },
  {
    id: 'screen-chat',
    title: 'Secure Chats',
    subtitle: 'Zero-Knowledge Chat',
    tagline: 'End-to-end encrypted messaging with beautiful themes.',
    screenType: 'chat',
    previewBg: 'from-slate-900/40 via-teal-950/40 to-slate-900/40'
  },
  {
    id: 'screen-wallet',
    title: 'Web3 Wallet',
    subtitle: 'Digital Vault',
    tagline: 'Real-time USDT tracking, secure token swapping, and biometrics.',
    screenType: 'wallet',
    previewBg: 'from-cyan-950/40 via-blue-950/40 to-slate-900/40'
  },
  {
    id: 'screen-profile',
    title: 'User Profile',
    subtitle: 'Digital Identity',
    tagline: 'Showcase your creator badges, achievements, and statistics.',
    screenType: 'profile',
    previewBg: 'from-purple-950/40 via-pink-950/40 to-slate-900/40'
  },
  {
    id: 'screen-creator',
    title: 'Creator Dashboard',
    subtitle: 'Revenue Studio',
    tagline: 'Track engagement spikes, live viewer statistics, and payouts.',
    screenType: 'creator',
    previewBg: 'from-emerald-950/40 via-slate-900/40 to-violet-950/40'
  },
  {
    id: 'screen-live',
    title: 'Live Streaming',
    subtitle: 'Broadcasting Hub',
    tagline: 'Engage with active viewers, accept USDT gifts, and run live Q&As.',
    screenType: 'live',
    previewBg: 'from-red-950/40 via-rose-950/40 to-slate-900/40'
  },
  {
    id: 'screen-ai',
    title: 'XNORA AI Copilot',
    subtitle: 'Gemini-Powered AI',
    tagline: 'Auto-compose smart scripts, summarize videos, translate chat.',
    screenType: 'ai',
    previewBg: 'from-cyan-950/40 via-purple-950/40 to-blue-950/40'
  },
  {
    id: 'screen-settings',
    title: 'App Settings',
    subtitle: 'Custom Control Panel',
    tagline: 'Configure Bluetooth mesh node routing, privacy, and wallet keys.',
    screenType: 'settings',
    previewBg: 'from-slate-950/40 via-slate-900/40 to-slate-800/40'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is XNORA Verse?',
    answer: 'XNORA Verse is a futuristic, next-generation social media platform built on speed, user privacy, and rewarding participation. We merge vertical videos (Shorts), encrypted communication, AI-powered generation tools, and self-custodial digital wallets into a unified, glassmorphic experience where users share 80% of ad revenue.'
  },
  {
    question: 'How do I create an account?',
    answer: 'You can register instantly by downloading the app from the App Store or Google Play and entering your name, email, and password. Alternatively, you can secure your profile by linking a Web3 self-custodial wallet for a completely gasless, zero-knowledge registration.'
  },
  {
    question: 'How do I become a creator?',
    answer: 'Becoming an active creator on XNORA is open to everyone! Simply head to your profile tab in the app and toggle "Creator Mode" to unlock your basic studio. To join our official Revenue Sharing program, you can easily submit an application to the waitlist on this site or from inside the app.'
  },
  {
    question: 'How does monetization work?',
    answer: 'Unlike legacy platforms that hoard advertising revenue, XNORA allocates up to 80% of high-yield advertising proceeds back to creators whose content generates the views. In addition, you can monetize via premium direct subscription channels, member-only communities, and digital tipping during streams.'
  },
  {
    question: 'How do withdrawals work?',
    answer: 'Your view payouts and tips accrue directly in your built-in self-custodial XNORA Wallet in verified USDT stablecoin. You can instantly withdraw your balances to any compatible public ERC-20, BEP-20, or Solana blockchain address with minimal platform fees, or trade them inside the secure swapper.'
  },
  {
    question: 'How do I report abuse?',
    answer: 'We prioritize a safe environment. You can report posts, comments, direct messages, or entire profiles directly inside the app by clicking the triple dot "Report" icon. Reports are immediately audited by our AI safety agents and reviewed by human moderators within 15 minutes.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. XNORA implements zero-knowledge encryption protocols for direct chats, voice calling, and group circles. We do not sell user data or profiles to advertisers. All telemetry data is stored on decentralized secure networks, and your wallet private keys never leave your local device.'
  },
  {
    question: 'How do Premium subscriptions work?',
    answer: 'Premium users enjoy ad-free viewing, higher-resolution live video uploads, double revenue multiplier shares, special exclusive neon profile frames, and complimentary Gemini AI tokens to run advanced creation prompts. Premium tiers can be activated via in-app purchases or stablecoins.'
  }
];

export const COMMUNITY_GUIDELINES: CommunityGuidelineItem[] = [
  {
    id: 'respect',
    title: 'Respect Other Users',
    description: 'Foster positive connections. Engage with empathy, accept diverse perspectives, and constructively interact without malicious intentions.',
    impact: 'Strictly Enforced'
  },
  {
    id: 'hate-speech',
    title: 'No Hate Speech',
    description: 'We do not tolerate discrimination based on race, ethnicity, nationality, religion, sexual orientation, physical capability, or gender identity.',
    impact: 'Zero Tolerance'
  },
  {
    id: 'harassment',
    title: 'No Harassment & Bullying',
    description: 'Avoid targeted abuse, cyberbullying, doxxing, stalking, or sending unsolicited inappropriate multimedia contents to other users.',
    impact: 'Permanent Ban'
  },
  {
    id: 'illegal-content',
    title: 'No Illegal Content or Activities',
    description: 'Do not promote, coordinate, display, or sell illegal goods, controlled substances, black-market products, or organize fraudulent physical operations.',
    impact: 'Legal Referral'
  },
  {
    id: 'copyright',
    title: 'No Copyright Infringement',
    description: 'Upload content you created or have explicit legal rights to distribute. Respect digital artists, brands, and music licenses.',
    impact: 'Automatic DMCA'
  },
  {
    id: 'safety',
    title: 'Keep the Community Safe',
    description: 'Do not post self-harm material, severe physical violence, dangerous stunts, extreme physical dangers, or fake emergency announcements.',
    impact: 'AI Active Guard'
  },
  {
    id: 'children',
    title: 'Protect Children & Vulnerable Groups',
    description: 'Our platform maintains rigorous, multi-layered protocols to prevent child sexual exploitation, abuse, grooming, or child labor promotion.',
    impact: 'Immediate Federal Escalation'
  },
  {
    id: 'reporting',
    title: 'Report Harmful Content Active-duty',
    description: 'We encourage citizens of the XNORA Verse to act as community wardens. Flag violations immediately for immediate AI and moderator sweeps.',
    impact: 'Community Reward Points'
  }
];

export const SUPPORT_LINKS: SupportLinkGroup[] = [
  {
    title: 'Help Center',
    links: [
      { label: 'Platform FAQs', href: '#faq' },
      { label: 'Security Center', href: '#support' },
      { label: 'Creator Manual', href: '#creator' },
      { label: 'Wallet Troubleshooting', href: '#support' }
    ]
  },
  {
    title: 'Legal & Policies',
    links: [
      { label: 'Privacy Policy', href: '#support' },
      { label: 'Terms of Service', href: '#support' },
      { label: 'Cookie Policy', href: '#support' },
      { label: 'Community Guidelines', href: '#guidelines' }
    ]
  },
  {
    title: 'Support Desk',
    links: [
      { label: 'Contact Support', href: '#support' },
      { label: 'Report a Bug', href: '#support' },
      { label: 'API Documentation', href: '#support' },
      { label: 'Status: 99.99% Online', href: '#' }
    ]
  }
];
