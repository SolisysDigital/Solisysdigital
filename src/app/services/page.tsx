import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Salesforce Consulting & Digital Marketing | Solisys Digital',
  description:
    'End-to-end Salesforce delivery and ROI-focused digital marketing that work together.',
}

const capabilities = [
  {
    title: 'Strategy',
    description: 'Strategic planning and business intelligence',
    details: 'Business Consulting, 360° Customer View, Multi-Channel Campaigns, CRM & Loyalty Programs, Full-Funnel Optimization, KPIs & Data Insights',
  },
  {
    title: 'Media',
    description: 'Digital media planning and execution',
    details: 'Digital Planning & Buying, Programmatic Advertising, Paid Search & Social, Segmentation Targeting, CDP Integrated Audiences',
  },
  {
    title: 'Creative',
    description: 'Creative services and brand design',
    details: 'Creative & Art Direction, Web, Email & Social, Display Ads & Banner, Video & Motion Design, UX & UI, Copywriting',
  },
  {
    title: 'Marketing Cloud',
    description: 'Salesforce Marketing Cloud expertise',
    details: 'CDP, Email Studio, Ad Studio, Marketing Cloud Connect, Marketing Cloud API, Mobile Connect & Mobile Push, Automation Studio, Interaction Studio, Journey Builder, Sales Cloud, Intelligence (Datorama), Complex & Dynamic Content, AMPscript & SSJS Coding',
  },
  {
    title: 'Financial Services Consulting',
    description: 'Salesforce solutions for financial institutions',
    details: 'Salesforce Consulting for Financial Services Clients, Wealth Management CRM Solutions, Compliance & Regulatory Alignment, Client Lifecycle Management, Advisor Productivity Tools, Secure Data Integration & Reporting',
  },
  {
    title: 'AI Services',
    description: 'Artificial intelligence and automation',
    details: 'Development of Sales Chatbots, Development of Service Chatbots, Conversational AI Strategy, Natural Language Processing (NLP), AI-Powered Personalization, Predictive Lead Scoring & Insights',
  },
]

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

function CapabilitiesSection() {
  return (
    <div className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <Subheading className="text-3xl">Capabilities</Subheading>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 text-left hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{capability.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{capability.description}</p>
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                {capability.details.split(', ').map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
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
            <Button href="/contact">
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
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-purple-200 py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h3" className="text-4xl font-medium">
            Let&apos;s make the plan
          </Heading>
          <p className="mt-6 text-lg text-gray-600">
            Ready to connect your growth engine? We&apos;ll map a focused 100-day plan to measurable value.
          </p>
          <div className="mt-8">
            <Button href="/contact">
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
      <CapabilitiesSection />
      <SectorsSection />
      <ManagedServices />
      <CTASection />
      <Footer />
    </main>
  )
}
