import React, { useState } from 'react';
import { Mail, Globe, CheckCircle, Twitter, Github, Send, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English (US)');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  const languages = ['English (US)', 'Español (ES)', '日本語 (JP)', '简体中文 (CN)', 'Deutsch (DE)'];

  const quickLinks1 = [
    { label: 'Ecosystem Home', href: '#home' },
    { label: 'Platform Features', href: '#features' },
    { label: 'Gemini AI Integration', href: '#ai-features' },
    { label: 'Creator Program', href: '#creators' }
  ];

  const quickLinks2 = [
    { label: 'Safety Guidelines', href: '#guidelines' },
    { label: 'Frequently Asked FAQ', href: '#faq' },
    { label: 'Technical Desk Support', href: '#support' },
    { label: 'Download Center', href: '#download' }
  ];

  return (
    <footer
      id="main-footer"
      className={`border-t transition-all duration-300 ${
        isDarkMode
          ? 'bg-slate-950 border-slate-900 text-slate-400'
          : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}
    >
      
      {/* Upper Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-200/50 dark:border-slate-900/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 text-left space-y-2">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
              Subscribe to XNORA Dispatch
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
              Get the latest updates on network node expansions, developer SDK rollouts, and weekly creator reward payouts delivered securely to your inbox.
            </p>
          </div>

          <div className="lg:col-span-6">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md lg:ml-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter secure email address..."
                    className={`w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all ${
                      isDarkMode ? 'glass-input-dark' : 'glass-input-light'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-md cursor-pointer"
                >
                  Join Dispatch
                </button>
              </form>
            ) : (
              <div className="flex items-center space-x-2.5 p-4.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm max-w-md lg:ml-auto animate-in zoom-in-95 duration-200">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span className="font-semibold text-left">Success! Your secure address is added to the dispatch list.</span>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Central Link Directories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Signature Column */}
          <div className="lg:col-span-4 text-left space-y-5">
            <a href="#home" className="flex items-center space-x-2.5 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span className="font-display font-extrabold text-white text-lg tracking-tighter">XV</span>
              </div>
              <span className="font-display font-black text-lg text-slate-900 dark:text-white tracking-tight">
                XNORA Verse
              </span>
            </a>
            
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 max-w-sm">
              Connecting humanity over a high-performance social mesh. Empowering creators with view earnings and users with privacy, safety, and digital freedom.
            </p>

            {/* Language Selector Dropdown (Functional) */}
            <div className="flex flex-col space-y-1.5 pt-2">
              <label className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Localized Language</label>
              <div className="relative inline-block w-48">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs font-semibold focus:outline-none border transition-all ${
                    isDarkMode ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-800 border-slate-200'
                  }`}
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Directory Links column 1 */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider font-extrabold text-slate-900 dark:text-white">
              Sitemap Index
            </h4>
            <ul className="space-y-3">
              {quickLinks1.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs font-medium text-slate-500 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory Links column 2 */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider font-extrabold text-slate-900 dark:text-white">
              Compliance & Legal
            </h4>
            <ul className="space-y-3">
              {quickLinks2.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs font-medium text-slate-500 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Information Metadata Column */}
          <div className="lg:col-span-4 text-left space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider font-extrabold text-slate-900 dark:text-white">
              Decentralized Company Meta
            </h4>
            <div className="text-xs space-y-3 font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Ecosystem Registry:</strong> Node XNORA-9083bc70, registered across decentralized ledger operations. Distributed computing nodes operational globally.
              </p>
              <p>
                <strong>Security Grade:</strong> Zero-knowledge chat audits and biometric wallet credentials active. CPM payouts settled in USD-pegged stablecoins (USDT).
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${
        isDarkMode ? 'border-slate-900 bg-slate-1000' : 'border-slate-200 bg-slate-50'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          
          <div className="text-slate-500 dark:text-slate-400 text-center sm:text-left">
            <span>Copyright &copy; {new Date().getFullYear()} XNORA Verse. Connect. Create. Learn. Earn.</span>
          </div>

          {/* Social Icons Placeholders with hover scales */}
          <div className="flex items-center space-x-4">
            <a
              href="#support"
              className="p-2 rounded-lg bg-slate-200/50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-cyan-400 hover:scale-110 active:scale-95 transition-all"
              aria-label="Twitter X Link"
            >
              <Twitter className="w-4 h-4 fill-current" />
            </a>
            <a
              href="#support"
              className="p-2 rounded-lg bg-slate-200/50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-cyan-400 hover:scale-110 active:scale-95 transition-all"
              aria-label="Discord Link"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="#support"
              className="p-2 rounded-lg bg-slate-200/50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-cyan-400 hover:scale-110 active:scale-95 transition-all"
              aria-label="GitHub Link"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#support"
              className="p-2 rounded-lg bg-slate-200/50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-cyan-400 hover:scale-110 active:scale-95 transition-all"
              aria-label="Telegram Dispatch"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
