import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AiSection from './components/AiSection';
import CreatorSection from './components/CreatorSection';
import Screenshots from './components/Screenshots';
import FAQSection from './components/FAQSection';
import GuidelinesSection from './components/GuidelinesSection';
import SupportSection from './components/SupportSection';
import Footer from './components/Footer';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function App() {
  // Default to Dark Mode as requested (deep midnight black #0A0E17)
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync theme with document class and body style
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.backgroundColor = '#0A0E17';
      document.body.style.backgroundColor = '#0A0E17';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#F8FAFC';
      document.body.style.backgroundColor = '#F8FAFC';
    }
  }, [isDarkMode]);

  // Scroll spy & Back-to-Top display
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      // Toggle floating Back-to-Top indicator
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Detect active navigation section
      const sections = [
        'home',
        'features',
        'ai-features',
        'creators',
        'premium',
        'about',
        'faq',
        'guidelines',
        'support',
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ease-in-out antialiased relative selection:bg-purple-500/30 ${
        isDarkMode ? 'bg-[#0A0E17] text-white' : 'bg-[#F8FAFC] text-slate-800'
      }`}
    >
      
      {/* Sticky Header */}
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <Hero isDarkMode={isDarkMode} />

      {/* Features Section */}
      <Features isDarkMode={isDarkMode} />

      {/* AI Features Highlight Section */}
      <AiSection isDarkMode={isDarkMode} />

      {/* Creator Program & Monetization Waitlist Section */}
      <CreatorSection isDarkMode={isDarkMode} />

      {/* Premium Spotlight Banner */}
      <section
        id="premium"
        className="relative py-16 overflow-hidden bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-cyan-900/20 border-y border-purple-500/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 bg-purple-500/15 blur-2xl rounded-full -z-10 animate-pulse-glow"></div>
          
          <div className="flex flex-col items-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-purple-500/15 text-xs font-mono font-extrabold text-purple-600 dark:text-cyan-400 uppercase tracking-widest animate-bounce">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              <span>Unlock Infinite Access Node</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-slate-900 dark:text-white">
              Ready to claim your premium status?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              XNORA Premium membership grants double CPM ad revenue splits, unlimited Gemini Copilot generation tokens, ad-free video swipes, and exclusive neon visual profile frame overlays.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="#download"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                Go Premium via XNORA Client
              </a>
              <a
                href="#support"
                className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all cursor-pointer"
              >
                Speak to Onboarding Agent
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Screens Carousel Section */}
      <Screenshots isDarkMode={isDarkMode} />

      {/* FAQ Accordion Section */}
      <FAQSection isDarkMode={isDarkMode} />

      {/* Community Guidelines Manual Section */}
      <GuidelinesSection isDarkMode={isDarkMode} />

      {/* Diagnostic Service & Support Section */}
      <SupportSection isDarkMode={isDarkMode} />

      {/* Download Center Redirect banner */}
      <section
        id="download"
        className={`relative py-20 overflow-hidden ${
          isDarkMode ? 'bg-slate-1000' : 'bg-slate-100/50'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-none">
            Join the XNORA Verse Today.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Download the secure client on Google Play or Apple App Store. Start watching, creating, communicating, and securing stable crypto payouts in under three minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            
            {/* Apple Download Button vector */}
            <a
              href="#smartphone-mockup"
              className="flex items-center space-x-3 w-full sm:w-auto px-6 py-3 rounded-2xl bg-black border border-slate-800 text-white hover:border-slate-600 transition-all shadow-md group active:scale-95"
            >
              <svg className="w-6 h-6 fill-white" viewBox="0 0 384 512">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-46-19.1-73.5-19.1-36.5 0-71.1 21-89.9 54-38.8 67.9-10 167.6 27.5 222.1 18.4 26.5 40.1 56 68.6 55.1 27.1-1 37.3-17.4 69.9-17.4 32.2 0 41.9 17.4 69.9 16.8 28.6-.5 47.9-26.5 66.2-53.1 21.3-31.1 30-61.2 30.4-62.8-1.1-.5-58.5-22.6-59-88.8zM294.9 84.4c15.4-18.6 25.8-44.1 22.9-69.4-21.8 1-48.4 14.8-64 32.8-13.8 15.6-25.8 41.6-22.5 66.4 24.2 1.8 48.7-11.2 63.6-29.8z"/>
              </svg>
              <div className="text-left leading-none">
                <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Download on the</div>
                <div className="text-xs font-semibold font-sans mt-0.5">App Store</div>
              </div>
            </a>

            {/* Google Play Download Button vector */}
            <a
              href="#smartphone-mockup"
              className="flex items-center space-x-3 w-full sm:w-auto px-6 py-3 rounded-2xl bg-black border border-slate-800 text-white hover:border-slate-600 transition-all shadow-md group active:scale-95"
            >
              <svg className="w-6 h-6 fill-white" viewBox="0 0 512 512">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58 33.3 60.1 60.1c43-24.3 43-69.2-2.1-93.4zM385.4 337.5L104.6 499l220.7-126.7 60.1-60.1-115-74.7z"/>
              </svg>
              <div className="text-left leading-none">
                <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Get it on</div>
                <div className="text-xs font-semibold font-sans mt-0.5">Google Play</div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer isDarkMode={isDarkMode} />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-500/20 border border-purple-500 hover:bg-purple-500 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer animate-in fade-in zoom-in duration-200"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
