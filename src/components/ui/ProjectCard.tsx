import React, { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  featured: boolean;
  link: string
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    if (project.link.startsWith('/projects/') && !project.link.includes('.html')) {
      // For new projects, navigate to dedicated pages
      window.location.href = project.link;
    } else {
      // For existing projects, open in new tab
      window.open(project.link, '_blank');
    }
  };
  
  return (
    <div 
      onClick={handleClick}
      className="group relative rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured tag */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 bg-accent-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded">
          Featured
        </div>
      )}
      
      {/* Image container */}
      <div className="relative h-52 lg:h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-80' : 'opacity-50'
        }`}></div>
        
        {/* Category tag */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium py-1 px-2 rounded">
          {project.category}
        </div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className={`text-white/80 mb-4 line-clamp-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 max-h-20' : 'opacity-80 max-h-10'
        }`}>
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-500 ${
          isHovered ? 'opacity-100 max-h-10' : 'opacity-0 max-h-0 overflow-hidden'
        }`}>
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-white/20 backdrop-blur-sm text-white text-xs py-1 px-2 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action button */}
        <div
          className={`inline-flex items-center text-white font-medium transition-all duration-300 ${
            isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          }`}
        >
          View Project <ChevronRight size={16} className="ml-1" />
        </div>
      </div>
    </div>
  );
};