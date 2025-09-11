// Express server for SMTP email sending
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'daxgenai@gmail.com',
    pass: 'gqmx ebgf fwbb vhsd'
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, experience, goals, preferredTime } = req.body;

    // Validate required fields
    if (!name || !email || !experience || !goals || !preferredTime) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email content
    const mailOptions = {
      from: 'daxgenai@gmail.com',
      to: 'daxgenai@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Training Details</h3>
            <p><strong>Experience Level:</strong> ${experience}</p>
            <p><strong>Learning Goals:</strong> ${goals}</p>
            <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              <strong>Submission Date:</strong> ${new Date().toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">
              This message was sent from the DAxGENAI website contact form.
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}

Training Details:
- Experience Level: ${experience}
- Learning Goals: ${goals}
- Preferred Time: ${preferredTime}

Submission Date: ${new Date().toLocaleString()}
This message was sent from the DAxGENAI website contact form.
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email service available at http://localhost:${PORT}/api/send-email`);
});
