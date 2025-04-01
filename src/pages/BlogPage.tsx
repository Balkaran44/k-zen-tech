
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Calendar, Tag, User, Clock, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    { name: 'All', value: null },
    { name: 'Artificial Intelligence', value: 'AI' },
    { name: 'Cloud Computing', value: 'Cloud' },
    { name: 'Security', value: 'Security' },
    { name: 'Technology', value: 'Technology' },
    { name: 'Case Studies', value: 'Case Study' }
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI-Driven Business Intelligence',
      category: 'AI',
      date: 'Jun 15, 2023',
      author: 'Dr. Rajiv Kumar',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'Exploring how AI is transforming data analytics and decision-making processes across industries.'
    },
    {
      id: 2,
      title: 'Cloud Migration Strategies for Enterprise Applications',
      category: 'Cloud',
      date: 'May 28, 2023',
      author: 'Priya Sharma',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'Key considerations and best practices for migrating complex enterprise systems to the cloud.'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends to Watch in 2023',
      category: 'Security',
      date: 'Apr 10, 2023',
      author: 'Vikram Singh',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'Emerging threats and innovative defense strategies shaping the cybersecurity landscape.'
    },
    {
      id: 4,
      title: 'Human Mapping Technology: The Next Frontier',
      category: 'Technology',
      date: 'Jul 05, 2023',
      author: 'Anil Sharma',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'How human mapping technology is revolutionizing industries from healthcare to urban planning.'
    },
    {
      id: 5,
      title: 'Case Study: AI-Powered Predictive Maintenance for Manufacturing',
      category: 'Case Study',
      date: 'Aug 12, 2023',
      author: 'Meera Patel',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1581093458791-9f9c5bdcfea0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'How a leading manufacturer reduced downtime by 35% with our AI predictive maintenance solution.'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing in IoT Applications',
      category: 'Technology',
      date: 'Sep 03, 2023',
      author: 'Rahul Khanna',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'Exploring how edge computing is transforming IoT applications with reduced latency and enhanced privacy.'
    },
    {
      id: 7,
      title: 'Case Study: Healthcare Provider Enhances Data Security',
      category: 'Case Study',
      date: 'Oct 17, 2023',
      author: 'Sunita Reddy',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'How we helped a major healthcare provider strengthen their cybersecurity posture and achieve compliance.'
    },
    {
      id: 8,
      title: 'Quantum Computing: Implications for Cybersecurity',
      category: 'Security',
      date: 'Nov 05, 2023',
      author: 'Dr. Amit Roy',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1507729650212-124d0ea9c8a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      excerpt: 'Understanding the potential impacts of quantum computing on encryption and security protocols.'
    }
  ];
  
  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Featured post (most recent)
  const featuredPost = blogPosts.reduce((latest, current) => {
    const latestDate = new Date(latest.date);
    const currentDate = new Date(current.date);
    return currentDate > latestDate ? current : latest;
  });
  
  // Case studies
  const caseStudies = blogPosts.filter(post => post.category === 'Case Study');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Blog</span></h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            Insights and perspectives on technology, innovation, and digital transformation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  className={selectedCategory === category.value ? "bg-kzen-600" : ""}
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Featured Article */}
        {!searchTerm && !selectedCategory && (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-kzen-600 text-white text-xs font-semibold px-2 py-1 rounded-md mr-3">
                    Featured
                  </span>
                  <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-2 py-1 rounded-md">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
                  <div className="flex items-center mr-6 mb-2">
                    <User className="h-4 w-4 mr-2" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center mr-6 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center text-kzen-600 hover:text-kzen-700 font-medium"
                >
                  Read Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {/* All Articles */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              {searchTerm ? `Search Results: ${filteredPosts.length} articles` :
               selectedCategory ? `${categories.find(c => c.value === selectedCategory)?.name} Articles` : 'Latest Articles'}
            </h2>
            {filteredPosts.length > 0 && (
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Filter className="h-4 w-4 mr-2" />
                <span>Showing {filteredPosts.length} articles</span>
              </div>
            )}
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
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
                    <div className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 text-xs mb-4">
                      <div className="flex items-center mr-4 mb-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-kzen-600 transition-colors duration-200">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-kzen-600 hover:text-kzen-700 font-medium mt-auto"
                    >
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
        
        {/* Case Studies Section */}
        {!searchTerm && !selectedCategory && (
          <div className="mb-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-bold mb-4">Case <span className="text-gradient">Studies</span></h2>
              <p className="text-gray-600 dark:text-gray-300">
                Real-world examples of how we've helped businesses transform and succeed
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div 
                  key={study.id}
                  className="flex flex-col md:flex-row overflow-hidden bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-full md:w-2/5 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="w-full md:w-3/5 p-6">
                    <span className="inline-block bg-kzen-600 text-white text-xs font-semibold px-2 py-1 rounded-md mb-3">
                      Case Study
                    </span>
                    <h3 className="text-xl font-bold mb-3 hover:text-kzen-600 transition-colors duration-200">
                      <Link to={`/blog/${study.id}`}>{study.title}</Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {study.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${study.id}`}
                      className="inline-flex items-center text-kzen-600 hover:text-kzen-700 font-medium"
                    >
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Newsletter Sign Up */}
        <div className="bg-kzen-900 text-white rounded-xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Stay Updated with Our Newsletter</h3>
          <p className="mb-6">Get the latest industry insights and technology news delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white dark:bg-gray-800"
            />
            <Button className="bg-kzen-600 hover:bg-kzen-700 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
