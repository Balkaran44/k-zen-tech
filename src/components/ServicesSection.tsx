
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  BarChart3, 
  Database, 
  Shield, 
  Cloud, 
  Code,
  ArrowRight,
  MousePointer
} from 'lucide-react';

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const services = [
    {
      icon: <Cpu className="h-10 w-10 text-kzen-400" />,
      title: "AI & Machine Learning",
      description: "Deploy intelligent algorithms and predictive analytics to automate processes and derive actionable insights from your data."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-kzen-400" />,
      title: "Business Intelligence",
      description: "Transform raw data into strategic insights with our advanced analytics and visualization solutions."
    },
    {
      icon: <Database className="h-10 w-10 text-kzen-400" />,
      title: "Data Management",
      description: "Optimize your data architecture with scalable storage, processing, and governance solutions tailored to your needs."
    },
    {
      icon: <Shield className="h-10 w-10 text-kzen-400" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions, from threat detection to compliance management."
    },
    {
      icon: <Cloud className="h-10 w-10 text-kzen-400" />,
      title: "Cloud Solutions",
      description: "Accelerate your digital transformation with scalable, secure, and cost-effective cloud infrastructure and applications."
    },
    {
      icon: <Code className="h-10 w-10 text-kzen-400" />,
      title: "Custom Development",
      description: "Build bespoke software solutions designed specifically for your unique business challenges and opportunities."
    }
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const cards = containerRef.current.querySelectorAll('.service-card');
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    cards.forEach((card, index) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
      const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;
      
      const deltaX = mouseX - cardCenterX;
      const deltaY = mouseY - cardCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      if (distance < 200) {
        setActiveCard(index);
      }
    });
  };

  return (
    <section id="services" className="py-20 bg-gray-950 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <MousePointer className="h-6 w-6 text-kzen-400 mx-auto mb-4 animate-pulse-soft" />
          <p className="text-kzen-400 text-sm font-semibold mb-3 uppercase tracking-wider">Our Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our <span className="text-gradient">Services</span></h2>
          <p className="text-gray-400 text-lg">
            Cutting-edge solutions to transform your business and drive innovation
          </p>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActiveCard(null)}
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card bg-gray-900 p-8 rounded-xl transition-all duration-500 card-gradient interactive-card hover:shadow-lg hover:shadow-kzen-600/20 border border-gray-800 ${
                activeCard === index ? 'scale-105 shadow-lg shadow-kzen-600/20 z-10' : 'scale-100'
              }`}
            >
              <div className="bg-gray-800/50 dark:bg-kzen-900/30 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-kzen-900/50 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-4">
                {service.description}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-kzen-400 hover:text-kzen-300 font-medium animated-border group"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            Looking for a custom solution tailored to your specific business needs?
          </p>
          <Button 
            size="lg" 
            className="bg-kzen-600 hover:bg-kzen-700 text-white btn-glow transition-all duration-300 group"
          >
            Request Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
