import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const MIN_FORM_TIME_MS = 3000

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error('RESEND_API_KEY is not set.')
      return NextResponse.json(
        { message: 'Server configuration error: Resend API key missing.' },
        { status: 500 }
      )
    }

    const { name, company, email, phone, sector, goals, website, formLoadedAt } =
      await request.json()

    // Honeypot: bots fill hidden fields; pretend success so they do not adapt
    if (website) {
      return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 })
    }

    // Reject instant submissions (automated scripts)
    if (
      typeof formLoadedAt === 'number' &&
      Date.now() - formLoadedAt < MIN_FORM_TIME_MS
    ) {
      return NextResponse.json(
        { message: 'Submission too fast. Please try again.' },
        { status: 400 }
      )
    }

    if (!name || !email || !goals) {
      return NextResponse.json(
        { message: 'Missing required fields: name, email, goals.' },
        { status: 400 }
      )
    }

    const resend = new Resend(apiKey)

    const { data, error } = await resend.emails.send({
      from: 'Solisys Digital Contact Form <noreply@contactus.solisysdigital.com>',
      to: ['Solisys@solisyspro.com'],
      subject: `New Contact Form Submission from ${name} - ${company || 'N/A'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Sector:</strong> ${sector || 'N/A'}</p>
        <p><strong>Goals:</strong></p>
        <p>${goals}</p>
      `,
    })

    if (error) {
      console.error('Resend email error:', error)
      return NextResponse.json(
        { message: 'Failed to send email via Resend.', details: error },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 })
  } catch (error: unknown) {
    console.error('API route error:', error)
    const errorMessage = error instanceof Error ? error.message : String(error)
    return NextResponse.json(
      { message: 'An unexpected error occurred.', details: errorMessage },
      { status: 500 }
    )
  }
}
