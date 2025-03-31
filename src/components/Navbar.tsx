
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-kzen-600 to-kzen-800 bg-clip-text text-transparent">K-ZEN</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item, index) => (
              <a 
                key={index} 
                href={`#${item.toLowerCase()}`} 
                className="text-gray-700 dark:text-gray-300 hover:text-kzen-600 dark:hover:text-kzen-400 transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="default"
              className="bg-kzen-600 hover:bg-kzen-700 text-white rounded-md"
            >
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-kzen-600 dark:hover:text-kzen-400 rounded-md"
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
