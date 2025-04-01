
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const mainPages = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
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

  const blogPosts = [
    { id: 1, title: 'The Future of AI-Driven Business Intelligence' },
    { id: 2, title: 'Cloud Migration Strategies for Enterprise Applications' },
    { id: 3, title: 'Cybersecurity Trends to Watch in 2023' },
    { id: 4, title: 'Human Mapping Technology: The Next Frontier' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
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
              <h2 className="text-2xl font-bold mb-4">Blog Articles</h2>
              <ul className="space-y-2">
                {blogPosts.map((post) => (
                  <li key={post.id}>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-kzen-600 dark:text-kzen-400 hover:underline"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sitemap;
