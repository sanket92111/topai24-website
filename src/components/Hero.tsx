import React from 'react';
import { ArrowRight, Code, Smartphone, Globe, Sparkles, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-accent-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="inline-flex items-center bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-primary-100">
              <Sparkles size={14} className="mr-2 text-primary-500" />
              Leading App Development Agency
              <Zap size={14} className="ml-2 text-secondary-500" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in">
              We Craft <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Digital Solutions</span> That Transform Businesses
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              From concept to launch, we build innovative apps and digital experiences that connect brands with their audiences and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
              <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                              Start Your Project <ArrowRight size={16} className="ml-2" />
                            
              </button>
              </a>
              <a href="#projects">
                <button className="border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center hover:bg-primary-50 transform hover:-translate-y-1">
                View Our Work
              </button>
              </a>
            </div>
            
            <div className="mt-12 flex items-center animate-slide-up">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="w-12 h-12 rounded-full border-3 border-white bg-gray-200 flex items-center justify-center overflow-hidden shadow-md hover:scale-110 transition-transform duration-300">
                    <img 
                      src={`https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop`} 
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="text-sm font-semibold text-gray-900">Trusted by 200+ Businesses</div>
                <div className="text-sm text-gray-600 flex items-center">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="ml-1 font-medium">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 animate-float">
              <div className="bg-white rounded-2xl shadow-2xl p-1 md:p-2 max-w-lg mx-auto overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="App development process"
                  className="w-full h-auto rounded-xl hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="absolute top-1/4 -left-4 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl p-4 hidden md:flex items-center animate-float border border-gray-100">
              <Code size={24} className="text-primary-600 mr-3" />
              <div>
                <div className="text-sm font-semibold text-gray-800">Clean Code</div>
                <div className="text-xs text-gray-500">Built for scale & performance</div>
              </div>
            </div>
            
            <div className="absolute top-2/3 -right-4 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl p-4 hidden md:flex items-center animate-float-delayed border border-gray-100">
              <Smartphone size={24} className="text-secondary-500 mr-3" />
              <div>
                <div className="text-sm font-semibold text-gray-800">Responsive Design</div>
                <div className="text-xs text-gray-500">Perfect on all devices</div>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl p-4 hidden md:flex items-center animate-float-slow border border-gray-100">
              <Globe size={24} className="text-accent-500 mr-3" />
              <div>
                <div className="text-sm font-semibold text-gray-800">Global Reach</div>
                <div className="text-xs text-gray-500">Apps in 20+ countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white via-gray-50/50 to-transparent"></div>
    </section>
  );
};

export default Hero;