import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ChevronDown, Globe, Sparkles, Download } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
}

export default function Header({ isDarkMode, toggleDarkMode, activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mainNavItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'AI', href: '#ai-features' },
    { label: 'Creators', href: '#creators' },
    { label: 'Premium', href: '#premium' },
  ];

  const secondaryNavItems = [
    { label: 'Community', href: '#guidelines' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Support', href: '#support' },
    { label: 'Contact', href: '#support' },
  ];

  const allNavItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'AI', href: '#ai-features' },
    { label: 'Creators', href: '#creators' },
    { label: 'Premium', href: '#premium' },
    { label: 'Community', href: '#guidelines' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Support', href: '#support' },
    { label: 'Contact', href: '#support' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkMode ? 'glass-nav-dark' : 'glass-nav-light'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <a href="#home" className="flex items-center space-x-2.5 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <span className="font-display font-extrabold text-white text-xl tracking-tighter">XV</span>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-md -z-10"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                XNORA Verse
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-500 dark:text-slate-400 uppercase mt-0.5">
                Social Hub
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? 'text-purple-600 dark:text-cyan-400 bg-purple-500/10 dark:bg-cyan-500/10 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Dropdown for other links */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                  isDropdownOpen
                    ? 'text-purple-600 dark:text-cyan-400 bg-slate-100 dark:bg-slate-800/50'
                    : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-1.5 w-56 rounded-xl shadow-xl border overflow-hidden p-1.5 animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  style={{
                    backgroundColor: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                    borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                    backdropFilter: 'blur(16px)'
                  }}
                >
                  {secondaryNavItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center px-4 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-purple-600 hover:text-white dark:hover:bg-cyan-500/20 dark:hover:text-cyan-200 transition-all duration-150"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Action Area (Theme & Download) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle"
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all shadow-sm"
              aria-label="Toggle visual theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Premium Indicator Badge */}
            <a
              href="#premium"
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 dark:border-purple-500/30 text-xs font-mono font-medium text-indigo-600 dark:text-purple-300 hover:border-indigo-500/50 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-indigo-500 dark:text-purple-400" />
              <span>PREMIUM ACTIVE</span>
            </a>

            {/* Sticky Download Button */}
            <a
              id="sticky-download-btn"
              href="#download"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </a>
          </div>

          {/* Mobile Hamburguer and Theme Toggle */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
              aria-label="Toggle theme on mobile"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden animate-in fade-in slide-in-from-top-5 duration-200 border-t border-slate-200 dark:border-slate-800">
          <div
            className="px-4 pt-3 pb-6 space-y-2"
            style={{
              backgroundColor: isDarkMode ? 'rgba(10, 14, 23, 0.98)' : 'rgba(248, 250, 252, 0.98)',
              backdropFilter: 'blur(16px)'
            }}
          >
            <div className="grid grid-cols-2 gap-2 pb-3">
              {allNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all ${
                    activeSection === item.href.slice(1)
                      ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                      : 'bg-slate-500/5 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800/50 hover:bg-slate-500/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800/50 flex flex-col space-y-3">
              <a
                href="#download"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg text-center"
              >
                <Download className="w-4 h-4" />
                <span>Download App Now</span>
              </a>
              <div className="text-center text-[10px] text-slate-500 font-mono tracking-wider">
                XNORA VERSE MOBILE CLIENT v1.4.0
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
