import React, { useState } from 'react';
import { FEATURES } from '../data';
import { FeatureItem } from '../types';
import * as Icons from 'lucide-react';

interface FeaturesProps {
  isDarkMode: boolean;
}

export default function Features({ isDarkMode }: FeaturesProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'social' | 'creator' | 'system' | 'wallet'>('all');

  const categories = [
    { id: 'all', label: 'All Ecosystem' },
    { id: 'social', label: 'Social Circles' },
    { id: 'creator', label: 'Creator Studio' },
    { id: 'system', label: 'Mesh Core' },
    { id: 'wallet', label: 'Web3 Wallet' }
  ];

  const filteredFeatures = selectedCategory === 'all'
    ? FEATURES
    : FEATURES.filter(f => f.category === selectedCategory);

  // Helper to render Lucide Icons dynamically
  const renderIcon = (iconName: string, className: string) => {
    // Lookup icon from lucide-react export
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.HelpCircle className={className} />;
  };

  return (
    <section
      id="features"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-600/5 dark:bg-indigo-600/10 aurora-blur-subtle -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-mono font-semibold text-purple-600 dark:text-purple-300">
            <span>UNMATCHED PLATFORM CAPABILITIES</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Designed for the Next Generation of{' '}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-cyan-400">
              Digital Interaction.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            XNORA Verse provides a unified suite of modern tools that give power back to you. Own your messages, stream live, and access high-end creator utilities.
          </p>

          {/* Dynamic Filter Controls */}
          <div className="pt-6 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/10 scale-105'
                    : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFeatures.map((feat) => {
            // Give specific cards different background accents based on category
            const isWallet = feat.category === 'wallet';
            const isAI = feat.id === 'ai-assistant';
            const isPro = feat.id === 'creator-dashboard';

            return (
              <div
                key={feat.id}
                id={`feature-card-${feat.id}`}
                className={`relative p-6 sm:p-8 rounded-3xl transition-all duration-300 group hover:-translate-y-1 ${
                  isDarkMode ? 'glass-card-dark' : 'glass-card-light'
                } ${
                  isWallet ? 'hover:shadow-cyan-500/10 hover:border-cyan-500/20' : 
                  isAI ? 'hover:shadow-purple-500/10 hover:border-purple-500/20' :
                  'hover:shadow-indigo-500/10 hover:border-indigo-500/20'
                }`}
              >
                {/* Visual Glow elements for cards */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-cyan-500/0 to-indigo-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex justify-between items-start mb-5 relative">
                  {/* Icon Frame */}
                  <div className={`p-3.5 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    isWallet ? 'bg-cyan-500/10 text-cyan-500' :
                    isAI ? 'bg-purple-500/10 text-purple-500' :
                    isPro ? 'bg-indigo-500/10 text-indigo-500' : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                  }`}>
                    {renderIcon(feat.iconName, "w-6 h-6")}
                  </div>

                  {/* Card Badge */}
                  {feat.badge && (
                    <span className={`text-[9px] font-mono tracking-wider font-extrabold uppercase px-2 py-1 rounded-md ${
                      isWallet ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
                      isAI ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                      'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                    }`}>
                      {feat.badge}
                    </span>
                  )}
                </div>

                {/* Card Title & Desc */}
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white mb-2.5 tracking-tight group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feat.description}
                </p>

                {/* Decorative bottom corner anchor */}
                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-40 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <Icons.ArrowUpRight className="w-5 h-5 text-purple-500 dark:text-cyan-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
