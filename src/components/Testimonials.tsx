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
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase font-bold tracking-wider text-primary-600 mb-3">Client Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="mb-6 md:mb-0 md:mr-8">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i}
                                size={16} 
                                className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <blockquote className="text-gray-700 text-lg italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
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
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full p-2 md:p-3 text-gray-700 hover:text-primary-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-50 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white shadow-md rounded-full p-2 md:p-3 text-gray-700 hover:text-primary-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-50 z-10"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-primary-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
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