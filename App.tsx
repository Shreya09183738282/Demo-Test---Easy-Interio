
import React, { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  Car, 
  Phone, 
  Mail, 
  ChevronRight, 
  Clock,
  Menu,
  X
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 border border-[#d4af37] flex items-center justify-center transform rotate-45">
            <span className="text-[#d4af37] font-bold -rotate-45">AT</span>
          </div>
          <span className="luxury-font text-white text-2xl font-semibold tracking-wider ml-2">A TOWN LIMO</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white/80 hover:text-[#d4af37] transition-colors text-sm uppercase tracking-widest font-medium">Home</a>
          <a href="#" className="text-white/80 hover:text-[#d4af37] transition-colors text-sm uppercase tracking-widest font-medium">Fleet</a>
          <a href="#" className="text-white/80 hover:text-[#d4af37] transition-colors text-sm uppercase tracking-widest font-medium">Services</a>
          <a href="#" className="text-white/80 hover:text-[#d4af37] transition-colors text-sm uppercase tracking-widest font-medium">Contact</a>
          <button className="gold-button text-black px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest ml-4">
            Call: (404) 555-0123
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 absolute top-20 left-0 right-0 p-6 flex flex-col gap-6 border-b border-white/10">
          <a href="#" className="text-white text-lg luxury-font">Home</a>
          <a href="#" className="text-white text-lg luxury-font">Fleet</a>
          <a href="#" className="text-white text-lg luxury-font">Services</a>
          <a href="#" className="text-white text-lg luxury-font">Contact</a>
          <button className="gold-button text-black w-full py-4 font-bold rounded-sm">BOOK NOW</button>
        </div>
      )}
    </nav>
  );
};

const BookingForm: React.FC = () => {
  return (
    <div className="glass p-8 rounded-lg w-full max-w-6xl mx-auto mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        
        {/* Locations */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold block px-1">Pickup Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
            <input 
              type="text" 
              placeholder="Address or Airport"
              className="w-full bg-white/5 border border-white/10 rounded-sm py-3 pl-10 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold block px-1">Drop-off Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
            <input 
              type="text" 
              placeholder="Destination"
              className="w-full bg-white/5 border border-white/10 rounded-sm py-3 pl-10 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>
        </div>

        {/* Date & Time */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold block px-1">Date & Time</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
            <input 
              type="datetime-local" 
              className="w-full bg-white/5 border border-white/10 rounded-sm py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#d4af37] transition-colors [color-scheme:dark]"
            />
          </div>
        </div>

        {/* Vehicle */}
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold block px-1">Vehicle Class</label>
          <div className="relative">
            <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
            <select className="w-full bg-white/5 border border-white/10 rounded-sm py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#d4af37] appearance-none transition-colors">
              <option value="sedan">Executive Sedan</option>
              <option value="escalade">Cadillac Escalade SUV</option>
              <option value="sprinter">Mercedes Sprinter Van</option>
            </select>
          </div>
        </div>

        {/* Contact info placeholder / CTA area */}
        <div className="lg:flex items-end">
          <button className="gold-button w-full h-[50px] text-black font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 rounded-sm shadow-xl">
            Check Rates <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Secondary Contact Row for trust */}
        <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
           <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
            <input 
              type="email" 
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-white/10 py-2 pl-10 pr-4 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>
           <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#d4af37]" />
            <input 
              type="tel" 
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-white/10 py-2 pl-10 pr-4 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#d4af37] transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative text-white selection:bg-[#d4af37] selection:text-black">
      <Navbar />

      {/* Hero Content */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden">
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
            alt="Luxury Limo in Atlanta" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#d4af37]/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* Trust Tag */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 animate-in fade-in zoom-in duration-700">
            <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/80">Atlanta's Most Trusted Luxury Chauffeur</span>
          </div>

          <h1 className="luxury-font text-5xl md:text-7xl lg:text-8xl mb-6 font-medium leading-[1.1] animate-in fade-in slide-in-from-top-12 duration-1000 fill-mode-both">
            Elevating Your <span className="gold-gradient">Atlanta</span> <br className="hidden md:block" /> Experience
          </h1>

          <p className="max-w-2xl text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 animate-in fade-in slide-in-from-top-8 delay-300 duration-1000 fill-mode-both">
            Professional airport transfers and executive transportation. 
            Experience unrivaled comfort in our elite fleet of Escalades, Sedans, and Sprinters.
          </p>

          <div className="w-full">
            <BookingForm />
          </div>

          {/* Social Proof / Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-center opacity-60 animate-in fade-in delay-1000 duration-1000">
             <div className="flex flex-col items-center">
                <span className="text-2xl luxury-font font-bold">15+</span>
                <span className="text-[10px] uppercase tracking-widest mt-1">Years Experience</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-2xl luxury-font font-bold">50k+</span>
                <span className="text-[10px] uppercase tracking-widest mt-1">Rides Completed</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-2xl luxury-font font-bold">4.9/5</span>
                <span className="text-[10px] uppercase tracking-widest mt-1">Customer Rating</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-2xl luxury-font font-bold">24/7</span>
                <span className="text-[10px] uppercase tracking-widest mt-1">Availability</span>
             </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
           <span className="text-[9px] uppercase tracking-[0.4em]">Explore Fleet</span>
           <div className="w-px h-12 bg-gradient-to-b from-white via-white/50 to-transparent"></div>
        </div>

      </section>
    </div>
  );
};

export default App;
