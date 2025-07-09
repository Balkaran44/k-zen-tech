
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const filters = ['all', 'ai', 'cloud', 'data', 'security'];
  
  const projects = [
    {
      id: 1,
      title: 'NexusAI Platform',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'AI-powered analytics platform with predictive modeling for financial services.'
    },
    {
      id: 2,
      title: 'CloudMatrix Migration',
      category: 'cloud',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'Seamless cloud migration strategy and implementation for enterprise systems.'
    },
    {
      id: 3,
      title: 'DataVault Architecture',
      category: 'data',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'Secure and scalable data warehouse solution for healthcare analytics.'
    },
    {
      id: 4,
      title: 'Cyber Shield Protocol',
      category: 'security',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'Advanced threat protection system for critical infrastructure.'
    },
    {
      id: 5,
      title: 'Quantum Edge Computing',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'Next-generation computing platform leveraging quantum algorithms.'
    },
    {
      id: 6,
      title: 'Intelligent Supply Chain',
      category: 'data',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'End-to-end supply chain optimization using predictive analytics.'
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
    
    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-20 bg-background grid-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-kzen-400 text-sm font-semibold mb-3 uppercase tracking-wider">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our <span className="text-gradient">Projects</span></h2>
          <p className="text-muted-foreground text-lg">
            Innovative solutions we've delivered for enterprises across industries
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-kzen-600 text-white shadow-lg shadow-kzen-600/30' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {filter === 'all' ? 'All Projects' : filter}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              data-id={project.id}
              className={`bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-kzen-600/20 transition-all duration-500 group interactive-card border border-border ${
                visibleProjects.includes(project.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
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
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-kzen-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center text-kzen-400 hover:text-kzen-300 font-medium group"
                >
                  View Case Study 
                  <ExternalLink className="ml-2 h-4 w-4 transition-all duration-300 group-hover:rotate-45" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/projects">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-kzen-600 text-kzen-400 hover:bg-kzen-900/20 hover:text-kzen-300 group"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
