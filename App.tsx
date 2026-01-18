
import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Calendar, 
  Car, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu,
  X,
  Loader2,
  CheckCircle2
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 h-16' : 'bg-transparent h-24'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 border border-[#d4af37] flex items-center justify-center transform rotate-45 transition-transform group-hover:rotate-[135deg] duration-700">
            <span className="text-[#d4af37] font-bold -rotate-45 group-hover:rotate-[-135deg] transition-transform duration-700">AT</span>
          </div>
          <span className="luxury-font text-white text-xl md:text-2xl font-semibold tracking-widest ml-2">A TOWN LIMO</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Fleet', 'Services', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-[#d4af37] transition-all text-[11px] uppercase tracking-[0.3em] font-medium relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[#d4af37] hover:after:w-full after:transition-all">
              {item}
            </a>
          ))}
          <button className="gold-button text-black px-6 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-widest ml-4 shadow-lg shadow-[#d4af37]/10">
            (404) 555-0123
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={32}/></button>
          {['Home', 'Fleet', 'Services', 'Contact'].map((item) => (
            <a key={item} href="#" onClick={() => setIsMenuOpen(false)} className="text-white text-3xl luxury-font hover:text-[#d4af37] transition-colors">{item}</a>
          ))}
          <button className="gold-button text-black w-full py-4 font-bold rounded-sm tracking-widest uppercase mt-4">Book Your Ride</button>
        </div>
      </div>
    </nav>
  );
};

const BookingForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 2000);
  };

  if (status === 'success') {
    return (
      <div className="glass p-12 rounded-lg w-full max-w-4xl mx-auto mt-12 animate-fade-scale flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-[#d4af37]/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={48} className="text-[#d4af37]" />
        </div>
        <h3 className="luxury-font text-3xl mb-4">Request Received</h3>
        <p className="text-white/60 max-w-md mx-auto mb-8">
          A dedicated chauffeur coordinator will contact you within 15 minutes to confirm your luxury transport details.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-[#d4af37] uppercase tracking-widest text-xs font-bold border border-[#d4af37]/30 px-8 py-3 rounded-sm hover:bg-[#d4af37]/10 transition-colors"
        >
          Back to Form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass p-6 md:p-10 rounded-lg w-full max-w-6xl mx-auto mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold block px-1">Pickup Location</label>
          <div className="relative group">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37] group-focus-within:scale-110 transition-transform" />
            <input 
              required
              type="text" 
              placeholder="Address or Airport"
              className="w-full bg-white/5 border border-white/10 rounded-sm py-3.5 pl-10 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#d4af37] focus:bg-white/10 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold block px-1">Drop-off Location</label>
          <div className="relative group">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37] group-focus-within:scale-110 transition-transform" />
            <input 
              required
              type="text" 
              placeholder="Destination"
              className="w-full bg-white/5 border border-white/10 rounded-sm py-3.5 pl-10 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#d4af37] focus:bg-white/10 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold block px-1">Date & Time</label>
          <div className="relative group">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37] group-focus-within:scale-110 transition-transform" />
            <input 
              required
              type="datetime-local" 
              className="w-full bg-white/5 border border-white/10 rounded-sm py-3.5 pl-10 pr-4 text-white focus:outline-none focus:border-[#d4af37] focus:bg-white/10 transition-all [color-scheme:dark]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold block px-1">Vehicle Class</label>
          <div className="relative group">
            <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37] group-focus-within:scale-110 transition-transform" />
            <select className="w-full bg-white/5 border border-white/10 rounded-sm py-3.5 pl-10 pr-4 text-white focus:outline-none focus:border-[#d4af37] focus:bg-white/10 appearance-none transition-all cursor-pointer">
              <option className="bg-neutral-900" value="sedan">Executive Sedan</option>
              <option className="bg-neutral-900" value="escalade">Cadillac Escalade SUV</option>
              <option className="bg-neutral-900" value="sprinter">Mercedes Sprinter Van</option>
            </select>
          </div>
        </div>

        <div className="lg:flex items-end">
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="gold-button w-full h-[54px] text-black font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 rounded-sm shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>Check Rates <ChevronRight className="w-4 h-4" /></>
            )}
          </button>
        </div>

        {/* Contact info for immediate conversion */}
        <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 pt-4 border-t border-white/5">
           <div className="relative group">
            <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#d4af37] transition-colors" />
            <input 
              required
              type="email" 
              placeholder="Email address for quote"
              className="w-full bg-transparent border-b border-white/10 py-2.5 pl-8 pr-4 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#d4af37] transition-all"
            />
          </div>
           <div className="relative group">
            <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#d4af37] transition-colors" />
            <input 
              required
              type="tel" 
              placeholder="Phone for driver updates"
              className="w-full bg-transparent border-b border-white/10 py-2.5 pl-8 pr-4 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#d4af37] transition-all"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative text-white selection:bg-[#d4af37] selection:text-black">
      <Navbar />

      {/* Hero Content */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-32 overflow-hidden">
        
        {/* Background Layer with subtle zoom effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
            alt="Luxury Limo Interior" 
            className="w-full h-full object-cover brightness-[0.35] scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black"></div>
          
          {/* Animated decorative orbs */}
          <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#d4af37]/10 blur-[150px] rounded-full animate-pulse"></div>
          <div className="absolute -bottom-20 -left-40 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-10 animate-fade-scale">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/80">Premium Chauffeur Service</span>
          </div>

          <h1 className="luxury-font text-5xl md:text-7xl lg:text-9xl mb-8 font-medium leading-[1] animate-in fade-in slide-in-from-top-12 duration-1000 fill-mode-both">
            Arrive in <span className="gold-gradient">Absolute</span> <br className="hidden md:block" /> Excellence
          </h1>

          <p className="max-w-3xl text-white/50 text-base md:text-xl font-light leading-relaxed mb-14 animate-in fade-in slide-in-from-top-8 delay-300 duration-1000 fill-mode-both px-4">
            Atlanta's premier choice for executive travel. Combining the precision of a Swiss watch 
            with the comfort of a private lounge.
          </p>

          <div className="w-full px-4">
            <BookingForm />
          </div>

          {/* Social Proof Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 items-center justify-center animate-in fade-in delay-1000 duration-1000">
             {[
               { val: '15+', label: 'Years of Luxury' },
               { val: '50k+', label: 'Executive Rides' },
               { val: '4.9', label: 'Client Rating' },
               { val: '24/7', label: 'Availability' }
             ].map((stat, i) => (
               <div key={i} className="flex flex-col items-center group cursor-default">
                  <span className="text-3xl md:text-4xl luxury-font font-bold group-hover:text-[#d4af37] transition-colors duration-500">{stat.val}</span>
                  <span className="text-[9px] uppercase tracking-[0.3em] mt-2 text-white/40 group-hover:text-white/70 transition-colors duration-500">{stat.label}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Visual Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
           <span className="text-[8px] uppercase tracking-[0.5em] font-bold">Discover The Fleet</span>
           <div className="w-px h-16 bg-gradient-to-b from-[#d4af37] via-white/20 to-transparent"></div>
        </div>

      </section>

      {/* Floating Action Button for Mobile */}
      <a 
        href="tel:4045550123" 
        className="md:hidden fixed bottom-6 right-6 z-50 gold-button p-4 rounded-full shadow-2xl animate-bounce"
        aria-label="Call Now"
      >
        <Phone size={24} className="text-black" />
      </a>
    </div>
  );
};

export default App;
