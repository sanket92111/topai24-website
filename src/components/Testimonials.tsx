import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "CEO, TechNova",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120",
    quote: "Working with TopAi24 transformed our business. Their team delivered a mobile app that exceeded our expectations and helped us reach new customers. The attention to detail and commitment to quality was impressive.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Director, GreenLife",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120",
    quote: "The e-commerce platform TopAi24 built for us increased our online sales by 200% in just three months. Their strategic approach to UX design and performance optimization made all the difference.",
    rating: 5
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Founder, HealthTrack",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=120",
    quote: "From concept to launch, TopAi24 guided us through the entire development process with transparency and expertise. Their team was responsive, creative, and technically brilliant.",
    rating: 5
  },
  {
    id: 4,
    name: "Lisa Williams",
    role: "COO, FinTech Solutions",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120",
    quote: "When we needed to modernize our legacy systems, TopAi24 delivered a solution that was both innovative and reliable. Their technical knowledge and project management made a complex transition seamless.",
    rating: 4
  },
  {
    id: 5,
    name: "Mark Thompson",
    role: "Product Manager, EduLearn",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120",
    quote: "TopAi24's ability to translate our educational content into an engaging, interactive platform impressed our entire team. The app they developed has received outstanding feedback from our users.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Handle autoplay
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoplay]);
  
  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handleDotClick = (index: number) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase font-bold tracking-wider text-primary-600 mb-3 animate-fade-in">Client Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">What Our Clients Say</h3>
          <p className="max-w-2xl mx-auto text-gray-600 animate-slide-up">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto animate-slide-up">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-secondary-50/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="mb-6 md:mb-0 md:mr-8 relative z-10">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-primary-100 hover:ring-primary-200 transition-all duration-300">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i}
                                size={16} 
                                className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400 hover:scale-125 transition-transform duration-200" : "text-gray-300"} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative z-10">
                        <blockquote className="text-gray-700 text-lg italic mb-6 hover:text-gray-800 transition-colors duration-300">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="font-semibold text-gray-900 hover:text-primary-700 transition-colors duration-300">{testimonial.name}</div>
                        <div className="text-sm text-gray-500 hover:text-gray-600 transition-colors duration-300">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg hover:shadow-xl rounded-full p-3 md:p-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-50 z-10 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white shadow-lg hover:shadow-xl rounded-full p-3 md:p-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-50 z-10 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  currentIndex === index 
                    ? 'bg-primary-600 w-8 shadow-lg' 
                    : 'bg-gray-300 hover:bg-primary-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;