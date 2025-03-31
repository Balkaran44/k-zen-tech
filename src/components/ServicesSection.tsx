
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  BarChart3, 
  Database, 
  Shield, 
  Cloud, 
  Code,
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Cpu className="h-10 w-10 text-kzen-600" />,
      title: "AI & Machine Learning",
      description: "Deploy intelligent algorithms and predictive analytics to automate processes and derive actionable insights from your data."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-kzen-600" />,
      title: "Business Intelligence",
      description: "Transform raw data into strategic insights with our advanced analytics and visualization solutions."
    },
    {
      icon: <Database className="h-10 w-10 text-kzen-600" />,
      title: "Data Management",
      description: "Optimize your data architecture with scalable storage, processing, and governance solutions tailored to your needs."
    },
    {
      icon: <Shield className="h-10 w-10 text-kzen-600" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive security solutions, from threat detection to compliance management."
    },
    {
      icon: <Cloud className="h-10 w-10 text-kzen-600" />,
      title: "Cloud Solutions",
      description: "Accelerate your digital transformation with scalable, secure, and cost-effective cloud infrastructure and applications."
    },
    {
      icon: <Code className="h-10 w-10 text-kzen-600" />,
      title: "Custom Development",
      description: "Build bespoke software solutions designed specifically for your unique business challenges and opportunities."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Services</span></h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Cutting-edge solutions to transform your business and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 card-gradient group"
            >
              <div className="bg-kzen-50 dark:bg-kzen-900/30 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-kzen-100 dark:group-hover:bg-kzen-800/50 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {service.description}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-kzen-600 hover:text-kzen-700 font-medium"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Looking for a custom solution tailored to your specific business needs?
          </p>
          <Button 
            size="lg" 
            className="bg-kzen-600 hover:bg-kzen-700 text-white"
          >
            Request Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
