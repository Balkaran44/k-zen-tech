
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ExternalLink, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  
  const filters = ['all', 'ai', 'cloud', 'data', 'security'];
  
  const projects = [
    {
      id: 1,
      title: 'NexusAI Platform',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'AI-powered analytics platform with predictive modeling for financial services.',
      challenge: 'A leading financial institution struggled with analyzing vast amounts of customer data to predict market trends and personalize services.',
      solution: 'We developed NexusAI, a comprehensive analytics platform that leverages machine learning to process customer data, identify patterns, and generate actionable insights.',
      results: [
        'Increased customer retention by 24%',
        'Improved prediction accuracy by 37%',
        'Reduced analysis time by 65%'
      ]
    },
    {
      id: 2,
      title: 'CloudMatrix Migration',
      category: 'cloud',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'Seamless cloud migration strategy and implementation for enterprise systems.',
      challenge: 'A multinational corporation needed to migrate their legacy systems to the cloud while ensuring zero downtime and maintaining data integrity.',
      solution: 'Our CloudMatrix Migration framework provided a phased approach with parallel systems, automated testing, and real-time monitoring to ensure a smooth transition.',
      results: [
        'Zero downtime during migration',
        '35% reduction in IT infrastructure costs',
        '70% improvement in system performance'
      ]
    },
    {
      id: 3,
      title: 'DataVault Architecture',
      category: 'data',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'Secure and scalable data warehouse solution for healthcare analytics.',
      challenge: 'A healthcare provider needed a secure, compliant data warehouse solution to store and analyze patient data while meeting strict regulatory requirements.',
      solution: 'We designed DataVault, a HIPAA-compliant data architecture with end-to-end encryption, role-based access control, and advanced analytics capabilities.',
      results: [
        'Fully HIPAA and GDPR compliant',
        '45% faster data retrieval times',
        'Supported 300% increase in data volume without performance degradation'
      ]
    },
    {
      id: 4,
      title: 'Cyber Shield Protocol',
      category: 'security',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'Advanced threat protection system for critical infrastructure.',
      challenge: 'A utility company experienced increasing cybersecurity threats targeting their critical infrastructure control systems.',
      solution: 'We implemented Cyber Shield Protocol, a multi-layered security system with real-time threat detection, anomaly recognition, and automated response mechanisms.',
      results: [
        '98% reduction in security incidents',
        'Prevented 3 major ransomware attacks',
        'Reduced threat response time from hours to minutes'
      ]
    },
    {
      id: 5,
      title: 'Quantum Edge Computing',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'Next-generation computing platform leveraging quantum algorithms.',
      challenge: 'A research institution needed to process complex simulations that were taking weeks to complete on traditional computing systems.',
      solution: 'Our Quantum Edge Computing platform combines quantum-inspired algorithms with edge computing to dramatically accelerate processing for complex calculations.',
      results: [
        'Reduced simulation time from weeks to hours',
        'Enabled new types of complex calculations previously impossible',
        'Decreased power consumption by 40%'
      ]
    },
    {
      id: 6,
      title: 'Intelligent Supply Chain',
      category: 'data',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'End-to-end supply chain optimization using predictive analytics.',
      challenge: 'A global manufacturer struggled with supply chain inefficiencies, inventory management, and demand forecasting.',
      solution: 'We created an Intelligent Supply Chain platform integrating IoT sensors, predictive analytics, and machine learning to optimize every aspect of the supply chain.',
      results: [
        'Inventory costs reduced by 28%',
        'Order fulfillment time improved by 42%',
        'Demand forecast accuracy increased to 94%'
      ]
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const id = parseInt(entry.target.getAttribute('data-id') || '0');
          if (entry.isIntersecting) {
            setVisibleProjects(prev => [...prev, id]);
          } else {
            setVisibleProjects(prev => prev.filter(p => p !== id));
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach(el => observer.observe(el));
    
    return () => {
      projectElements.forEach(el => observer.unobserve(el));
    };
  }, [filteredProjects]);

  const searchedProjects = filteredProjects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Navbar />
      
      <div className="relative bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Projects</span></h1>
            <p className="text-lg text-gray-300 mb-8">
              Explore our portfolio of innovative solutions and successful implementations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search projects..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full bg-white/10 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-kzen-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-kzen-600 text-white shadow-lg shadow-kzen-600/30' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </button>
          ))}
        </div>
        
        {searchedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchedProjects.map((project, index) => (
              <div 
                key={project.id}
                data-id={project.id}
                className="project-card bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-kzen-600/20 transition-all duration-500 group"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-kzen-600/90 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-kzen-600 dark:group-hover:text-kzen-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="inline-flex items-center text-kzen-600 dark:text-kzen-400 hover:text-kzen-700 dark:hover:text-kzen-300 font-medium group"
                  >
                    View Case Study 
                    <ExternalLink className="ml-2 h-4 w-4 transition-all duration-300 group-hover:rotate-45" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <h3 className="text-xl font-bold mb-2 dark:text-white">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}
              className="bg-kzen-600 hover:bg-kzen-700 text-white"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
