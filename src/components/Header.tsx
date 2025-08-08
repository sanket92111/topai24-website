import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Code, Smartphone } from 'lucide-react';
import { NavLink } from './ui/NavLink';
import logo from "../assets/transparent_logo.svg"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-2 text-primary-600">
              {/* <Code size={28} className="text-primary-600" /> */}
              <img width={40} height={40} size={40} src={logo}/>
              <span className="font-bold text-xl md:text-2xl">TopAi24</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#workflow">Workflow</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <NavLink href="#contact">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md transition duration-300 flex items-center">
              Get Started <ChevronRight size={16} className="ml-1" />
            </button>
            </NavLink>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 hover:text-primary-600 transition duration-300"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'
      } bg-white/95 backdrop-blur-md overflow-hidden`}>
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <NavLink href="#services" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
          <NavLink href="#workflow" onClick={() => setIsMenuOpen(false)}>Workflow</NavLink>
          <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
          <NavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</NavLink>
          <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-md transition duration-300 flex items-center justify-center">
            Get Started <ChevronRight size={16} className="ml-1" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;