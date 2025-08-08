import React from 'react';
import { Code, Facebook, Twitter, Instagram, Linkedin, Github, ArrowUp } from 'lucide-react';

import logo from "../assets/transparent_logo.svg"
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className='col-span-2'>
            <div className="flex items-center gap-2 text-white mb-4">
              <img width={40} height={40} size={40} src={logo}/>
              <span className="font-bold text-xl">TopAi24</span>
            </div>
            <p className="mb-6 text-gray-400">
            We create cutting-edge mobile experiences that connect brands with their audiences and drive measurable results — from concept to launch. We're a fast-paced, early-stage startup focused on innovation, exceptional user experience, and real-world impact. We seamlessly integrate AI-driven solutions into our applications to make them smarter, more intuitive, and more productive. Join us on this journey as we shape the next generation of intelligent digital products.
              </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Github size={18} />
              </a>
            </div> */}
          </div>
          
          {/* <div>
            <h4 className="text-white text-lg font-medium mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition duration-300">Mobile App Development</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Custom Software</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">DevOps & Deployment</a></li>
            </ul>
          </div>
           */}
          {/* <div>
            <h4 className="text-white text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#projects" className="hover:text-white transition duration-300">Our Work</a></li>
              <li><a href="#workflow" className="hover:text-white transition duration-300">Process</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Blog</a></li>
            </ul>
          </div> */}
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              {/* <li>123 Innovation Street</li> */}
              <li>Mumbai, India</li>
              <li>topai24apps@gmail.com</li>
              {/* <li>+1 (555) 123-4567</li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} TopAi24. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
           
            
            <button 
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;