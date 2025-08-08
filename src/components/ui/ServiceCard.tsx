import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tech: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, tech }) => {
  return (
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary-200 relative">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-secondary-50/0 group-hover:from-primary-50/50 group-hover:to-secondary-50/30 transition-all duration-500 rounded-xl"></div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300 relative z-10">
            {icon}
          </div>
          <div className="bg-gray-50 px-3 py-1 rounded-full text-xs font-medium text-gray-600 transition-all duration-300 group-hover:bg-primary-100 group-hover:text-primary-700 relative z-10">
            {tech.length} Technologies
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-700 transition-colors duration-300 relative z-10">{title}</h3>
        <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300 relative z-10">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6 relative z-10">
          {tech.map((item, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-primary-50 group-hover:text-primary-700 transition-all duration-300 hover:scale-105"
            >
              {item}
            </span>
          ))}
        </div>
        
        <a 
          href="#contact" 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-all duration-300 relative z-10 group-hover:translate-x-1"
        >
          Learn More <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};