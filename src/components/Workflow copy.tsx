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

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[45px] top-0 bottom-0 w-px bg-primary-200 md:left-1/2 md:-translate-x-px"></div>

          <div className="space-y-12">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                  <div className="relative flex items-center justify-center">
                    <div className="h-[90px] w-[90px] rounded-full bg-white border-2 border-primary-200 flex items-center justify-center z-10">
                      <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
                        <div className="text-primary-600">
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`pl-32 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
                }`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 text-8xl font-bold text-gray-100 select-none">
                        {step.number}
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;