# Vercel Deployment Guide

## ✅ Your Website is Now Vercel-Ready!

### What I've Done:

1. **Converted to Vercel Serverless Functions**:
   - Updated `/api/send-email.js` to work with Vercel
   - Added CORS headers for cross-origin requests
   - Configured for Node.js 18.x runtime

2. **Updated Frontend**:
   - Changed API call from `localhost:3001` to `/api/send-email`
   - Now uses relative path that works on Vercel
   - Added Download Brochure functionality with modal form

3. **Added Vercel Configuration**:
   - `vercel.json` with proper function settings
   - API routing configuration
   - PDF file serving configuration

4. **New Features Added**:
   - Download Brochure button in hero section
   - Lead capture modal with form validation
   - PDF download and view online functionality
   - Mobile-responsive design

### How to Deploy to Vercel:

#### Option 1: Deploy via Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - What's your project's name? daxgenai-web2
# - In which directory is your code located? ./
```

#### Option 2: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the settings
5. Click "Deploy"

### What Will Happen:

1. **Frontend deploys** to your domain (e.g., `daxgenai.com`)
2. **API function deploys** to `yourdomain.com/api/send-email`
3. **PDF brochure** available at `yourdomain.com/DAxGENAI Data Analytics With GEN AI.pdf`
4. **Contact form works** automatically using your Gmail App Password
5. **Brochure download form** works with lead capture
6. **Emails sent** to daxgenai@gmail.com with all form data

### Testing After Deployment:

1. **Visit your live website**
2. **Test Download Brochure button** - should open modal with form
3. **Fill out brochure form** - should send email and show download options
4. **Test contact form** - should work as before
5. **Check daxgenai@gmail.com** for both types of emails

### Environment Variables (if needed):

If you want to use environment variables instead of hardcoded credentials:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `GMAIL_USER`: daxgenai@gmail.com
   - `GMAIL_APP_PASSWORD`: gqmx ebgf fwbb vhsd

Then update the API function to use:
```javascript
user: process.env.GMAIL_USER,
pass: process.env.GMAIL_APP_PASSWORD,
```

### Troubleshooting:

- **Function not found**: Check that `/api/send-email.js` is in the root directory
- **CORS errors**: The function includes CORS headers
- **Email not sending**: Check Vercel function logs in the dashboard

### Benefits:

✅ **Free on Vercel** - No additional costs
✅ **Automatic scaling** - Handles traffic spikes
✅ **Global CDN** - Fast worldwide
✅ **Custom domain** - Works with your domain
✅ **HTTPS** - Secure by default
✅ **Easy updates** - Just push to GitHub

Your contact form will work perfectly on Vercel! 🚀
