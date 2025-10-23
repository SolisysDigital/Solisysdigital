import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy | Solisys Digital',
  description:
    'Refund policy for Solisys Digital services.',
}

export default function Refund() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      
      <Container className="mt-16 py-24">
        <div className="mx-auto max-w-4xl">
          <Heading as="h1" className="text-4xl font-medium mb-8">
            Refund Policy
          </Heading>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Eligibility</Subheading>
              <p className="text-gray-700 mb-4">
                Refunds are available for SOW-defined services that have not been delivered or accepted by the client. Services that have been completed and accepted by the client are not eligible for refunds. Third-party costs (licenses, tools, external services) are excluded from refund eligibility.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Request Window</Subheading>
              <p className="text-gray-700 mb-4">
                Refund requests must be submitted within 30 days of service delivery or project completion, whichever occurs first. Requests submitted after this period will not be considered. All refund requests must be submitted in writing to billing@solisysdigital.com.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Assessment vs. SOW & Acceptance Criteria</Subheading>
              <p className="text-gray-700 mb-4">
                Refund eligibility is determined by comparing the delivered services against the Statement of Work (SOW) and acceptance criteria. Services that meet or exceed SOW requirements and acceptance criteria are not eligible for refunds, regardless of business outcomes or results.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Refunds</Subheading>
              <p className="text-gray-700 mb-4">
                Approved refunds will be prorated based on the percentage of services not delivered or not meeting acceptance criteria. Third-party costs incurred on behalf of the client (Salesforce licenses, marketing tools, etc.) are non-refundable and will be deducted from any refund amount.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Processing</Subheading>
              <p className="text-gray-700 mb-4">
                Refund processing will be completed within 30 days of approval. Refunds will be issued to the original payment method when possible. Processing times may vary depending on the payment method and financial institution.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Dispute Resolution</Subheading>
              <p className="text-gray-700 mb-4">
                If you disagree with our refund decision, you may request a review by providing additional documentation or evidence. We will conduct a fair review and provide a written response within 15 business days.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">Contact</Subheading>
              <p className="text-gray-700 mb-4">
                For refund requests or questions about this policy, contact us at:
                <br />
                Email: billing@solisysdigital.com
                <br />
                Phone: (555) 123-4567
                <br />
                <br />
                Please include your project reference number and detailed explanation of the refund request.
              </p>
            </section>
          </div>
        </div>
      </Container>
      
      <Footer />
    </main>
  )
}
