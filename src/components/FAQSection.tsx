import React, { useState } from 'react';
import { FAQS } from '../data';
import { Plus, Minus, MessageSquare, ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  isDarkMode: boolean;
}

export default function FAQSection({ isDarkMode }: FAQSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 overflow-hidden bg-slate-500/5"
    >
      {/* Aurora Ambient Elements */}
      <div className="absolute top-1/4 left-1/10 w-[300px] h-[300px] rounded-full bg-purple-600/10 aurora-blur -z-10"></div>
      <div className="absolute bottom-1/4 right-1/10 w-[300px] h-[300px] rounded-full bg-cyan-600/10 aurora-blur -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-mono font-semibold text-purple-600 dark:text-purple-300">
            <span>COMMON INQUIRIES & PLATFORM ANSWERS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-cyan-400">
              Questions.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto">
            Got questions about XNORA Verse? We have compiled responses to help you navigate our monetization nodes, withdrawals, and security encryption.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-accordion-${idx}`}
                className={`rounded-2xl border transition-all duration-300 ${
                  isDarkMode ? 'glass-card-dark' : 'glass-card-light'
                } ${isExpanded ? 'ring-2 ring-purple-500/30 shadow-lg' : ''}`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 sm:py-6 text-left focus:outline-none cursor-pointer group"
                >
                  <span className="font-display font-extrabold text-sm sm:text-base md:text-lg text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                    isExpanded
                      ? 'bg-purple-600 text-white border-purple-500 rotate-180'
                      : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                {/* Smooth Expandable Answer Pane */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-200/50 dark:border-slate-850/50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra support line */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Can’t find the answer you are looking for? Reach out to our 24/7 technical desk.
          </p>
          <a
            href="#support"
            className="inline-flex items-center space-x-1 mt-3 text-xs font-bold text-purple-600 dark:text-cyan-400 hover:underline"
          >
            <span>Visit Help Desk Support</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
