import React, { useEffect, useState, useRef } from 'react';
import { Check, Star, TrendingUp, Users, Award, Clock } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('starter');
  const sectionRef = useRef<HTMLDivElement>(null);

  const mainProgram = {
    name: "Complete Data Analytics with Generative AI",
    description: "Master all essential data analytics tools and techniques in one comprehensive program. From Excel basics to advanced Python machine learning, this program covers everything you need to become a data professional.",
    price: "₹34,999",
    duration: "16 Weeks",
    level: "Beginner to Advanced",
    features: [
      "All 4 core courses included",
      "Personalized 1-on-1 training",
      "Real-world project portfolio",
      "Career guidance & job support",
      "Lifetime access to materials",
      "Certificate of completion",
      "Career guidance & support",
      "Flexible scheduling",
      "Progress tracking",
      "Post-course consultation"
    ],
    highlights: [
      "Save ₹26,001 compared to individual courses",
      "Guaranteed job Assistance upto 6 months",
      "Access to exclusive industry network",
      "Continuous learning updates"
    ]
  };

  // Other courses for display (excluding the main program)
  const carouselCourses = [
    {
      name: "Advance Excel",
      description: "Master Excel for data manipulation, cleaning, and advanced analysis. Perfect for beginners to build a strong foundation.",
      price: "₹10,000",
      duration: "8 weeks",
      features: ["Pivot Tables", "Pivot Charts"]
    },
    {
      name: "Python",
      description: "Learn Python for data analysis, machine learning, and web development. Ideal for aspiring data scientists.",
      price: "₹18,000",
      duration: "10 weeks",
      features: ["Python basics", "Data structures", "Pandas", "Matplotlib"]
    },
    {
      name: "SQL & Database",
      description: "Master SQL for managing and querying databases. Essential for data engineers and analysts.",
      price: "₹18,000",
      duration: "10 weeks",
      features: ["Adhoc Queries", "Query optimization"]
    },
    {
      name: "Power BI",
      description: "Learn Power BI for creating interactive dashboards and reports. Ideal for business intelligence professionals.",
      price: "₹15,000",
      duration: "14 weeks",
      features: ["Power BI basics", "Data transformation", "Dax", "Advanced visualizations"]
    }
  ];

  const popularFeatures = [
    "1-on-1 Personalized Training",
    "Real-World Projects",
    "Flexible Scheduling",
    "Lifetime Access",
    "Career Support",
    "Industry Networking",
    "Certificate of Completion",
    "Continuous Updates"
  ];

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '50px 0px'
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

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    // Scroll to contact section for consultation
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <section 
      id="pricing" 
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      ref={sectionRef}
      role="region"
      aria-label="Training program pricing and packages"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="pricingPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricingPattern)" className="text-red-300"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                {' '}Learning Path
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Start with our comprehensive program or choose individual courses to build specific skills. 
              All programs include personalized 1-on-1 training and real-world project work.
            </p>
          </div>
        </div>

        {/* Main Layout: Fixed Program + Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-start">
          
          {/* Left Side: Fixed Main Program */}
          <div className={`transform transition-all duration-700 delay-100 sm:delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Main Program - Complete Data Analytics */}
            <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-red-500 p-8 h-full flex flex-col min-h-[24rem]">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Star className="w-4 h-4 inline mr-2" />
                Most Popular
              </div>

              {/* Program Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  {mainProgram.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {mainProgram.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="text-4xl sm:text-5xl font-bold text-red-600">
                  {mainProgram.price}
                </div>
                <p className="text-sm text-gray-500 font-medium">One-time payment</p>
                <p className="text-xs text-gray-400 mt-1">Save ₹26,001 compared to individual courses</p>
              </div>

              {/* Program Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-red-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-gray-600">
                    <strong>Duration:</strong> {mainProgram.duration}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-red-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-gray-600">
                    <strong>Level:</strong> {mainProgram.level}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-red-500 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-gray-600">
                    <strong>Certificate:</strong> Advanced Professional
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6 flex-grow">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {mainProgram.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {mainProgram.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-center space-x-3">
                      <TrendingUp className="w-4 h-4 text-blue-500 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button - Fixed at bottom */}
              <div className="mt-auto pt-2">
                <button
                  onClick={() => handlePlanSelect(mainProgram.name)}
                  onKeyDown={(e) => handleKeyDown(e, () => handlePlanSelect(mainProgram.name))}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                    selectedPlan === mainProgram.name
                      ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg'
                      : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl'
                  }`}
                  aria-label={`Select ${mainProgram.name} program`}
                >
                  {selectedPlan === mainProgram.name ? 'Selected' : 'Choose Complete Program'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Individual Courses */}
          <div className={`transform transition-all duration-700 delay-200 sm:delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 h-full">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Individual Courses
                </h3>
                <p className="text-sm text-gray-600">
                  Focus on specific skills or combine with the complete program
                </p>
              </div>

              {/* Course Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {carouselCourses.map((course, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200 relative h-[22rem]">
                    {/* Course Header */}
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">
                        {course.name}
                      </h4>
                      <p className="text-xs text-gray-600 mb-4 text-center leading-relaxed line-clamp-3">
                        {course.description}
                      </p>
                    </div>
                    
                    {/* Course Details - Price and Duration */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center bg-white rounded-lg p-2 border border-gray-200">
                        <div className="text-lg font-bold text-red-600">
                          {course.price}
                        </div>
                        <p className="text-xs text-gray-500 font-medium">Price</p>
                      </div>
                      <div className="text-center bg-white rounded-lg p-2 border border-gray-200">
                        <div className="text-sm font-semibold text-gray-700">
                          {course.duration}
                        </div>
                        <p className="text-xs text-gray-500 font-medium">Duration</p>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <p className="text-xs font-medium text-gray-500 mb-2 text-center">Key Features:</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {course.features.slice(0, 2).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button - Absolutely positioned at bottom */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <button
                        onClick={() => handlePlanSelect(course.name)}
                        onKeyDown={(e) => handleKeyDown(e, () => handlePlanSelect(course.name))}
                        className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg text-sm font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform hover:scale-105"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Popular Features Section */}
        <div className={`bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '500ms' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              What Makes Our Training Special?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every program includes these premium features to ensure your success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularFeatures.map((feature, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-red-600" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-gray-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20">
          <div className={`transform transition-all duration-700 delay-300 sm:delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Not sure which program is right for you? Get a free consultation to discuss your goals 
              and create a personalized learning plan.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  element.focus();
                }
              }}
              onKeyDown={(e) => handleKeyDown(e, () => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  element.focus();
                }
              })}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-offset-2"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;