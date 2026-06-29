import React, { useState } from 'react';
import { Sparkles, Brain, Code, Globe, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface AiSectionProps {
  isDarkMode: boolean;
}

export default function AiSection({ isDarkMode }: AiSectionProps) {
  const [activePromptIndex, setActivePromptIndex] = useState(0);

  const prompts = [
    {
      title: "Write Vertical Script",
      input: "Draft an engaging 30-second vertical video script introducing zero-knowledge chat routing.",
      output: "[Scene: Neon room, phone glows]\n'Hey hackers! 🌐 Ever wanted to text someone next to you, with zero internet or cellular bars? XNORA uses Bluetooth mesh networks to bounce messages peer-to-peer, keeping your chat 100% private and zero-knowledge encrypted. Watch this (+0.05 USDT earned!)' 🚀"
    },
    {
      title: "Audit Swap Contract",
      input: "Audit the local wallet swap gas fee reduction routing protocol.",
      output: "[Audit Node: SUCCESS]\n- Target Protocol: Gasless Swapper v2.0\n- Status: 100% Secure • Fully Verified\n- Optimization: Reduced call costs by 42% utilizing off-chain zero-knowledge telemetry. Secure node deployment confirmed."
    },
    {
      title: "Translate Livestream",
      input: "Translate English stream audio transcript to Spanish and Japanese in real-time.",
      output: "Original: 'Welcome to our Web3 broadcast, let's swap some USDT!'\n\n🇪🇸 Spanish: '¡Bienvenidos a nuestra transmisión Web3, intercambiemos algunos USDT!'\n🇯🇵 Japanese: 'Web3配信へようこそ！USDTをスワップしましょう！'"
    }
  ];

  return (
    <section
      id="ai-features"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Aurora Ambient Elements */}
      <div className="absolute top-1/3 left-1/10 w-[300px] h-[300px] rounded-full bg-purple-600/10 aurora-blur -z-10"></div>
      <div className="absolute bottom-1/3 right-1/10 w-[300px] h-[300px] rounded-full bg-cyan-600/10 aurora-blur -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-mono font-semibold text-purple-600 dark:text-purple-300">
            <span>COOPERATIVE ARTIFICIAL INTELLIGENCE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Supercharge Creativity with{' '}
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-cyan-400">
              XNORA Gemini AI Copilot.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Built directly into the core ecosystem, our advanced AI assistant helps creators generate scripts, translate languages dynamically, and audit code transactions.
          </p>
        </div>

        {/* Content Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side AI Capabilities grid */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              An AI Companion Engineered for Web3 Citizens.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              XNORA Verse isn't just a place to watch videos—it is an intelligent creation engine. We leverage advanced Google Gemini models server-side to unlock enterprise-grade utilities for every active creator.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex space-x-4">
                <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-300 h-12 w-12 flex items-center justify-center shrink-0">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">Smart Scripting & Ideation</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                    Instantly draft highly structured vertical video scripts, tags, captions, and thumbnails formatted to maximize view engagement.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-500 h-12 w-12 flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">Real-Time Subtitle Translation</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                    Break downstream communication barriers. Automatically translate live stream speech transcripts into over forty languages on the fly.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-500 h-12 w-12 flex items-center justify-center shrink-0">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">Smart Contract & Security Auditing</h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                    Scan blockchain transactions and local wallet routes to guarantee zero-knowledge encryption compliance and complete fund security.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side Live Interactive Prompt Simulator Card */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div
              className={`p-6 sm:p-8 rounded-3xl text-left relative overflow-hidden ${
                isDarkMode ? 'glass-card-dark' : 'glass-card-light'
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">
                  GEMINI INTERACTIVE RUNTIME
                </span>
                <span className="text-xs font-mono font-bold text-purple-600 dark:text-cyan-400 flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse mr-1" />
                  <span>XNORA-AI-v2</span>
                </span>
              </div>

              {/* Selector Tabs */}
              <div className="flex space-x-1 border-b border-slate-200 dark:border-slate-800 pb-3 mb-5 overflow-x-auto no-scrollbar">
                {prompts.map((p, idx) => (
                  <button
                    key={p.title}
                    onClick={() => setActivePromptIndex(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all shrink-0 ${
                      activePromptIndex === idx
                        ? 'bg-purple-600 text-white shadow'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                    }`}
                  >
                    {p.title}
                  </button>
                ))}
              </div>

              {/* Input section */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">SAMPLE USER PROMPT</span>
                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    {prompts[activePromptIndex].input}
                  </div>
                </div>

                {/* Simulated Stream Output Section */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">XNORA-AI STREAM OUTPUT</span>
                  <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/10 text-xs font-mono text-slate-800 dark:text-slate-200 min-h-[140px] whitespace-pre-wrap leading-relaxed relative">
                    <div className="absolute top-3 right-3">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    </div>
                    {prompts[activePromptIndex].output}
                  </div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-6 mt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                <span>Core: Gemini 2.5 Flash API</span>
                <span>Audit: 100% Certified Safe</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
