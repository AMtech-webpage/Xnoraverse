import React, { useState, useEffect } from 'react';
import { ArrowRight, QrCode, Play, Smartphone, Wifi, Battery, Sparkles, Heart, MessageSquare, Send, Wallet, RefreshCw, Layers, ShieldCheck } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  // Simulator states: 'splash' | 'feed' | 'shorts' | 'wallet' | 'ai'
  const [activeScreen, setActiveScreen] = useState<'splash' | 'feed' | 'shorts' | 'wallet' | 'ai'>('splash');
  const [phoneTime, setPhoneTime] = useState('09:41');
  const [usdtBalance, setUsdtBalance] = useState(142.8095);
  const [aiInput, setAiInput] = useState('');
  const [aiMessages, setAiMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    { sender: 'ai', text: 'Hello! I am XNORA AI Copilot. How can I accelerate your creation today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [shortsLikes, setShortsLikes] = useState(1204);
  const [isLiked, setIsLiked] = useState(false);

  // Update simulator time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      setPhoneTime(`${hrs}:${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  // Handle ad view mock action in phone simulator
  const triggerWatchAd = () => {
    setUsdtBalance((prev) => +(prev + 0.05).toFixed(4));
    alert("Simulator Action: +0.05 USDT successfully accrued to your integrated wallet balance!");
  };

  // Simulate AI Response stream
  const triggerAiQuery = (prompt: string) => {
    if (!prompt.trim() || isTyping) return;
    setAiMessages((prev) => [...prev, { sender: 'user', text: prompt }]);
    setAiInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      if (prompt.toLowerCase().includes('earn')) {
        reply = 'On XNORA, 80% of ad revenue is deposited in real-time USDT into your built-in wallet. Tap watch ads to test!';
      } else if (prompt.toLowerCase().includes('script')) {
        reply = 'Sure! "Hey Guys! Welcome back to my XNORA hub. Today, we are exploring decentralized mesh message transfers..."';
      } else {
        reply = 'XNORA Verse supports high FPS streams, Bluetooth offline mesh chat, and real-time USDT payments. Try exploring the tabs!';
      }
      setAiMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Aurora Ambient Blurred Elements */}
      <div className="absolute top-1/4 left-1/10 w-[350px] h-[350px] rounded-full bg-purple-600/20 dark:bg-purple-600/15 aurora-blur animate-pulse-glow -z-10"></div>
      <div className="absolute top-1/3 right-1/10 w-[400px] h-[400px] rounded-full bg-cyan-500/25 dark:bg-cyan-500/15 aurora-blur animate-pulse-glow -z-10" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Copy Side */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            
            {/* Logo Badge & Sparkles */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-600 dark:text-purple-300 font-mono text-xs font-semibold uppercase tracking-wider glow-purple">
                <Sparkles className="w-4 h-4 text-purple-500 dark:text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
                <span>MEET THE FUTURE SOCIAL ECOSYSTEM</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Connect. Create.<br className="hidden sm:block" /> Learn.{' '}
              <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-cyan-400">
                Earn Real Crypto.
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              Welcome to <strong className="font-semibold text-purple-600 dark:text-cyan-400">XNORA Verse</strong>, the next-generation social media platform. Watch immersive short clips, communicate with secure zero-knowledge mesh messaging, and earn verified USDT daily. <strong>You keep 80% of ad revenue</strong>. Platform takes just 20%.
            </p>

            {/* CTA Buttons - Two Prominent Download badges + QR code */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              
              {/* Apple App Store Badge */}
              <a
                href="#download"
                className="flex items-center space-x-3 w-full sm:w-auto px-6 py-3 rounded-2xl bg-black border border-slate-800 text-white hover:border-slate-600 transition-all shadow-md group active:scale-95"
              >
                <svg className="w-7 h-7 fill-white group-hover:scale-105 transition-transform" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-46-19.1-73.5-19.1-36.5 0-71.1 21-89.9 54-38.8 67.9-10 167.6 27.5 222.1 18.4 26.5 40.1 56 68.6 55.1 27.1-1 37.3-17.4 69.9-17.4 32.2 0 41.9 17.4 69.9 16.8 28.6-.5 47.9-26.5 66.2-53.1 21.3-31.1 30-61.2 30.4-62.8-1.1-.5-58.5-22.6-59-88.8zM294.9 84.4c15.4-18.6 25.8-44.1 22.9-69.4-21.8 1-48.4 14.8-64 32.8-13.8 15.6-25.8 41.6-22.5 66.4 24.2 1.8 48.7-11.2 63.6-29.8z"/>
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Download on the</div>
                  <div className="text-sm font-semibold font-sans mt-0.5">App Store</div>
                </div>
              </a>

              {/* Google Play Store Badge */}
              <a
                href="#download"
                className="flex items-center space-x-3 w-full sm:w-auto px-6 py-3 rounded-2xl bg-black border border-slate-800 text-white hover:border-slate-600 transition-all shadow-md group active:scale-95"
              >
                <svg className="w-7 h-7 fill-white group-hover:scale-105 transition-transform" viewBox="0 0 512 512">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3 60.1 60.1c43-24.3 43-69.2-2.1-93.4zM385.4 337.5L104.6 499l220.7-126.7 60.1-60.1-115-74.7z"/>
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Get it on</div>
                  <div className="text-sm font-semibold font-sans mt-0.5">Google Play</div>
                </div>
              </a>

            </div>

            {/* Quick Stats Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/50 dark:border-slate-800/50 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-display font-extrabold text-purple-600 dark:text-cyan-400">20M+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-mono mt-1 tracking-wider">Global Users</div>
              </div>
              <div className="text-center lg:text-left border-x border-slate-200/60 dark:border-slate-800/60 px-2">
                <div className="text-2xl md:text-3xl font-display font-extrabold text-purple-600 dark:text-cyan-400">$45M+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-mono mt-1 tracking-wider">USDT Paid</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-display font-extrabold text-purple-600 dark:text-cyan-400">4.8★</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-mono mt-1 tracking-wider">Community Rating</div>
              </div>
            </div>

          </div>

          {/* Right Smartphone Mockup Side */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Interactive Mockup Controller */}
            <div className="mb-4 flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800/80 shadow-md">
              {(['splash', 'feed', 'shorts', 'wallet', 'ai'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveScreen(tab)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    activeScreen === tab
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/10'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Smartphone Outer Housing with Neon Ring Glow */}
            <div
              id="smartphone-mockup"
              className={`relative w-[320px] h-[640px] rounded-[48px] border-[10px] border-slate-900 bg-slate-950 p-2.5 transition-all duration-500 ${
                activeScreen === 'wallet' ? 'glow-cyan ring-4 ring-cyan-500/20' : 
                activeScreen === 'ai' ? 'glow-purple ring-4 ring-purple-500/20' :
                activeScreen === 'shorts' ? 'ring-4 ring-indigo-500/20' : 'ring-4 ring-slate-800/25'
              } shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]`}
            >
              
              {/* Dynamic Notch / Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 rounded-full bg-slate-900 z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-850 mr-1.5 border border-slate-900"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-850"></div>
              </div>

              {/* Volume & Sleep Side Buttons (Visual decoration) */}
              <div className="absolute -left-3 top-24 w-1 h-12 rounded-r-lg bg-slate-800 border-r border-slate-900"></div>
              <div className="absolute -left-3 top-40 w-1 h-12 rounded-r-lg bg-slate-800 border-r border-slate-900"></div>
              <div className="absolute -right-3 top-32 w-1 h-16 rounded-l-lg bg-slate-800 border-l border-slate-900"></div>

              {/* Screen Content Wrapper */}
              <div className="w-full h-full rounded-[38px] overflow-hidden relative select-none flex flex-col bg-slate-950 border border-slate-800/40 text-white">
                
                {/* Simulated Screen Header Bar */}
                <div className="flex justify-between items-center px-6 pt-3 pb-1.5 text-[11px] font-semibold text-slate-400 font-mono z-20">
                  <span>{phoneTime}</span>
                  <div className="flex items-center space-x-1.5">
                    <Wifi className="w-3.5 h-3.5" />
                    <span className="text-[9px] bg-cyan-500/20 text-cyan-400 px-1 rounded font-bold uppercase tracking-wide">5G</span>
                    <Battery className="w-4 h-4" />
                  </div>
                </div>

                {/* ACTIVE SIMULATOR CONTENT */}
                <div className="flex-1 flex flex-col overflow-hidden px-4 relative">
                  
                  {/* SCREEN 1: SPLASH */}
                  {activeScreen === 'splash' && (
                    <div className="flex-1 flex flex-col justify-between py-10 text-center animate-in fade-in zoom-in-95 duration-200">
                      <div></div>
                      <div className="flex flex-col items-center">
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-purple-500/30 animate-float">
                          <span className="font-display font-black text-white text-3xl tracking-tighter">XV</span>
                        </div>
                        <h3 className="font-display font-extrabold text-2xl mt-4 tracking-tight">XNORA Verse</h3>
                        <p className="text-xs text-purple-300 font-medium tracking-widest uppercase mt-1">Connect. Create. Earn.</p>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-[10px] text-slate-500 font-mono">Loading decentralized feed...</span>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 2: HOME FEED */}
                  {activeScreen === 'feed' && (
                    <div className="flex-1 flex flex-col space-y-3 pt-2 overflow-y-auto animate-in fade-in duration-200 no-scrollbar">
                      {/* Feed Top Navigation */}
                      <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                        <span className="font-display font-bold text-sm">Explore Feed</span>
                        <span className="text-[9px] text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded font-mono font-semibold">● SECURE NODE</span>
                      </div>

                      {/* Feed Post 1 */}
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/60 flex flex-col space-y-2 text-left">
                        <div className="flex items-center space-x-2">
                          <img
                            src="https://picsum.photos/seed/cyber1/80/80"
                            alt="avatar"
                            className="w-7 h-7 rounded-full border border-purple-500"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="text-xs font-bold flex items-center space-x-1">
                              <span>Aria.eth</span>
                              <span className="text-[8px] bg-purple-500 text-white px-1 py-0.2 rounded uppercase font-bold tracking-tight">PRO</span>
                            </div>
                            <span className="text-[9px] text-slate-500 font-mono">10m ago via Bluetooth</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Just launched my tokenized VIP channel on XNORA! Holding 10 XV tokens gets you access to exclusive AI art workshops. 🎨🚀
                        </p>
                        <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pt-1">
                          <span className="flex items-center space-x-1 hover:text-red-400 cursor-pointer">
                            <Heart className="w-3.5 h-3.5" /> <span>3.2k</span>
                          </span>
                          <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[9px] font-bold">
                            +0.05 USDT earned
                          </span>
                        </div>
                      </div>

                      {/* Feed Post 2 */}
                      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/60 flex flex-col space-y-2 text-left">
                        <div className="flex items-center space-x-2">
                          <img
                            src="https://picsum.photos/seed/cyber2/80/80"
                            alt="avatar"
                            className="w-7 h-7 rounded-full border border-cyan-400"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="text-xs font-bold flex items-center space-x-1">
                              <span>Zephyr.xn</span>
                              <span className="text-[8px] bg-cyan-500 text-black px-1 py-0.2 rounded uppercase font-bold tracking-tight">AI DEV</span>
                            </div>
                            <span className="text-[9px] text-slate-500 font-mono">2h ago</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          XNORA AI Gemini Integration is insanely fast. I just summarized an hour-long dev stream down into 3 simple slides!
                        </p>
                        <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pt-1">
                          <span className="flex items-center space-x-1">
                            <Heart className="w-3.5 h-3.5" /> <span>892</span>
                          </span>
                          <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[9px] font-bold">
                            +0.05 USDT earned
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 3: SHORTS PLAYER */}
                  {activeScreen === 'shorts' && (
                    <div className="flex-1 flex flex-col justify-end pb-3 relative overflow-hidden animate-in fade-in duration-200">
                      
                      {/* Interactive Simulated Video background */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/20 to-slate-950 -z-10 flex flex-col items-center justify-center">
                        <div className="w-20 h-20 rounded-full border-4 border-dashed border-indigo-500/20 animate-spin flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full border border-indigo-400/30 flex items-center justify-center">
                            <Play className="w-5 h-5 text-indigo-400 fill-indigo-400/30 ml-0.5" />
                          </div>
                        </div>
                        <span className="text-[10px] text-indigo-300 font-mono mt-2 uppercase tracking-widest animate-pulse">Streaming Loop HD</span>
                      </div>

                      {/* Right Hand Video Action Controls overlay */}
                      <div className="absolute right-0 bottom-16 flex flex-col space-y-4 items-center z-20">
                        <button
                          onClick={() => {
                            setIsLiked(!isLiked);
                            setShortsLikes(isLiked ? shortsLikes - 1 : shortsLikes + 1);
                          }}
                          className="flex flex-col items-center group cursor-pointer"
                        >
                          <div className={`p-2 rounded-full border ${isLiked ? 'bg-red-500/20 border-red-500 text-red-500' : 'bg-slate-900/60 border-slate-700/60 text-white'} group-hover:scale-110 transition-transform`}>
                            <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500' : ''}`} />
                          </div>
                          <span className="text-[9px] font-semibold mt-1">{shortsLikes}</span>
                        </button>
                        
                        <div className="flex flex-col items-center">
                          <div className="p-2 rounded-full bg-slate-900/60 border border-slate-700/60 text-white">
                            <MessageSquare className="w-4 h-4" />
                          </div>
                          <span className="text-[9px] font-semibold mt-1">42</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="p-2 rounded-full bg-slate-900/60 border border-slate-700/60 text-white">
                            <Send className="w-4 h-4" />
                          </div>
                          <span className="text-[9px] font-semibold mt-1">Share</span>
                        </div>
                      </div>

                      {/* Bottom Info text */}
                      <div className="flex flex-col space-y-2.5 text-left pr-12">
                        <div className="flex items-center space-x-2">
                          <img
                            src="https://picsum.photos/seed/cyber3/80/80"
                            alt="avatar"
                            className="w-7 h-7 rounded-full border border-purple-500"
                            referrerPolicy="no-referrer"
                          />
                          <span className="text-xs font-bold">@neon_cyberpunk</span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          Tuning the new visual synth effects in our next-gen decentralized social metaverse! 🔥🙌 #web3 #xnora
                        </p>
                        
                        {/* Interactive Clickable Watch Ad button inside simulator */}
                        <button
                          onClick={triggerWatchAd}
                          className="flex items-center justify-center space-x-1.5 w-full py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-[10px] font-bold text-white shadow-lg shadow-emerald-500/20 animate-bounce cursor-pointer hover:opacity-90"
                        >
                          <Wallet className="w-3.5 h-3.5" />
                          <span>WATCH AD (+0.05 USDT)</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 4: CRYPTO WALLET */}
                  {activeScreen === 'wallet' && (
                    <div className="flex-1 flex flex-col space-y-4 pt-2 animate-in fade-in duration-200">
                      
                      {/* Premium card design */}
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 text-left relative overflow-hidden shadow-lg shadow-cyan-500/10">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[9px] uppercase tracking-widest text-cyan-100 font-mono">XNORA WALLET</span>
                            <h4 className="text-[10px] text-slate-200 mt-1 font-mono">ID: 0x2A9...eF5a</h4>
                          </div>
                          <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                            <Layers className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Balance display */}
                        <div className="mt-5">
                          <span className="text-[9px] text-cyan-200 font-mono">TOTAL ACCRUED BALANCE</span>
                          <div className="text-xl font-display font-black tracking-tight mt-0.5 text-white">
                            {usdtBalance.toFixed(4)} <span className="text-xs font-medium text-cyan-200">USDT</span>
                          </div>
                          <span className="text-[8px] text-cyan-100/70 font-mono block mt-0.5">≈ $142.81 USD</span>
                        </div>
                      </div>

                      {/* Simulated Action Links */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center cursor-pointer hover:bg-slate-800/80">
                          <Send className="w-3.5 h-3.5 text-cyan-400 mx-auto" />
                          <span className="text-[9px] font-semibold block mt-1">Send</span>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-center cursor-pointer hover:bg-slate-800/80">
                          <RefreshCw className="w-3.5 h-3.5 text-purple-400 mx-auto" />
                          <span className="text-[9px] font-semibold block mt-1">Swap</span>
                        </div>
                        <button
                          onClick={triggerWatchAd}
                          className="p-2 rounded-xl bg-slate-900 border border-slate-850 text-center cursor-pointer hover:bg-slate-800/80"
                        >
                          <span className="text-[10px] text-emerald-400 font-bold block">+0.05</span>
                          <span className="text-[9px] text-slate-400 font-semibold block mt-1">Earn Ad</span>
                        </button>
                      </div>

                      {/* Recent transactions list */}
                      <div className="text-left flex-1 overflow-y-auto no-scrollbar">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">Recent Transfers</span>
                        <div className="space-y-1.5">
                          <div className="flex justify-between items-center p-2 rounded-lg bg-slate-900/50 text-xs">
                            <span className="text-slate-300">Ad Revenue #238</span>
                            <span className="font-mono text-emerald-400 font-semibold">+0.0500 USDT</span>
                          </div>
                          <div className="flex justify-between items-center p-2 rounded-lg bg-slate-900/50 text-xs">
                            <span className="text-slate-300">Tips from Sophia.xn</span>
                            <span className="font-mono text-emerald-400 font-semibold">+5.5000 USDT</span>
                          </div>
                          <div className="flex justify-between items-center p-2 rounded-lg bg-slate-900/50 text-xs">
                            <span className="text-slate-300">Withdraw to External</span>
                            <span className="font-mono text-rose-400 font-semibold">-25.0000 USDT</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* SCREEN 5: AI COPILOT */}
                  {activeScreen === 'ai' && (
                    <div className="flex-1 flex flex-col justify-between pt-1 pb-2 animate-in fade-in duration-200 overflow-hidden">
                      
                      {/* AI Top info */}
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                        <div className="flex items-center space-x-1.5">
                          <Sparkles className="w-4 h-4 text-purple-400" />
                          <span className="text-xs font-bold font-display">XNORA Copilot</span>
                        </div>
                        <span className="text-[8px] bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded uppercase font-mono font-extrabold tracking-wider">
                          Gemini 2.5
                        </span>
                      </div>

                      {/* Chat Messages Frame */}
                      <div className="flex-1 overflow-y-auto space-y-2 text-left mb-2 no-scrollbar pr-1 text-[10px]">
                        {aiMessages.map((msg, i) => (
                          <div
                            key={i}
                            className={`p-2 rounded-xl leading-normal max-w-[85%] ${
                              msg.sender === 'user'
                                ? 'bg-purple-600 text-white ml-auto rounded-tr-none'
                                : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                            }`}
                          >
                            {msg.text}
                          </div>
                        ))}
                        {isTyping && (
                          <div className="bg-slate-900 border border-slate-800 p-2 rounded-xl rounded-tl-none text-slate-400 max-w-[50%] flex items-center space-x-1">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        )}
                      </div>

                      {/* Sample Prompts Toggles */}
                      <div className="flex space-x-1 pb-1.5 overflow-x-auto no-scrollbar">
                        <button
                          onClick={() => triggerAiQuery("How do I earn USDT?")}
                          className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[8px] text-purple-300 font-mono hover:bg-slate-800 shrink-0"
                        >
                          Earn USDT?
                        </button>
                        <button
                          onClick={() => triggerAiQuery("Draft video script")}
                          className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[8px] text-purple-300 font-mono hover:bg-slate-800 shrink-0"
                        >
                          Video Script
                        </button>
                        <button
                          onClick={() => triggerAiQuery("Platform features")}
                          className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[8px] text-purple-300 font-mono hover:bg-slate-800 shrink-0"
                        >
                          Features
                        </button>
                      </div>

                      {/* Chat Input Field */}
                      <div className="flex space-x-1 border-t border-slate-800 pt-1.5">
                        <input
                          type="text"
                          value={aiInput}
                          onChange={(e) => setAiInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') triggerAiQuery(aiInput);
                          }}
                          placeholder="Ask Copilot..."
                          className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-2 text-[10px] text-white focus:outline-none focus:border-purple-500"
                        />
                        <button
                          onClick={() => triggerAiQuery(aiInput)}
                          className="p-1.5 rounded-lg bg-purple-600 text-white hover:bg-purple-500 cursor-pointer"
                        >
                          <Send className="w-3 h-3" />
                        </button>
                      </div>

                    </div>
                  )}

                </div>

                {/* Home Indicator line bar */}
                <div className="w-24 h-1 bg-slate-800 rounded-full mx-auto mb-2 shrink-0"></div>
              </div>
            </div>

            {/* Simulated Live User Count / Security Assurance */}
            <div className="mt-4 flex items-center space-x-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/40 px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Tested & Audited Client • Installs Active</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
