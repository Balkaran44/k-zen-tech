
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const BlogSection = () => {
  const isMobile = useIsMobile();
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI-Driven Business Intelligence',
      category: 'Artificial Intelligence',
      date: 'Jun 15, 2023',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      excerpt: 'Exploring how AI is transforming data analytics and decision-making processes across industries.',
      path: '/blog/1'
    },
    {
      id: 2,
      title: 'Cloud Migration Strategies for Enterprise Applications',
      category: 'Cloud Computing',
      date: 'May 28, 2023',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      excerpt: 'Key considerations and best practices for migrating complex enterprise systems to the cloud.',
      path: '/blog/2'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends to Watch in 2023',
      category: 'Security',
      date: 'Apr 10, 2023',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      excerpt: 'Emerging threats and innovative defense strategies shaping the cybersecurity landscape.',
      path: '/blog/3'
    },
    {
      id: 4,
      title: 'Human Mapping Technology: The Next Frontier',
      category: 'Technology',
      date: 'Jul 05, 2023',
      image: 'https://images.pexels.com/photos/8412432/pexels-photo-8412432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      excerpt: 'How human mapping technology is revolutionizing industries from healthcare to urban planning.',
      path: '/blog/human-mapping'
    }
  ];

  return (
    <section id="blog" className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Latest <span className="text-gradient">Insights</span></h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            Expert perspectives on technology trends and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.slice(0, isMobile ? 2 : 3).map((post) => (
            <article 
              key={post.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-40 sm:h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-0 left-0 m-3 md:m-4">
                  <span className="inline-block bg-kzen-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <div className="mb-2 sm:mb-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 hover:text-kzen-600 transition-colors duration-200">
                  <Link to={post.path}>{post.title}</Link>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  to={post.path}
                  className="inline-flex items-center text-kzen-600 hover:text-kzen-700 font-medium mt-auto text-sm sm:text-base"
                >
                  Read Article <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-kzen-600 hover:text-kzen-700 font-medium text-base sm:text-lg"
          >
            View All Articles <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
