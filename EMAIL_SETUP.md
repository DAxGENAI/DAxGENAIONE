# Email Setup Instructions

## SMTP Email Service Setup

This project now uses Gmail SMTP to automatically send emails when users submit the contact form.

### Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   # Terminal 1: Start the frontend
   npm run dev

   # Terminal 2: Start the backend server
   npm run server
   ```

3. **Production Deployment**
   ```bash
   # Build and start production server
   npm start
   ```

### How It Works

1. **User fills out the contact form** and clicks "Send Message"
2. **Form validates** all required fields
3. **SMTP service automatically sends email** to daxgenai@gmail.com using Gmail App Password
4. **Success message** confirms email was sent
5. **Email contains** all form data in a nicely formatted HTML email

### Gmail App Password Configuration

The system uses your Gmail App Password: `gqmx ebgf fwbb vhsd`

- **From:** daxgenai@gmail.com
- **To:** daxgenai@gmail.com
- **Subject:** "New Contact Form Submission from [Name]"

### Email Content

The email includes:
- Contact Information (Name, Email, Phone)
- Training Details (Experience Level, Learning Goals, Preferred Time)
- Submission Date
- Professional HTML formatting

### Fallback

If the SMTP service fails, the system automatically falls back to opening the user's email client with pre-filled content.

### Testing

1. Start both servers (`npm run dev` and `npm run server`)
2. Open http://localhost:5173
3. Fill out the contact form
4. Click "Send Message"
5. Check daxgenai@gmail.com for the email

### Troubleshooting

- Ensure both frontend (port 5173) and backend (port 3001) are running
- Check that the Gmail App Password is correct
- Verify Gmail 2-factor authentication is enabled
- Check console for any error messages
