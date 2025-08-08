import React from 'react';
import { ArrowLeft, ExternalLink, Github, Calculator, FileText, Shield, TrendingUp, Users, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ApexFinancialsProject: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <button 
            onClick={goBack}
            className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 transition duration-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Calculator size={16} className="mr-2" />
                Professional Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Apex Financials – Professional CA Website
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A comprehensive, production-ready website for Chartered Accountant services built with React, TypeScript, and Tailwind CSS. This modern, responsive website showcases professional CA services with interactive features and excellent user experience.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <FileText size={16} className="text-blue-500 mr-2" />
                  <span className="text-sm font-medium">Tax Services</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Shield size={16} className="text-blue-500 mr-2" />
                  <span className="text-sm font-medium">Audit & Compliance</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                  <TrendingUp size={16} className="text-blue-500 mr-2" />
                  <span className="text-sm font-medium">Financial Planning</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center">
                  <ExternalLink size={16} className="mr-2" />
                  View Live Site
                </button>
                <button className="border border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center">
                  <Github size={16} className="mr-2" />
                  View Code
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-2 transform -rotate-2 hover:rotate-0 transition duration-500">
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Calculator size={48} className="mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">Video Preview</p>
                    <p className="text-sm opacity-80">Coming Soon</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <FileText size={20} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-indigo-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <TrendingUp size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                <p className="text-gray-600">
                  Create a professional, trustworthy website for a Chartered Accountant firm that effectively communicates expertise, builds client confidence, and provides easy access to services. The site needed to balance professionalism with modern design trends.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">The Solution</h3>
                <p className="text-gray-600">
                  Developed a comprehensive website with modern design, interactive features, service showcases, client testimonials, and easy contact options. Built with React, TypeScript, and Tailwind CSS for optimal performance and maintainability.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Calculator size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-2">Service Calculator</h4>
                  <p className="text-gray-600 text-sm">Interactive calculators for tax estimation and financial planning</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <FileText size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-2">Document Portal</h4>
                  <p className="text-gray-600 text-sm">Secure client portal for document sharing and status tracking</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Shield size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-2">Compliance Tracker</h4>
                  <p className="text-gray-600 text-sm">Real-time compliance status and deadline management</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-2">Client Dashboard</h4>
                  <p className="text-gray-600 text-sm">Personalized dashboard for each client with service history</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-2">Financial Insights</h4>
                  <p className="text-gray-600 text-sm">Interactive charts and reports for financial analysis</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition duration-300">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Award size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-bold mb-2">Certification Display</h4>
                  <p className="text-gray-600 text-sm">Professional credentials and certifications showcase</p>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'Chart.js'].map((tech, index) => (
                  <span key={index} className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Project Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">150%</div>
                  <p className="text-gray-600">Increase in Client Inquiries</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                  <p className="text-gray-600">Faster Document Processing</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <p className="text-gray-600">Client Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ApexFinancialsProject;