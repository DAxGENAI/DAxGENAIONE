import React, { useEffect, useState, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  course: string;
  image?: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      name: "Mohammed Zaffar Khan",
      role: "Data Analyst",
      company: "Microsoft",
      content: "The Excel and Power BI training completely transformed my career. I went from basic spreadsheets to building complex dashboards that drive business decisions. The personalized approach made all the difference.",
      rating: 5,
      course: "Excel & Power BI Mastery"
    },
    {
      name: "Arjun Patel",
      role: "Business Intelligence Developer",
      company: "Amazon",
      content: "After completing the SQL and Python courses, I landed my dream job at Amazon. The practical projects and real-world scenarios prepared me perfectly for the interview process.",
      rating: 5,
      course: "SQL & Python Track"
    },
    {
      name: "Ananya Sharma",
      role: "Marketing Data Analyst",
      company: "Google",
      content: "I came from a non-technical background, but the structured learning path and patient guidance helped me master statistical analysis and machine learning. Now I'm leading data projects at Google!",
      rating: 5,
      course: "Complete Analytics Program"
    },
    {
      name: "Mohammed Abdul Baseer",
      role: "Senior Data Scientist",
      company: "Netflix",
      content: "The Machine Learning bootcamp exceeded my expectations. The combination of theory and hands-on practice, along with career guidance, helped me transition from finance to data science successfully.",
      rating: 5,
      course: "Machine Learning Bootcamp"
    },
    {
      name: "Ayesha Tarannum",
      role: "Operations Analyst",
      company: "Tesla",
      content: "What sets this training apart is the focus on storytelling and business communication. I learned not just how to analyze data, but how to present insights that drive action.",
      rating: 5,
      course: "Analytics Workflow Mastery"
    },
    {
      name: "Mohammed Abdul Hakeem",
      role: "Product Data Analyst",
      company: "Spotify",
      content: "The Generative AI integration training was game-changing. Learning how to leverage AI tools while maintaining analytical rigor has given me a competitive edge in my role.",
      rating: 5,
      course: "AI-Enhanced Analytics"
    }
  ];



  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2
    });

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }
    
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };



  return (
    <section id="testimonials" ref={sectionRef} className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-red-50 overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0" ref={parallaxRef}>
        {/* Floating Particles */}
        {!prefersReducedMotion && [...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-red-400/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
            aria-hidden="true"
          ></div>
        ))}

        {/* Parallax Background Shapes */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-red-200/20 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate3d(${scrollY * 0.1}px, ${scrollY * 0.05}px, 0)`
          }}
          aria-hidden="true"
        ></div>
        
        <div 
          className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-48 sm:h-48 bg-red-200/20 rounded-full blur-3xl animate-float"
          style={{
            animationDelay: '2s',
            transform: `translate3d(${-scrollY * 0.08}px, ${scrollY * 0.12}px, 0)`
          }}
          aria-hidden="true"
        ></div>
        
        <div 
          className="absolute top-3/4 left-1/3 w-16 h-16 sm:w-32 sm:h-32 bg-red-200/20 rounded-full blur-3xl animate-float"
          style={{
            animationDelay: '4s',
            transform: `translate3d(${scrollY * 0.06}px, ${-scrollY * 0.09}px, 0)`
          }}
          aria-hidden="true"
        ></div>

        {/* Additional Parallax Elements */}
        <div 
          className="absolute top-1/2 right-1/3 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-red-300/30 to-red-500/30 rounded-full blur-2xl animate-float"
          style={{
            animationDelay: '1s'
          }}
          aria-hidden="true"
        ></div>

        <div 
          className="absolute bottom-1/3 left-1/2 w-28 h-28 sm:w-56 sm:h-56 bg-gradient-to-br from-red-400/25 to-red-600/25 rounded-full blur-3xl animate-float"
          style={{
            animationDelay: '3s'
          }}
          aria-hidden="true"
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="testimonialGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#testimonialGrid)" className="text-red-300"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Success Stories from
            <span className="bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent">
              {' '}Our Students
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from real students who have transformed their careers through our comprehensive training programs
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className={`relative mb-12 sm:mb-16 lg:mb-20 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '200ms' }}>
          {/* Floating Decorative Elements */}
          {!prefersReducedMotion && (
            <>
              <div 
                className="absolute -top-8 -left-8 w-16 h-16 bg-red-100/50 rounded-full blur-xl animate-float"
                style={{
                  animationDelay: '1s'
                }}
                aria-hidden="true"
              ></div>
              <div 
                className="absolute -bottom-8 -right-8 w-20 h-20 bg-red-200/40 rounded-full blur-xl animate-float"
                style={{
                  animationDelay: '2s'
                }}
                aria-hidden="true"
              ></div>
            </>
          )}

          <div 
            className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-200 max-w-4xl mx-auto relative overflow-hidden"
            style={{
              transition: prefersReducedMotion ? 'none' : 'transform 0.1s ease-out'
            }}
          >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5" aria-hidden="true">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200 to-red-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-red-300 to-red-500 rounded-full blur-3xl"></div>
            </div>

            {/* Quote Icon */}
            <div 
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-red-200 transition-all duration-300 hover:text-red-300"
            >
              <Quote className="w-8 h-8 sm:w-12 sm:h-12" />
            </div>
            
            {/* Testimonial Content */}
            <div className="text-center mb-6 sm:mb-8">
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-800 leading-relaxed italic mb-4 sm:mb-6">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              {/* Profile Section */}
              <div className="flex items-center justify-center space-x-4 sm:space-x-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm sm:text-base text-gray-600">{testimonials[currentIndex].role}</p>
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i < 5 ? 'text-red-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <div className="mt-2">
                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                      {testimonials[currentIndex].course}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="p-2 sm:p-3 bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 rounded-full transition-all duration-200 transform hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              {/* Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 sm:p-3 bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 rounded-full transition-all duration-200 transform hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;