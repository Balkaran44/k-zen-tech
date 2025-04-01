
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, CheckCircle, Clock, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  
  const projects = [
    {
      id: 1,
      title: 'NexusAI Platform',
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'AI-powered analytics platform with predictive modeling for financial services.',
      client: 'Global Financial Solutions, Inc.',
      duration: '8 months',
      completedDate: 'March 2023',
      challenge: 'A leading financial institution struggled with analyzing vast amounts of customer data to predict market trends and personalize services. Their existing systems were siloed, making it difficult to generate holistic insights across different product lines and customer segments.',
      solution: 'We developed NexusAI, a comprehensive analytics platform that leverages machine learning to process customer data, identify patterns, and generate actionable insights. The platform integrates multiple data sources into a unified dashboard, allowing financial advisors to access real-time insights and recommendations. Key features include predictive market trend analysis, personalized product recommendations, and anomaly detection for fraud prevention.',
      approach: [
        'Conducted extensive stakeholder interviews to understand existing workflows',
        'Integrated disparate data sources into a unified data lake',
        'Implemented advanced machine learning algorithms for pattern recognition',
        'Developed intuitive dashboards for different user personas',
        'Provided comprehensive training and knowledge transfer'
      ],
      results: [
        'Increased customer retention by 24%',
        'Improved prediction accuracy by 37%',
        'Reduced analysis time by 65%',
        'Generated $3.2M in additional revenue through personalized recommendations'
      ],
      testimonial: {
        quote: "NexusAI transformed how we interact with our data. We're now able to make proactive decisions and provide truly personalized services to our clients.",
        author: "Jennifer Chen",
        title: "Chief Technology Officer",
        company: "Global Financial Solutions, Inc."
      }
    },
    {
      id: 2,
      title: 'CloudMatrix Migration',
      category: 'Cloud Solutions',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'Seamless cloud migration strategy and implementation for enterprise systems.',
      client: 'TechGlobal Corporation',
      duration: '12 months',
      completedDate: 'August 2023',
      challenge: 'A multinational corporation needed to migrate their legacy systems to the cloud while ensuring zero downtime and maintaining data integrity. They had a complex ecosystem of applications built over 15 years, with interdependencies and technical debt that made migration particularly challenging.',
      solution: 'Our CloudMatrix Migration framework provided a phased approach with parallel systems, automated testing, and real-time monitoring to ensure a smooth transition. We implemented a hybrid cloud architecture that allowed for gradual migration of services while maintaining interoperability with legacy systems. The framework included automated data validation, performance monitoring, and rollback procedures to mitigate risks.',
      approach: [
        'Conducted comprehensive application portfolio assessment',
        'Developed detailed migration roadmap with risk mitigation strategies',
        'Implemented automated CI/CD pipelines for deployment consistency',
        'Established parallel environments for testing and validation',
        'Performed incremental migrations with continuous performance monitoring'
      ],
      results: [
        'Zero downtime during migration',
        '35% reduction in IT infrastructure costs',
        '70% improvement in system performance',
        'Eliminated 95% of technical debt in core systems'
      ],
      testimonial: {
        quote: "The CloudMatrix Migration exceeded our expectations. We were able to modernize our infrastructure without disrupting our operations, and the performance improvements have been substantial.",
        author: "Michael Rodriguez",
        title: "VP of Information Technology",
        company: "TechGlobal Corporation"
      }
    },
    {
      id: 3,
      title: 'DataVault Architecture',
      category: 'Data Management',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'Secure and scalable data warehouse solution for healthcare analytics.',
      client: 'MediCare Health Systems',
      duration: '10 months',
      completedDate: 'January 2023',
      challenge: 'A healthcare provider needed a secure, compliant data warehouse solution to store and analyze patient data while meeting strict regulatory requirements. Their existing system couldn't scale to handle the increasing volume of data, and compliance with evolving regulations was becoming increasingly difficult.',
      solution: 'We designed DataVault, a HIPAA-compliant data architecture with end-to-end encryption, role-based access control, and advanced analytics capabilities. The solution includes comprehensive audit logging, automated compliance reporting, and a scalable architecture that can handle increasing data volumes. We implemented a data governance framework to ensure ongoing compliance with regulations.',
      approach: [
        'Performed security and compliance assessment of existing systems',
        'Designed scalable data architecture with security as a core principle',
        'Implemented end-to-end encryption and robust access controls',
        'Developed automated compliance reporting and audit logs',
        'Created a self-service analytics platform for clinical researchers'
      ],
      results: [
        'Fully HIPAA and GDPR compliant',
        '45% faster data retrieval times',
        'Supported 300% increase in data volume without performance degradation',
        'Reduced compliance reporting time from days to hours'
      ],
      testimonial: {
        quote: "DataVault has revolutionized how we handle patient data. We now have a solution that not only meets our security and compliance needs but also empowers our clinical teams with actionable insights.",
        author: "Dr. Sarah Johnson",
        title: "Director of Clinical Informatics",
        company: "MediCare Health Systems"
      }
    },
    {
      id: 4,
      title: 'Cyber Shield Protocol',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'Advanced threat protection system for critical infrastructure.',
      client: 'EnergyGrid Utilities',
      duration: '9 months',
      completedDate: 'November 2023',
      challenge: 'A utility company experienced increasing cybersecurity threats targeting their critical infrastructure control systems. Traditional security measures were insufficient to counter sophisticated attacks, and the potential impact of a successful breach could affect millions of customers.',
      solution: 'We implemented Cyber Shield Protocol, a multi-layered security system with real-time threat detection, anomaly recognition, and automated response mechanisms. The solution integrates advanced AI-powered threat intelligence, zero-trust architecture, and continuous monitoring to protect critical infrastructure from both external attacks and insider threats.',
      approach: [
        'Conducted comprehensive threat modeling and vulnerability assessment',
        'Implemented AI-powered threat detection across all network layers',
        'Developed automated incident response workflows',
        'Created isolated security zones with stringent access controls',
        'Established 24/7 security operations center with advanced monitoring tools'
      ],
      results: [
        '98% reduction in security incidents',
        'Prevented 3 major ransomware attacks',
        'Reduced threat response time from hours to minutes',
        'Achieved compliance with NERC CIP and IEC 62443 standards'
      ],
      testimonial: {
        quote: "Cyber Shield has transformed our security posture. We now have visibility into potential threats that we never had before, and the automated response capabilities have proven invaluable in mitigating attacks.",
        author: "Robert Thompson",
        title: "Chief Information Security Officer",
        company: "EnergyGrid Utilities"
      }
    },
    {
      id: 5,
      title: 'Quantum Edge Computing',
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'Next-generation computing platform leveraging quantum algorithms.',
      client: 'Advanced Research Institute',
      duration: '14 months',
      completedDate: 'May 2023',
      challenge: 'A research institution needed to process complex simulations that were taking weeks to complete on traditional computing systems. Their work on climate modeling, protein folding, and material science required computational power beyond what was currently available to them.',
      solution: 'Our Quantum Edge Computing platform combines quantum-inspired algorithms with edge computing to dramatically accelerate processing for complex calculations. While true quantum computing is still evolving, we implemented quantum-inspired algorithms on specialized hardware to achieve significant performance improvements without the complexity of maintaining quantum systems.',
      approach: [
        'Adapted complex calculations to quantum-inspired algorithmic approaches',
        'Deployed specialized hardware optimized for these algorithms',
        'Implemented distributed edge computing architecture',
        'Developed API interfaces to existing research tools',
        'Created visualization tools for complex multi-dimensional results'
      ],
      results: [
        'Reduced simulation time from weeks to hours',
        'Enabled new types of complex calculations previously impossible',
        'Decreased power consumption by 40%',
        'Accelerated research publication output by 65%'
      ],
      testimonial: {
        quote: "The Quantum Edge platform has been transformative for our research. Calculations that were previously impractical are now routine, allowing us to explore new frontiers in our field.",
        author: "Prof. David Kim",
        title: "Director of Computational Sciences",
        company: "Advanced Research Institute"
      }
    },
    {
      id: 6,
      title: 'Intelligent Supply Chain',
      category: 'Data Management',
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'End-to-end supply chain optimization using predictive analytics.',
      client: 'Global Manufacturing Inc.',
      duration: '11 months',
      completedDate: 'September 2023',
      challenge: 'A global manufacturer struggled with supply chain inefficiencies, inventory management, and demand forecasting. Their traditional approaches couldn't account for the complexity of global supply networks and increasing market volatility.',
      solution: 'We created an Intelligent Supply Chain platform integrating IoT sensors, predictive analytics, and machine learning to optimize every aspect of the supply chain. The system provides end-to-end visibility, predictive maintenance, demand forecasting, and automated inventory optimization to create a resilient and efficient supply network.',
      approach: [
        'Deployed IoT sensors throughout manufacturing and logistics networks',
        'Implemented digital twin technology for supply chain simulation',
        'Developed ML models for demand forecasting and inventory optimization',
        'Created supplier risk assessment and management tools',
        'Built executive dashboards with actionable insights'
      ],
      results: [
        'Inventory costs reduced by 28%',
        'Order fulfillment time improved by 42%',
        'Demand forecast accuracy increased to 94%',
        'Supplier risk incidents reduced by 63%'
      ],
      testimonial: {
        quote: "Our supply chain has been completely transformed. We've gone from reactive to proactive, with visibility and predictability we never thought possible. The cost savings and efficiency gains have exceeded our most optimistic projections.",
        author: "Lisa Patel",
        title: "Global Supply Chain Director",
        company: "Global Manufacturing Inc."
      }
    }
  ];
  
  const project = projects.find(p => p.id === parseInt(id || '0'));
  
  useEffect(() => {
    if (project) {
      setIsLoading(false);
      // Scroll to top when component mounts
      window.scrollTo(0, 0);
    }
  }, [project, id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="animate-pulse text-2xl text-kzen-600 dark:text-kzen-400">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4 dark:text-white">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/projects">
            <Button className="bg-kzen-600 hover:bg-kzen-700 text-white">
              Back to Projects
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Navbar />
      
      <div className="relative">
        {/* Hero section with image */}
        <div className="w-full h-[40vh] md:h-[50vh] relative">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <Link 
                to="/projects" 
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-white/80">
                  <Tag className="mr-2 h-4 w-4" />
                  <span>{project.category}</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Completed: {project.completedDate}</span>
                </div>
              </div>
              <p className="text-white/90 text-lg max-w-3xl">{project.description}</p>
            </div>
          </div>
        </div>
        
        {/* Interactive background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-kzen-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Challenge</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Solution</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {project.solution}
              </p>
              
              <h3 className="text-xl font-bold mb-4 dark:text-white">Our Approach</h3>
              <ul className="space-y-3">
                {project.approach.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-kzen-600 dark:text-kzen-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{step}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-kzen-600"
                  >
                    <p className="font-medium text-gray-900 dark:text-white">{result}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Client Testimonial</h2>
              <blockquote className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl border-l-4 border-kzen-600 italic">
                <p className="text-gray-700 dark:text-gray-300 mb-4">"{project.testimonial.quote}"</p>
                <footer className="font-medium">
                  <span className="text-gray-900 dark:text-white">{project.testimonial.author}</span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.testimonial.title}, {project.testimonial.company}
                  </p>
                </footer>
              </blockquote>
            </section>
          </div>
          
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl sticky top-24">
              <h3 className="text-xl font-bold mb-4 dark:text-white">Project Details</h3>
              
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Client</h4>
                  <p className="font-medium dark:text-white">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Industry</h4>
                  <p className="font-medium dark:text-white">{project.category}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Duration</h4>
                  <p className="font-medium dark:text-white">{project.duration}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Completion Date</h4>
                  <p className="font-medium dark:text-white">{project.completedDate}</p>
                </div>
              </div>
              
              <Link to="/booking">
                <Button className="w-full bg-kzen-600 hover:bg-kzen-700 text-white">
                  Discuss a Similar Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
