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
              <Subheading className="text-2xl mb-4">1. Purpose and Scope</Subheading>
              <p className="text-gray-700 mb-4">
                This Refund Policy governs refund requests for services provided by Solisys Digital, LLC. All services are outlined in individual Statements of Work (&quot;SOW&quot;), and refund eligibility is determined based on project completion status, acceptance criteria, and compliance with this policy. This policy is subject to Texas state law and any applicable federal regulations.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">2. Refund Eligibility Criteria</Subheading>
              <p className="text-gray-700 mb-4">
                Refunds may be considered under the following circumstances:
              </p>
              <ul className="text-gray-700 mb-4 ml-6 list-disc space-y-2">
                <li><strong>Undelivered Services:</strong> Services specified in the SOW that have not been delivered or commenced</li>
                <li><strong>Non-Compliance with SOW:</strong> Delivered services that do not meet the explicit acceptance criteria defined in the SOW</li>
                <li><strong>Material Breach by Solisys Digital:</strong> Substantial failure by Solisys Digital to perform as required under the agreement</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Refunds are NOT available for: (a) services that have been completed and accepted by the client, regardless of business outcomes; (b) third-party costs (licenses, software subscriptions, tools, platforms, external vendor fees); (c) services terminated by the client without cause; (d) change requests or scope modifications not included in the original SOW; or (e) delays caused by the client&apos;s failure to meet obligations.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">3. Refund Request Process</Subheading>
              <p className="text-gray-700 mb-4">
                All refund requests must be submitted in writing to <a href="mailto:service@solisysdigital.com" className="text-pink-600 hover:underline">service@solisysdigital.com</a> within thirty (30) days of service delivery, project completion, or the occurrence giving rise to the claim, whichever occurs first. Requests must include:
              </p>
              <ul className="text-gray-700 mb-4 ml-6 list-disc space-y-2">
                <li>Complete project reference number and SOW details</li>
                <li>Detailed explanation of the basis for the refund request</li>
                <li>Documentation supporting the claim (e.g., screenshots, correspondence, deliverables)</li>
                <li>Specific services or deliverables in dispute</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Late or incomplete requests will not be considered. Solisys Digital will acknowledge receipt of your request within five (5) business days.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">4. Assessment and Approval</Subheading>
              <p className="text-gray-700 mb-4">
                Refund eligibility is determined by comparing delivered services against: (a) the SOW requirements and specifications; (b) documented acceptance criteria; and (c) industry-standard quality metrics for comparable services. Solisys Digital will conduct a thorough review, which may include consultation with project team members, review of project artifacts, and verification of deliverables. Services that meet or exceed SOW requirements are not eligible for refunds, regardless of business outcomes, client satisfaction levels, or changes in business needs. This policy applies even if the services do not achieve anticipated business results or ROI expectations.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">5. Refund Calculation</Subheading>
              <p className="text-gray-700 mb-4">
                Approved refunds will be calculated on a pro rata basis based on the percentage of services not delivered or not meeting acceptance criteria. The refund amount will equal the paid fees for the disputed services minus: (a) costs for services that were delivered and met acceptance criteria; (b) all third-party costs (Salesforce licenses, marketing platform fees, advertising spend, software subscriptions, tools); (c) expenses incurred on the client&apos;s behalf; and (d) any applicable administrative fees. No refund will exceed the total amount paid by the client for the specific project in question.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">6. Refund Processing</Subheading>
              <p className="text-gray-700 mb-4">
                Upon approval, refunds will be processed within thirty (30) business days of the approval date. Refunds will be issued to the original payment method when feasible. If the original payment method is unavailable, alternative arrangements will be made with the client. Processing times may vary depending on: (a) the payment method and financial institution; (b) currency conversion requirements; and (c) banking or credit card processor policies. Client is responsible for any bank fees, currency conversion charges, or tax implications arising from the refund.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">7. Dispute Resolution</Subheading>
              <p className="text-gray-700 mb-4">
                If you disagree with Solisys Digital&apos;s refund decision, you may request a second-level review by providing additional documentation, evidence, or clarifications within fifteen (15) days of the initial decision. A senior management representative will conduct an independent review and provide a written response within fifteen (15) business days. Solisys Digital&apos;s decision on the second-level review is final, subject to legal recourse available under applicable law and the dispute resolution provisions in our Terms &amp; Conditions.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">8. Client Responsibilities</Subheading>
              <p className="text-gray-700 mb-4">
                To maximize service value and avoid refund disputes, clients agree to: (a) provide timely feedback during project delivery; (b) review and respond to deliverables within agreed timeframes; (c) communicate concerns promptly when they arise; (d) provide complete and accurate project information; (e) authorize necessary approvals for service progression; and (f) comply with all SOW requirements. Delays or issues caused by client inaction may impact refund eligibility.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">9. Project Cancellation</Subheading>
              <p className="text-gray-700 mb-4">
                If a client cancels a project for reasons unrelated to Solisys Digital&apos;s performance, the client is responsible for payment of all services rendered and expenses incurred through the cancellation date, in addition to any applicable cancellation fees specified in the SOW. Third-party costs paid on the client&apos;s behalf are non-refundable. Work completed and deliverables provided remain the property of Solisys Digital unless otherwise specified in the SOW.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">10. Exclusions and Limitations</Subheading>
              <p className="text-gray-700 mb-4">
                This Refund Policy does not apply to: (a) subscription services, retainer agreements, or recurring service arrangements, which may be governed by separate terms; (b) third-party products, licenses, or services provided by external vendors; (c) digital products, templates, or pre-built solutions purchased separately; or (d) services provided under separate agreements with distinct terms. Some services may be non-refundable as specified in their respective SOWs or service agreements.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">11. Modifications to This Policy</Subheading>
              <p className="text-gray-700 mb-4">
                Solisys Digital reserves the right to modify this Refund Policy at any time. Changes will be effective upon posting on our website with an updated &quot;Last updated&quot; date. Material changes will be communicated to existing clients via email. The version of this policy in effect at the time of service contract signing will govern that engagement. Continued engagement of services after policy updates constitutes acceptance of the current policy.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">12. Contact Information</Subheading>
              <p className="text-gray-700 mb-4">
                For refund requests, questions about this policy, or to provide feedback, contact us:
                <br />
                <strong>Solisys Digital, LLC</strong>
                <br />
                1560 E Southlake Blvd, Suite 100
                <br />
                Southlake, TX 76092
                <br />
                Email: <a href="mailto:service@solisysdigital.com" className="text-pink-600 hover:underline">service@solisysdigital.com</a>
                <br />
                Phone: (415) 805-6617
                <br />
                <br />
                For refund requests, please ensure you include your project reference number and detailed explanation. We strive to respond to all inquiries within five (5) business days.
              </p>
            </section>
          </div>
        </div>
      </Container>
      
      <Footer />
    </main>
  )
}
