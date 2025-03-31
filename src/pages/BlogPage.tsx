
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPage = () => {
  const featuredPost = {
    id: 0,
    title: 'Harnessing the Power of AI for Business Transformation',
    category: 'Artificial Intelligence',
    date: 'Jun 28, 2024',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    excerpt: 'How businesses are leveraging AI to drive innovation, operational efficiency, and competitive advantage in today\'s digital economy.',
    content: 'Artificial intelligence has become a cornerstone for forward-thinking businesses seeking to revolutionize their operations and create value. From predictive analytics to natural language processing, AI technologies offer unprecedented opportunities to streamline processes, enhance customer experiences, and drive strategic decision-making.'
  };

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI-Driven Business Intelligence',
      category: 'Artificial Intelligence',
      date: 'Jun 15, 2024',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'Exploring how AI is transforming data analytics and decision-making processes across industries.',
      content: 'Artificial intelligence is revolutionizing business intelligence by enabling organizations to transform vast quantities of data into actionable insights with unprecedented speed and accuracy.'
    },
    {
      id: 2,
      title: 'Cloud Migration Strategies for Enterprise Applications',
      category: 'Cloud Computing',
      date: 'May 28, 2024',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'Key considerations and best practices for migrating complex enterprise systems to the cloud.',
      content: 'Cloud migration requires a strategic approach that balances technical requirements, business objectives, and risk management. This article explores proven methodologies for successful enterprise cloud migration.'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends to Watch in 2024',
      category: 'Security',
      date: 'Apr 10, 2024',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'Emerging threats and innovative defense strategies shaping the cybersecurity landscape.',
      content: 'As cyber threats continue to evolve in sophistication and scale, organizations must adapt their security postures accordingly. This article examines the latest cybersecurity trends and best practices.'
    },
    {
      id: 4,
      title: 'Blockchain Applications Beyond Cryptocurrency',
      category: 'Blockchain',
      date: 'Mar 22, 2024',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'How distributed ledger technology is being applied across various industries to solve complex problems.',
      content: 'While commonly associated with cryptocurrency, blockchain technology offers transformative potential across numerous sectors, from supply chain management to healthcare record systems.'
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing in IoT Ecosystems',
      category: 'IoT',
      date: 'Feb 15, 2024',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'Examining how edge computing is optimizing IoT deployments and enabling real-time data processing.',
      content: 'Edge computing addresses key challenges in IoT implementations by processing data closer to the source, reducing latency, bandwidth usage, and enhancing security and privacy.'
    },
    {
      id: 6,
      title: 'Quantum Computing: Implications for Encryption and Data Security',
      category: 'Quantum Computing',
      date: 'Jan 30, 2024',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'Understanding the potential impact of quantum computing on current encryption methods and security protocols.',
      content: 'As quantum computing advances, traditional cryptographic systems may become vulnerable. This article explores the implications and emerging solutions for maintaining data security in the quantum era.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">K-Zen <span className="text-gradient">Insights</span></h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Expert perspectives on technology trends, innovation, and digital transformation
          </p>
        </div>
        
        {/* Featured Post */}
        <div className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="h-64 lg:h-auto">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block bg-kzen-600 text-white text-xs font-semibold px-3 py-1 rounded-md">
                  {featuredPost.category}
                </span>
                <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                  {featuredPost.date}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-kzen-600 transition-colors duration-200">
                <a href="#">{featuredPost.title}</a>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {featuredPost.content}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-kzen-600 hover:text-kzen-700 font-medium"
              >
                Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-kzen-600 hover:text-kzen-700 font-medium mt-auto"
                >
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gradient-to-r from-kzen-900 to-kzen-800 rounded-xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Stay up to date with the latest insights, industry trends, and technology innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-4 py-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex-grow focus:outline-none focus:ring-2 focus:ring-kzen-400"
            />
            <button className="px-6 py-3 bg-kzen-600 hover:bg-kzen-700 text-white font-medium rounded-md transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
