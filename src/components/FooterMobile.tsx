
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, ArrowUp, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const FooterMobile = ({ services }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="md:hidden">
      <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-8">
        <div>
          <div className="mb-4 flex items-center">
            <img 
              alt="K-ZEN Logo" 
              className="h-8 w-8 mr-2" 
              src="/lovable-uploads/e95326ab-a805-487f-9756-ce65866aacf9.png" 
            />
            <Link to="/" className="text-xl font-bold text-gradient">K-ZEN</Link>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            Redefining possibilities in technology and business solutions.
          </p>
          <div className="flex space-x-4 mt-3">
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
          <Sheet>
            <SheetTrigger className="bg-gray-800 text-white px-4 py-2 rounded-md w-full text-left flex items-center justify-between hover:bg-gray-700 transition-colors">
              <span>Quick Links</span>
              <Menu className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent side="bottom" className="bg-gray-900 text-white border-gray-800">
              <SheetHeader>
                <SheetTitle className="text-white">Navigation</SheetTitle>
                <SheetDescription className="text-gray-400">
                  Quick access to all pages
                </SheetDescription>
              </SheetHeader>
              <div className="grid grid-cols-2 gap-8 mt-6">
                <div>
                  <h3 className="text-base font-semibold mb-3 text-kzen-400">Services</h3>
                  <ul className="space-y-2">
                    {services.slice(0, 3).map(service => (
                      <li key={service.id}>
                        <Link 
                          to={`/booking?service=${service.id}`}
                          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                          className="text-gray-400 hover:text-white transition-colors text-sm block"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-base font-semibold mb-3 text-kzen-400">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/" onClick={() => setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="text-gray-400 hover:text-white transition-colors text-sm block">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-sm block">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-sm block">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="text-gray-400 hover:text-white transition-colors text-sm block">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-base font-semibold mb-3 text-kzen-400">Legal</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Link to="/privacy-policy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-sm block">
                    Privacy Policy
                  </Link>
                  <Link to="/terms-of-service" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-sm block">
                    Terms of Service
                  </Link>
                  <Link to="/sitemap" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors text-sm block">
                    Sitemap
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
