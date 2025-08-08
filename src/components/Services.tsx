import React from 'react';
import { Smartphone, Globe, Code, Rocket, Lightbulb, AtomIcon} from 'lucide-react';
import { ServiceCard } from './ui/ServiceCard';

const servicesData = [
  {
    icon: <Smartphone className="text-primary-600" size={24} />,
    title: "Mobile App Development",
    description: "Native and cross-platform apps with exceptional UX for iOS and Android devices.",
    tech: ["Flutter", "Swift", "Kotlin"]
  },
  {
    icon: <Globe className="text-primary-600" size={24} />,
    title: "Web Development",
    description: "Responsive, fast, and user-friendly web applications built with modern technologies.",
    tech: ["React", "Node.js", "Next.js"]
  },
  {
    icon: <Code className="text-primary-600" size={24} />,
    title: "Custom Software",
    description: "Tailored solutions for businesses with specific needs and integration requirements.",
    tech: ["AWS", "Azure", "Python"]
  },
  {
    icon: <Lightbulb className="text-primary-600" size={24} />,
    title: "UI/UX Design",
    description: "User-centered design focused on creating intuitive and engaging digital experiences.",
    tech: ["Figma", "Adobe XD", "Sketch"]
  },
  {
    icon: <AtomIcon className="text-primary-600" size={24} />,
    title: "Artificial Intelligence",
    description: "Integration and Development of AI into your Applications.",
    tech: ["Gemini", "ChatGpt", "Sora", "Tensorflow"]
  },
  {
    icon: <Rocket className="text-primary-600" size={24} />,
    title: "DevOps & Deployment",
    description: "Streamlined deployment processes ensuring reliable and scalable applications.",
    tech: ["Docker", "Kubernetes", "CI/CD"]
  },
  
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
      
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase font-bold tracking-wider text-primary-600 mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Digital Solutions</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer end-to-end services to design, develop, and deploy applications that meet your business objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tech={service.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;