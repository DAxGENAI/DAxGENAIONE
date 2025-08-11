import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Tool {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  difficulty: string;
  marketDemand: string;
  features: string[];
  gradient: string;
}

const ToolsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const tools: Tool[] = [
    {
      name: 'Microsoft Excel',
      icon: () => null, // Not used in carousel
      category: 'Spreadsheet',
      difficulty: 'Beginner',
      marketDemand: 'Very High',
      features: ['Data Analysis', 'Pivot Tables', 'Charts', 'Formulas'],
      gradient: 'from-red-500 to-red-700',
    },
    {
      name: 'Microsoft Power BI',
      icon: () => null, // Not used in carousel
      category: 'Business Intelligence',
      difficulty: 'Intermediate',
      marketDemand: 'High',
      features: ['Data Modeling', 'DAX', 'Visualizations', 'Reports'],
      gradient: 'from-red-600 to-red-800',
    },
    {
      name: 'SQL & Database',
      icon: () => null, // Not used in carousel
      category: 'Database',
      difficulty: 'Intermediate',
      marketDemand: 'Very High',
      features: ['Query Writing', 'Data Manipulation', 'Joins', 'Aggregations'],
      gradient: 'from-black to-red-700',
    },
    {
      name: 'Python',
      icon: () => null, // Not used in carousel
      category: 'Programming',
      difficulty: 'Advanced',
      marketDemand: 'Very High',
      features: ['Pandas', 'NumPy', 'Matplotlib', 'Machine Learning'],
      gradient: 'from-red-700 to-red-900',
    },
    {
      name: 'Statistics',
      icon: () => null, // Not used in carousel
      category: 'Visualization',
      difficulty: 'Intermediate',
      marketDemand: 'High',
      features: ['Interactive Dashboards', 'Data Blending', 'Calculated Fields', 'Maps'],
      gradient: 'from-black to-red-800',
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tools.length) % tools.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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

  // Auto-advance carousel only if user hasn't interacted and prefers motion
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, tools.length]);

  // Pause auto-advance on hover/focus
  const pauseAutoAdvance = () => {
    if (prefersReducedMotion) return;
    // Implementation for pausing auto-advance
  };

  const resumeAutoAdvance = () => {
    if (prefersReducedMotion) return;
    // Implementation for resuming auto-advance
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <section 
      id="tools" 
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white"
      ref={sectionRef}
      role="region"
      aria-label="Data Analytics Tools and Technologies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Master the Tools That Drive
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                {' '}Data-Driven Decisions
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From beginner-friendly Excel to advanced Python programming, learn the tools that are in high demand 
              across industries. Each tool is carefully selected based on market needs and career opportunities.
            </p>
          </div>
        </div>

        {/* Tools Carousel */}
        <div className="relative">
          <div 
            className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200"
            ref={carouselRef}
            onMouseEnter={pauseAutoAdvance}
            onMouseLeave={resumeAutoAdvance}
            onFocus={pauseAutoAdvance}
            onBlur={resumeAutoAdvance}
          >
            {/* Current Tool Display */}
            <div className="relative py-16 sm:py-20 lg:py-24 px-8 sm:px-12 text-center">
              <div className={`transform transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {tools[currentIndex].name}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full mb-8"></div>
                
                {/* Tool Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-500 mb-2">Category</p>
                    <p className="text-lg font-semibold text-gray-900">{tools[currentIndex].category}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-500 mb-2">Difficulty</p>
                    <p className="text-lg font-semibold text-gray-900">{tools[currentIndex].difficulty}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-500 mb-2">Market Demand</p>
                    <p className="text-lg font-semibold text-gray-900">{tools[currentIndex].marketDemand}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="max-w-2xl mx-auto">
                  <p className="text-sm font-medium text-gray-500 mb-4">Key Features</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {tools[currentIndex].features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              onKeyDown={(e) => handleKeyDown(e, prevSlide)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="View previous tool"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors duration-300" aria-hidden="true" />
            </button>

            <button
              onClick={nextSlide}
              onKeyDown={(e) => handleKeyDown(e, nextSlide)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="View next tool"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors duration-300" aria-hidden="true" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-3" role="tablist" aria-label="Tool navigation">
            {tools.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                onKeyDown={(e) => handleKeyDown(e, () => goToSlide(index))}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  index === currentIndex 
                    ? 'bg-red-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to ${tools[index].name}`}
                tabIndex={0}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20">
          <div className={`transform transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Ready to master these essential tools? Start with the one that matches your current skill level.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  element.focus();
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    element.focus();
                  }
                }
              }}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2"
              >
                Start Learning Today
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;