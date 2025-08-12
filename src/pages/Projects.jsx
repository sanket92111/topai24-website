import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles, Zap, Star, Eye } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import taskoraBanner from '../projects/Taskora/Taskora_banner.jpg';
import fitnessBanner from '../projects/Fitness Application/fitness_banner.png';
import jobAiBanner from '../projects/Job Ai/aijob_banner.png';
import fashionSocialBanner from '../projects/Style Connect/fashion_social_banner.png';
import eventraBanner from '../projects/eventra/eventra_banner.png';
import wellnessBanner from '../projects/Mental Wellness/wellness_banner.png';

const Projects = () => {
  const projects = [
    {
      id: 'velvo-restaurant',
      title: 'Velvo Restaurant Website',
      description: 'Velvo is a premium Indian restaurant website that provides a complete digital experience for customers. The website features a sophisticated design with smooth animations, comprehensive menu display, online ordering integration, table booking functionality, and customer engagement features. Built with modern web technologies, it offers an exceptional user experience across all devices.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      featured: true,
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 'apex-financials',
      title: 'Apex Financials – Professional CA Website',
      description: 'A comprehensive, production-ready website for Chartered Accountant services built with React, TypeScript, and Tailwind CSS. This modern, responsive website showcases professional CA services with interactive features and excellent user experience.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      featured: true,
      technologies: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 'flamora',
      title: 'Flamora', 
      description: 'Flamora is more than just a landing page — it\'s a testament to how modern web technologies can accelerate product presentations, even for solo builders. With a strong concept, smart tools, and creative direction, anyone can ship a beautiful website in record time.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile App',
      featured: true,
      technologies: ['React Native', 'Firebase', 'Node.js']
    },
    {
      id: 'GTZP',
      title: 'GTZP',
      description: 'GTZP is a fun, interactive app that helps you discover and engage with community-driven short videos.',
      image: 'https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile App',
      featured: true,
      technologies: ['Flutter', 'Firebase', 'Node.js']
    },
    {
      id: 'Taskora',
      title: 'Taskora',
      description: 'Taskora GTZP is a mobile freelance marketplace application that connects clients with freelancers',
      image: taskoraBanner,
      category: 'Mobile App',
      featured: true,
      technologies: ['Flutter', 'Firebase', 'Node.js']
    },
    {
      id: 'fitness_application',
      title: 'Fitness Application',
      description: 'This is a fitness coaching and trainee management app that bridges the gap between trainers and their clients.',
      image: fitnessBanner,
      category: 'Mobile App',
      featured: true,
      technologies: ['Flutter', 'Firebase', 'Node.js']
    },
    {
      id: 'jobai',
      title: 'Job Ai',
      description: 'An AI-powered recruitment and job-matching mobile application designed for both job seekers and recruiters.',
      image: jobAiBanner,
      category: 'Mobile App',
      featured: true,
      technologies: ['Flutter', 'Firebase', 'Node.js']
    },
    {
      id: 'styleconnect',
      title: 'Style Connect',
      description: 'StyleConnect - Social Commerce Platform.',
      image: fashionSocialBanner,
      category: 'Mobile App',
      featured: true,
      technologies: ['Flutter', 'Firebase', 'Node.js']
    },
    {
      id: 'retailpulse',
      title: 'RetailPulse',
      description: 'RetailPulse - Mobile POS Management System.',
      image: 'https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile App',
      featured: true,
      technologies: ['Flutter', 'Firebase', 'Node.js']
    },
    {
      id: 'wellness',
      title: 'Wellness Application',
      description: 'Your mindful companion — one day at a time.',
      image: wellnessBanner,
      category: 'Mobile App',
      featured: true,
      technologies: ['Flutter', 'Firebase', 'Node.js']
    },
    {
      id: 'eventra',
      title: 'Eventra',
      description: 'A mobile-first event discovery and social engagement platform that helps users find events, RSVP, create their own events, and connect with like-minded people.',
      image: eventraBanner,
      category: 'Mobile App',
      featured: true,
      technologies: ['Flutter', 'Firebase', 'Node.js']
    },
    {
      id: 'Poolr',
      title: 'Poolr - Shared Cab',
      description: 'Poolr is a ridesharing app built exclusively for parents of school-going kids.',
      image: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile App',
      featured: true,
      technologies: ['React Native', 'Firebase', 'Google Maps API']
    },
    {
      id: 'Calorii',
      title: 'Calorii - Fitness Tracker',
      description: 'A comprehensive health monitoring solution that tracks workouts, nutrition, and wellness metrics.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile App',
      featured: true,
      technologies: ['React Native', 'HealthKit', 'Firebase']
    },
    {
      id: 'Gumbo',
      title: 'Gumbo - Capture. Share. Relive',
      description: 'It\'s a Gumbo blends a delicious stew of shared memories. We invite you to pour in joyful photos and videos.',
      image: 'https://images.pexels.com/photos/1174775/pexels-photo-1174775.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile App',
      featured: false,
      technologies: ['React Native', 'AWS S3', 'Node.js']
    },
    {
      id: 'Willow',
      title: 'Willow - E-commerce Platform',
      description: 'A comprehensive online shopping platform with inventory management and analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'E-commerce',
      featured: false,
      technologies: ['Flutter', 'Firebase', 'Laravel']
    },
    {
      id: 'simplify-project-management',
      title: 'Simplify - Project Management',
      description: 'A streamlined project management tool for teams with task tracking and collaboration features.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      featured: false,
      technologies: ['React', 'Node.js', 'PostgreSQL']
    }
  ];

  const categories = ['All', 'Mobile App', 'Web App', 'E-commerce', 'Enterprise'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <SEOHead 
        title="Our Projects - TopAi24 Portfolio | Mobile Apps & Web Development"
        description="Explore our portfolio of successful mobile apps and web applications. From e-commerce platforms to AI-powered solutions, see how we've helped 500+ clients achieve their goals."
        keywords="mobile app portfolio, web development projects, React Native apps, Flutter applications, AI integration projects, Mumbai app development"
      />
    <div className="min-h-screen pt-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 relative">
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-red-400/20 rotate-45"
          />
        </div>

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold uppercase tracking-wide">OUR PORTFOLIO</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Recent Projects
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Explore our collection of successful applications and digital solutions we've delivered for our clients.
            </motion.p>

            {/* Animated Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center items-center space-x-8 mt-8"
            >
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl font-bold text-blue-600"
                >
                  {filteredProjects.length}+
                </motion.div>
                <p className="text-gray-600">Projects</p>
              </div>
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-3xl font-bold text-purple-600"
                >
                  100%
                </motion.div>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Animated Border */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                    backgroundSize: '400% 400%',
                    animation: 'gradient 3s ease infinite',
                    padding: '2px',
                  }}
                >
                  <div className="w-full h-full bg-white rounded-2xl" />
                </motion.div>

                {project.featured && (
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 left-4 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center"
                  >
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    FEATURED
                  </motion.div>
                )}
                
                <div className="relative overflow-hidden z-10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        onClick={() => window.open(`/src/projects/${project.id}.html`, '_blank')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 flex items-center shadow-xl"
                      >
                        <Eye className="mr-2 w-4 h-4" />
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
                
                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {project.category}
                    </motion.span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 relative">
                    {project.title}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                    />
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-2 py-1 rounded text-xs font-medium shadow-sm hover:shadow-md transition-shadow"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`/src/projects/${project.id}.html`, '_blank');
                    }}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 group-hover:translate-x-2 transform"
                  >
                    View Project
                    <motion.div
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white rounded-full opacity-10"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <motion.h2 
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your ideas and create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg group shadow-2xl hover:shadow-3xl"
              >
                <Zap className="mr-2 w-5 h-5" />
                Get Started Today
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Projects;