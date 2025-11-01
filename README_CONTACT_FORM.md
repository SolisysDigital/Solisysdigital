# Contact Form Setup with Resend

The contact form uses Resend to send emails from the verified subdomain `contactus.solisysdigital.com`.

## Configuration

### Environment Variables
- `RESEND_API_KEY`: Required in both `.env.local` (development) and Vercel project settings (production)
- Current API key: `re_hQTUy6Ad_MmBECnVSp7RjiHGdxhGXWDoa`

### Domain Setup
- **Sending domain**: `contactus.solisysdigital.com` (verified in Resend)
- **Sending address**: `noreply@contactus.solisysdigital.com`
- **Recipient**: `service@solisysdigital.com`

### DNS Records
DNS records for `contactus.solisysdigital.com` are managed in Vercel project settings.

## How It Works

1. Form submission triggers `/api/contact` endpoint
2. API route validates data and sends email via Resend
3. Email sent from verified subdomain to your M365 email
4. No impact on main domain email configuration

## Files
- API Route: `src/app/api/contact/route.ts`
- Contact Form: `src/components/contact-form.tsx`
