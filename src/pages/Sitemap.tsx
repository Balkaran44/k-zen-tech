
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const mainPages = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Projects', path: '/projects' },
    { name: 'Booking', path: '/booking' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' }
  ];

  const sections = [
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Contact', path: '/#contact' }
  ];

  const services = [
    { id: 1, name: 'AI & Machine Learning' },
    { id: 2, name: 'Business Intelligence' },
    { id: 3, name: 'Data Management' },
    { id: 4, name: 'Cybersecurity' },
    { id: 5, name: 'Cloud Solutions' },
    { id: 6, name: 'Custom Development' }
  ];

  const projects = [
    { id: 1, title: 'NexusAI Platform' },
    { id: 2, title: 'CloudMatrix Migration' },
    { id: 3, title: 'DataVault Architecture' },
    { id: 4, title: 'Cyber Shield Protocol' },
    { id: 5, title: 'Quantum Edge Computing' },
    { id: 6, title: 'Intelligent Supply Chain' }
  ];

  const blogPosts = [
    { id: 1, title: 'The Future of AI-Driven Business Intelligence', path: '/blog/1' },
    { id: 2, title: 'Cloud Migration Strategies for Enterprise Applications', path: '/blog/2' },
    { id: 3, title: 'Cybersecurity Trends to Watch in 2023', path: '/blog/3' },
    { id: 4, title: 'Human Mapping Technology: The Next Frontier', path: '/blog/human-mapping' }
  ];

  // Add interactive background elements
  const backgroundElements = [
    { top: '10%', left: '5%', size: 'w-32 h-32', color: 'bg-blue-600/10', delay: '0s' },
    { top: '20%', right: '5%', size: 'w-48 h-48', color: 'bg-purple-600/10', delay: '1s' },
    { top: '60%', left: '15%', size: 'w-40 h-40', color: 'bg-green-600/10', delay: '2s' },
    { top: '70%', right: '10%', size: 'w-36 h-36', color: 'bg-kzen-600/10', delay: '1.5s' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20 relative">
      <Navbar />
      
      {/* Interactive background elements */}
      {backgroundElements.map((el, index) => (
        <div 
          key={index}
          className={`absolute ${el.size} ${el.color} rounded-full blur-3xl animate-pulse z-0`}
          style={{ 
            top: el.top, 
            left: el.left, 
            right: el.right,
            animationDelay: el.delay,
            animationDuration: '4s'
          }}
        ></div>
      ))}
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Sitemap</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Main Pages</h2>
              <ul className="space-y-2">
                {mainPages.map((page, index) => (
                  <li key={index}>
                    <Link 
                      to={page.path}
                      className="text-kzen-600 dark:text-kzen-400 hover:underline"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Sections</h2>
              <ul className="space-y-2">
                {sections.map((section, index) => (
                  <li key={index}>
                    <a 
                      href={section.path}
                      className="text-kzen-600 dark:text-kzen-400 hover:underline"
                    >
                      {section.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Services</h2>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link 
                      to={`/booking?service=${service.id}`}
                      className="text-kzen-600 dark:text-kzen-400 hover:underline"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Projects</h2>
              <ul className="space-y-2">
                {projects.map((project) => (
                  <li key={project.id}>
                    <Link 
                      to={`/projects/${project.id}`}
                      className="text-kzen-600 dark:text-kzen-400 hover:underline"
                    >
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Blog Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogPosts.map((post) => (
                  <li key={post.id} className="list-none">
                    <Link 
                      to={post.path}
                      className="text-kzen-600 dark:text-kzen-400 hover:underline"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sitemap;
