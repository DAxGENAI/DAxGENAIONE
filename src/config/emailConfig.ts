// EmailJS Configuration for DAxGENAI Contact Form
export const emailConfig = {
  // Your EmailJS service ID (found in EmailJS dashboard)
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_3msy70h',
  
  // Your EmailJS template ID (found in EmailJS dashboard)
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_v4dorkd',
  
  // Your EmailJS public key (found in EmailJS dashboard)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'EkeLP7pb8rPoZMFGD',
  
  // Admin email where all form submissions will be sent
  adminEmail: import.meta.env.VITE_CONTACT_EMAIL || 'daxgenai@gmail.com'
};
