import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Solisys Digital',
  description:
    'Terms and conditions for Solisys Digital services.',
}

export default function Terms() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      
      <Container className="mt-16 py-24">
        <div className="mx-auto max-w-4xl">
          <Heading as="h1" className="text-4xl font-medium mb-8">
            Terms & Conditions
          </Heading>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Scope of Services</Subheading>
              <p className="text-gray-700 mb-4">
                Solisys Digital provides Salesforce consulting and digital marketing services as outlined in individual Statements of Work (SOW). Services include but are not limited to Salesforce implementation, configuration, training, digital marketing strategy, and ongoing support.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Client Duties</Subheading>
              <p className="text-gray-700 mb-4">
                Clients agree to provide timely access to necessary systems, data, and personnel. Client must designate a project manager and provide accurate information required for service delivery. Any delays caused by client inaction may result in project timeline adjustments.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Fees & Payment</Subheading>
              <p className="text-gray-700 mb-4">
                All fees are as specified in the SOW. Payment terms are net-30 days from invoice date. Late payments may incur a 1.5% monthly service charge. Client is responsible for all applicable taxes unless otherwise specified.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">IP & Deliverables</Subheading>
              <p className="text-gray-700 mb-4">
                Client retains ownership of all pre-existing intellectual property. Solisys Digital retains ownership of proprietary methodologies, tools, and templates. Custom deliverables created specifically for client become client property upon full payment.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Confidentiality</Subheading>
              <p className="text-gray-700 mb-4">
                Both parties agree to maintain confidentiality of all proprietary information. This obligation survives termination of the agreement. Solisys Digital will not disclose client information to third parties without written consent.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Data Protection</Subheading>
              <p className="text-gray-700 mb-4">
                Solisys Digital implements appropriate security measures to protect client data. Client data is processed in accordance with applicable privacy laws and our Privacy Policy. We do not sell or rent client data to third parties.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Warranties</Subheading>
              <p className="text-gray-700 mb-4">
                Services are provided in a workmanlike manner consistent with industry standards. Solisys Digital does not guarantee specific business outcomes or results. Any warranties are limited to the extent permitted by law.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Liability Cap</Subheading>
              <p className="text-gray-700 mb-4">
                Solisys Digital&apos;s total liability is limited to fees paid by client in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages. This limitation applies regardless of the legal theory.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Termination</Subheading>
              <p className="text-gray-700 mb-4">
                Either party may terminate with 30 days written notice. Upon termination, client pays for services rendered and expenses incurred. Solisys Digital will provide reasonable assistance for transition of services.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Governing Law/Venue</Subheading>
              <p className="text-gray-700 mb-4">
                These terms are governed by the laws of [State/Country]. Any disputes will be resolved in the courts of [Jurisdiction]. Both parties consent to personal jurisdiction in such courts.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Changes</Subheading>
              <p className="text-gray-700 mb-4">
                Solisys Digital may update these terms with 30 days notice. Continued use of services constitutes acceptance of changes. Material changes will be communicated via email.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Contact</Subheading>
              <p className="text-gray-700 mb-4">
                For questions about these terms, contact us at:
                <br />
                Email: legal@solisysdigital.com
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
