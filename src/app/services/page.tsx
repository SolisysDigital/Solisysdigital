import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Salesforce Consulting & Digital Marketing | Solisys Digital',
  description:
    'End-to-end Salesforce delivery and ROI-focused digital marketing that work together.',
}

const sectors = [
  {
    title: 'Financial Services',
    description: 'Client 360, compliant journeys, advisor productivity',
    icon: '🏦',
  },
  {
    title: 'Real Estate & Mortgage',
    description: 'Lead-to-close, LOS milestones → CRM → comms',
    icon: '🏠',
  },
  {
    title: 'Travel & Hospitality',
    description: 'Direct bookings, guest lifecycle, loyalty & recovery',
    icon: '✈️',
  },
  {
    title: 'High-Volume Contact Centers',
    description: 'Omnichannel, AI assist, deflection & retention',
    icon: '📞',
  },
]

const salesforceServices = [
  'Roadmap & org strategy (licenses, security, COE)',
  'Sales/Service/Experience/Marketing/Data Cloud architecture',
  'FSC industry models & action plans',
  'Integrations (LOS/core/PMS/CCaaS, APIs, middleware)',
  'Automation & AI (flows, bots, next-best action)',
  'Analytics (pipeline, CSAT, attribution for leaders)',
  'Training & adoption playbooks',
]

const digitalMarketingServices = [
  'ICPs, messaging, content pillars',
  'SEO/SEM, paid social, email, ABM',
  'Website & landing experiences that convert',
  'MAP + CRM sync, scoring, routing',
  'Experiments & A/B tests',
  'Multi-touch attribution, CAC/LTV dashboards',
]

function Hero() {
  return (
    <Container className="mt-16">
      <div className="mx-auto max-w-4xl text-center">
        <Heading as="h1" className="text-5xl font-medium">
          Two practices. One engine.
        </Heading>
        <Lead className="mt-6 text-xl">
          Salesforce consulting + digital marketing designed to reinforce each other—from strategy to attribution.
        </Lead>
        <div className="mt-8">
          <Button href="/contact" className="bg-pink-600 text-white hover:bg-pink-700">
            Talk to an expert
          </Button>
        </div>
      </div>
    </Container>
  )
}

function ServicesSection() {
  return (
    <div className="py-24">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Salesforce Consulting */}
          <div className="rounded-3xl bg-white p-10 shadow-2xl ring-1 ring-black/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <Subheading className="text-2xl">Salesforce Consulting</Subheading>
                <p className="text-sm text-gray-600 mt-1">Implement the right Salesforce—not just more Salesforce.</p>
              </div>
            </div>
            <ul className="space-y-4">
              {salesforceServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Marketing */}
          <div className="rounded-3xl bg-white p-10 shadow-2xl ring-1 ring-black/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <Subheading className="text-2xl">Digital Marketing</Subheading>
                <p className="text-sm text-gray-600 mt-1">Turn marketing into a pipeline engine.</p>
              </div>
            </div>
            <ul className="space-y-4">
              {digitalMarketingServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

function SectorsSection() {
  return (
    <div className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <Subheading className="text-3xl">Sectors we specialize in</Subheading>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{sector.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{sector.title}</h3>
              <p className="text-sm text-gray-600">{sector.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function ManagedServices() {
  return (
    <div className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-3xl bg-gray-900 p-12 text-white">
            <h4 className="text-2xl font-semibold mb-4">Keep value compounding</h4>
            <p className="text-lg text-gray-300 mb-8">
              Proactive admin, enhancements, and quarterly roadmap reviews.
            </p>
            <Button href="/contact" className="bg-white text-gray-900 hover:bg-gray-100">
              Learn more
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CTASection() {
  return (
    <div className="py-24 bg-gray-900">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h3" dark className="text-4xl font-medium">
            Let&apos;s make the plan
          </Heading>
          <p className="mt-6 text-lg text-gray-300">
            Ready to connect your growth engine? In 30 minutes, we&apos;ll map a focused 100-day plan to measurable value.
          </p>
          <div className="mt-8">
            <Button href="/contact" className="bg-white text-gray-900 hover:bg-gray-100">
              Book a discovery call
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Services() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Hero />
      <ServicesSection />
      <SectorsSection />
      <ManagedServices />
      <CTASection />
      <Footer />
    </main>
  )
}
