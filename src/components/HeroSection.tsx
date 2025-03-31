
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Redefining <span className="text-gradient">Possibilities</span> in Technology
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
              K-Zen is an innovative online-based startup pushing boundaries with AI-driven automation and cutting-edge digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Button 
                size="lg" 
                className="bg-kzen-600 hover:bg-kzen-700 text-white btn-glow transition-all duration-300 transform hover:scale-105"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-kzen-600 text-kzen-600 hover:bg-kzen-50 dark:hover:bg-kzen-900/20"
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center">
                <div className="text-4xl font-bold text-kzen-600">98%</div>
                <div className="ml-2 text-sm text-gray-600 dark:text-gray-400 text-left">Client<br/>Satisfaction</div>
              </div>
              
              <div className="flex items-center">
                <div className="text-4xl font-bold text-kzen-600">50+</div>
                <div className="ml-2 text-sm text-gray-600 dark:text-gray-400 text-left">Enterprise<br/>Solutions</div>
              </div>
              
              <div className="flex items-center">
                <div className="text-4xl font-bold text-kzen-600">24/7</div>
                <div className="ml-2 text-sm text-gray-600 dark:text-gray-400 text-left">Expert<br/>Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl animate-pulse-glow">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="K-Zen Technology Innovation" 
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-kzen-900/30 to-transparent mix-blend-multiply"></div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-kzen-200 dark:bg-kzen-800/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
          </div>
          
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
