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
  {
    title: 'Partnership',
    description: 'We work alongside your team, not just as vendors. Your success is our success, and we measure it together.',
  },
  {
    title: 'Clarity',
    description: 'Complex problems deserve clear solutions. We cut through the jargon to deliver actionable insights and straightforward strategies.',
  },
  {
    title: 'Speed',
    description: 'Time to value matters. We deliver rapid implementations without sacrificing quality, using proven frameworks and best practices.',
  },
  {
    title: 'Measurable impact',
    description: 'We focus on outcomes, not activities. Every engagement is tied to KPIs that matter to your business.',
  },
]

const differentiators = [
  {
    title: 'Dual practice',
    description: 'Salesforce + marketing from day one',
    details: 'Unlike traditional consultancies that focus on one domain, we bring together Salesforce expertise and digital marketing from the start. This unified approach eliminates silos between your tech stack and marketing operations, ensuring data flows seamlessly and teams align around shared goals.',
    image: '/screenshots/company-dual practice1.png',
  },
  {
    title: 'Vertical depth',
    description: 'Financial Services Cloud patterns and deep integration expertise',
    details: 'We specialize in Financial Services Cloud architecture, connecting Loan Origination Systems (LOS), Property Management Systems (PMS), Contact Center as a Service (CCaaS), and core banking platforms. Our industry-specific patterns reduce implementation risk and accelerate time to value.',
    image: '/screenshots/Company-vertical depth1.png',
  },
  {
    title: 'Proven playbooks',
    description: 'discover → design → build → optimize',
    details: 'Our agile methodology ensures predictable outcomes and continuous improvement. From initial discovery and solution design to rapid build cycles and ongoing optimization, our proven playbooks deliver measurable results and accelerate your path to success.',
    image: '/screenshots/company-playbook1.png',
  },
]

function Hero() {
  return (
    <Container className="mt-16">
      <div className="mx-auto max-w-4xl text-center">
        <Heading as="h1" className="text-5xl font-medium">
        About Solisys Digital
        </Heading>
        <Lead className="mt-6 text-xl">
          We are a boutique consultancy that blends Digital marketing, Salesforce financial services , data insights to deliver measurable growth.
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
              Solisys Digital emerged from a passion for solving complex CRM challenges in regulated industries. With a team of certified experts, we have delivered over 20 implementations, focusing on financial services, real estate, travel, and contact centers. 
              Our approach? Data-first strategies that turn insights into action
              <br>
              </br>Many teams buy great tools but miss the value because of scattered data, process debt, and low adoption. We fix that with vertical expertise, lean delivery, and a relentless focus on KPIs.
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
              className="rounded-2xl bg-white p-0 shadow-lg ring-1 ring-black/5 text-left hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-blue-100 via-purple-100 to-purple-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <p className="text-gray-500 text-sm">{item.details}</p>
              </div>
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
        <div className="mx-auto max-w-4xl">
          <Subheading className="text-3xl mb-12 text-center">Our values</Subheading>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gray-50 p-8 shadow-lg ring-1 ring-black/5 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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