import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Business Website',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    // Note: Simulated submission with visual feedback
  };

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 bg-stone-50 text-charcoal-950 relative border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-mono text-xs font-bold text-champagne-600 tracking-widest uppercase">06 / INITIATE</span>
              <div className="h-[1px] w-12 bg-champagne-500/40" />
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal-900 tracking-tight">
              Get in Touch
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-graphite-600 leading-relaxed">
            Reach out directly for freelance web development inquiries, collaboration, or to discuss an upcoming project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Communication Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-xl text-charcoal-900">
                Contact Information
              </h3>
              <p className="text-sm text-graphite-600 leading-relaxed">
                Connect directly through email or WhatsApp. You can quickly copy the details below:
              </p>

              <div className="space-y-4">
                
                {/* Email Placeholder Box */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-white text-champagne-600 border border-stone-200">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-graphite-500 block uppercase tracking-wider">Email Address</span>
                      <span className="text-sm font-mono font-semibold text-charcoal-900 block mt-0.5">
                        {PERSONAL_INFO.contact.emailPlaceholder}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.contact.emailPlaceholder, 'email')}
                    className="p-2 rounded-xl bg-white border border-stone-200 text-graphite-600 hover:text-champagne-700 hover:border-champagne-400 transition-colors"
                    title="Copy Email placeholder"
                    aria-label="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Placeholder Box */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between group">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-white text-champagne-600 border border-stone-200">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-graphite-500 block uppercase tracking-wider">WhatsApp Direct</span>
                      <span className="text-sm font-mono font-semibold text-charcoal-900 block mt-0.5">
                        {PERSONAL_INFO.contact.whatsappPlaceholder}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.contact.whatsappPlaceholder, 'whatsapp')}
                    className="p-2 rounded-xl bg-white border border-stone-200 text-graphite-600 hover:text-champagne-700 hover:border-champagne-400 transition-colors"
                    title="Copy WhatsApp placeholder"
                    aria-label="Copy WhatsApp"
                  >
                    {copiedField === 'whatsapp' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-white text-champagne-600 border border-stone-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-graphite-500 block uppercase tracking-wider">Base Location</span>
                    <span className="text-sm font-semibold text-charcoal-900 block mt-0.5">
                      {PERSONAL_INFO.location}
                    </span>
                    <span className="text-xs text-graphite-500 block">Available for local meetings &amp; remote contracts</span>
                  </div>
                </div>

              </div>

              {/* Code & Professional Links */}
              <div className="pt-4 border-t border-stone-200 space-y-3">
                <span className="text-xs font-mono text-graphite-500 uppercase tracking-wider block">
                  Code Profiles &amp; Repositories
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={PERSONAL_INFO.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-charcoal-900 text-xs font-mono transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub: rajivverma7iv-web</span>
                    <ExternalLink className="w-3 h-3 text-graphite-400" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl shadow-stone-200/50">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-charcoal-950">
                    Message Sent Successfully
                  </h4>
                  <p className="text-sm text-graphite-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out! In the meantime, you can also reach out via WhatsApp at <span className="font-mono text-charcoal-900 font-medium">{PERSONAL_INFO.contact.whatsappPlaceholder}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'Business Website', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-xs font-semibold uppercase font-mono text-charcoal-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-1">
                      Start a Project Inquiry
                    </h3>
                    <p className="text-xs text-graphite-600 font-mono">
                      Fill out the form below and I will respond promptly with next steps.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold text-graphite-700 uppercase tracking-wider block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-charcoal-900 focus:outline-none focus:border-champagne-500 focus:bg-white transition-all placeholder:text-stone-400 font-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold text-graphite-700 uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-charcoal-900 focus:outline-none focus:border-champagne-500 focus:bg-white transition-all placeholder:text-stone-400 font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-semibold text-graphite-700 uppercase tracking-wider block">
                      Project Requirement
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-charcoal-900 focus:outline-none focus:border-champagne-500 focus:bg-white transition-all font-sans"
                    >
                      <option value="Business Website">Business Website (Company Showcase / E-Catalog)</option>
                      <option value="Landing Page">Landing Page (High Impact Single-Page)</option>
                      <option value="Portfolio Website">Portfolio Website (Individual / Creative Studio)</option>
                      <option value="Other Web Development">Other Web Development Exploration</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-semibold text-graphite-700 uppercase tracking-wider block">
                      Project Details &amp; Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your project, timeline, and any specific design or technical preferences..."
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-charcoal-900 focus:outline-none focus:border-champagne-500 focus:bg-white transition-all placeholder:text-stone-400 font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2.5 py-4 rounded-xl bg-charcoal-900 text-stone-100 font-bold text-xs tracking-wider uppercase hover:bg-champagne-500 hover:text-charcoal-950 transition-all duration-300 shadow-md active:scale-[0.99]"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-graphite-500 font-mono">
                    Direct developer correspondence &bull; Delhi, India &bull; Strictly authentic collaboration
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
