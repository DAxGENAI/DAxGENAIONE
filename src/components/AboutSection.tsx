import React, { useEffect, useState, useRef } from 'react';
import { Award, BookOpen, Users, TrendingUp, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    experience: 0,
    students: 0,
    courses: 0,
    satisfaction: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certified Data Professional',
      description: 'Microsoft Certified Power BI Data Analyst & SQL Server Expert'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Industry Experience',
      description: '5+ years in Fortune 500 companies across multiple sectors'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Teaching Excellence',
      description: 'Personalized 1-on-1 training with 95% course completion rate'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Proven Results',
      description: '80% of students secure data roles within 6 months'
    }
  ];

  const expertise = [
    'Advanced Excel & VBA Development',
    'Power BI Dashboard Architecture',
    'SQL Database Design & Optimization',
    'Python Data Science & Machine Learning',
    'Statistical Analysis & Hypothesis Testing',
    'Business Intelligence Strategy',
    'Data Visualization Best Practices',
    'Generative AI Integration'
  ];

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate numbers only if user prefers motion
          if (!prefersReducedMotion) {
            const duration = 2500;
            const steps = 60;
            const stepDuration = duration / steps;
            
            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              
              setAnimatedNumbers({
                experience: Math.floor(5 * progress),
                students: Math.floor(3000 * progress),
                courses: Math.floor(7 * progress),
                satisfaction: Math.floor(98 * progress)
              });
              
              if (currentStep >= steps) {
                clearInterval(timer);
                setAnimatedNumbers({
                  experience: 5,
                  students: 3000,
                  courses: 7,
                  satisfaction: 98
                });
              }
            }, stepDuration);
            
            return () => clearInterval(timer);
          } else {
            // Set final numbers immediately for users who prefer reduced motion
            setAnimatedNumbers({
              experience: 5,
              students: 3000,
              courses: 7,
              satisfaction: 98
            });
          }
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
  }, [prefersReducedMotion]);

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden"
      ref={sectionRef}
      role="region"
      aria-label="About our data analytics training programs and instructor"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="aboutPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutPattern)" className="text-red-300"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                {' '}DAxGENAI
              </span>
              {' '}for Your Data Journey?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over 5 years of industry experience and a proven track record of transforming careers, 
              I provide personalized training that adapts to your learning style and career goals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 sm:space-y-10">
            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`group p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl border border-red-100 hover:border-red-200 transition-all duration-300 transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  tabIndex={0}
                  role="article"
                  aria-label={`Achievement: ${achievement.title}`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-red-100 rounded-xl text-red-600 group-hover:bg-red-200 transition-colors">
                      {achievement.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{achievement.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* Expertise List */}
            <div className={`space-y-4 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '1600ms' }}>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm sm:text-base text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & CTA */}
          <div className="space-y-8 sm:space-y-10">
            {/* Animated Statistics */}
            <div className={`grid grid-cols-2 gap-6 sm:gap-8 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '800ms' }}>
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border border-red-200">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                  {animatedNumbers.experience}+
                </div>
                <p className="text-sm sm:text-base text-red-800 font-medium">Years Experience</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                <div className="text-3xl sm:text-4xl font-bold text-gray-700 mb-2">
                  {animatedNumbers.students}+
                </div>
                <p className="text-sm sm:text-base text-gray-800 font-medium">Students Trained</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl border border-red-200">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                  {animatedNumbers.courses}
                </div>
                <p className="text-sm sm:text-base text-red-800 font-medium">Specialized Courses</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                <div className="text-3xl sm:text-4xl font-bold text-gray-700 mb-2">
                  {animatedNumbers.satisfaction}%
                </div>
                <p className="text-sm sm:text-base text-gray-800 font-medium">Satisfaction Rate</p>
              </div>
            </div>

            {/* Why Choose Me Card */}
            <div className={`bg-gradient-to-br from-black to-red-600 rounded-2xl p-6 sm:p-8 text-white ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '1800ms' }}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Why Choose Me?</h3>
              <p className="text-sm sm:text-base text-red-100 leading-relaxed mb-4">
                I believe in personalized learning experiences that adapt to your pace and goals. 
                Every student gets individual attention and real-world project guidance.
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1" role="img" aria-label="5-star rating">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center">
                      <span className="text-xs sm:text-sm font-bold text-white">★</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm sm:text-base text-red-100 font-medium">5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20">
          <div className={`transform transition-all duration-700 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful professionals who've already taken the leap into data analytics. 
              Your journey starts with a free consultation.
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
                Get Your Free Consultation
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;