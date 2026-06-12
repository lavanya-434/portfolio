import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card border-x-0 border-t-0 rounded-none py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-primary">
          Lavanya<span className="text-foreground">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link font-medium">
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <a href="https://linkedin.com/in/lavanyagunje-a57029301" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-colors">
              <User size={20} />
            </a>
            <a href="mailto:lavanyagunje4@gmail.com" className="text-slate-500 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-600 hover:text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-lg animate-slide-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-100">
            <a href="https://linkedin.com/in/lavanyagunje-a57029301" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary transition-colors">
              <User size={24} />
            </a>
            <a href="mailto:lavanyagunje4@gmail.com" className="text-slate-500 hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
