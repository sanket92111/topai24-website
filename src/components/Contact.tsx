import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { sendEmail } from '../utils/resendClient';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    sendEmail({
      fullName:formState.name,
      email:formState.email,
      phone:formState.phone,
      subject:formState.subject,
      message:formState.message
    }).then((status)=>{
      if(status==200){
        setIsSubmitting(false);
      setSubmitStatus('success'); 
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      }else{
        //Handle Failure
      }
    })

    
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase font-bold tracking-wider text-primary-600 mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have a project in mind? We'd love to hear about it. Get in touch with us and let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-6">Let's talk about your project</h4>
            <p className="text-gray-600 mb-8">
              Fill out the form and our team will get back to you within 24 hours. We're excited to learn more about your project and how we can help.
            </p>
            
            <div className="space-y-6">
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <Mail size={20} className="text-primary-600" />
                </div>
                <div>
                  <h5 className="font-medium">Email</h5>
                  <p className="text-gray-600">topai24apps@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-primary-600" />
                </div>
                <div>
                  <h5 className="font-medium">Location</h5>
                  <p className="text-gray-600">Mumbai, India</p>
                </div>
              </div>
            </div>
            
            {/* <div className="mt-10">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h5 className="font-medium mb-2">Office Hours</h5>
                <p className="text-gray-600 mb-4">We're available Monday through Friday.</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">Monday - Friday:</span>
                  </div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div>
                    <span className="font-medium">Saturday - Sunday:</span>
                  </div>
                  <div>Closed</div>
                </div>
              </div>
            </div> */}
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            {submitStatus === 'success' ? (
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <Send size={24} className="text-green-600" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Message Sent Successfully!</h4>
                <p className="text-gray-600">
                  Thank you for reaching out. We'll get back to you very soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition duration-200"
                    >
                      <option value="">Select a subject</option>  
                      <option value="Ai Agents">Ai Agents</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent transition duration-200"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-medium text-white bg-primary-600 hover:bg-primary-700 transition duration-300 flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;