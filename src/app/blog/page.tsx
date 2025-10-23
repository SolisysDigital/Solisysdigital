import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Solisys Digital',
  description:
    'Insights on Salesforce consulting and digital marketing for growth-focused businesses.',
}

function Hero() {
  return (
    <Container className="mt-16">
      <div className="mx-auto max-w-4xl text-center">
        <Heading as="h1" className="text-5xl font-medium">
          Insights & Resources
        </Heading>
        <Lead className="mt-6 text-xl">
          Expert insights on Salesforce consulting and digital marketing for growth-focused businesses.
        </Lead>
      </div>
    </Container>
  )
}

function ComingSoon() {
  return (
    <div className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-3xl bg-gray-50 p-12">
            <div className="text-6xl mb-6">📝</div>
            <Subheading className="text-2xl mb-4">Blog Coming Soon</Subheading>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re working on creating valuable content about Salesforce consulting, digital marketing, and business growth. Check back soon for expert insights and best practices.
            </p>
            <Button href="/contact" className="bg-pink-600 text-white hover:bg-pink-700">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Blog() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Hero />
      <ComingSoon />
      <Footer />
    </main>
  )
}