import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId }) => {
  useEffect(() => {
    if (!trackingId || typeof window === 'undefined') return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track page views on route changes
    const handleRouteChange = () => {
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Listen for navigation events
    window.addEventListener('popstate', handleRouteChange);
    
    // Track scroll depth
    let maxScroll = 0;
    const trackScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          gtag('event', 'scroll_depth', {
            scroll_percentage: maxScroll,
            page_title: document.title,
          });
        }
      }
    };

    window.addEventListener('scroll', trackScroll);

    // Track form interactions
    const trackFormInteraction = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'FORM') {
        gtag('event', 'form_interaction', {
          form_name: target.getAttribute('id') || 'contact_form',
          page_title: document.title,
        });
      }
    };

    document.addEventListener('submit', trackFormInteraction);

    // Track CTA button clicks
    const trackCTAClicks = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'BUTTON' && target.textContent?.includes('Start Your Journey')) {
        gtag('event', 'cta_click', {
          button_text: target.textContent,
          page_title: document.title,
        });
      }
    };

    document.addEventListener('click', trackCTAClicks);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('scroll', trackScroll);
      document.removeEventListener('submit', trackFormInteraction);
      document.removeEventListener('click', trackCTAClicks);
    };
  }, [trackingId]);

  return null; // This component doesn't render anything
};

export default Analytics;
