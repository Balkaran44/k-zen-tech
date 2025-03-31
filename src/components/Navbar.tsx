
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'projects', 'blog', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-kzen-400 to-kzen-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">K-ZEN</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item, index) => (
              <a 
                key={index} 
                href={`#${item.toLowerCase()}`} 
                className={`text-gray-300 hover:text-kzen-400 transition-colors duration-200 text-sm font-medium relative ${
                  activeSection === item.toLowerCase() ? 'text-kzen-400' : ''
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-kzen-400 rounded-full animate-fade-in"></span>
                )}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="default"
              className="bg-kzen-600 hover:bg-kzen-700 text-white rounded-md transition-transform duration-200 hover:scale-105"
            >
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className={`block px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-kzen-400 rounded-md ${
                  activeSection === item.toLowerCase() ? 'bg-gray-800 text-kzen-400' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-2">
              <Button
                variant="default"
                className="w-full bg-kzen-600 hover:bg-kzen-700 text-white rounded-md"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
