import React, { useState, useRef, useEffect } from 'react';
import { SCREENSHOT_MOCKUPS } from '../data';
import { ScreenshotMockup } from '../types';
import { ChevronLeft, ChevronRight, Play, Sparkles, MessageSquare, Wallet, User, LayoutDashboard, Tv, ShieldAlert, Cpu, Settings, Smartphone } from 'lucide-react';

interface ScreenshotsProps {
  isDarkMode: boolean;
}

export default function Screenshots({ isDarkMode }: ScreenshotsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = SCREENSHOT_MOCKUPS.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const activeMockup = SCREENSHOT_MOCKUPS[activeIndex];

  // Map screen icon for list buttons
  const getScreenIcon = (type: string, className: string) => {
    switch (type) {
      case 'splash': return <Smartphone className={className} />;
      case 'feed': return <Tv className={className} />;
      case 'shorts': return <Play className={className} />;
      case 'chat': return <MessageSquare className={className} />;
      case 'wallet': return <Wallet className={className} />;
      case 'profile': return <User className={className} />;
      case 'creator': return <LayoutDashboard className={className} />;
      case 'live': return <Tv className={className} />;
      case 'ai': return <Sparkles className={className} />;
      case 'settings': return <Settings className={className} />;
      default: return <Smartphone className={className} />;
    }
  };

  // Render a detailed custom mock UI representation for each slide inside the container
  const renderMockUiInsideCarousel = (type: string) => {
    switch (type) {
      case 'splash':
        return (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="font-display font-black text-white text-4xl">XV</span>
            </div>
            <div className="text-center">
              <h4 className="font-display font-bold text-2xl text-white">XNORA Verse</h4>
              <p className="text-xs text-slate-400 font-mono tracking-widest uppercase mt-1">THE CYBER SOCIAL ECOSYSTEM</p>
            </div>
          </div>
        );
      case 'feed':
        return (
          <div className="flex-1 flex flex-col space-y-3 pt-4 text-left px-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Latest Feed</span>
              <span className="text-[10px] text-emerald-400 font-mono font-bold">● ONLINE</span>
            </div>
            <div className="space-y-2">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                  <span className="text-xs font-bold text-white">Alice.eth</span>
                </div>
                <p className="text-[11px] text-slate-300">Just swapped my creator earnings from today. 140 USDT instantly transferred. Gasless swaps are legendary! 🚀</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-cyan-500"></div>
                  <span className="text-xs font-bold text-white">CryptoBlogger</span>
                </div>
                <p className="text-[11px] text-slate-300">Testing out the nearby Bluetooth chat. Walked into the server room, internet was down, still texted easily!</p>
              </div>
            </div>
          </div>
        );
      case 'shorts':
        return (
          <div className="flex-1 flex flex-col justify-end pb-4 text-left px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-14 h-14 rounded-full bg-purple-600/20 border-2 border-purple-500 flex items-center justify-center">
                <Play className="w-6 h-6 text-purple-400 fill-purple-400/20 ml-0.5" />
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-white">@cyber_vandal</span>
              <p className="text-[11px] text-slate-300">Riding the maglev through the virtual neon sprawl. #metaverse #cyberpunk #xnora</p>
              <span className="inline-block text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-mono font-semibold">+0.05 USDT views pending</span>
            </div>
          </div>
        );
      case 'chat':
        return (
          <div className="flex-1 flex flex-col justify-between py-4 text-left px-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-xs font-bold text-white">Encrypted Direct: Jack</span>
              <span className="text-[9px] text-purple-400 bg-purple-400/10 px-1.5 rounded font-mono uppercase">ZKP SECURE</span>
            </div>
            <div className="space-y-2 overflow-y-auto no-scrollbar py-2 flex-1">
              <div className="p-2.5 rounded-2xl bg-white/5 border border-white/5 text-[11px] text-slate-200 max-w-[80%] rounded-tl-none">
                Hey, did you get the private key files I broadcasted over Bluetooth?
              </div>
              <div className="p-2.5 rounded-2xl bg-purple-600 text-white text-[11px] max-w-[80%] rounded-tr-none ml-auto">
                Yes! Decentralized mesh routing successfully resolved it. Chatting completely offline!
              </div>
            </div>
            <div className="h-8 rounded-xl bg-white/5 border border-white/10 flex items-center px-2 text-[10px] text-slate-500">
              Message fully encrypted...
            </div>
          </div>
        );
      case 'wallet':
        return (
          <div className="flex-1 flex flex-col space-y-4 pt-4 text-left px-4">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md">
              <span className="text-[9px] font-mono tracking-wider text-cyan-100 uppercase">XNORA BIO-WALLET</span>
              <div className="text-xl font-bold font-display text-white mt-2">842.1095 USDT</div>
              <span className="text-[9px] text-cyan-200 font-mono">≈ $842.11 USD • Gasless Swaps On</span>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Supported Swaps</span>
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white">USDT • ERC20</div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white">USDC • SOL</div>
              </div>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="flex-1 flex flex-col items-center pt-6 text-center px-4">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/profile8/120/120"
                alt="profile"
                className="w-16 h-16 rounded-full border-2 border-purple-500 p-0.5"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-0 right-0 w-4.5 h-4.5 rounded-full bg-purple-600 flex items-center justify-center text-[10px] text-white font-extrabold border border-slate-950">✓</span>
            </div>
            <h4 className="font-display font-bold text-white text-base mt-2">Satoshi.xn</h4>
            <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-widest mt-0.5">ELITE CREATOR</span>
            
            <div className="grid grid-cols-2 gap-3 w-full mt-4">
              <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[9px] font-mono text-slate-500 block">CREATIONS</span>
                <span className="text-sm font-bold text-white mt-1">142</span>
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[9px] font-mono text-slate-500 block">SUBSCRIBERS</span>
                <span className="text-sm font-bold text-white mt-1">42.9k</span>
              </div>
            </div>
          </div>
        );
      case 'creator':
        return (
          <div className="flex-1 flex flex-col space-y-3 pt-4 text-left px-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-1">
              <span className="text-xs font-bold text-white">Revenue Studio</span>
              <span className="text-[9px] text-purple-400 font-mono font-bold">NODE #204</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[9px] text-slate-400 block">STABILITY</span>
                <span className="text-xs font-bold text-emerald-400 mt-1">99.98%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[9px] text-slate-400 block">AD SHARE</span>
                <span className="text-xs font-bold text-white mt-1">80.00%</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
              <span className="text-[9px] text-slate-500">REALTIME CPM PAYOUT ENGINE</span>
              <div className="h-10 flex items-end space-x-2.5 pt-2">
                <div className="w-full bg-purple-500 h-4 rounded"></div>
                <div className="w-full bg-cyan-400 h-8 rounded animate-pulse"></div>
                <div className="w-full bg-indigo-500 h-6 rounded"></div>
                <div className="w-full bg-purple-400 h-10 rounded"></div>
              </div>
            </div>
          </div>
        );
      case 'live':
        return (
          <div className="flex-1 flex flex-col justify-between py-4 text-left px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-rose-950/20 -z-10"></div>
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] bg-red-600 text-white font-extrabold px-2 py-0.5 rounded font-mono uppercase tracking-widest animate-pulse">● LIVE</span>
              <span className="text-[10px] bg-black/40 text-slate-300 px-1.5 py-0.5 rounded font-mono">1.2k Viewers</span>
            </div>
            
            <div className="space-y-1.5 mt-auto z-10">
              <div className="p-2 rounded-xl bg-black/40 backdrop-blur-sm text-[10px] text-slate-200">
                <strong className="text-cyan-400">Lucas_art:</strong> This stream resolution is insane. Low latency tipping makes it so seamless.
              </div>
              <div className="p-1.5 rounded-xl bg-emerald-500/20 backdrop-blur-sm text-[9px] text-emerald-400 border border-emerald-500/30 flex items-center space-x-1">
                <span>💰</span>
                <span><strong>Sophia.eth</strong> tipped <strong>5.00 USDT</strong></span>
              </div>
            </div>
          </div>
        );
      case 'ai':
        return (
          <div className="flex-1 flex flex-col space-y-3 pt-4 text-left px-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-1">
              <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>Gemini Core</span>
              </span>
              <span className="text-[9px] bg-cyan-500/10 text-cyan-400 px-1.5 rounded font-mono">ACTIVE</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
              <span className="text-[9px] text-slate-500 uppercase font-mono tracking-wider">USER PROMPT</span>
              <p className="text-[11px] text-slate-300 font-medium">Generate a futuristic cyberpunk script for my shorts video</p>
            </div>
            <div className="p-3 rounded-xl bg-purple-600/10 border border-purple-500/20 space-y-1.5">
              <span className="text-[9px] text-purple-400 uppercase font-mono tracking-wider font-extrabold">GEMINI GENERATION</span>
              <p className="text-[11px] text-slate-200 italic leading-relaxed">"The terminal glows. 80% of rewards are mine, as XNORA Verse transforms the grid..."</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="flex-1 flex flex-col space-y-3 pt-4 text-left px-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">App Settings</span>
            <div className="space-y-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center text-xs text-white">
                <span>Mesh Networking</span>
                <span className="text-[10px] text-cyan-400 font-bold uppercase font-mono">ENABLED</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center text-xs text-white">
                <span>Ad Revenue Split</span>
                <span className="text-[10px] text-purple-400 font-bold uppercase font-mono">80% USER SHARE</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center text-xs text-white">
                <span>Zero Knowledge Encryption</span>
                <span className="text-[10px] text-emerald-400 font-bold uppercase font-mono">MAX ACTIVE</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-mono font-semibold text-purple-600 dark:text-purple-300">
            <span>HIGH FIDELITY MOCKUP PREVIEWS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Ecosystem Live{' '}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-cyan-400">
              Walkthrough Previews.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Slide through the custom interfaces designed to keep operations ultra-slick, completely encrypted, and aligned to deliver immediate USDT earnings.
          </p>
        </div>

        {/* Carousel Housing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Screen Directory Links */}
          <div className="lg:col-span-4 flex flex-col space-y-2 order-2 lg:order-1">
            {SCREENSHOT_MOCKUPS.map((mock, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={mock.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center space-x-3 px-5 py-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/10 scale-[1.02]'
                      : 'bg-slate-100 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-purple-600 dark:text-cyan-400'
                  }`}>
                    {getScreenIcon(mock.screenType, "w-4 h-4")}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider leading-none">
                      {mock.title}
                    </div>
                    <div className={`text-[10px] font-sans mt-0.5 ${isActive ? 'text-purple-200' : 'text-slate-500 dark:text-slate-400'}`}>
                      {mock.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column Core Simulator Slide display */}
          <div className="lg:col-span-8 flex flex-col items-center order-1 lg:order-2">
            
            <div className="relative w-full max-w-md">
              
              {/* Previous Slide Indicator overlay button */}
              <button
                onClick={handlePrev}
                className="absolute left-[-20px] sm:left-[-35px] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 shadow-md active:scale-90 transition-all cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Slide Indicator overlay button */}
              <button
                onClick={handleNext}
                className="absolute right-[-20px] sm:right-[-35px] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 shadow-md active:scale-90 transition-all cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Main Simulated Tablet device frame */}
              <div
                className={`w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl border-[8px] border-slate-900 bg-slate-950 p-4 transition-all duration-500 relative flex flex-col shadow-2xl overflow-hidden ring-4 ring-purple-500/10`}
              >
                {/* Simulated inner content layout screen */}
                <div className={`flex-1 rounded-2xl bg-gradient-to-br ${activeMockup.previewBg} p-4.5 flex flex-col overflow-hidden relative border border-white/5`}>
                  
                  {/* Backdrop glowing sphere */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-purple-500/10 blur-xl animate-pulse-glow"></div>
                  
                  {renderMockUiInsideCarousel(activeMockup.screenType)}

                </div>

                {/* Simulated device bottom pill bar */}
                <div className="w-20 h-1 bg-slate-800 rounded-full mx-auto mt-2 shrink-0"></div>
              </div>

              {/* Slide Meta Copy indicator */}
              <div className="mt-6 text-center space-y-1">
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-purple-500/15 text-[10px] font-mono font-bold text-purple-600 dark:text-cyan-400 uppercase tracking-widest">
                  SCREENSHOT {activeIndex + 1} OF {totalSlides}
                </span>
                <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mt-1.5">
                  {activeMockup.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  {activeMockup.tagline}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
