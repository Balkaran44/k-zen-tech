import React from 'react';
import { 
  Zap, 
  Award,
  Users,
  GitBranch
} from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Zap className="h-6 w-6 text-kzen-600" />,
      title: "Innovation First",
      description: "We constantly push boundaries to stay at the forefront of technological advancement."
    },
    {
      icon: <Award className="h-6 w-6 text-kzen-600" />,
      title: "Excellence in Delivery",
      description: "Quality is non-negotiable. We deliver solutions that exceed expectations."
    },
    {
      icon: <Users className="h-6 w-6 text-kzen-600" />,
      title: "Client Partnership",
      description: "We build lasting relationships based on trust, transparency, and mutual success."
    },
    {
      icon: <GitBranch className="h-6 w-6 text-kzen-600" />,
      title: "Adaptive Growth",
      description: "We evolve with changing technologies and market demands to stay relevant."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50 grid-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">K-Zen</span></h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            We're an innovative team of technologists and strategists passionate about creating transformative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At K-Zen, we envision a future where technology seamlessly enhances human potential, enabling businesses to achieve unprecedented innovation and growth. Our mission is to bridge the gap between cutting-edge technology and practical business applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded on April 26, 2024, we're quickly establishing ourselves as pioneers in AI-driven solutions, digital transformation, and technology innovation. We combine technical excellence with strategic insight to deliver solutions that create lasting value.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg py-1 px-3 text-sm font-medium text-kzen-600 dark:text-kzen-400 shadow-sm">
                AI Innovation
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg py-1 px-3 text-sm font-medium text-kzen-600 dark:text-kzen-400 shadow-sm">
                Digital Transformation
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg py-1 px-3 text-sm font-medium text-kzen-600 dark:text-kzen-400 shadow-sm">
                Cloud Solutions
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg py-1 px-3 text-sm font-medium text-kzen-600 dark:text-kzen-400 shadow-sm">
                Data Intelligence
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="K-Zen Vision" 
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-kzen-600/10 to-transparent mix-blend-multiply"></div>
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-kzen-100 dark:bg-kzen-900/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 card-gradient"
            >
              <div className="bg-kzen-50 dark:bg-kzen-900/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
