import React, { useState } from 'react';
import { CREATOR_MONETIZATION } from '../data';
import { BarChart3, Coins, Users, CheckCircle, ChevronRight, UserCheck, Sparkles, AlertCircle, Calendar } from 'lucide-react';

interface CreatorSectionProps {
  isDarkMode: boolean;
}

export default function CreatorSection({ isDarkMode }: CreatorSectionProps) {
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Tech & Gaming');
  const [socialLink, setSocialLink] = useState('');
  const [shortPitch, setShortPitch] = useState('');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Generate a beautiful, unique queue ticket number
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    setTicketNumber(`XNORA-${randomNum}`);
    setWaitlistSubmitted(true);
  };

  const getStreamIcon = (index: number) => {
    switch (index) {
      case 0: return <Coins className="w-5 h-5 text-emerald-500" />;
      case 1: return <Users className="w-5 h-5 text-purple-500" />;
      case 2: return <Sparkles className="w-5 h-5 text-cyan-500" />;
      case 3: return <BarChart3 className="w-5 h-5 text-indigo-500" />;
      default: return <Coins className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section
      id="creators"
      className="relative py-20 md:py-28 overflow-hidden bg-slate-500/5"
    >
      {/* Background Neon Blurs */}
      <div className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full bg-purple-600/10 aurora-blur -z-10"></div>
      <div className="absolute bottom-1/4 left-1/10 w-[300px] h-[300px] rounded-full bg-cyan-600/10 aurora-blur -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Monetization Detail Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-mono font-semibold text-purple-600 dark:text-purple-300">
              <Calendar className="w-3.5 h-3.5" />
              <span>THE 80/20 CREATOR PARADIGM SHIFT</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
              {CREATOR_MONETIZATION.headerTitle}
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              {CREATOR_MONETIZATION.description}
            </p>

            {/* Monetization streams grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {CREATOR_MONETIZATION.benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className={`p-5.5 rounded-2xl flex flex-col space-y-2.5 transition-all duration-200 border border-transparent hover:-translate-y-0.5 ${
                    isDarkMode ? 'bg-slate-900/60 hover:bg-slate-900 hover:border-slate-800' : 'bg-white hover:bg-slate-50 hover:border-slate-100'
                  } shadow-sm`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      {getStreamIcon(i)}
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                      {benefit.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {benefit.desc}
                  </p>

                  <div className="text-[11px] font-mono font-bold text-purple-600 dark:text-cyan-400 uppercase tracking-wide">
                    {benefit.metric}
                  </div>
                </div>
              ))}
            </div>

            {/* Mini Dashboard Analytics Preview Component */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-100/60 border-slate-200/50'
            }`}>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">LIVE METRIC SIMULATOR</span>
                </div>
                <span className="text-xs font-mono text-purple-600 dark:text-cyan-400 font-bold">XNORA INSIGHTS</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">Estimated Revenue</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">4,281.90 <span className="text-[11px] text-emerald-400">USDT</span></div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">Views Tracked</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">1,029,481</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">Active Fans</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">42,912</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">Engagement Rate</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">14.82%</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Waitlist Application Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div
              className={`p-8 rounded-3xl relative overflow-hidden ${
                isDarkMode ? 'glass-card-dark' : 'glass-card-light'
              }`}
            >
              {/* Top ambient decor line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500"></div>

              {!waitlistSubmitted ? (
                <form onSubmit={handleWaitlistSubmit} className="space-y-5 text-left">
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                      Creator Program Waitlist
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Join the queue for the next batch of revenue distribution nodes.
                    </p>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Satoshi Nakamoto"
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all ${
                        isDarkMode ? 'glass-input-dark' : 'glass-input-light'
                      }`}
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. satoshi@bitcoin.org"
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all ${
                        isDarkMode ? 'glass-input-dark' : 'glass-input-light'
                      }`}
                    />
                  </div>

                  {/* Creator Category Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Content Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all ${
                        isDarkMode ? 'bg-slate-900 text-white border border-slate-800' : 'bg-white text-slate-800 border border-slate-200'
                      }`}
                    >
                      <option value="Tech & Gaming">Tech, Gaming & Web3</option>
                      <option value="Short Videos & Comedy">Short Reels & Comedy</option>
                      <option value="Music & Audio Arts">Music & Digital Audio</option>
                      <option value="AI & Code Tutorials">AI, Education & Code</option>
                      <option value="Fashion & Lifestyle">Fashion, Travel & Lifestyle</option>
                    </select>
                  </div>

                  {/* Social Link field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Existing Channel or Website Link (Optional)
                    </label>
                    <input
                      type="url"
                      value={socialLink}
                      onChange={(e) => setSocialLink(e.target.value)}
                      placeholder="e.g. https://youtube.com/c/yourname"
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all ${
                        isDarkMode ? 'glass-input-dark' : 'glass-input-light'
                      }`}
                    />
                  </div>

                  {/* Brief Pitch Textarea */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Why do you want to join XNORA? (Optional)
                    </label>
                    <textarea
                      value={shortPitch}
                      onChange={(e) => setShortPitch(e.target.value)}
                      placeholder="Tell us about your audience or vision..."
                      rows={3}
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all ${
                        isDarkMode ? 'glass-input-dark' : 'glass-input-light'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-purple-500/10 cursor-pointer"
                  >
                    Apply to Waitlist Node
                  </button>

                  {/* Safety note */}
                  <div className="flex items-start space-x-1.5 text-[10px] text-slate-500">
                    <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>Your application will be verified within 48 hours. Successful applicants will receive a secure onboarding pass to unlock instant 80% ad revenue withdrawals.</span>
                  </div>

                </form>
              ) : (
                <div className="py-12 px-2 text-center flex flex-col items-center space-y-6 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
                    <UserCheck className="w-8 h-8 animate-bounce" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">
                      Application Submitted!
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                      Thank you, <strong className="text-purple-600 dark:text-cyan-400">{name}</strong>. Your decentralized creator ticket is verified. We will email you at <span className="font-semibold">{email}</span>.
                    </p>
                  </div>

                  {/* Queue Ticket Badge */}
                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col space-y-1">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">YOUR QUEUE POSITION</span>
                    <span className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-widest">{ticketNumber}</span>
                  </div>

                  <button
                    onClick={() => setWaitlistSubmitted(false)}
                    className="text-xs text-slate-500 hover:text-purple-600 dark:hover:text-cyan-400 font-mono underline"
                  >
                    Submit another application
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
