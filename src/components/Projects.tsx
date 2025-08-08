import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { ProjectCard } from './ui/ProjectCard';

// Project data
const projectsData = [
  {
    id: 1,
    title: "GTZP",
    description: "GTZP is a fun, interactive app that helps you discover and engage with nonprofits through short videos tailored to your interests.",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Mobile App",
    technologies: ["Flutter", "Firebase", "AWS" ,"Stripe"],
    featured: true,
    link:"/projects/GTZP.html"
  },
  {
    id: 2,
    title: "Poolr - Shared Cab",
    description: "🚗 Poolr is a ridesharing app built exclusively for parents of school-going kids.",
    image: "https://images.pexels.com/photos/6169870/pexels-photo-6169870.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Mobile App",
    technologies: ["Flutter", "Express", "Google Maps", "React"],
    featured: true,
    link:"/projects/Poolr.html"
  },
  {
    id: 3,
    title: "Calorii - Fitness Tracker",
    description: "A comprehensive health monitoring solution that tracks workouts, nutrition, and wellness metrics.",
    image: "https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Mobile App",
    technologies: ["Flutter", "Firebase", "Youtube"],
    featured: true,
    link:"/projects/Calorii.html"
  },
  {
    id: 4,
    title: "Gumbo - Capture. Share. Relive",
    description: "It’s a Gumbo blends a delicious stew of shared memories. We invite you to pour in joyful photos and videos, creating a heartwarming feast of shared experiences",
    image: "https://images.pexels.com/photos/5081917/pexels-photo-5081917.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Mobile App",
    technologies: ["Flutter", "Firebase", "Laravel"],
    featured: false,
    link:"/projects/Gumbo.html"
  },
  {
    id: 5,
    title: "Willow - E-commerce Platform",
    description: "A comprehensive online shopping platform with inventory management and analytics.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Mobile App",
    technologies: ["Flutter", "Firebase", "Laravel"],
    featured: false,
    link:"/projects/Willow.html"
  },
  {
    id: 6,
    title: "Simplify - Project Management",
    description: "A streamlined project management tool for teams with task tracking and collaboration features.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Web App",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    featured: false,
    link:"/"
  }
];

const categories = ["All", "Mobile App", "Web App", "E-commerce", "Enterprise"];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(3);

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const showMoreProjects = () => {
    setVisibleProjects(prevCount => Math.min(prevCount + 3, filteredProjects.length));
  };
  // return <iframe src="https://versed-mole-0b1.notion.site/ebd/1f0eb79c9fa48033b2e8dc760511af53?v=1f0eb79c9fa48125a499000c571c49d1" width="100%" height="800" frameborder="0" allowfullscreen />
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase font-bold tracking-wider text-primary-600 mb-3">Our Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our collection of successful applications and digital solutions we've delivered for our clients.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
                  ${activeCategory === category 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleProjects(3);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {visibleProjects < filteredProjects.length && (
          <div className="mt-12 text-center">
            <button 
              onClick={showMoreProjects}
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-300"
            >
              Load More Projects <ChevronRight size={16} className="ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;