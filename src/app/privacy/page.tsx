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
              <Subheading className="text-2xl mb-4">1. Introduction</Subheading>
              <p className="text-gray-700 mb-4">
                Solisys Digital, LLC ("we," "us," or "our") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website. By using our services, you consent to the data practices described in this policy. We comply with applicable privacy laws, including Texas privacy statutes and federal regulations such as the Gramm-Leach-Bliley Act where applicable.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">2. Information We Collect</Subheading>
              <p className="text-gray-700 mb-4">
                We collect several types of information to provide and improve our services:
              </p>
              <p className="text-gray-700 mb-4 ml-4">
                <strong>Information You Provide:</strong> We collect personal and business information you provide directly, including: name, email address, phone number, company name, job title, billing information, project requirements, and any other information you submit through our website, contact forms, or communications.
              </p>
              <p className="text-gray-700 mb-4 ml-4">
                <strong>Information Collected Automatically:</strong> We automatically collect certain technical information when you visit our website, including: IP address, browser type and version, device information, operating system, referral source, pages visited, time and date of visits, clickstream data, and website usage patterns through cookies and similar tracking technologies.
              </p>
              <p className="text-gray-700 mb-4 ml-4">
                <strong>Information from Third Parties:</strong> We may receive information from business partners, service providers, social media platforms, public databases, and other third-party sources to supplement the information we collect directly.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">3. How We Use Your Information</Subheading>
              <p className="text-gray-700 mb-4">
                We use the information we collect for the following business purposes:
              </p>
              <ul className="text-gray-700 mb-4 ml-6 list-disc space-y-2">
                <li>Providing, delivering, and managing our consulting and digital marketing services</li>
                <li>Processing transactions, payments, and invoicing</li>
                <li>Communicating with you about your projects, services, and support inquiries</li>
                <li>Sending you marketing communications, newsletters, and promotional offers (with your consent)</li>
                <li>Improving and optimizing our services, website, and user experience</li>
                <li>Conducting analytics, research, and performance analysis</li>
                <li>Detecting, preventing, and addressing fraud, security issues, and legal compliance</li>
                <li>Compliance with legal obligations, court orders, and governmental requests</li>
                <li>Protecting our rights, property, and safety, as well as that of our clients and users</li>
              </ul>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">4. Information Sharing and Disclosure</Subheading>
              <p className="text-gray-700 mb-4">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes. We may share your information in the following circumstances:
              </p>
              <p className="text-gray-700 mb-4 ml-4">
                <strong>Service Providers:</strong> We share data with trusted third-party service providers who assist in delivering our services, including: cloud hosting providers (Vercel, AWS), email service providers (Resend), analytics platforms (Google Analytics), payment processors, CRM systems (Salesforce), and other business support vendors. These providers are contractually obligated to protect your information and may only use it as instructed by Solisys Digital.
              </p>
              <p className="text-gray-700 mb-4 ml-4">
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, reorganization, sale of assets, or bankruptcy, your information may be transferred to the acquiring or surviving entity.
              </p>
              <p className="text-gray-700 mb-4 ml-4">
                <strong>Legal Compliance:</strong> We may disclose information when required by law, legal process, subpoena, court order, or governmental authority, or to protect our legal rights, prevent harm to persons or property, or ensure compliance with applicable laws and regulations.
              </p>
              <p className="text-gray-700 mb-4 ml-4">
                <strong>With Your Consent:</strong> We may share information with third parties when you explicitly authorize such disclosure.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">5. Data Security</Subheading>
              <p className="text-gray-700 mb-4">
                We implement commercially reasonable administrative, technical, and physical safeguards to protect your information against unauthorized access, alteration, disclosure, or destruction. Our security measures include: encrypted data transmission (TLS/SSL), secure storage of sensitive data, access controls and authentication requirements, regular security assessments and vulnerability testing, employee training on data protection practices, and incident response procedures. However, no method of transmission or storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">6. Your Privacy Rights</Subheading>
              <p className="text-gray-700 mb-4">
                Depending on your jurisdiction, you may have certain rights regarding your personal information:
              </p>
              <ul className="text-gray-700 mb-4 ml-6 list-disc space-y-2">
                <li><strong>Access:</strong> Request access to your personal information we hold</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Objection:</strong> Object to processing of your information for certain purposes</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Do Not Sell:</strong> Opt out of any potential sale of personal information (though we do not currently sell personal information)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, contact us at <a href="mailto:service@solisysdigital.com" className="text-pink-600 hover:underline">service@solisysdigital.com</a>. We will respond to valid requests within 30 days or as required by applicable law. We may require identity verification before processing certain requests.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">7. Cookie Policy</Subheading>
              <p className="text-gray-700 mb-4">
                We use cookies, web beacons, and similar tracking technologies to enhance your website experience, analyze traffic patterns, and personalize content. Cookies are small text files stored on your device. You can control cookie preferences through your browser settings; however, disabling certain cookies may limit website functionality. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted or expired).
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">8. Data Retention</Subheading>
              <p className="text-gray-700 mb-4">
                We retain your information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary based on: (a) the nature of the information; (b) legal and regulatory requirements; (c) the duration of our business relationship; and (d) legitimate business needs. Client data is typically retained for the duration of the business relationship plus seven (7) years for legal and accounting compliance. Website analytics data may be retained in aggregated, anonymized form indefinitely.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">9. International Data Transfers</Subheading>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your country of residence, including the United States and the jurisdictions where our service providers operate. These countries may have data protection laws different from those in your jurisdiction. We implement appropriate safeguards for international transfers, including standard contractual clauses, adequacy decisions, and other mechanisms recognized by applicable privacy laws. By using our services, you consent to such transfers.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">10. Children's Privacy</Subheading>
              <p className="text-gray-700 mb-4">
                Our services are not directed to individuals under the age of 16 (or 18 in certain jurisdictions), and we do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child without parental consent, we will promptly delete such information. If you believe we have collected information from a child, please contact us immediately at <a href="mailto:service@solisysdigital.com" className="text-pink-600 hover:underline">service@solisysdigital.com</a>.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">11. Third-Party Links</Subheading>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites, applications, or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit. This Privacy Policy does not apply to information collected by third parties.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">12. California Privacy Rights</Subheading>
              <p className="text-gray-700 mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including: the right to know what personal information we collect, use, and disclose; the right to request deletion of personal information; the right to opt-out of sale or sharing of personal information (we do not sell personal information); the right to non-discrimination for exercising your privacy rights; and the right to limit use of sensitive personal information. To exercise these rights, contact us at <a href="mailto:service@solisysdigital.com" className="text-pink-600 hover:underline">service@solisysdigital.com</a>.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">13. Updates to This Policy</Subheading>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational, legal, or regulatory reasons. We will notify you of material changes by: posting the updated policy on our website with a revised "Last updated" date, sending email notifications to the address on file, or providing prominent website notices. Your continued use of our services after the effective date of changes constitutes acceptance of the updated policy. If you do not agree with the changes, you should discontinue use of our services and contact us to discuss your concerns.
              </p>
            </section>

            <section className="mb-12">
              <Subheading className="text-2xl mb-4">14. Contact Us</Subheading>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy, wish to exercise your privacy rights, or need to report a privacy concern, please contact us:
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
