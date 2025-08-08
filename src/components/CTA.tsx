import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-primary-600 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-primary-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let's bring your app idea to life. Our team is ready to help you build a solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-medium transition duration-300 inline-flex items-center justify-center"
            >
              Start Your Project <ArrowRight size={16} className="ml-2" />
            </a>
            <a 
              href="#workflow" 
              className="bg-transparent border-2 border-primary-200 text-white hover:bg-primary-700 px-8 py-4 rounded-lg font-medium transition duration-300 inline-flex items-center justify-center"
            >
              Learn How We Work
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary-500 opacity-30"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-primary-700 opacity-50"></div>
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 rounded-full bg-primary-800 opacity-30"></div>
      </div>
    </section>
  );
};

export default CTA;