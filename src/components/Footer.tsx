import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const services = [{
    id: 1,
    name: 'AI & Machine Learning'
  }, {
    id: 2,
    name: 'Business Intelligence'
  }, {
    id: 3,
    name: 'Data Management'
  }, {
    id: 4,
    name: 'Cybersecurity'
  }, {
    id: 5,
    name: 'Cloud Solutions'
  }, {
    id: 6,
    name: 'Custom Development'
  }];

  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6 flex items-center">
              <img 
                alt="K-ZEN Logo" 
                className="h-10 w-10 mr-2" 
                src="/lovable-uploads/e95326ab-a805-487f-9756-ce65866aacf9.png" 
              />
              <Link to="/" className="text-2xl font-bold text-gradient">K-ZEN</Link>
            </div>
            <p className="text-gray-400 mb-2">
              Redefining possibilities in technology and business solutions through innovation and excellence.
            </p>
            <p className="text-gray-400 mb-6">
              <span className="block text-sm opacity-75">(KUNDAN GENERATIONS)</span>
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/_k_.zen._/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          
          
          
        </div>
        
        <div className="col-span-full border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} K-Zen. All rights reserved.
          </div>
          
          <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-kzen-600 hover:bg-kzen-700 text-white p-3 rounded-full shadow-lg transition-colors" aria-label="Scroll to top">
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>;
};

export default Footer;
