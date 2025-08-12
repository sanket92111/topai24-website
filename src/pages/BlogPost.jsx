import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Heart, MessageCircle, Bookmark, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import StructuredData, { getStructuredData } from '../components/StructuredData';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Blog posts data (in a real app, this would come from an API)
  const blogPosts = [
    {
      id: 'react-native-vs-flutter-2025',
      slug: 'react-native-vs-flutter-2025',
      title: 'React Native vs Flutter in 2025: The Ultimate Comparison',
      excerpt: 'A comprehensive analysis of the two leading cross-platform frameworks, comparing performance, development experience, and ecosystem maturity.',
      content: `
        <h2>Introduction</h2>
        <p>In the rapidly evolving world of mobile development, choosing the right cross-platform framework can make or break your project. As we move through 2025, React Native and Flutter continue to dominate the landscape, each with its unique strengths and considerations.</p>
        
        <h2>Performance Comparison</h2>
        <p>Flutter's compiled nature gives it a slight edge in performance, especially for graphics-intensive applications. React Native has significantly improved with the new architecture (Fabric and TurboModules), closing the performance gap considerably.</p>
        
        <h3>Key Performance Metrics:</h3>
        <ul>
          <li><strong>Startup Time:</strong> Flutter leads with faster cold starts</li>
          <li><strong>Animation Performance:</strong> Flutter's 60fps guarantee vs React Native's improved but variable performance</li>
          <li><strong>Memory Usage:</strong> React Native generally uses less memory</li>
        </ul>
        
        <h2>Development Experience</h2>
        <p>React Native offers a more familiar experience for web developers, leveraging JavaScript and React concepts. Flutter introduces Dart, which has a steeper learning curve but offers excellent tooling and hot reload capabilities.</p>
        
        <h2>Ecosystem and Community</h2>
        <p>React Native benefits from the massive JavaScript ecosystem and has been around longer, resulting in more third-party packages. Flutter's ecosystem is rapidly growing with strong backing from Google.</p>
        
        <h2>Conclusion</h2>
        <p>Both frameworks are excellent choices in 2025. Choose React Native if you have a web development background and need extensive third-party integrations. Choose Flutter if you prioritize performance and don't mind learning Dart.</p>
      `,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile Development',
      author: 'TopAi24 Team',
      date: '2025-01-15',
      readTime: '8 min read',
      featured: true,
      tags: ['React Native', 'Flutter', 'Mobile Development', 'Cross-platform']
    },
    {
      id: 'ai-integration-mobile-apps',
      slug: 'ai-integration-mobile-apps',
      title: 'AI Integration in Mobile Apps: Best Practices and Implementation',
      excerpt: 'Learn how to seamlessly integrate AI capabilities into your mobile applications with practical examples and implementation strategies.',
      content: `
        <h2>The AI Revolution in Mobile</h2>
        <p>Artificial Intelligence is no longer a futuristic concept—it's a present reality transforming how we interact with mobile applications. From personalized recommendations to intelligent automation, AI is becoming an essential component of modern mobile development.</p>
        
        <h2>Popular AI Integration Patterns</h2>
        <h3>1. Machine Learning Models</h3>
        <p>Integrate pre-trained models for image recognition, natural language processing, and predictive analytics.</p>
        
        <h3>2. Cloud AI Services</h3>
        <p>Leverage services like Google Cloud AI, AWS AI/ML, or Azure Cognitive Services for powerful AI capabilities without the infrastructure overhead.</p>
        
        <h3>3. On-Device AI</h3>
        <p>Use frameworks like TensorFlow Lite or Core ML for privacy-focused, offline AI processing.</p>
        
        <h2>Implementation Best Practices</h2>
        <ul>
          <li><strong>Start Small:</strong> Begin with simple AI features and gradually expand</li>
          <li><strong>User Privacy:</strong> Always prioritize user data protection and transparency</li>
          <li><strong>Fallback Mechanisms:</strong> Ensure your app works even when AI services are unavailable</li>
          <li><strong>Performance Optimization:</strong> Balance AI capabilities with app performance</li>
        </ul>
        
        <h2>Real-World Examples</h2>
        <p>We've successfully integrated AI into various projects, including personalized fitness recommendations, intelligent chatbots, and automated content moderation systems.</p>
        
        <h2>Future Outlook</h2>
        <p>As AI technology continues to advance, we expect to see more sophisticated integrations, including real-time language translation, advanced computer vision, and predictive user interfaces.</p>
      `,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'AI & Machine Learning',
      author: 'TopAi24 Team',
      date: '2025-01-12',
      readTime: '12 min read',
      featured: true,
      tags: ['AI', 'Machine Learning', 'Mobile Apps', 'Integration']
    }
  ];

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost);
    
    if (foundPost) {
      // Get related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
      
      // Update page title for SEO
      document.title = `${foundPost.title} | TopAi24 Blog`;
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {post && (
        <>
          <SEOHead 
            title={`${post.title} | TopAi24 Blog`}
            description={post.excerpt}
            keywords={post.tags.join(', ')}
            image={post.image}
            type="article"
          />
          <StructuredData data={getStructuredData('article', post)} />
        </>
      )}
    <div className="min-h-screen pt-24 bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
            <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </div>
          </div>

          {/* Article Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Article Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Social Actions */}
          <div className="flex items-center space-x-4 mb-12 pb-8 border-b border-gray-200">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors duration-300"
            >
              <Heart className="w-4 h-4" />
              <span>Like</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-100 transition-colors duration-300"
            >
              <Bookmark className="w-4 h-4" />
              <span>Save</span>
            </motion.button>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: '1.8',
              fontSize: '1.125rem'
            }}
          />

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium cursor-pointer hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300"
                      >
                        Read More
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and bring your ideas to life with cutting-edge technology.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-xl"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default BlogPost;