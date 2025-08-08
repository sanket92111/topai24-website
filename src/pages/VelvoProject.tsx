import React from 'react';
import { ArrowLeft, ExternalLink, Github, Globe, Smartphone, Users, ShoppingCart, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VelvoProject: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 md:px-6">
          <button 
            onClick={goBack}
            className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 transition duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Globe size={16} className="mr-2" />
                Restaurant Website
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Velvo Restaurant Website
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A premium Indian restaurant website that provides a complete digital experience for customers with sophisticated design, smooth animations, comprehensive menu display, and online ordering integration.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Users size={16} className="text-orange-500 mr-2" />
                  <span className="text-sm font-medium">Customer Experience</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <ShoppingCart size={16} className="text-orange-500 mr-2" />
                  <span className="text-sm font-medium">Online Ordering</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Calendar size={16} className="text-orange-500 mr-2" />
                  <span className="text-sm font-medium">Table Booking</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center">
                  <ExternalLink size={16} className="mr-2" />
                  View Live Site
                </button>
                <button className="border border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center">
                  <Github size={16} className="mr-2" />
                  View Code
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-2 transform rotate-2 hover:rotate-0 transition duration-500">
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Globe size={48} className="mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Video Preview</p>
                    <p className="text-sm opacity-80">Coming Soon</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <Smartphone size={20} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-red-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <ShoppingCart size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                <p className="text-gray-600">
                  Create a modern, engaging restaurant website that showcases authentic Indian cuisine while providing seamless online ordering and table booking functionality. The site needed to reflect the premium dining experience and cultural richness of Indian food.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">The Solution</h3>
                <p className="text-gray-600">
                  Developed a sophisticated website with smooth animations, comprehensive menu display, integrated online ordering system, table booking functionality, and customer engagement features. Built with modern web technologies for optimal performance.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Globe size={24} className="text-orange-600" />
                  </div>
                  <h4 className="font-bold mb-2">Sophisticated Design</h4>
                  <p className="text-gray-600 text-sm">Modern, elegant design with smooth animations and premium visual aesthetics</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <ShoppingCart size={24} className="text-orange-600" />
                  </div>
                  <h4 className="font-bold mb-2">Online Ordering</h4>
                  <p className="text-gray-600 text-sm">Integrated ordering system with cart functionality and payment processing</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Calendar size={24} className="text-orange-600" />
                  </div>
                  <h4 className="font-bold mb-2">Table Booking</h4>
                  <p className="text-gray-600 text-sm">Real-time table reservation system with availability checking</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Smartphone size={24} className="text-orange-600" />
                  </div>
                  <h4 className="font-bold mb-2">Responsive Design</h4>
                  <p className="text-gray-600 text-sm">Optimized for all devices with exceptional mobile experience</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users size={24} className="text-orange-600" />
                  </div>
                  <h4 className="font-bold mb-2">Customer Engagement</h4>
                  <p className="text-gray-600 text-sm">Interactive features to enhance customer experience and loyalty</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Globe size={24} className="text-orange-600" />
                  </div>
                  <h4 className="font-bold mb-2">Menu Display</h4>
                  <p className="text-gray-600 text-sm">Comprehensive menu with high-quality images and detailed descriptions</p>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB', 'Stripe API', 'Vercel'].map((tech, index) => (
                  <span key={index} className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Project Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">40%</div>
                  <p className="text-gray-600">Increase in Online Orders</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">60%</div>
                  <p className="text-gray-600">More Table Bookings</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                  <p className="text-gray-600">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VelvoProject;