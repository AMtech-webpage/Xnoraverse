import React, { useState } from 'react';
import { SUPPORT_LINKS } from '../data';
import { LifeBuoy, Bug, FileText, Send, CheckCircle, HelpCircle, ShieldAlert, HeartHandshake, User, ArrowUpRight } from 'lucide-react';

interface SupportProps {
  isDarkMode: boolean;
}

export default function SupportSection({ isDarkMode }: SupportProps) {
  const [supportSubmitted, setSupportSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('General Help');
  const [message, setMessage] = useState('');

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    // Generate a unique support ticket ID
    const randomTicket = Math.floor(100000 + Math.random() * 900000);
    setTicketId(`TKT-${randomTicket}`);
    setSupportSubmitted(true);
  };

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Help Center': return <HelpCircle className="w-5 h-5 text-purple-600 dark:text-cyan-400" />;
      case 'Legal & Policies': return <FileText className="w-5 h-5 text-purple-600 dark:text-cyan-400" />;
      case 'Support Desk': return <LifeBuoy className="w-5 h-5 text-purple-600 dark:text-cyan-400" />;
      default: return <HeartHandshake className="w-5 h-5 text-purple-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section
      id="support"
      className="relative py-20 md:py-28 overflow-hidden bg-slate-500/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-xs font-mono font-semibold text-purple-600 dark:text-purple-300">
            <span>24/7 TECHNICAL TEAM DISPATCH</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            Support Hub &{' '}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-cyan-400">
              Technical Desk.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Have questions about node configuration or want to report a technical bug? Send us a diagnostic query below, or browse our standard documentation.
          </p>
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column Support Links */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SUPPORT_LINKS.map((group) => (
              <div
                key={group.title}
                className={`p-6 rounded-3xl border text-left flex flex-col justify-between ${
                  isDarkMode ? 'glass-card-dark' : 'glass-card-light'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white uppercase tracking-wider">
                      {group.title}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                      {getCategoryIcon(group.title)}
                    </div>
                  </div>

                  <ul className="space-y-3.5">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="group flex items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors"
                        >
                          <span className="font-medium">{link.label}</span>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-500 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* General Help Quick Box */}
            <div className={`p-6 rounded-3xl border sm:col-span-2 text-left bg-gradient-to-tr from-purple-900/10 to-indigo-900/10 border-purple-500/10`}>
              <h3 className="font-display font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                <ShieldAlert className="w-5 h-5 text-purple-600 dark:text-cyan-400" />
                <span>Security Assurance & Safety Center</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                All inquiries submitted through our secure support endpoint utilize end-to-end encrypted tunnels. For critical vulnerability disclosures, you can toggle "Report a Bug" in the form to reach our core engineering team directly.
              </p>
            </div>
          </div>

          {/* Right Column Interactive Support Form */}
          <div className="lg:col-span-6 flex flex-col">
            
            <div
              className={`p-8 rounded-3xl text-left relative overflow-hidden ${
                isDarkMode ? 'glass-card-dark' : 'glass-card-light'
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500"></div>

              {!supportSubmitted ? (
                <form onSubmit={handleSupportSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                      Technical Service Ticket
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Open a high-priority ticket. Average response is under 15 minutes.
                    </p>
                  </div>

                  {/* Diagnostic category toggle */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['General Help', 'Wallet / Pay', 'Report a Bug'].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setCategory(cat)}
                          className={`py-2 px-1 text-[10px] sm:text-xs font-bold border rounded-xl transition-all ${
                            category === cat
                              ? 'bg-purple-600 text-white border-purple-500 shadow'
                              : 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800/80'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Email address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. developer@xnora.verse"
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all ${
                        isDarkMode ? 'glass-input-dark' : 'glass-input-light'
                      }`}
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Brief summary of your inquiry"
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all ${
                        isDarkMode ? 'glass-input-dark' : 'glass-input-light'
                      }`}
                    />
                  </div>

                  {/* Detailed Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Message details
                    </label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Provide diagnostic logs, address hash, or your question in detail..."
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all ${
                        isDarkMode ? 'glass-input-dark' : 'glass-input-light'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-cyan-500/10 cursor-pointer"
                  >
                    Open Support Ticket
                  </button>

                </form>
              ) : (
                <div className="py-12 px-2 text-center flex flex-col items-center space-y-6 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center border border-cyan-500/20">
                    <CheckCircle className="w-8 h-8 animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">
                      Support Ticket Opened!
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                      Thank you. We have dispatched your query to the <strong className="text-purple-600 dark:text-cyan-400">{category}</strong> queue. A confirmation has been routed to <span className="font-semibold">{email}</span>.
                    </p>
                  </div>

                  {/* Ticket ID Badge */}
                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col space-y-1">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">TICKET REFERENCE ID</span>
                    <span className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-widest">{ticketId}</span>
                  </div>

                  {/* Estimated response times */}
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono max-w-xs w-full text-slate-500 dark:text-slate-400">
                    <div>
                      <span>AI Copilot Review</span>
                      <strong className="block text-purple-600 dark:text-cyan-400 font-bold mt-0.5">&lt; 1 minute</strong>
                    </div>
                    <div>
                      <span>Engineer Review</span>
                      <strong className="block text-purple-600 dark:text-cyan-400 font-bold mt-0.5">&lt; 15 minutes</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => setSupportSubmitted(false)}
                    className="text-xs text-slate-500 hover:text-purple-600 dark:hover:text-cyan-400 font-mono underline cursor-pointer"
                  >
                    Open another ticket
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
