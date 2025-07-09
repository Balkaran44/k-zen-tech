
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

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

  // Navigation items with proper routing
  const navItems = [{
    name: 'Home',
    path: '/#home'
  }, {
    name: 'About',
    path: '/#about'
  }, {
    name: 'Services',
    path: '/#services'
  }, {
    name: 'Projects',
    path: '/#projects'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Contact',
    path: '/#contact'
  }];

  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                alt="K-ZEN Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 mr-2 transition-all duration-300 hover:scale-105" 
                src="/lovable-uploads/994717e6-9cf8-4826-93bd-588fa3666c5d.png" 
              />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-kzen-400 to-kzen-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">K-ZEN</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isHashLink = item.path.includes('#');
              return isHashLink ? <a key={index} href={item.path} className={`text-gray-300 hover:text-kzen-400 transition-colors duration-200 text-sm font-medium relative ${activeSection === item.name.toLowerCase() ? 'text-kzen-400' : ''}`}>
                  {item.name}
                  {activeSection === item.name.toLowerCase() && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-kzen-400 rounded-full animate-fade-in"></span>}
                </a> : <Link key={index} to={item.path} className="text-gray-300 hover:text-kzen-400 transition-colors duration-200 text-sm font-medium" onClick={() => window.scrollTo(0, 0)}>
                  {item.name}
                </Link>;
            })}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/booking" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="default" className="bg-kzen-600 hover:bg-kzen-700 text-white rounded-md transition-transform duration-200 hover:scale-105">
                Book a Service
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white p-2">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-gray-900 shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2 sm:px-3">
            {navItems.map((item, index) => {
              const isHashLink = item.path.includes('#');
              return isHashLink ? <a key={index} href={item.path} className={`block px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-kzen-400 rounded-md ${activeSection === item.name.toLowerCase() ? 'bg-gray-800 text-kzen-400' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </a> : <Link key={index} to={item.path} className="block px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-kzen-400 rounded-md" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}>
                  {item.name}
                </Link>;
            })}
            <div className="pt-2 pb-2">
              <Link to="/booking" onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }} className="block w-full">
                <Button variant="default" className="w-full bg-kzen-600 hover:bg-kzen-700 text-white rounded-md py-3">
                  Book a Service
                </Button>
              </Link>
            </div>
          </div>
        </div>}
    </header>;
};

export default Navbar;
