import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';

interface FormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  goals: string;
  preferredTime: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  experience?: string;
  goals?: string;
  preferredTime?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    preferredTime: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const experienceLevels = [
    'Complete Beginner',
    'Some Experience',
    'Intermediate',
    'Advanced',
    'Professional'
  ];

  const preferredTimes = [
    'Weekday Mornings',
    'Weekday Afternoons',
    'Weekday Evenings',
    'Weekends',
    'Flexible'
  ];

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(emailConfig.publicKey);
    
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but if provided, validate format)
    if (formData.phone.trim() && !/^[+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Experience validation
    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level';
    }

    // Goals validation
    if (!formData.goals.trim()) {
      newErrors.goals = 'Please describe your learning goals';
    } else if (formData.goals.trim().length < 10) {
      newErrors.goals = 'Please provide more details about your goals (at least 10 characters)';
    }

    // Preferred time validation
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select your preferred time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Focus on first error field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const field = formRef.current?.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
        field?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // EmailJS configuration - ultra-simple to avoid template corruption
      const templateParams = {
        to_name: 'DAxGENAI Admin',
        message: `New contact form submission from ${formData.name} (${formData.email})

Phone: ${formData.phone || 'Not provided'}
Experience Level: ${formData.experience}
Learning Goals: ${formData.goals}
Preferred Time: ${formData.preferredTime}
Submission Date: ${new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}

This message was sent from the DAxGENAI website contact form.`
      };

      console.log('Sending email with params:', templateParams);
      console.log('Using service ID:', emailConfig.serviceId);
      console.log('Using template ID:', emailConfig.templateId);

      // Send email using EmailJS
      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          experience: '',
          goals: '',
          preferredTime: ''
        });
        setErrors({});
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      console.error('Error details:', {
        serviceId: emailConfig.serviceId,
        templateId: emailConfig.templateId,
        publicKey: emailConfig.publicKey,
        error: error
      });
      setSubmitError('Failed to send message. Please try again or contact us directly.');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitError(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
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
      id="contact" 
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden"
      ref={sectionRef}
      role="region"
      aria-label="Contact us for data analytics training consultation"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="contactPattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactPattern)" className="text-red-300"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className={`transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your
              <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                {' '}Data Analytics Journey?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get a free consultation to discuss your learning goals and create a personalized training plan. 
              No commitment required - just valuable insights to accelerate your career.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">
          {/* Contact Information */}
          <div className="space-y-8 sm:space-y-10">
            <div className={`transform transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Let's Discuss Your Goals
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Whether you're a complete beginner or looking to advance your skills, 
                I'll help you create a roadmap to success in data analytics.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Email</p>
                  <a 
                    href="mailto:daxgenai@gmail.com" 
                    className="text-lg text-white hover:text-red-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    daxgenai@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Phone</p>
                  <a 
                    href="tel:+918374316403" 
                    className="text-lg text-white hover:text-red-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    +91 8374316403
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">Location</p>
                  <p className="text-lg text-white">Remote Training Available Worldwide</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <h4 className="text-xl font-bold mb-4">What You'll Get</h4>
              <ul className="space-y-3">
                {[
                  'Free 30-minute consultation',
                  'Personalized learning assessment',
                  'Custom training roadmap',
                  'Industry insights and trends',
                  'Career guidance and advice'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            


            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 space-y-6"
              noValidate
              aria-label="Contact form for data analytics training consultation"
            >
              {/* Success Message */}
              {submitSuccess && (
                <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-green-400">Thank you!</p>
                      <p className="text-green-300 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-6 h-6 text-red-400" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-red-400">Error:</p>
                      <p className="text-red-300 text-sm">{submitError}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-base sm:text-lg text-white placeholder-gray-400 ${
                    errors.name ? 'border-red-400' : 'border-white/20'
                  }`}
                  placeholder="Enter your full name"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={!!errors.name}
                  required
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-400 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-base sm:text-lg text-white placeholder-gray-400 ${
                    errors.email ? 'border-red-400' : 'border-white/20'
                  }`}
                  placeholder="Enter your email address"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                  required
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-400 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-base sm:text-lg text-white placeholder-gray-400 ${
                    errors.phone ? 'border-red-400' : 'border-white/20'
                  }`}
                  placeholder="Enter your phone number"
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-2 text-sm text-red-400 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Experience Level */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                  Experience Level <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-base sm:text-lg text-white appearance-none cursor-pointer pr-12 ${
                      errors.experience ? 'border-red-400' : 'border-white/20'
                    }`}
                    aria-describedby={errors.experience ? 'experience-error' : undefined}
                    aria-invalid={!!errors.experience}
                    required
                  >
                    <option value="">Select your experience level</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
                {errors.experience && (
                  <p id="experience-error" className="mt-2 text-sm text-red-400 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    <span>{errors.experience}</span>
                  </p>
                )}
              </div>

              {/* Learning Goals */}
              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-300 mb-2">
                  Learning Goals <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  rows={3}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-base sm:text-lg text-white placeholder-gray-400 resize-none ${
                    errors.goals ? 'border-red-400' : 'border-white/20'
                  }`}
                  placeholder="What do you want to achieve with data analytics?"
                  aria-describedby={errors.goals ? 'goals-error' : undefined}
                  aria-invalid={!!errors.goals}
                  required
                />
                {errors.goals && (
                  <p id="goals-error" className="mt-2 text-sm text-red-400 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    <span>{errors.goals}</span>
                  </p>
                )}
              </div>

              {/* Preferred Time */}
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Consultation Time <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-base sm:text-lg text-white appearance-none cursor-pointer pr-12 ${
                      errors.preferredTime ? 'border-red-400' : 'border-white/20'
                    }`}
                    aria-describedby={errors.preferredTime ? 'preferredTime-error' : undefined}
                    aria-invalid={!!errors.preferredTime}
                    required
                  >
                    <option value="">Select your preferred time</option>
                    {preferredTimes.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
                {errors.preferredTime && (
                  <p id="preferredTime-error" className="mt-2 text-sm text-red-400 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    <span>{errors.preferredTime}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                onKeyDown={(e) => handleKeyDown(e, () => {})}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSubmitting
                    ? 'bg-gray-600 text-white cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl'
                }`}
                aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" aria-hidden="true" />
                    <span>Send Message</span>
                  </div>
                )}
              </button>
              
              {isSubmitting && (
                <p id="submitting-status" className="text-sm text-gray-400 text-center">
                  Please wait while we process your request...
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;