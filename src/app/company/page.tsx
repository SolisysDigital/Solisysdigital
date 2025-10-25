import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Solisys Digital | Outcome-Focused Partner',
  description:
    'We blend architecture, data, and marketing to deliver measurable growth.',
}

const values = [
  'Partnership',
  'Clarity', 
  'Speed',
  'Measurable impact'
]

const differentiators = [
  {
    title: 'Dual practice',
    description: 'Salesforce + marketing from day one',
    icon: '🤝',
  },
  {
    title: 'Vertical depth',
    description: 'FSC patterns, LOS/PMS/CCaaS integrations',
    icon: '🎯',
  },
  {
    title: 'Proven playbooks',
    description: 'discover → design → build → optimize',
    icon: '📋',
  },
]

function Hero() {
  return (
    <Container className="mt-16">
      <div className="mx-auto max-w-4xl text-center">
        <Heading as="h1" className="text-5xl font-medium">
          A partner obsessed with outcomes
        </Heading>
        <Lead className="mt-6 text-xl">
          We blend Salesforce architecture, data, and marketing to deliver measurable growth.
        </Lead>
      </div>
    </Container>
  )
}

function Story() {
  return (
    <div className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
            <div>
              <Subheading className="text-2xl mb-6">Our story</Subheading>
              <p className="text-lg text-gray-600 mb-6">
                Many teams buy great tools but miss the value because of scattered data, process debt, and low adoption. We fix that with vertical expertise, lean delivery, and a relentless focus on KPIs.
              </p>
              <p className="text-lg text-gray-600">
                We&apos;ve seen too many organizations invest in Salesforce and marketing tools separately, only to struggle with disconnected data and misaligned teams. That&apos;s why we built our practice around the belief that technology and marketing must work together from day one.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-md rounded-2xl overflow-hidden">
                <img 
                  src="/screenshots/OurStory1.jpg" 
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function WhyDifferent() {
  return (
    <div className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <Subheading className="text-3xl">Why we&apos;re different</Subheading>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function Values() {
  return (
    <div className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Subheading className="text-3xl mb-8">Our values</Subheading>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function TeamCTA() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-purple-200 py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h3" className="text-4xl font-medium">
            Meet the team behind the plan
          </Heading>
          <p className="mt-6 text-lg text-gray-600">
            Ready to work with a partner who understands both your technology and marketing challenges?
          </p>
          <div className="mt-8">
            <Button href="/contact">
              Talk to an expert
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function About() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Hero />
      <Story />
      <WhyDifferent />
      <Values />
      <TeamCTA />
      <Footer />
    </main>
  )
}