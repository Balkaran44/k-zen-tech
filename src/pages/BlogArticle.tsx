import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Calendar, User, Clock, Share, Bookmark, ThumbsUp, MessageSquare } from 'lucide-react';

const blogData = [
  {
    id: 1,
    title: 'The Future of AI-Driven Business Intelligence',
    category: 'Artificial Intelligence',
    author: 'Dr. Rajiv Kumar',
    authorRole: 'Chief Data Scientist',
    date: 'Jun 15, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    content: `
      <p class="lead">Artificial Intelligence is revolutionizing how businesses analyze and leverage their data, creating unprecedented opportunities for growth and efficiency.</p>
      
      <p>In today's data-driven world, businesses are constantly seeking ways to gain competitive advantages through better insights. Traditional business intelligence tools, while useful, often fall short in handling the volume, variety, and velocity of modern data. This is where AI-driven business intelligence comes in, transforming raw data into actionable insights with minimal human intervention.</p>
      
      <h2>The Evolution of Business Intelligence</h2>
      
      <p>Business intelligence has come a long way from static reports and basic dashboards. The evolution has been marked by several key transitions:</p>
      
      <ul>
        <li><strong>Descriptive Analytics</strong>: Understanding what happened</li>
        <li><strong>Diagnostic Analytics</strong>: Understanding why it happened</li>
        <li><strong>Predictive Analytics</strong>: Forecasting what might happen</li>
        <li><strong>Prescriptive Analytics</strong>: Determining what should be done</li>
      </ul>
      
      <p>AI is accelerating this evolution, pushing the boundaries of what's possible with business intelligence. Machine learning algorithms can analyze vast datasets, identify patterns that humans might miss, and make predictions with increasing accuracy.</p>
      
      <h2>Key Benefits of AI-Driven Business Intelligence</h2>
      
      <p>The integration of AI into business intelligence offers numerous advantages:</p>
      
      <h3>1. Enhanced Data Processing</h3>
      <p>AI can process and analyze large volumes of structured and unstructured data from various sources, providing a more comprehensive view of business operations and market trends.</p>
      
      <h3>2. Predictive Capabilities</h3>
      <p>AI algorithms can forecast future trends, customer behaviors, and market changes, enabling proactive decision-making rather than reactive responses.</p>
      
      <h3>3. Automated Insights</h3>
      <p>AI can automatically identify significant patterns, anomalies, and correlations within data, directing attention to areas that require human intervention or offer opportunities.</p>
      
      <h3>4. Personalized Reporting</h3>
      <p>AI can tailor reports and dashboards based on user roles, preferences, and historical interactions, ensuring each stakeholder receives relevant information.</p>
      
      <h2>Challenges and Considerations</h2>
      
      <p>Despite its potential, implementing AI-driven business intelligence comes with challenges:</p>
      
      <p><strong>Data Quality</strong>: AI systems are only as good as the data they're trained on. Ensuring data quality, consistency, and relevance is crucial.</p>
      
      <p><strong>Integration Complexity</strong>: Integrating AI capabilities with existing systems and workflows can be complex and require significant resources.</p>
      
      <p><strong>Skills Gap</strong>: Organizations may lack the skills needed to develop, implement, and maintain AI-driven business intelligence solutions.</p>
      
      <p><strong>Ethical Considerations</strong>: AI systems must be designed and used responsibly, with attention to privacy, bias, and transparency.</p>
      
      <h2>The Road Ahead</h2>
      
      <p>The future of AI-driven business intelligence is promising, with several trends emerging:</p>
      
      <p><strong>Natural Language Processing</strong>: Enabling users to interact with data using conversational language, making insights more accessible to non-technical users.</p>
      
      <p><strong>Augmented Analytics</strong>: Combining human expertise with machine intelligence to enhance the analysis process and decision-making.</p>
      
      <p><strong>Edge Analytics</strong>: Processing data closer to its source, reducing latency and enabling real-time insights, particularly important for IoT applications.</p>
      
      <p><strong>Explainable AI</strong>: Developing AI systems that can explain their reasoning and decisions, increasing trust and adoption.</p>
      
      <h2>Conclusion</h2>
      
      <p>AI-driven business intelligence represents a significant leap forward in how organizations harness their data. By automating complex analytical processes, predicting future trends, and providing actionable insights, AI is enabling businesses to make more informed decisions, improve operational efficiency, and gain competitive advantages. While challenges exist, the potential benefits make AI-driven business intelligence an essential consideration for forward-thinking organizations.</p>
    `
  },
  {
    id: 4,
    title: 'Human Mapping Technology: The Next Frontier',
    category: 'Technology',
    author: 'Anil Sharma',
    authorRole: 'Head of Innovation',
    date: 'Jul 05, 2023',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    content: `
      <p class="lead">Human mapping technology is emerging as a transformative force across industries, from healthcare to urban planning, revolutionizing how we understand and interact with our physical and social environments.</p>
      
      <p>The concept of human mapping extends far beyond traditional geographic information systems. It encompasses a range of technologies that capture, analyze, and visualize human behavior, movement, and interactions. As these technologies advance, they're opening up new possibilities for understanding and improving our world.</p>
      
      <h2>What is Human Mapping Technology?</h2>
      
      <p>Human mapping technology refers to a suite of tools and methods that collect data about human activities, behaviors, and characteristics, and represent this information spatially. This includes:</p>
      
      <ul>
        <li><strong>Biometric Mapping</strong>: Capturing and analyzing physical characteristics and physiological data</li>
        <li><strong>Behavioral Mapping</strong>: Tracking and analyzing movement patterns and behaviors</li>
        <li><strong>Social Mapping</strong>: Visualizing social networks and interactions</li>
        <li><strong>Cognitive Mapping</strong>: Understanding how humans perceive and navigate their environment</li>
      </ul>
      
      <p>These technologies leverage advances in sensors, artificial intelligence, and data visualization to create increasingly detailed and accurate representations of human activity and characteristics.</p>
      
      <h2>Applications Across Industries</h2>
      
      <h3>Healthcare and Medicine</h3>
      <p>Human mapping is revolutionizing healthcare through applications such as:</p>
      <ul>
        <li>Detailed brain mapping for improved neurological treatments</li>
        <li>Body mapping for personalized medicine and surgical planning</li>
        <li>Epidemic mapping to track and contain disease spread</li>
        <li>Genetic mapping for targeted therapies and preventive care</li>
      </ul>
      
      <p>These applications are enabling more precise diagnoses, personalized treatments, and better healthcare delivery systems.</p>
      
      <h3>Urban Planning and Design</h3>
      <p>Cities are becoming smarter through human mapping technologies that:</p>
      <ul>
        <li>Track pedestrian and vehicle flow to optimize traffic systems</li>
        <li>Map usage patterns of public spaces to inform design decisions</li>
        <li>Analyze population density and movement to improve infrastructure planning</li>
        <li>Model emergency scenarios for better disaster preparedness</li>
      </ul>
      
      <p>These insights are helping create more livable, efficient, and resilient urban environments.</p>
      
      <h3>Retail and Customer Experience</h3>
      <p>Businesses are enhancing customer experiences by:</p>
      <ul>
        <li>Mapping in-store customer movements to optimize layouts</li>
        <li>Analyzing online behavior patterns to personalize shopping experiences</li>
        <li>Identifying demographic patterns to inform marketing strategies</li>
        <li>Visualizing customer journeys across multiple touchpoints</li>
      </ul>
      
      <p>These applications are helping retailers create more engaging and efficient shopping experiences while improving operational efficiency.</p>
      
      <h3>Social Sciences and Research</h3>
      <p>Researchers are gaining new insights through:</p>
      <ul>
        <li>Mapping social networks and influence patterns</li>
        <li>Visualizing cultural and behavioral differences across populations</li>
        <li>Tracking changes in population characteristics over time</li>
        <li>Analyzing migration patterns and their impacts</li>
      </ul>
      
      <p>These applications are deepening our understanding of human societies and helping address complex social challenges.</p>
      
      <h2>Technological Foundations</h2>
      
      <p>Human mapping technology relies on several key technological components:</p>
      
      <h3>Data Collection</h3>
      <p>Advanced sensors, wearable devices, smartphones, cameras, and IoT devices capture vast amounts of data about human activities and characteristics. These range from simple location data to complex biometric information.</p>
      
      <h3>Data Processing and Analysis</h3>
      <p>Artificial intelligence, particularly machine learning algorithms, processes and analyzes the collected data, identifying patterns, anomalies, and correlations that would be impossible for humans to detect manually.</p>
      
      <h3>Visualization and Interaction</h3>
      <p>Advanced visualization tools convert complex data into intuitive visual representations, making the information accessible and actionable. These include 2D and 3D mapping interfaces, augmented reality overlays, and interactive dashboards.</p>
      
      <h2>Ethical Considerations and Challenges</h2>
      
      <p>The power of human mapping technology brings significant ethical challenges:</p>
      
      <p><strong>Privacy Concerns</strong>: The collection of detailed data about individuals raises serious privacy concerns. Balancing the benefits of human mapping with the right to privacy is a complex challenge.</p>
      
      <p><strong>Data Security</strong>: The sensitive nature of human mapping data makes security a critical concern. Breaches could have serious consequences for individuals and organizations.</p>
      
      <p><strong>Algorithmic Bias</strong>: The algorithms that analyze human mapping data may perpetuate or amplify existing biases, leading to unfair or discriminatory outcomes.</p>
      
      <p><strong>Consent and Transparency</strong>: Ensuring that individuals understand how their data is being collected and used, and obtaining meaningful consent, is challenging but essential.</p>
      
      <h2>The Future of Human Mapping</h2>
      
      <p>Looking ahead, several trends are likely to shape the evolution of human mapping technology:</p>
      
      <p><strong>Integration of Multiple Data Types</strong>: Future systems will combine different types of human data—physical, behavioral, social, and cognitive—to create more comprehensive and nuanced maps.</p>
      
      <p><strong>Real-time Mapping and Analysis</strong>: Advances in computing power and data processing will enable more real-time mapping and analysis, allowing for more immediate responses and interventions.</p>
      
      <p><strong>Predictive Capabilities</strong>: Human mapping will increasingly move from descriptive to predictive, forecasting behaviors, trends, and needs before they occur.</p>
      
      <p><strong>Democratization</strong>: As tools become more accessible and user-friendly, human mapping capabilities will extend beyond experts to a wider range of users and applications.</p>
      
      <h2>Conclusion</h2>
      
      <p>Human mapping technology represents a profound shift in how we understand and interact with our world. By capturing, analyzing, and visualizing human data in new ways, these technologies are opening up unprecedented possibilities across industries and disciplines. While challenges remain, particularly around ethics and privacy, the potential benefits are enormous. As these technologies continue to evolve, they will likely play an increasingly important role in shaping our societies, economies, and individual lives.</p>
      
      <p>For organizations looking to leverage human mapping technology, now is the time to explore its possibilities, while also engaging thoughtfully with the ethical and practical challenges it presents. Those who can navigate these complexities successfully will be well-positioned to reap the benefits of this transformative technological frontier.</p>
    `
  }
];

const BlogArticle = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<any>(null);
  
  useEffect(() => {
    if (id) {
      const articleData = blogData.find(post => post.id === parseInt(id));
      if (articleData) {
        setArticle(articleData);
        // Scroll to top when article loads
        window.scrollTo(0, 0);
      }
    }
  }, [id]);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold">Article not found</h2>
          <p className="mt-4">The article you are looking for may have been moved or deleted.</p>
          <Link to="/blog" className="mt-6 inline-block text-kzen-600 hover:text-kzen-700">
            <ArrowLeft className="inline mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Navbar />
      
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-kzen-600 hover:text-kzen-700 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
          
          <div className="mb-8">
            <span className="inline-block bg-kzen-600 text-white text-xs font-semibold px-2 py-1 rounded-md mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 text-sm mb-6">
              <div className="flex items-center mr-6 mb-2">
                <User className="h-4 w-4 mr-2" />
                <span>{article.author}, {article.authorRole}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden mb-10">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
          
          <div className="prose dark:prose-invert lg:prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <div className="flex flex-wrap justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-kzen-600 dark:hover:text-kzen-400">
                <ThumbsUp className="h-5 w-5 mr-2" />
                <span>Like</span>
              </button>
              <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-kzen-600 dark:hover:text-kzen-400">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span>Comment</span>
              </button>
              <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-kzen-600 dark:hover:text-kzen-400">
                <Bookmark className="h-5 w-5 mr-2" />
                <span>Save</span>
              </button>
            </div>
            
            <div>
              <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-kzen-600 dark:hover:text-kzen-400">
                <Share className="h-5 w-5 mr-2" />
                <span>Share Article</span>
              </button>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogArticle;
