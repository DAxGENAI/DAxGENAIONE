import React, { useEffect, useState, useRef } from 'react';
import {
  Database, BarChart3, PieChart,
  TrendingUp, Presentation, Users, Target, Lightbulb, Settings
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  gradient: string;
  step: number;
}

const SkillsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { label: 'Years Experience', number: '5+', delay: 0 },
    { label: 'Students Trained', number: '3000+', delay: 200 },
    { label: 'Completion Rate', number: '95%', delay: 400 },
    { label: 'Response Time', number: '24h', delay: 600 }
  ];

  const skills: Skill[] = [
    {
      name: 'Business Requirements',
      icon: Target,
      description: 'Define project objectives and stakeholder needs',
      gradient: 'from-black to-red-700',
      step: 1
    },
    {
      name: 'Data Collection',
      icon: Database,
      description: 'Gather data from multiple sources',
      gradient: 'from-black to-red-700',
      step: 2
    },
    {
      name: 'Data Cleaning',
      icon: Settings,
      description: 'Prepare and transform raw data',
      gradient: 'from-red-500 to-red-700',
      step: 3
    },
    {
      name: 'Data Analysis',
      icon: BarChart3,
      description: 'Explore patterns and insights',
      gradient: 'from-red-600 to-red-800',
      step: 4
    },
    {
      name: 'Data Visualization',
      icon: PieChart,
      description: 'Create charts and dashboards',
      gradient: 'from-red-700 to-red-900',
      step: 5
    },
    {
      name: 'Statistical Modeling',
      icon: TrendingUp,
      description: 'Build predictive models',
      gradient: 'from-black to-red-800',
      step: 6
    },
    {
      name: 'Storytelling',
      icon: Presentation,
      description: 'Present insights compellingly',
      gradient: 'from-red-600 to-red-800',
      step: 7
    },
    {
      name: 'Stakeholder Management',
      icon: Users,
      description: 'Communicate results effectively',
      gradient: 'from-red-700 to-red-900',
      step: 8
    },
    {
      name: 'Strategic Insights',
      icon: Lightbulb,
      description: 'Drive actionable recommendations',
      gradient: 'from-black to-red-900',
      step: 9
    }
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

  return (
    <section id="skills" ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-red-50 overflow-hidden">
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="skillsGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skillsGrid)" className="text-red-300"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Data Analytics
            <span className="bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent">
              {' '}Workflow
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow the complete journey from data to insights
          </p>
        </div>

        {/* Skills Workflow - Interactive Grid Roadmap */}
        <div className="relative mb-16 sm:mb-20 lg:mb-24">
          {/* Grid Workflow Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-2 sm:gap-3 lg:gap-2">
                            {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`transform transition-all duration-700 delay-${skill.step * 100} ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                {/* Connection Line to Next Step */}
                {/* This block is removed as per the edit hint to remove unused imports */}
                
                {/* Skill Card */}
                <div className="relative bg-white p-3 sm:p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-rotate-2 border border-gray-100 cursor-pointer group h-32 sm:h-36 lg:h-40 flex flex-col">
                  {/* Step Number */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {skill.step.toString().padStart(2, '0')}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 mt-4 group-hover:bg-gradient-to-br group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300 flex-shrink-0">
                    <skill.icon className="w-4 h-4 sm:w-6 sm:h-6 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
                  </div>
                  
                  {/* Title Only */}
                  <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300 flex-grow flex items-center justify-center px-1">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`text-center mb-16 sm:mb-20 lg:mb-24 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '1500ms' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
                style={{ animationDelay: `${stat.delay}ms` }}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;