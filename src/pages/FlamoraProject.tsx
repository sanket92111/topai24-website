import React from 'react';
import { ArrowLeft, ExternalLink, Github, Zap, Layers, Palette, Rocket, Code, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FlamoraProject: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
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
              <div className="inline-flex items-center bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Sparkles size={16} className="mr-2" />
                Landing Page
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Flamora
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Flamora is more than just a landing page — it's a testament to how modern web technologies can accelerate product presentations, even for solo builders. With a strong concept, smart tools, and creative direction, anyone can ship a beautiful website in record time.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Zap size={16} className="text-purple-500 mr-2" />
                  <span className="text-sm font-medium">Fast Development</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Layers size={16} className="text-purple-500 mr-2" />
                  <span className="text-sm font-medium">Modern Stack</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Palette size={16} className="text-purple-500 mr-2" />
                  <span className="text-sm font-medium">Creative Design</span>
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
              <div className="bg-white rounded-2xl shadow-2xl p-2 transform rotate-1 hover:rotate-0 transition duration-500">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Sparkles size={48} className="mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Video Preview</p>
                    <p className="text-sm opacity-80">Coming Soon</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-purple-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <Rocket size={20} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-pink-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <Code size={20} />
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
                  Create a stunning landing page that demonstrates how modern web technologies can accelerate product presentations for solo builders and small teams. The challenge was to build something beautiful and functional in record time.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">The Solution</h3>
                <p className="text-gray-600">
                  Developed a modern, responsive landing page using Next.js and cutting-edge web technologies. The project showcases rapid development capabilities while maintaining high design standards and performance optimization.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Zap size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-bold mb-2">Lightning Fast</h4>
                  <p className="text-gray-600 text-sm">Optimized for speed with Next.js and modern web technologies</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Layers size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-bold mb-2">Modern Stack</h4>
                  <p className="text-gray-600 text-sm">Built with the latest web technologies and best practices</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Palette size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-bold mb-2">Creative Design</h4>
                  <p className="text-gray-600 text-sm">Stunning visual design with attention to detail and user experience</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Rocket size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-bold mb-2">Rapid Development</h4>
                  <p className="text-gray-600 text-sm">Demonstrates how to ship beautiful websites in record time</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Code size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-bold mb-2">Clean Code</h4>
                  <p className="text-gray-600 text-sm">Well-structured, maintainable code following best practices</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-bold mb-2">Interactive Elements</h4>
                  <p className="text-gray-600 text-sm">Engaging animations and micro-interactions throughout</p>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'ESLint', 'Prettier'].map((tech, index) => (
                  <span key={index} className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Project Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">48hrs</div>
                  <p className="text-gray-600">Development Time</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">98</div>
                  <p className="text-gray-600">Lighthouse Score</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <p className="text-gray-600">Mobile Responsive</p>
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

export default FlamoraProject;