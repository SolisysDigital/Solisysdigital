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
              <Subheading className="text-2xl mb-4">1. Acceptance of Terms</Subheading>
              <p className="text-gray-700 mb-4">
                By accessing or using services provided by Solisys Digital, LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms &amp; Conditions. If you do not agree to these terms, you must not use our services. These terms constitute a legally binding agreement between you and Solisys Digital.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">2. Scope of Services</Subheading>
              <p className="text-gray-700 mb-4">
                Solisys Digital provides Salesforce consulting, implementation, configuration, and digital marketing services as outlined in individual Statements of Work (&quot;SOW&quot;). Services may include but are not limited to: Salesforce platform setup and optimization, custom development, user training, digital marketing strategy, campaign management, data analytics, and ongoing technical support. Specific deliverables and timelines are defined in each SOW.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">3. Client Responsibilities</Subheading>
              <p className="text-gray-700 mb-4">
                Client agrees to: (a) designate an authorized project manager for communications and decisions; (b) provide timely access to systems, data, and personnel necessary for service delivery; (c) provide accurate and complete information required for service execution; (d) review and approve deliverables in a timely manner; (e) ensure client personnel are available for scheduled meetings and training; and (f) comply with all applicable laws and regulations. Delays caused by client failure to meet these obligations may result in timeline adjustments, additional fees, or project scope modifications.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">4. Fees and Payment Terms</Subheading>
              <p className="text-gray-700 mb-4">
                All fees are specified in the applicable SOW. Unless otherwise stated, payment terms are net 30 days from invoice date. Invoices are due upon receipt. Late payments may incur a service charge of 1.5% per month (18% annually) or the maximum rate allowed under Texas law, whichever is less. Client is responsible for all applicable federal, state, and local taxes. Solisys Digital reserves the right to suspend services for accounts with overdue balances exceeding 60 days.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">5. Intellectual Property Rights</Subheading>
              <p className="text-gray-700 mb-4">
                Client retains all rights, title, and interest in pre-existing intellectual property provided to Solisys Digital. Solisys Digital retains ownership of its proprietary methodologies, tools, frameworks, templates, and general know-how developed independently. Custom deliverables created specifically for Client and paid for in full shall become Client&apos;s property upon final payment, subject to Solisys Digital&apos;s right to use anonymized, aggregated data for improving its services.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">6. Confidentiality and Non-Disclosure</Subheading>
              <p className="text-gray-700 mb-4">
                Both parties agree to maintain the confidentiality of all proprietary information disclosed during the engagement. This obligation includes: (a) using confidential information solely for the purpose of fulfilling the engagement; (b) not disclosing confidential information to third parties without prior written consent; (c) implementing reasonable safeguards to protect confidential information; and (d) returning or destroying confidential materials upon request. These obligations survive termination of the agreement for a period of five (5) years.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">7. Data Protection and Privacy</Subheading>
              <p className="text-gray-700 mb-4">
                Solisys Digital implements commercially reasonable security measures to protect client data, including industry-standard encryption, access controls, and regular security assessments. Client data is processed in accordance with applicable privacy laws, including Texas privacy statutes and federal regulations. We do not sell, rent, or trade client data to third parties for marketing purposes. Detailed data handling practices are outlined in our Privacy Policy, which is incorporated by reference.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">8. Warranties and Disclaimers</Subheading>
              <p className="text-gray-700 mb-4">
                Solisys Digital warrants that services will be performed in a workmanlike manner consistent with industry standards. EXCEPT AS EXPRESSLY SET FORTH HEREIN, SOLISYS DIGITAL DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not guarantee specific business outcomes, revenue increases, or performance metrics. Services are provided &quot;as is&quot; to the extent permitted by applicable law.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">9. Limitation of Liability</Subheading>
              <p className="text-gray-700 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY TEXAS LAW, SOLISYS DIGITAL&apos;S TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY CLIENT TO SOLISYS DIGITAL IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM. SOLISYS DIGITAL SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, OR BUSINESS INTERRUPTION, REGARDLESS OF THE THEORY OF LIABILITY.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">10. Indemnification</Subheading>
              <p className="text-gray-700 mb-4">
                Each party shall indemnify, defend, and hold harmless the other party from and against any third-party claims, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising from its breach of these terms, violation of applicable law, or gross negligence.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">11. Termination</Subheading>
              <p className="text-gray-700 mb-4">
                Either party may terminate an engagement with thirty (30) days written notice. Upon termination: (a) Client shall pay for all services rendered and expenses incurred through the termination date; (b) Solisys Digital shall provide reasonable assistance to Client for service transition; (c) each party shall return or destroy confidential materials as requested; and (d) provisions that by their nature should survive shall continue in effect.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">12. Dispute Resolution</Subheading>
              <p className="text-gray-700 mb-4">
                The parties shall attempt to resolve disputes through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules, conducted in Tarrant County, Texas. Notwithstanding the foregoing, either party may seek injunctive relief in state or federal courts in Texas to protect intellectual property or confidential information.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">13. Governing Law and Venue</Subheading>
              <p className="text-gray-700 mb-4">
                These terms are governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of laws principles. Any legal proceedings arising out of or relating to these terms shall be brought exclusively in the state or federal courts located in Tarrant County, Texas, and both parties consent to personal jurisdiction and venue in such courts.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">14. Force Majeure</Subheading>
              <p className="text-gray-700 mb-4">
                Neither party shall be liable for delays or failures in performance resulting from circumstances beyond its reasonable control, including acts of God, natural disasters, war, terrorism, pandemics, cyber-attacks, or government actions. If such circumstances persist for more than ninety (90) days, either party may terminate the affected engagement.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">15. General Provisions</Subheading>
              <p className="text-gray-700 mb-4">
                These terms, together with any applicable SOW, constitute the entire agreement between the parties. No modification shall be effective unless made in writing and signed by both parties. If any provision is found unenforceable, the remaining provisions shall remain in full effect. Solisys Digital may assign this agreement in connection with a merger or acquisition. Client may not assign these terms without Solisys Digital&apos;s prior written consent. These terms do not create any agency, partnership, or joint venture relationship between the parties.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">16. Amendments</Subheading>
              <p className="text-gray-700 mb-4">
                Solisys Digital may modify these terms at any time by posting updated terms on our website and providing at least thirty (30) days advance written notice to clients. Material changes will be communicated via email to the address on file. Your continued use of services after the effective date of changes constitutes acceptance of the modified terms. If you do not agree to the changes, you must terminate your engagement in accordance with Section 11.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">17. Contact Information</Subheading>
              <p className="text-gray-700 mb-4">
                For questions about these terms or to request modifications, contact us at:
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
              </p>
            </section>
          </div>
        </div>
      </Container>
      
      <Footer />
    </main>
  )
}
