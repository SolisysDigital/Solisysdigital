# Resend Email Setup

To enable the contact form to send emails:

1. Sign up for a free Resend account at https://resend.com
2. Go to https://resend.com/api-keys and create an API key
3. Add the API key to your `.env.local` file:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
4. Add the same API key to your Vercel project settings:
   - Go to https://vercel.com
   - Select your project
   - Go to Settings > Environment Variables
   - Add RESEND_API_KEY with your API key value
   - Deploy again after adding

5. Verify your domain in Resend (for production emails)

The contact form will send emails to: service@solisysdigital.com
