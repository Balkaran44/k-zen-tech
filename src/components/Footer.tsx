
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import FooterMobile from './FooterMobile';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();
  
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

  return <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {isMobile ? (
          <FooterMobile services={services} />
        ) : (
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
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map(service => (
                  <li key={service.id}>
                    <Link to={`/booking?service=${service.id}`} className="text-gray-400 hover:text-white transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" onClick={() => setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        
        <div className="col-span-full border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} K-Zen. All rights reserved.
          </div>
          
          <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-kzen-600 hover:bg-kzen-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-colors" aria-label="Scroll to top">
            <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </footer>;
};

export default Footer;
