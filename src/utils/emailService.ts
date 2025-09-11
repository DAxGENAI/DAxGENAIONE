// Email service utility using a more reliable approach
// This uses a simple fetch to a serverless function or third-party service

interface EmailData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  goals: string;
  preferredTime: string;
}

interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
  try {
    // Use Vercel serverless function to send email automatically
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('SMTP email service error:', error);
    
    // Fallback: Use mailto if SMTP fails
    const subject = encodeURIComponent(`Contact Form Submission from ${data.name}`);
    const body = encodeURIComponent(`
New Contact Form Submission

Contact Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone || 'Not provided'}

Training Details:
- Experience Level: ${data.experience}
- Learning Goals: ${data.goals}
- Preferred Time: ${data.preferredTime}

Submission Date: ${new Date().toLocaleString()}

Please reply to this email to confirm receipt.
    `);

    // Open email client as fallback
    window.open(`mailto:daxgenai@gmail.com?subject=${subject}&body=${body}`);
    
    return {
      success: true,
      message: 'SMTP service unavailable. Email client opened as fallback.'
    };
  }
};

// Alternative: Use Formspree or similar service
export const sendEmailViaFormspree = async (data: EmailData): Promise<EmailResponse> => {
  try {
    // Replace with your Formspree endpoint
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
    
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        experience: data.experience,
        goals: data.goals,
        preferredTime: data.preferredTime,
        _subject: `New Contact Form Submission from ${data.name}`,
        _replyto: data.email,
      }),
    });

    if (!response.ok) {
      throw new Error(`Formspree error! status: ${response.status}`);
    }

    return {
      success: true,
      message: 'Email sent successfully via Formspree'
    };

  } catch (error) {
    console.error('Formspree error:', error);
    return {
      success: false,
      error: 'Failed to send email via Formspree'
    };
  }
};
