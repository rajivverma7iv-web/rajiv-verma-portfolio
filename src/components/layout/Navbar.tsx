import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [delhiTime, setDelhiTime] = useState('');

  // Update Delhi IST time in real-time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setDelhiTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-charcoal-950/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram & Name */}
        <a 
          href="#" 
          className="group flex items-center space-x-3 text-stone-100 transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-graphite-800 border border-champagne-400/30 flex items-center justify-center font-display font-bold text-sm text-champagne-300 group-hover:border-champagne-400 group-hover:bg-graphite-700 transition-all">
            RV
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold tracking-wider text-sm sm:text-base text-stone-100 group-hover:text-champagne-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono tracking-widest text-stone-400 hidden sm:inline-block">
              {PERSONAL_INFO.role}
            </span>
          </div>
        </a>

        {/* Live Delhi IST Clock & Status Pill (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4 bg-charcoal-800/80 border border-white/5 rounded-full px-3.5 py-1.5 text-xs text-stone-300">
          <div className="flex items-center space-x-1.5 font-mono text-stone-400">
            <MapPin className="w-3.5 h-3.5 text-champagne-400" />
            <span>Delhi, IN</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center space-x-1.5 font-mono text-stone-300">
            <Clock className="w-3.5 h-3.5 text-champagne-400" />
            <span>{delhiTime || '12:00 PM'} IST</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-emerald-400 font-medium tracking-wide">Available for Projects</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-300 hover:text-champagne-300 transition-colors tracking-wide relative after:content-[''] after:absolute after:w-0 after:h-[1.5px] after:bottom-[-4px] after:left-0 after:bg-champagne-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#contact"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full border border-champagne-400/40 text-champagne-200 bg-champagne-400/10 hover:bg-champagne-400 hover:text-charcoal-950 transition-all duration-300"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <a
            href="#contact"
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-champagne-400/40 text-champagne-300 bg-champagne-400/10"
          >
            Connect
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-graphite-800 border border-white/10 text-stone-200 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal-950/95 border-b border-white/10 px-6 py-6 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-stone-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-champagne-400" /> Delhi, IN
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-champagne-400" /> {delhiTime} IST
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-200 hover:text-champagne-300 py-1 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-stone-500">&rarr;</span>
              </a>
            ))}

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-champagne-400 text-charcoal-950 font-semibold text-sm hover:bg-champagne-300 transition-colors"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
