import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Solisys Digital | Book a Discovery Call',
  description:
    'Get your focused 100-day plan to value.',
}

const sectors = [
  'Financial Services',
  'Real Estate & Mortgage', 
  'Travel & Hospitality',
  'High-Volume Contact Centers',
  'Other'
]

function Hero() {
  return (
    <Container className="mt-16">
      <div className="mx-auto max-w-4xl text-center">
        <Heading as="h1" className="text-5xl font-medium">
          Let&apos;s map your next 100 days
        </Heading>
        <Lead className="mt-6 text-xl">
          In 30 minutes, we&apos;ll assess goals, risks, and the fastest path to value.
        </Lead>
      </div>
    </Container>
  )
}

function ContactForm() {
  return (
    <div className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl bg-white p-10 shadow-2xl ring-1 ring-black/5">
            <Subheading className="text-2xl mb-8 text-center">Book a discovery call</Subheading>
            
            <form className="space-y-6">
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
                <Button 
                  type="submit" 
                  className="w-full bg-pink-600 text-white hover:bg-pink-700 py-4 text-lg"
                >
                  Book a discovery call
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

function ContactInfo() {
  return (
    <div className="py-24 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Subheading className="text-3xl">Get in touch</Subheading>
            <p className="mt-4 text-lg text-gray-600">
              Ready to connect your growth engine? Let&apos;s start the conversation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">hello@solisysdigital.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600">Remote-first team</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Contact() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Hero />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </main>
  )
}
