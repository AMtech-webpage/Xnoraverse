export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to look up the Lucide icon dynamically
  category: 'social' | 'creator' | 'system' | 'wallet';
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ScreenshotMockup {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  screenType: 'splash' | 'feed' | 'shorts' | 'chat' | 'wallet' | 'profile' | 'creator' | 'live' | 'ai' | 'settings';
  previewBg: string; // Gradient background for mockup simulation
}

export interface SupportLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface CommunityGuidelineItem {
  id: string;
  title: string;
  description: string;
  impact: string;
}
