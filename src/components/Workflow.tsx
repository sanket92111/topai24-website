import React from 'react';
import { FileSearch, PenTool, Code2, TestTube, Rocket, RotateCw } from 'lucide-react';

const workflowSteps = [
  {
    icon: <FileSearch size={24} />,
    title: "Discovery & Planning",
    description: "We analyze your requirements, research your industry, and develop a strategic roadmap for your project.",
    number: "01"
  },
  {
    icon: <PenTool size={24} />,
    title: "UI/UX Design",
    description: "Our designers create intuitive interfaces and user flows that align with your brand and business goals.",
    number: "02"
  },
  {
    icon: <Code2 size={24} />,
    title: "Development",
    description: "Expert developers build your application using best practices and modern technologies.",
    number: "03"
  },
  {
    icon: <TestTube size={24} />,
    title: "Testing & QA",
    description: "Rigorous testing ensures your application functions flawlessly across all platforms and devices.",
    number: "04"
  },
  {
    icon: <Rocket size={24} />,
    title: "Deployment",
    description: "We handle the technical details of launching your application to production environments.",
    number: "05"
  },
  {
    icon: <RotateCw size={24} />,
    title: "Maintenance & Support",
    description: "Ongoing technical support, updates, and iterations to keep your application running optimally.",
    number: "06"
  }
];

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase font-bold tracking-wider text-primary-600 mb-3">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our proven development methodology ensures transparent communication and exceptional results from concept to completion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {workflowSteps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="flex items-start">
                <div className="relative">
                  <div className="h-14 w-14 rounded-full bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center transition duration-300">
                    <div className="text-primary-600">
                      {step.icon}
                    </div>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute h-full w-px bg-primary-200 top-14 left-1/2 transform -translate-x-1/2 md:hidden lg:block"></div>
                  )}
                </div>
                
                <div className="ml-4">
                  <div className="top-0 left-20 text-4xl font-bold text-gray-500 select-none">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;