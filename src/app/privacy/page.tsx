import LegalPageLayout from '@/components/ui/LegalPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | NavioX Solutions Inc.',
  description: 'Learn how NavioX Solutions Inc. protects and handles your personal information in compliance with global data protection regulations.',
  keywords: 'privacy policy, data protection, GDPR, software development, NavioX Solutions',
}

export default function PrivacyPolicy() {
  const lastUpdated = 'December 15, 2024'

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-we-collect', title: 'Information We Collect' },
    { id: 'how-we-use-information', title: 'How We Use Information' },
    { id: 'information-sharing', title: 'Information Sharing' },
    { id: 'data-security', title: 'Data Security & Protection' },
    { id: 'your-rights', title: 'Your Rights & Controls' },
    { id: 'international-transfers', title: 'International Transfers' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'cookies-tracking', title: 'Cookies & Tracking' },
    { id: 'third-party-services', title: 'Third-Party Services' },
    { id: 'updates-changes', title: 'Policy Updates' },
    { id: 'contact-us', title: 'Contact Information' },
  ]

  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated={lastUpdated}
      description="Your privacy is fundamental to our mission. Learn how we protect, process, and respect your personal data in our software development services."
      sections={sections}
    >
      <section data-section="introduction" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Introduction
        </h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
          <p className="text-blue-800 font-medium">
                      NavioX Solutions Inc. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring 
          transparent data practices in all our software development services.
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          This Privacy Policy explains how we collect, use, process, and protect your personal information when you:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
          <li>Visit our website or use our digital services</li>
          <li>Engage with our software development, web development, or consulting services</li>
          <li>Communicate with us through various channels</li>
          <li>Participate in our development projects or collaborative platforms</li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          We comply with global data protection regulations including GDPR (EU), CCPA (California), PIPEDA (Canada), 
          and other applicable privacy laws to ensure your personal data receives the highest level of protection.
        </p>
      </section>

      <section data-section="information-we-collect" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Information We Collect
        </h2>
        
        <div className="grid gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Personal Information You Provide
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, company name, job title</li>
              <li><strong>Business Information:</strong> Company details, project requirements, technical specifications</li>
              <li><strong>Communication Data:</strong> Messages, feedback, support requests, meeting notes</li>
              <li><strong>Project Data:</strong> Requirements documents, technical specifications, collaboration materials</li>
              <li><strong>Account Information:</strong> Username, password, preferences, profile information</li>
              <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely by third parties)</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Automatically Collected Information
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system</li>
              <li><strong>Usage Analytics:</strong> Pages visited, time spent, interaction patterns, feature usage</li>
              <li><strong>Performance Data:</strong> Application performance metrics, error logs, response times</li>
              <li><strong>Cookies & Tracking:</strong> Session data, preferences, authentication tokens</li>
              <li><strong>Communication Metadata:</strong> Email delivery status, open rates, click-through rates</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Professional & Development Data
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Development Requirements:</strong> Technical specifications, architecture preferences, technology stack choices</li>
              <li><strong>Collaboration Data:</strong> Version control interactions, code review comments, project management data</li>
              <li><strong>Integration Information:</strong> API usage patterns, third-party service connections, system configurations</li>
              <li><strong>Performance Metrics:</strong> Application usage statistics, performance benchmarks, optimization data</li>
            </ul>
          </div>
        </div>
      </section>

      <section data-section="how-we-use-information" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          How We Use Your Information
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Service Delivery & Support</h3>
            <ul className="list-disc pl-5 text-blue-700 space-y-1 text-sm">
              <li>Develop and deliver custom software solutions</li>
              <li>Provide technical support and maintenance</li>
              <li>Manage project timelines and deliverables</li>
              <li>Facilitate communication and collaboration</li>
              <li>Process payments and manage billing</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Quality & Improvement</h3>
            <ul className="list-disc pl-5 text-green-700 space-y-1 text-sm">
              <li>Monitor and improve service quality</li>
              <li>Analyze usage patterns for optimization</li>
              <li>Develop new features and capabilities</li>
              <li>Conduct security assessments and audits</li>
              <li>Gather feedback for service enhancement</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-4">Communication & Marketing</h3>
            <ul className="list-disc pl-5 text-purple-700 space-y-1 text-sm">
              <li>Send project updates and notifications</li>
              <li>Share industry insights and best practices</li>
              <li>Provide technical newsletters and resources</li>
              <li>Inform about new services and capabilities</li>
              <li>Conduct customer satisfaction surveys</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-4">Legal & Compliance</h3>
            <ul className="list-disc pl-5 text-orange-700 space-y-1 text-sm">
              <li>Comply with legal and regulatory requirements</li>
              <li>Protect intellectual property rights</li>
              <li>Prevent fraud and security threats</li>
              <li>Respond to legal requests and investigations</li>
              <li>Maintain accurate business records</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <p className="text-yellow-800">
            <strong>Legal Basis:</strong> We process your data based on legitimate business interests, contractual necessity, 
            legal compliance, and your explicit consent where required by applicable law.
          </p>
        </div>
      </section>

      <section data-section="information-sharing" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Information Sharing & Disclosure
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">When We Share Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">✅ We Share With:</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                  <li>Trusted service providers and subcontractors</li>
                  <li>Cloud hosting and infrastructure partners</li>
                  <li>Payment processors and financial institutions</li>
                  <li>Legal advisors and compliance consultants</li>
                  <li>Authorized third parties with your consent</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">❌ We Never Share For:</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1 text-sm">
                  <li>Commercial sale or rental of personal data</li>
                  <li>Unauthorized marketing purposes</li>
                  <li>Data broker or aggregation services</li>
                  <li>Unrelated business ventures</li>
                  <li>Competitive intelligence gathering</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Key Partners</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Infrastructure Partners</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• AWS (Cloud hosting)</li>
                  <li>• Cloudflare (CDN & Security)</li>
                  <li>• MongoDB Atlas (Database)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Communication Tools</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Google Workspace (Email)</li>
                  <li>• Slack (Team communication)</li>
                  <li>• Zoom (Video conferencing)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Analytics & Marketing</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Google Analytics (Website analytics)</li>
                  <li>• Mailchimp (Email marketing)</li>
                  <li>• HubSpot (CRM)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="data-security" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Data Security & Protection
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Technical Safeguards
            </h3>
            <ul className="list-disc pl-5 text-green-700 space-y-2 text-sm">
              <li>End-to-end encryption for data in transit and at rest</li>
              <li>Multi-factor authentication (MFA) for all accounts</li>
              <li>Regular security audits and penetration testing</li>
              <li>Automated threat detection and monitoring</li>
              <li>Secure coding practices and code reviews</li>
              <li>Regular security patches and updates</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Organizational Measures
            </h3>
            <ul className="list-disc pl-5 text-blue-700 space-y-2 text-sm">
              <li>Comprehensive data protection training for staff</li>
              <li>Strict access controls and need-to-know policies</li>
              <li>Regular compliance assessments and audits</li>
              <li>Incident response and breach notification procedures</li>
              <li>Data protection impact assessments (DPIAs)</li>
              <li>Third-party vendor security evaluations</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Data Breach Response</h3>
          <p className="text-red-700">
            In the unlikely event of a data breach, we will notify affected individuals and relevant authorities 
            within 72 hours as required by applicable regulations. We maintain comprehensive incident response 
            procedures to minimize impact and prevent future occurrences.
          </p>
        </div>
      </section>

      <section data-section="your-rights" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Your Rights & Controls
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { title: 'Access', icon: '👁️', desc: 'Request access to your personal data and information about how we process it' },
            { title: 'Rectification', icon: '✏️', desc: 'Request correction of inaccurate or incomplete personal data' },
            { title: 'Erasure', icon: '🗑️', desc: 'Request deletion of your personal data under certain circumstances' },
            { title: 'Portability', icon: '📦', desc: 'Receive your data in a structured, machine-readable format' },
            { title: 'Restriction', icon: '⏸️', desc: 'Request restriction of processing under certain conditions' },
            { title: 'Objection', icon: '✋', desc: 'Object to processing based on legitimate interests or for marketing' },
          ].map((right, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">{right.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{right.title}</h3>
              <p className="text-sm text-gray-600">{right.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">How to Exercise Your Rights</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-blue-700 mb-2">Contact Methods:</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Email: privacy@navioxbd.com</li>
                <li>• Contact form: /contact</li>
                <li>• Mail: NavioX Solutions Inc., Dhaka, Bangladesh</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-700 mb-2">Response Timeline:</h4>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• Initial response: Within 48 hours</li>
                <li>• Full response: Within 30 days</li>
                <li>• Complex requests: Up to 90 days with notification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-section="international-transfers" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          International Data Transfers
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          As a global software development company, we may transfer your personal data to countries outside your region. 
          We ensure all international transfers comply with applicable data protection laws through appropriate safeguards.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">EU to Third Countries</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Standard Contractual Clauses (SCCs)</li>
              <li>• Adequacy decisions where available</li>
              <li>• Additional safeguards for high-risk transfers</li>
              <li>• Transfer impact assessments</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Cross-Border Processing</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Secure cloud infrastructure</li>
              <li>• Data residency options</li>
              <li>• Encryption during transmission</li>
              <li>• Regular compliance monitoring</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Regional Compliance</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• GDPR (European Union)</li>
              <li>• CCPA (California, USA)</li>
              <li>• PIPEDA (Canada)</li>
              <li>• Local data protection laws</li>
            </ul>
          </div>
        </div>
      </section>

      <section data-section="data-retention" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Data Retention Periods
        </h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Data Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Retention Period</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Legal Basis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">Project & Client Data</td>
                <td className="px-6 py-4 text-sm text-gray-600">Duration of contract + 7 years</td>
                <td className="px-6 py-4 text-sm text-gray-600">Legal compliance, warranty obligations</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">Communication Records</td>
                <td className="px-6 py-4 text-sm text-gray-600">3 years after last contact</td>
                <td className="px-6 py-4 text-sm text-gray-600">Business records, dispute resolution</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">Marketing Data</td>
                <td className="px-6 py-4 text-sm text-gray-600">Until consent withdrawn</td>
                <td className="px-6 py-4 text-sm text-gray-600">Consent-based processing</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">Technical Logs</td>
                <td className="px-6 py-4 text-sm text-gray-600">12 months</td>
                <td className="px-6 py-4 text-sm text-gray-600">Security monitoring, system optimization</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-700">Financial Records</td>
                <td className="px-6 py-4 text-sm text-gray-600">7 years</td>
                <td className="px-6 py-4 text-sm text-gray-600">Tax law compliance</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700">
            <strong>Automatic Deletion:</strong> We implement automated deletion procedures to ensure data is removed 
            when retention periods expire, unless there are legal obligations requiring longer retention.
          </p>
        </div>
      </section>

      <section data-section="cookies-tracking" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Cookies & Tracking Technologies
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our services. 
          You can control cookie settings through your browser preferences.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Essential Cookies</h3>
            <p className="text-sm text-gray-600 mb-3">Required for basic website functionality</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Authentication and session management</li>
              <li>• Security and fraud prevention</li>
              <li>• Load balancing and performance</li>
              <li>• User preference storage</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Analytics Cookies</h3>
            <p className="text-sm text-gray-600 mb-3">Help us understand website usage</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Google Analytics (anonymized)</li>
              <li>• Performance monitoring</li>
              <li>• User behavior analysis</li>
              <li>• Conversion tracking</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Cookie Management</h3>
          <p className="text-blue-700 mb-4">
            You can manage cookie preferences through your browser settings or our cookie management tool. 
            Disabling certain cookies may affect website functionality.
          </p>
          <a 
            href="/cookies" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View detailed Cookie Policy →
          </a>
        </div>
      </section>

      <section data-section="third-party-services" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Third-Party Services & Integrations
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Our software development services may integrate with various third-party platforms and tools. 
          Each integration is governed by the respective third party&apos;s privacy policy in addition to our own.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { category: 'Development Tools', services: ['GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Confluence'] },
            { category: 'Cloud Platforms', services: ['AWS', 'Google Cloud', 'Azure', 'Heroku', 'Vercel'] },
            { category: 'Communication', services: ['Slack', 'Discord', 'Zoom', 'Microsoft Teams'] },
            { category: 'Analytics', services: ['Google Analytics', 'Mixpanel', 'Hotjar', 'LogRocket'] },
          ].map((category, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3">{category.category}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {category.services.map((service, idx) => (
                  <li key={idx}>• {service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <p className="text-yellow-800">
            <strong>Integration Privacy:</strong> When using third-party integrations, data sharing is limited to what&apos;s 
            necessary for functionality. We encourage reviewing the privacy policies of integrated services.
          </p>
        </div>
      </section>

      <section data-section="updates-changes" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Policy Updates & Changes
        </h2>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">How We Notify You</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email notification for material changes
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19H6a2 2 0 01-2-2V7a2 2 0 012-2h5m5 14V7a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2h2z" />
                  </svg>
                  Website banner for significant updates
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  30-day notice period for major changes
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Version History</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex justify-between">
                  <span>Current Version</span>
                  <span className="font-medium">{lastUpdated}</span>
                </li>
                <li className="flex justify-between">
                  <span>Previous Update</span>
                  <span>June 15, 2024</span>
                </li>
                <li className="flex justify-between">
                  <span>Initial Publication</span>
                  <span>January 10, 2024</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-section="contact-us" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Contact Information
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Privacy Officer</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-blue-700">privacy@navioxbd.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-blue-700">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-blue-700">Response within 48 hours</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">General Support</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-green-700">info@navioxbd.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
                <a href="/contact" className="text-green-700 hover:text-green-800">Contact Form</a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-700">24/7 Technical Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Regulatory Information</h3>
          <p className="text-gray-600 mb-4">
            NavioX Solutions Inc. is committed to compliance with global data protection regulations. 
            We regularly review our practices to ensure adherence to evolving privacy standards.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">GDPR Compliant</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">CCPA Compliant</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">PIPEDA Compliant</span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">ISO 27001 Framework</span>
          </div>
        </div>
      </section>

    </LegalPageLayout>
  )
} 