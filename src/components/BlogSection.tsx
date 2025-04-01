
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI-Driven Business Intelligence',
      category: 'Artificial Intelligence',
      date: 'Jun 15, 2023',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'Exploring how AI is transforming data analytics and decision-making processes across industries.',
      path: '/blog/1'
    },
    {
      id: 2,
      title: 'Cloud Migration Strategies for Enterprise Applications',
      category: 'Cloud Computing',
      date: 'May 28, 2023',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'Key considerations and best practices for migrating complex enterprise systems to the cloud.',
      path: '/blog/2'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends to Watch in 2023',
      category: 'Security',
      date: 'Apr 10, 2023',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'Emerging threats and innovative defense strategies shaping the cybersecurity landscape.',
      path: '/blog/3'
    },
    {
      id: 4,
      title: 'Human Mapping Technology: The Next Frontier',
      category: 'Technology',
      date: 'Jul 05, 2023',
      image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'How human mapping technology is revolutionizing industries from healthcare to urban planning.',
      path: '/blog/human-mapping'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest <span className="text-gradient">Insights</span></h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Expert perspectives on technology trends and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <article 
              key={post.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-0 left-0 m-4">
                  <span className="inline-block bg-kzen-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-kzen-600 transition-colors duration-200">
                  <Link to={post.path}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={post.path}
                  className="inline-flex items-center text-kzen-600 hover:text-kzen-700 font-medium mt-auto"
                >
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-kzen-600 hover:text-kzen-700 font-medium text-lg"
          >
            View All Articles <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
