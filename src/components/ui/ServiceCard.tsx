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
    <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center">
            {icon}
          </div>
          <div className="bg-gray-50 px-3 py-1 rounded-full text-xs font-medium text-gray-600 transition-all duration-300 group-hover:bg-primary-50 group-hover:text-primary-600">
            {tech.length} Technologies
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>
        
        <a 
          href="#contact" 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition duration-300"
        >
          Learn More <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};