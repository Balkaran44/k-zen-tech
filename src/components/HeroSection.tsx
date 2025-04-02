
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Innovative Technology Solutions";

  useEffect(() => {
    // Simulate type effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Set loaded state for animations
    const timer = setTimeout(() => setIsLoaded(true), 500);
    
    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden hero-gradient interactive-bg">
      <ParticlesBackground className="opacity-70" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              Redefining <span className="text-gradient glow-text">Possibilities</span>
            </h1>
            
            <h2 className={`text-3xl md:text-4xl font-bold text-kzen-400 mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {typedText}<span className="animate-pulse">|</span>
            </h2>
            
            <p className={`text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              K-Zen is an innovative online-based startup pushing boundaries with AI-driven automation and cutting-edge digital solutions.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <a href="#services">
                <Button 
                  size="lg" 
                  className="bg-kzen-600 hover:bg-kzen-700 text-white btn-glow transition-all duration-300 transform hover:scale-105 group"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
              
              <Link to="/blog">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-kzen-600 text-kzen-400 hover:bg-kzen-900/20 hover:text-kzen-300 group"
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4 transition-all duration-300 group-hover:rotate-45" />
                </Button>
              </Link>
            </div>
            
            <div className={`mt-10 flex flex-wrap justify-center lg:justify-start gap-8 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center interactive-card p-3 rounded-xl">
                <div className="text-4xl font-bold text-kzen-400">98%</div>
                <div className="ml-2 text-sm text-gray-400 text-left">Client<br/>Satisfaction</div>
              </div>
              
              <div className="flex items-center interactive-card p-3 rounded-xl">
                <div className="text-4xl font-bold text-kzen-400">50+</div>
                <div className="ml-2 text-sm text-gray-400 text-left">Enterprise<br/>Solutions</div>
              </div>
              
              <div className="flex items-center interactive-card p-3 rounded-xl">
                <div className="text-4xl font-bold text-kzen-400">24/7</div>
                <div className="ml-2 text-sm text-gray-400 text-left">Expert<br/>Support</div>
              </div>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-kzen-500/10 rounded-full blur-3xl animate-pulse-soft"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-kzen-600/30 to-blue-500/30 mix-blend-overlay opacity-60 hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="K-Zen Technology Innovation" 
                className="w-full h-auto object-cover rounded-xl transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 opacity-100 transition-all duration-300">
                <span className="inline-block bg-kzen-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase backdrop-blur-sm">
                  Future Technology
                </span>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-kzen-500/20 rounded-full blur-2xl animate-pulse-soft -z-10"></div>
          </div>
          
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
