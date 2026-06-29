import React from 'react';
import { COMMUNITY_GUIDELINES } from '../data';
import { Shield, ShieldAlert, CheckCircle, FlameKindling, Info, Hammer } from 'lucide-react';

interface GuidelinesProps {
  isDarkMode: boolean;
}

export default function GuidelinesSection({ isDarkMode }: GuidelinesProps) {

  // Return a contextual border or glow style for the impact level
  const getImpactBadgeStyle = (impact: string) => {
    switch (impact) {
      case 'Zero Tolerance':
        return 'bg-red-500/10 text-red-500 border border-red-500/20';
      case 'Permanent Ban':
        return 'bg-orange-500/10 text-orange-500 border border-orange-500/20';
      case 'Strictly Enforced':
        return 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
      case 'AI Active Guard':
        return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
      case 'Immediate Federal Escalation':
        return 'bg-rose-600 text-white font-black animate-pulse';
      default:
        return 'bg-slate-500/10 text-slate-400 border border-slate-500/20';
    }
  };

  return (
    <section
      id="guidelines"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-xs font-mono font-semibold text-red-600 dark:text-red-400">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>XNORA SAFETY MANUAL</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Ecosystem{' '}
            <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
              Community Guidelines.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            To maintain a healthy, open, and rewarding digital nation, all citizens of XNORA Verse must adhere to our core standards. We protect speech but enforce safety strictly.
          </p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COMMUNITY_GUIDELINES.map((guide) => (
            <div
              key={guide.id}
              className={`p-6 rounded-3xl border text-left flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 ${
                isDarkMode ? 'glass-card-dark' : 'glass-card-light'
              }`}
            >
              <div className="space-y-4">
                {/* Visual Icon Header */}
                <div className="flex justify-between items-center">
                  <div className="w-8 h-8 rounded-full bg-slate-500/10 flex items-center justify-center text-slate-500">
                    <Hammer className="w-4 h-4 text-purple-600 dark:text-cyan-400" />
                  </div>
                  <span className={`text-[9px] font-mono uppercase font-extrabold px-2 py-0.5 rounded-md ${getImpactBadgeStyle(guide.impact)}`}>
                    {guide.impact}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white tracking-tight">
                    {guide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </div>

              {/* Secure reassurance tag */}
              <div className="mt-5 pt-3.5 border-t border-slate-200/50 dark:border-slate-800/50 text-[10px] font-mono text-slate-400 flex items-center space-x-1">
                <CheckCircle className="w-3 h-3 text-emerald-500" />
                <span>Standard compliance node</span>
              </div>
            </div>
          ))}
        </div>

        {/* Child Safety & Serious Violation Warning Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-red-500/5 border border-red-500/20 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-display font-black text-slate-900 dark:text-white flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></span>
              <span>Child Safety & Vulnerable Groups Shield</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              XNORA Verse maintains <strong>zero tolerance</strong> for content involving child exploitation, non-consensual sharing of intimate media, suicide promotion, or human trafficking. Violations trigger an immediate permanent account ban, hardware-ID lock, wallet freeze, and federal law enforcement referral.
            </p>
          </div>
          <button
            onClick={() => alert("Safety Shield: Current node compliance is fully certified. Feel free to browse safely.")}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 shrink-0 shadow-md cursor-pointer transition-all"
          >
            Review Safety Manual
          </button>
        </div>

      </div>
    </section>
  );
}
