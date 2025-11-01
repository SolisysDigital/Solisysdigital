'use client'

import { useState } from 'react'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Subheading } from '@/components/text'

const sectors = [
  'Financial Services',
  'Real Estate & Mortgage',
  'Travel & Hospitality',
  'High-Volume Contact Centers',
  'Other',
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formsubmit.co/ef09207ebe9b726100ee3bdcd0e7d03c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          company: formData.get('company'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          sector: formData.get('sector'),
          goals: formData.get('goals'),
          _subject: `New Contact Form Submission from ${formData.get('name')} - ${formData.get('company')}`,
          _next: window.location.origin + '/contact',
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        e.currentTarget.reset()
      } else {
        const responseText = await response.text()
        console.error('Error response status:', response.status)
        console.error('Error response headers:', response.headers)
        console.error('Error response body:', responseText)
        setSubmitStatus('error')
        alert(`Error ${response.status}: ${responseText}`)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace')
      console.error('Full error details:', JSON.stringify(error, null, 2))
      setSubmitStatus('error')
      alert(`Caught error: ${error instanceof Error ? error.message : String(error)}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl bg-white p-10 shadow-2xl ring-1 ring-black/5">
            <Subheading className="text-2xl mb-8 text-center">Book a discovery call</Subheading>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  Thank you! Your message has been sent. We&apos;ll get back to you within one business day.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm font-medium">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2">
                  Sector *
                </label>
                <select
                  id="sector"
                  name="sector"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value="">Select your sector</option>
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Goals *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  placeholder="Tell us about your current challenges and what you hope to achieve..."
                />
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full py-4 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Book a discovery call'}
                </Button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                We&apos;ll reply within one business day with a concise plan.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

