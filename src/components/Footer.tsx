import React from 'react';
import { BarChart3, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="footerGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)" className="text-white"/>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-black to-red-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-xl sm:text-2xl font-bold">DAxGENAI</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                Transforming careers through comprehensive data analytics training. Join 3000+ successful graduates who have mastered the art of turning data into actionable insights.
              </p>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Mail className="w-4 h-4 text-red-400" />
                  <span className="text-gray-300 text-sm sm:text-base">daxgenai@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Phone className="w-4 h-4 text-red-400" />
                  <span className="text-gray-300 text-sm sm:text-base">+91 8374316403</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span className="text-gray-300 text-sm sm:text-base">Global (Remote Training Available)</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Tools', id: 'tools' },
                  { label: 'Courses', id: 'courses' },
                  { label: 'Skills', id: 'skills' },
                  { label: 'About', id: 'about' },
                  { label: 'Testimonials', id: 'testimonials' },
                  { label: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-left text-sm sm:text-base"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Popular Courses</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Excel Mastery',
                  'Power BI Expert',
                  'SQL Database',
                  'Python Data Science',
                  'Machine Learning',
                  'Statistics & Analytics',
                  'Generative AI'
                ].map((course) => (
                  <li key={course}>
                    <a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm sm:text-base">
                      {course}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-red-400 mb-1">5+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-red-500 mb-1">3000+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Students Trained</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-red-600 mb-1">95%</div>
                <div className="text-gray-400 text-xs sm:text-sm">Completion Rate</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-red-700 mb-1">24h</div>
                <div className="text-gray-400 text-xs sm:text-sm">Response Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
                © {currentYear} DAxGENAI. All rights reserved. | Empowering careers through data analytics education.
              </div>
              
              <div className="flex items-center space-x-4 sm:space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200">
                  Terms of Service
                </a>
                <button
                  onClick={scrollToTop}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-black to-red-600 rounded-full flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-300"
                >
                  <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;