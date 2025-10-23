import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Solisys Digital',
  description:
    'Privacy policy for Solisys Digital services.',
}

export default function Privacy() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      
      <Container className="mt-16 py-24">
        <div className="mx-auto max-w-4xl">
          <Heading as="h1" className="text-4xl font-medium mb-8">
            Privacy Policy
          </Heading>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Data We Collect</Subheading>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly (name, email, company, phone), information collected automatically (website usage, IP address, cookies), and information from third parties (social media, business partners). We only collect data necessary for service delivery.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">How We Use It</Subheading>
              <p className="text-gray-700 mb-4">
                We use your data to provide and improve our services, communicate with you, process transactions, send marketing communications (with consent), and comply with legal obligations. We do not use your data for purposes unrelated to our services.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Sharing with Providers</Subheading>
              <p className="text-gray-700 mb-4">
                We may share data with trusted service providers who assist in delivering our services (hosting, analytics, email services). These providers are bound by confidentiality agreements and may only use data as instructed by Solisys Digital.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Security</Subheading>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Your Rights</Subheading>
              <p className="text-gray-700 mb-4">
                You have the right to access, update, delete, or restrict processing of your data. You may withdraw consent for marketing communications at any time. To exercise these rights, contact us at privacy@solisysdigital.com.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Retention</Subheading>
              <p className="text-gray-700 mb-4">
                We retain your data only as long as necessary for the purposes outlined in this policy or as required by law. Client data is typically retained for the duration of the business relationship plus 7 years for legal compliance.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">International Transfers</Subheading>
              <p className="text-gray-700 mb-4">
                Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers, including standard contractual clauses and adequacy decisions.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Children</Subheading>
              <p className="text-gray-700 mb-4">
                Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the information promptly.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Updates</Subheading>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy from time to time. We will notify you of material changes via email or website notice. Your continued use of our services constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Contact</Subheading>
              <p className="text-gray-700 mb-4">
                For questions about this privacy policy or to exercise your rights, contact us at:
                <br />
                Email: privacy@solisysdigital.com
                <br />
                Phone: (555) 123-4567
              </p>
            </section>
          </div>
        </div>
      </Container>
      
      <Footer />
    </main>
  )
}
