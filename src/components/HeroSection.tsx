import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Play, Download } from 'lucide-react';
import BrochureModal from './BrochureModal';

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    experience: 0,
    students: 0,
    satisfaction: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial mobile state
    handleResize();

    // Add event listeners
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated && !prefersReducedMotion) {
            setHasAnimated(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [hasAnimated, prefersReducedMotion]);

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedNumbers({
        experience: Math.floor(5 * progress),
        students: Math.floor(3000 * progress),
        satisfaction: Math.floor(98 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedNumbers({
          experience: 5,
          students: 3000,
          satisfaction: 98
        });
      }
    }, stepDuration);

    return () => clearInterval(timer);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      element.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero section - Master Data Analytics with Generative AI"
      ref={sectionRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating Data Particles - Reduced on mobile for performance */}
        {!prefersReducedMotion && [...Array(isMobile ? 10 : 20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
            aria-hidden="true"
          ></div>
        ))}

        {/* 3D Grid Pattern - Hidden on mobile for better performance */}
        <div className="absolute inset-0 opacity-10 hidden sm:block" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-white"/>
          </svg>
        </div>
      </div>

      {/* 3D Floating Elements - Simplified on mobile */}
      {!isMobile && !prefersReducedMotion && (
        <>
          {/* Floating Data Cube - Far right edge */}
          <div 
            className="absolute top-1/3 right-2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500/60 to-red-700/60 rounded-lg transform rotate-45 animate-float shadow-2xl"
            aria-hidden="true"
          >
            <div className="absolute inset-2 bg-red-400/60 rounded-sm"></div>
          </div>
          
          {/* Floating Chart - Far left edge */}
          <div 
            className="absolute top-1/3 left-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white/40 to-gray-200/40 rounded-full animate-float shadow-2xl" 
            style={{ animationDelay: '2s' }}
            aria-hidden="true"
          >
            <div className="absolute inset-3 bg-white/40 rounded-full"></div>
          </div>
          
          {/* Floating Database - Bottom left corner */}
          <div 
            className="absolute bottom-4 left-4 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-black/50 to-gray-800/50 rounded-lg animate-float shadow-2xl" 
            style={{ animationDelay: '4s' }}
            aria-hidden="true"
          >
            <div className="absolute inset-2 bg-gray-700/50 rounded-sm"></div>
          </div>

          {/* Additional random floating elements - Far corners and edges */}
          <div 
            className="absolute top-4 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-white/40 rounded animate-float shadow-xl" 
            style={{ animationDelay: '1s' }}
            aria-hidden="true"
          >
            <div className="absolute inset-1 bg-white/40 rounded-sm"></div>
          </div>

          <div 
            className="absolute bottom-8 right-8 w-6 h-6 sm:w-10 sm:h-10 bg-black/50 rounded-full animate-float shadow-xl" 
            style={{ animationDelay: '3s' }}
            aria-hidden="true"
          >
            <div className="absolute inset-1 bg-gray-800/50 rounded-full"></div>
          </div>

          <div 
            className="absolute top-8 right-1/4 w-7 h-7 sm:w-11 sm:h-11 bg-red-500/60 rounded animate-float shadow-xl" 
            style={{ animationDelay: '5s' }}
            aria-hidden="true"
          >
            <div className="absolute inset-1 bg-red-400/60 rounded-sm"></div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className={`${prefersReducedMotion ? '' : 'animate-fade-in-up'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight relative">
            Master
            <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
              {' '}Data Analytics with{' '}
            </span>
            <span className="relative">
              Generative AI
              {/* Red Square Highlight */}
              <div className="absolute -top-2 -right-8 w-4 h-4 sm:w-6 sm:h-6 bg-red-500 rounded-sm transform rotate-12 animate-pulse"></div>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your career with personalized 1-on-1 training in Excel, Power BI, SQL, Python, and AI-powered analytics. 
            Join 3000+ successful professionals who've secured data roles.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 sm:mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              onKeyDown={(e) => handleKeyDown(e, 'contact')}
              className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Start your data analytics journey - Get free consultation"
            >
              Start Your Journey
              <Play className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </button>
            
            <button
              onClick={() => setIsBrochureModalOpen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setIsBrochureModalOpen(true);
                }
              }}
              className="group bg-white/10 backdrop-blur-sm text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-semibold hover:bg-white/20 border border-white/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Download our comprehensive training brochure"
            >
              Download Brochure
              <Download className="inline-block w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{animatedNumbers.experience}+</div>
              <p className="text-sm sm:text-base text-gray-400">Years Experience</p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{animatedNumbers.students}+</div>
              <p className="text-sm sm:text-base text-gray-400">Students Trained</p>
            </div>
            
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{animatedNumbers.satisfaction}%</div>
              <p className="text-sm sm:text-base text-gray-400">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('tools')}
        onKeyDown={(e) => handleKeyDown(e, 'tools')}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-full p-2 ${
          prefersReducedMotion ? '' : 'animate-bounce'
        }`}
        aria-label="Scroll down to explore our tools and courses"
      >
        <ChevronDown className="w-6 h-6" aria-hidden="true" />
      </button>

      {/* Brochure Modal */}
      <BrochureModal 
        isOpen={isBrochureModalOpen} 
        onClose={() => setIsBrochureModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;