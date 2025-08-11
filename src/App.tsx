import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ToolsSection from './components/ToolsSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ErrorBoundary from './components/ErrorBoundary';
import Analytics from './components/Analytics';
import PerformanceMonitor from './components/PerformanceMonitor';
import './index.css';

// Extend Navigator interface for connection property
interface ExtendedNavigator extends Navigator {
  connection?: {
    effectiveType?: string;
  };
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dynamic loading time based on connection speed
    const connection = (navigator as ExtendedNavigator).connection;
    const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
    const loadingTime = isSlowConnection ? 1500 : 2500;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary>
      <div className="App overflow-x-hidden">
        <Header />
        <main id="main-content" role="main">
          <HeroSection />
          <ToolsSection />
          <SkillsSection />
          <AboutSection />
          <PricingSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <Analytics trackingId={import.meta.env.VITE_ANALYTICS_ID} />
        <PerformanceMonitor />
      </div>
    </ErrorBoundary>
  );
}

export default App;