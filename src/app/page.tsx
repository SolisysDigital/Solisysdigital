import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Salesforce implementation and data-driven digital marketing for financial services, real estate, mortgage, travel & hospitality, and high-volume contact centers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-5xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Accelerate your growth with Salesforce and Digital Marketing
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Salesforce implementation and data-driven digital marketing for financial services, real estate & mortgage, travel & hospitality, and high-volume contact centers.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Book a discovery call</Button>
            <Button variant="secondary" href="/services">
              Explore services
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A single view of your growth engine
        </Heading>
        <p className="mt-6 max-w-3xl text-lg/7 text-gray-600">
          Align sales, service, marketing, and data around a shared Customer 360 so every team works from the same truth.
        </p>
        <Screenshot
          width={1920}
          height={1080}
          src="/screenshots/C360.png"
          className="mt-16 w-full max-w-5xl mx-auto"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Sales</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Get perfect clarity on your revenue engine
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="Unify leads, accounts, households, and service history. Surface next-best actions with Data Cloud signals and automation."
          graphic={
            <div className="h-80 bg-[url(/screenshots/Sf%20Pipelines1.png)] bg-contain bg-center bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Prove what works"
          description="Pipeline, attribution, and CSAT dashboards that tie journeys to revenue—so budgets follow impact."
          graphic={
            <div className="h-80 bg-[url(/screenshots/Sf%20Dashboard3.png)] bg-contain bg-center bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Build fast, adopt faster"
          description="Vertical templates + change-management playbooks shorten time-to-value and boost adoption across teams."
          graphic={
            <div className="h-80 bg-[url(/screenshots/buildfast-ai-1.png)] bg-contain bg-center bg-no-repeat" />
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Connect your web forms, LOS/PMS/booking tools, and contact center to Salesforce. Clean data in, clean decisions out."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Multi-brand, multi-region architectures with governance, privacy, and permissions designed in—so scale is safe."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer engagement, orchestrated
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Launch targeted journeys"
            description="Launch targeted journeys across email, search, and social—synced to CRM stages."
            graphic={
              <div className="h-80 pt-8 bg-[url(/screenshots/Targetted-journeys2.png)] bg-contain bg-center bg-no-repeat opacity-90 rounded-2xl" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Connect everything"
            description="Connect CCaaS, core banking/LOS, PMS/booking, and analytics—no more swivel-chair ops."
            graphic={<LogoTimeline />}
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Embed scheduling"
            description="Embed scheduling and intake directly into portals and campaigns."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Personalize content"
            description="Personalize content and offers from first touch to renewal."
            graphic={
              <div className="h-80 p-8 bg-[url(/screenshots/Pers%20Service1.png)] bg-contain bg-center bg-no-repeat opacity-90 rounded-2xl" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function FinalCTA() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-purple-200 py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h3" className="text-4xl font-medium">
            Ready to connect your growth engine?
          </Heading>
          <p className="mt-6 text-lg text-gray-600">
            In 30 minutes, we&apos;ll map a focused 100-day plan to measurable value.
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

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  )
}
