import React from 'react';
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="inline-flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <span className="mr-1">●</span> Leading App Development Agency
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              We Craft <span className="text-primary-600">Digital Solutions</span> That Transform Businesses
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              From concept to launch, we build innovative apps and digital experiences that connect brands with their audiences and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md transition duration-300 flex items-center justify-center">
                              Start Your Project <ArrowRight size={16} className="ml-2" />
                            
              </button>
              </a>
              <a href="#projects">
                <button className="border border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-8 py-3 rounded-md transition duration-300 flex items-center justify-center">
                View Our Work
              </button>
              </a>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop`} 
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">Trusted by 200+ Businesses</div>
                <div className="text-sm text-gray-600">⭐⭐⭐⭐⭐ 4.9/5 Rating</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl p-1 md:p-2 max-w-lg mx-auto overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="App development process"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
            
            {/* <div className="absolute top-1/4 -left-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-4 hidden md:flex items-center animate-float">
              <Code size={24} className="text-primary-600 mr-3" />
              <div>
                <div className="text-sm font-medium">Clean Code</div>
                <div className="text-xs text-gray-500">Built for scale & performance</div>
              </div>
            </div>
            
            <div className="absolute top-2/3 -right-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-4 hidden md:flex items-center animate-float-delayed">
              <Smartphone size={24} className="text-secondary-500 mr-3" />
              <div>
                <div className="text-sm font-medium">Responsive Design</div>
                <div className="text-xs text-gray-500">Perfect on all devices</div>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-4 hidden md:flex items-center animate-float-slow">
              <Globe size={24} className="text-accent-500 mr-3" />
              <div>
                <div className="text-sm font-medium">Global Reach</div>
                <div className="text-xs text-gray-500">Apps in 20+ countries</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;