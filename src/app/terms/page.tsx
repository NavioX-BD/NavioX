import LegalPageLayout from '@/components/ui/LegalPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | NavioX Solutions Inc.',
  description: 'Read the comprehensive terms and conditions for using NavioX Solutions Inc. software development services.',
  keywords: 'terms of service, software development, terms and conditions, NavioX Solutions',
}

export default function TermsOfService() {
  const lastUpdated = 'December 15, 2024'

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'services-description', title: 'Services Description' },
    { id: 'client-responsibilities', title: 'Client Responsibilities' },
    { id: 'payment-billing', title: 'Payment & Billing' },
    { id: 'intellectual-property', title: 'Intellectual Property Rights' },
    { id: 'development-process', title: 'Development Process' },
    { id: 'confidentiality', title: 'Confidentiality & NDAs' },
    { id: 'warranties-disclaimers', title: 'Warranties & Disclaimers' },
    { id: 'limitation-liability', title: 'Limitation of Liability' },
    { id: 'data-ownership', title: 'Data Ownership & Security' },
    { id: 'termination', title: 'Termination & Suspension' },
    { id: 'dispute-resolution', title: 'Dispute Resolution' },
    { id: 'force-majeure', title: 'Force Majeure' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'compliance-laws', title: 'Compliance & Laws' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'modifications', title: 'Terms Modifications' },
    { id: 'severability', title: 'Severability' },
    { id: 'entire-agreement', title: 'Entire Agreement' },
    { id: 'contact-information', title: 'Contact Information' },
  ]

  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated={lastUpdated}
      description="Comprehensive terms governing our software development partnerships. Clear, fair terms designed to protect both parties while enabling successful project delivery."
      sections={sections}
    >
      <section data-section="acceptance" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Acceptance of Terms
        </h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
          <p className="text-blue-800 font-medium">
            By engaging NavioX Solutions Inc. for software development services, you agree to be bound by these comprehensive terms of service.
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) 
          and NavioX Solutions Inc. (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) regarding the use of our software development, 
          web development, mobile application development, and related technology services.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Agreement Scope
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Custom software development projects</li>
              <li>• Web and mobile application development</li>
              <li>• Cloud infrastructure and DevOps services</li>
              <li>• API development and integrations</li>
              <li>• Technical consulting and advisory services</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Important Notes
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Terms are effective immediately upon engagement</li>
              <li>• Supersedes all previous agreements</li>
              <li>• Regular updates to reflect industry changes</li>
              <li>• Binding on authorized representatives</li>
              <li>• Applicable to all current and future projects</li>
            </ul>
          </div>
        </div>
      </section>

      <section data-section="services-description" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Services Description
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-8">
          NavioX Solutions Inc. specializes in comprehensive software development services designed to transform your business ideas 
          into robust, scalable, and innovative digital solutions. Our expertise spans the entire development lifecycle.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
            <div className="text-purple-600 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-purple-800 mb-3">Custom Software Development</h3>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• Enterprise applications</li>
              <li>• SaaS platform development</li>
              <li>• Desktop applications</li>
              <li>• Legacy system modernization</li>
              <li>• Microservices architecture</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
            <div className="text-blue-600 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Web Development</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Progressive Web Applications (PWAs)</li>
              <li>• E-commerce platforms</li>
              <li>• Content Management Systems</li>
              <li>• Real-time web applications</li>
              <li>• Responsive design implementation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
            <div className="text-green-600 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-3">Mobile Development</h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Native iOS and Android apps</li>
              <li>• Cross-platform solutions</li>
              <li>• React Native development</li>
              <li>• Flutter applications</li>
              <li>• Mobile backend services</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
            <div className="text-orange-600 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Cloud & DevOps</h3>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• Cloud architecture design</li>
              <li>• CI/CD pipeline implementation</li>
              <li>• Infrastructure as Code (IaC)</li>
              <li>• Container orchestration</li>
              <li>• Monitoring and logging</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6">
            <div className="text-teal-600 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-teal-800 mb-3">API & Integrations</h3>
            <ul className="text-sm text-teal-700 space-y-1">
              <li>• RESTful API development</li>
              <li>• GraphQL implementation</li>
              <li>• Third-party integrations</li>
              <li>• Payment gateway integration</li>
              <li>• Webhook development</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-lg p-6">
            <div className="text-pink-600 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-pink-800 mb-3">Consulting & Strategy</h3>
            <ul className="text-sm text-pink-700 space-y-1">
              <li>• Technology stack selection</li>
              <li>• Architecture consultation</li>
              <li>• Code audits and reviews</li>
              <li>• Performance optimization</li>
              <li>• Security assessments</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Service Delivery Model</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">1</div>
              <h4 className="font-medium text-gray-700 mb-1">Discovery & Planning</h4>
              <p className="text-gray-600">Requirements analysis, technical planning, and project roadmap</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">2</div>
              <h4 className="font-medium text-gray-700 mb-1">Development & Testing</h4>
              <p className="text-gray-600">Agile development, continuous testing, and iterative delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">3</div>
              <h4 className="font-medium text-gray-700 mb-1">Deployment & Support</h4>
              <p className="text-gray-600">Production deployment, monitoring, and ongoing maintenance</p>
            </div>
          </div>
        </div>
      </section>

      <section data-section="client-responsibilities" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Client Responsibilities
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Successful project delivery requires active collaboration. As our client, you agree to fulfill the following responsibilities 
          to ensure timely and effective completion of your software development project.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Project Requirements
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Provide clear, detailed project specifications</li>
                <li>• Define acceptance criteria and success metrics</li>
                <li>• Supply necessary design assets and brand guidelines</li>
                <li>• Identify all integration requirements upfront</li>
                <li>• Communicate scope changes promptly</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Timely Communication
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Respond to requests within 48 hours</li>
                <li>• Attend scheduled meetings and reviews</li>
                <li>• Provide feedback within agreed timeframes</li>
                <li>• Escalate issues or concerns promptly</li>
                <li>• Maintain updated contact information</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
                Access & Resources
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Provide necessary system access credentials</li>
                <li>• Grant access to relevant APIs and services</li>
                <li>• Ensure availability of key stakeholders</li>
                <li>• Facilitate access to existing documentation</li>
                <li>• Support testing environment setup</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Payment Obligations
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Make payments according to agreed schedule</li>
                <li>• Process invoices within 30 days</li>
                <li>• Maintain current payment information</li>
                <li>• Report payment issues immediately</li>
                <li>• Cover additional costs for scope changes</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Legal Compliance
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Ensure all provided content is legally compliant</li>
                <li>• Obtain necessary licenses for third-party assets</li>
                <li>• Comply with data protection regulations</li>
                <li>• Maintain confidentiality of proprietary information</li>
                <li>• Adhere to industry-specific regulations</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Testing & Acceptance
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Participate in user acceptance testing</li>
                <li>• Provide timely feedback on deliverables</li>
                <li>• Test functionality in your environment</li>
                <li>• Sign off on completed project phases</li>
                <li>• Report bugs and issues systematically</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Project Success Partnership</h3>
          <p className="text-yellow-700">
            Project success depends on mutual collaboration. Delays in client responsibilities may impact project timelines 
            and costs. We&apos;re committed to working with you to ensure clear communication and efficient project delivery.
          </p>
        </div>
      </section>

      <section data-section="payment-billing" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Payment & Billing Terms
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Structure</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Fixed-Price Projects</h4>
                  <p className="text-sm text-gray-600 mb-2">For projects with well-defined scope and requirements:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 30% upfront payment upon contract signing</li>
                    <li>• 40% payment at 50% project completion</li>
                    <li>• 30% final payment upon project delivery</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Time & Materials</h4>
                  <p className="text-sm text-gray-600 mb-2">For projects with evolving requirements:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Bi-weekly invoicing based on actual hours</li>
                    <li>• Detailed time tracking and reporting</li>
                    <li>• Pre-approved hourly rates for different roles</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Retainer Agreements</h4>
                  <p className="text-sm text-gray-600 mb-2">For ongoing development and maintenance:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Monthly recurring payments</li>
                    <li>• Guaranteed availability and response times</li>
                    <li>• Flexible hour banks and rollover policies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Terms & Conditions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Invoice Processing</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Net 30 payment terms (unless otherwise agreed)</li>
                    <li>• Electronic invoicing via email</li>
                    <li>• Multiple payment methods accepted</li>
                    <li>• Automatic late payment notifications</li>
                    <li>• Detailed breakdown of all charges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Late Payment Policy</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 1.5% monthly interest on overdue amounts</li>
                    <li>• Work suspension after 15 days overdue</li>
                    <li>• Collection costs charged to client</li>
                    <li>• Right to demand immediate payment</li>
                    <li>• Termination rights for non-payment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">Accepted Payment Methods</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-blue-700 text-sm">Credit/Debit Cards</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <span className="text-blue-700 text-sm">Bank Wire Transfer</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-blue-700 text-sm">ACH Transfer</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span className="text-blue-700 text-sm">Digital Payments (PayPal, Stripe)</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Currency & Taxes</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <div>
                    <p className="text-sm text-green-700 font-medium">Primary Currency: USD</p>
                    <p className="text-xs text-green-600">Other currencies by arrangement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm text-green-700 font-medium">Tax Handling</p>
                    <p className="text-xs text-green-600">Applicable taxes added per jurisdiction</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Expense Policy</h3>
              <p className="text-sm text-orange-700 mb-3">
                Additional expenses incurred for your project will be billed separately with prior approval:
              </p>
              <ul className="text-xs text-orange-600 space-y-1">
                <li>• Third-party service licenses</li>
                <li>• Cloud hosting and infrastructure</li>
                <li>• Specialized software tools</li>
                <li>• Travel expenses (if applicable)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-section="intellectual-property" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Intellectual Property Rights
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-8">
          Clear intellectual property ownership protects both parties and ensures proper attribution and usage rights. 
          Our IP framework is designed to be fair and transparent while protecting our methodologies and your business assets.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Client Ownership Rights
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Custom Developed Code</h4>
                  <p className="text-sm text-blue-600">
                    Full ownership and source code rights transfer to client upon final payment completion.
                  </p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Business Logic & Data</h4>
                  <p className="text-sm text-blue-600">
                    All business-specific logic, processes, and data remain entirely under client ownership.
                  </p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Trademark & Branding</h4>
                  <p className="text-sm text-blue-600">
                    Client retains all rights to trademarks, brand elements, and proprietary content.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                NavioX Reserved Rights
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Development Methodologies</h4>
                  <p className="text-sm text-purple-600">
                    Our proprietary development processes, frameworks, and methodologies remain our intellectual property.
                  </p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Reusable Components</h4>
                  <p className="text-sm text-purple-600">
                    Generic utilities, libraries, and components we develop may be reused in other projects.
                  </p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Knowledge & Experience</h4>
                  <p className="text-sm text-purple-600">
                    General knowledge, techniques, and experience gained during your project remain with our team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Third-Party Components</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Open Source Software</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Subject to respective open source licenses (MIT, Apache, GPL, etc.)
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Detailed license documentation provided</li>
                    <li>• Compliance verification included</li>
                    <li>• Attribution requirements respected</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Commercial Libraries</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Licensed software requiring separate agreements
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Client responsible for licensing costs</li>
                    <li>• Assistance with license procurement</li>
                    <li>• Alternative solutions when possible</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">API Integrations</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Third-party service integrations and their terms
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Individual service terms apply</li>
                    <li>• Client accounts and billing separate</li>
                    <li>• Integration code fully owned by client</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Portfolio & Marketing Rights</h3>
              <div className="grid gap-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Case Study Rights</p>
                    <p className="text-xs text-gray-600">Right to showcase general project approach and technologies used</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Client Reference</p>
                    <p className="text-xs text-gray-600">Permission to list client name and project type in our portfolio</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Confidential Projects</p>
                    <p className="text-xs text-gray-600">No marketing rights for projects marked confidential</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">IP Violation Protection</h3>
              <p className="text-red-700 text-sm">
                Both parties agree to respect intellectual property rights and will indemnify each other against 
                IP violation claims related to materials they provided or approved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-section="development-process" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Development Process & Methodology
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-8">
          Our development process is designed for transparency, quality, and efficient delivery. We employ industry-standard 
          methodologies adapted to each project&apos;s unique requirements and client preferences.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-6">Agile Development Framework</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-1">Sprint Planning</h4>
                  <p className="text-sm text-blue-600">2-week sprints with clear deliverables and success criteria</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-1">Daily Standups</h4>
                  <p className="text-sm text-blue-600">Regular progress updates and issue identification</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-1">Sprint Reviews</h4>
                  <p className="text-sm text-blue-600">Demonstration of completed features and client feedback</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-1">Retrospectives</h4>
                  <p className="text-sm text-blue-600">Process improvement and team optimization</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-6">Quality Assurance Process</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">✓</div>
                <div>
                  <h4 className="font-medium text-green-700 mb-1">Code Reviews</h4>
                  <p className="text-sm text-green-600">Peer review for all code before integration</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">✓</div>
                <div>
                  <h4 className="font-medium text-green-700 mb-1">Automated Testing</h4>
                  <p className="text-sm text-green-600">Unit, integration, and end-to-end test coverage</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">✓</div>
                <div>
                  <h4 className="font-medium text-green-700 mb-1">Performance Testing</h4>
                  <p className="text-sm text-green-600">Load testing and optimization verification</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 mt-1">✓</div>
                <div>
                  <h4 className="font-medium text-green-700 mb-1">Security Audits</h4>
                  <p className="text-sm text-green-600">Regular security assessments and vulnerability scans</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Communication & Reporting</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Real-time Communication</h4>
              <p className="text-sm text-gray-600">Slack, email, and video calls for immediate issues and updates</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 text-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Progress Reports</h4>
              <p className="text-sm text-gray-600">Weekly detailed reports with metrics, accomplishments, and next steps</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 text-teal-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-700 mb-2">Project Visibility</h4>
              <p className="text-sm text-gray-600">Access to project management tools and live development environment</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">Change Management</h3>
            <p className="text-yellow-700 text-sm mb-3">
              We accommodate scope changes while maintaining project integrity:
            </p>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Formal change request documentation</li>
              <li>• Impact assessment on timeline and budget</li>
              <li>• Client approval before implementation</li>
              <li>• Updated project documentation</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-3">Risk Management</h3>
            <p className="text-red-700 text-sm mb-3">
              Proactive identification and mitigation of project risks:
            </p>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Regular risk assessment and reporting</li>
              <li>• Contingency planning for critical issues</li>
              <li>• Early warning systems for potential delays</li>
              <li>• Backup solutions and alternative approaches</li>
            </ul>
          </div>
        </div>
      </section>

      <section data-section="confidentiality" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Confidentiality & Non-Disclosure
        </h2>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-8">
          <p className="text-blue-800 font-medium">
            We understand that your business information, processes, and data are confidential and proprietary. 
            Our comprehensive confidentiality framework ensures maximum protection of your sensitive information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Confidential Information Includes
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-red-300 pl-4">
                  <h4 className="font-medium text-gray-700 mb-1">Business Information</h4>
                  <p className="text-sm text-gray-600">Business strategies, financial data, customer lists, pricing models, and market analysis</p>
                </div>
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-medium text-gray-700 mb-1">Technical Information</h4>
                  <p className="text-sm text-gray-600">Source code, algorithms, system architectures, database schemas, and API specifications</p>
                </div>
                <div className="border-l-4 border-yellow-300 pl-4">
                  <h4 className="font-medium text-gray-700 mb-1">Operational Information</h4>
                  <p className="text-sm text-gray-600">Internal processes, workflows, user data, analytics, and performance metrics</p>
                </div>
                <div className="border-l-4 border-green-300 pl-4">
                  <h4 className="font-medium text-gray-700 mb-1">Strategic Information</h4>
                  <p className="text-sm text-gray-600">Future plans, product roadmaps, partnership details, and competitive advantages</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Confidentiality Obligations</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Strict Non-Disclosure</p>
                    <p className="text-xs text-gray-600">No disclosure to third parties without explicit written consent</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Limited Access</p>
                    <p className="text-xs text-gray-600">Access restricted to team members directly involved in your project</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Secure Handling</p>
                    <p className="text-xs text-gray-600">Encrypted storage, secure transmission, and protected development environments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-green-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Return or Destruction</p>
                    <p className="text-xs text-gray-600">Secure deletion or return of all confidential materials upon project completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Security Measures</h3>
              <div className="space-y-4">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Technical Safeguards
                  </h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• End-to-end encryption for all communications</li>
                    <li>• Secure VPN access to development environments</li>
                    <li>• Multi-factor authentication for all accounts</li>
                    <li>• Regular security audits and monitoring</li>
                  </ul>
                </div>

                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Team Training
                  </h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Comprehensive confidentiality training</li>
                    <li>• Individual NDA agreements with all team members</li>
                    <li>• Regular security awareness updates</li>
                    <li>• Clear escalation procedures for security incidents</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">Legal Protections</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-orange-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <p className="text-sm text-orange-700 font-medium">Mutual NDA</p>
                    <p className="text-xs text-orange-600">Comprehensive non-disclosure agreement protecting both parties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-orange-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-orange-700 font-medium">Duration</p>
                    <p className="text-xs text-orange-600">Confidentiality obligations survive project completion by 5 years</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 text-orange-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  <div>
                    <p className="text-sm text-orange-700 font-medium">Remedies</p>
                    <p className="text-xs text-orange-600">Injunctive relief and damages available for breaches</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Exceptions</h3>
              <p className="text-sm text-gray-600 mb-3">
                Confidentiality obligations do not apply to information that:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Is publicly available through no breach by us</li>
                <li>• Was known to us prior to disclosure</li>
                <li>• Is required to be disclosed by law or court order</li>
                <li>• Is independently developed without use of your information</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-section="warranties-disclaimers" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Warranties & Disclaimers
        </h2>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
          <p className="text-yellow-800 font-medium">
            We provide warranties for our services while clearly disclaiming certain liabilities to ensure fair and transparent terms.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          This section outlines the warranties we provide and the disclaimers that apply to our services. 
          We believe in transparency and want to clearly communicate what we guarantee and what we don&apos;t.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Our Warranties
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Service Quality</h4>
                  <p className="text-sm text-green-600">Services will be performed with reasonable care and skill</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Professional Standards</h4>
                  <p className="text-sm text-green-600">Work will meet industry standards and best practices</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Compliance</h4>
                  <p className="text-sm text-green-600">Services will comply with applicable laws and regulations</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Intellectual Property</h4>
                  <p className="text-sm text-green-600">We have the right to provide the services and deliverables</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Performance Guarantees
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Timeline Commitment</h4>
                  <p className="text-sm text-blue-600">Reasonable efforts to meet agreed project timelines</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Quality Assurance</h4>
                  <p className="text-sm text-blue-600">Testing and review processes for all deliverables</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Communication</h4>
                  <p className="text-sm text-blue-600">Regular updates and responsive communication</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Disclaimers</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">No Guarantee of Results</h4>
                  <p className="text-sm text-gray-600">We cannot guarantee specific business outcomes or results</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Third-Party Services</h4>
                  <p className="text-sm text-gray-600">No warranty for third-party services or integrations</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Client Data</h4>
                  <p className="text-sm text-gray-600">No warranty for data provided by client</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Future Compatibility</h4>
                  <p className="text-sm text-gray-600">No guarantee of future compatibility with evolving technologies</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Exclusion of Warranties</h3>
              <p className="text-red-700 text-sm mb-3">
                EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, ALL WARRANTIES, EXPRESS OR IMPLIED, 
                INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
                AND NON-INFRINGEMENT, ARE DISCLAIMED.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Warranty Period</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Software Defects:</strong> 90 days from delivery</p>
                <p><strong>Documentation Errors:</strong> 30 days from delivery</p>
                <p><strong>Performance Issues:</strong> 60 days from deployment</p>
                <p><strong>Security Vulnerabilities:</strong> Ongoing during service period</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="limitation-liability" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Limitation of Liability
        </h2>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mb-6">
          <p className="text-red-800 font-medium">
            Our liability is limited to the amount paid for services in the 12 months preceding the claim.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          This section establishes the limits of our liability to ensure fair and reasonable risk allocation 
          between both parties. These limitations are standard in the software development industry.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Liability Limits
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Maximum Liability</h4>
                  <p className="text-sm text-blue-600">Limited to fees paid in the 12 months preceding the claim</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">No Consequential Damages</h4>
                  <p className="text-sm text-blue-600">Excludes lost profits, business interruption, data loss</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">No Punitive Damages</h4>
                  <p className="text-sm text-blue-600">Excludes exemplary or punitive damages</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Excluded Damages
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Indirect Damages</h4>
                  <p className="text-sm text-green-600">Lost profits, revenue, or business opportunities</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Data Loss</h4>
                  <p className="text-sm text-green-600">Loss of data, information, or content</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Reputational Harm</h4>
                  <p className="text-sm text-green-600">Damage to reputation or brand value</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Exceptions to Limitations</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Gross Negligence</h4>
                  <p className="text-sm text-gray-600">Limitations do not apply to gross negligence or willful misconduct</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Intellectual Property</h4>
                  <p className="text-sm text-gray-600">IP infringement claims may exceed liability limits</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Personal Injury</h4>
                  <p className="text-sm text-gray-600">Personal injury or death claims are not limited</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Statutory Rights</h4>
                  <p className="text-sm text-gray-600">Limitations do not affect statutory consumer rights</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Risk Allocation</h3>
              <p className="text-yellow-700 text-sm">
                These limitations reflect the nature of software development services and the risks inherent 
                in technology projects. They ensure fair risk allocation between both parties.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Insurance Coverage</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Professional Liability:</strong> $2,000,000 per occurrence</p>
                <p><strong>General Liability:</strong> $1,000,000 per occurrence</p>
                <p><strong>Cyber Liability:</strong> $1,000,000 per occurrence</p>
                <p><strong>Workers Compensation:</strong> As required by law</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="data-ownership" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Data Ownership & Security
        </h2>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
          <p className="text-blue-800 font-medium">
            Clear data ownership rights and comprehensive security measures protect your valuable information.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          This section defines data ownership, outlines security measures, and establishes protocols 
          for data handling throughout our engagement.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Data Ownership
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Client Data</h4>
                  <p className="text-sm text-green-600">You retain full ownership of all your data and content</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Generated Data</h4>
                  <p className="text-sm text-green-600">Data created during development belongs to you</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Usage Rights</h4>
                  <p className="text-sm text-green-600">You have unlimited rights to use your data</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Security Measures
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Encryption</h4>
                  <p className="text-sm text-purple-600">Data encrypted in transit and at rest</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Access Controls</h4>
                  <p className="text-sm text-purple-600">Role-based access and authentication</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Monitoring</h4>
                  <p className="text-sm text-purple-600">24/7 security monitoring and alerts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Data Handling Protocols</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Collection</h4>
                  <p className="text-sm text-gray-600">Only collect data necessary for project delivery</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Processing</h4>
                  <p className="text-sm text-gray-600">Process data according to agreed purposes</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Storage</h4>
                  <p className="text-sm text-gray-600">Secure storage with appropriate retention periods</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Deletion</h4>
                  <p className="text-sm text-gray-600">Secure deletion upon project completion</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Data Breach Response</h3>
              <p className="text-red-700 text-sm mb-3">
                In the event of a data breach:
              </p>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Immediate notification within 24 hours</li>
                <li>• Investigation and containment procedures</li>
                <li>• Regulatory notification if required</li>
                <li>• Remediation and prevention measures</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Compliance Standards</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>GDPR:</strong> Full compliance with data protection regulations</p>
                <p><strong>ISO 27001:</strong> Information security management system</p>
                <p><strong>SOC 2:</strong> Security, availability, and confidentiality controls</p>
                <p><strong>Industry Standards:</strong> Following best practices for data security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="termination" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Termination & Suspension
        </h2>
        
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg mb-6">
          <p className="text-orange-800 font-medium">
            Clear termination rights and procedures ensure both parties can end the relationship fairly and orderly.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          This section outlines the circumstances under which either party may terminate the agreement 
          and the procedures that must be followed to ensure an orderly transition.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Termination by Client
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-red-700 mb-2">Convenience</h4>
                  <p className="text-sm text-red-600">30 days written notice for any reason</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-red-700 mb-2">Material Breach</h4>
                  <p className="text-sm text-red-600">Immediate termination for our material breach</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-red-700 mb-2">Insolvency</h4>
                  <p className="text-sm text-red-600">Immediate termination if we become insolvent</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Termination by Us
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Non-Payment</h4>
                  <p className="text-sm text-blue-600">15 days after payment is overdue</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Material Breach</h4>
                  <p className="text-sm text-blue-600">Immediate termination for client material breach</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Illegal Activity</h4>
                  <p className="text-sm text-blue-600">Immediate termination for illegal use of services</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Termination Procedures</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Notice Period</h4>
                  <p className="text-sm text-gray-600">Written notice with specific termination date</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Transition Period</h4>
                  <p className="text-sm text-gray-600">Reasonable time for knowledge transfer</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Final Deliverables</h4>
                  <p className="text-sm text-gray-600">Completion of work in progress</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Data Return</h4>
                  <p className="text-sm text-gray-600">Return or deletion of client data</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Suspension Rights</h3>
              <p className="text-yellow-700 text-sm mb-3">
                We may suspend services for:
              </p>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Non-payment of invoices</li>
                <li>• Security concerns or violations</li>
                <li>• Excessive resource usage</li>
                <li>• Violation of acceptable use policies</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Post-Termination Obligations</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Confidentiality:</strong> Survives termination for 5 years</p>
                <p><strong>Payment:</strong> Outstanding amounts due immediately</p>
                <p><strong>Intellectual Property:</strong> Rights transfer upon final payment</p>
                <p><strong>Data:</strong> Secure deletion or return within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="dispute-resolution" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Dispute Resolution
        </h2>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-6">
          <p className="text-green-800 font-medium">
            We prefer to resolve disputes through direct communication and mediation before considering legal action.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          This section establishes a structured approach to resolving disputes, starting with direct 
          communication and progressing through mediation before any legal proceedings.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.013 8.013 0 01-7-4c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
                Resolution Steps
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Direct Discussion</h4>
                  <p className="text-sm text-blue-600">Initial attempt to resolve through direct communication</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Escalation</h4>
                  <p className="text-sm text-blue-600">Escalate to senior management within 10 days</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Mediation</h4>
                  <p className="text-sm text-blue-600">Formal mediation if direct resolution fails</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mediation Process
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Selection</h4>
                  <p className="text-sm text-green-600">Mutually agreed mediator or mediation service</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Timeline</h4>
                  <p className="text-sm text-green-700">Mediation to be completed within 60 days</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Costs</h4>
                  <p className="text-sm text-green-600">Costs shared equally between parties</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Legal Proceedings</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Last Resort</h4>
                  <p className="text-sm text-gray-600">Legal action only after mediation fails</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Jurisdiction</h4>
                  <p className="text-sm text-gray-600">Courts in Dhaka, Bangladesh have jurisdiction</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Governing Law</h4>
                  <p className="text-sm text-gray-600">Bangladesh law governs these Terms</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Attorney Fees</h4>
                  <p className="text-sm text-gray-600">Prevailing party may recover reasonable fees</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Interim Relief</h3>
              <p className="text-yellow-700 text-sm">
                Either party may seek interim relief (injunctive relief) from a court of competent 
                jurisdiction to prevent irreparable harm while the dispute resolution process is ongoing.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Communication During Disputes</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Good Faith:</strong> All parties must act in good faith</p>
                <p><strong>Confidentiality:</strong> Dispute proceedings are confidential</p>
                <p><strong>Continuation:</strong> Services continue during dispute resolution</p>
                <p><strong>Documentation:</strong> All communications documented in writing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="force-majeure" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Force Majeure
        </h2>
        
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg mb-6">
          <p className="text-orange-800 font-medium">
            Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          In the event that either party is unable to perform its obligations under these Terms due to circumstances 
          beyond its reasonable control, such party shall not be liable for any failure or delay in performance.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Qualifying Events
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Natural disasters (earthquakes, floods, hurricanes)</li>
              <li>• Government actions or regulations</li>
              <li>• War, terrorism, or civil unrest</li>
              <li>• Labor strikes or work stoppages</li>
              <li>• Internet or utility service failures</li>
              <li>• Acts of God or unforeseen circumstances</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Notification Requirements
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Immediate notification within 24 hours</li>
              <li>• Regular updates on situation status</li>
              <li>• Documentation of impact and duration</li>
              <li>• Cooperation in finding alternative solutions</li>
              <li>• Resumption of services when possible</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Mitigation Efforts</h3>
          <p className="text-gray-700 text-sm mb-4">
            Both parties agree to use reasonable efforts to minimize the impact of force majeure events:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Our Commitments</h4>
              <ul className="space-y-1">
                <li>• Implement business continuity plans</li>
                <li>• Provide remote work capabilities</li>
                <li>• Maintain backup systems and data</li>
                <li>• Communicate alternative arrangements</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Client Cooperation</h4>
              <ul className="space-y-1">
                <li>• Provide necessary access and information</li>
                <li>• Accept reasonable service modifications</li>
                <li>• Maintain communication channels</li>
                <li>• Consider alternative delivery methods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-section="indemnification" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Indemnification
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-8">
          Both parties agree to protect each other from certain claims and losses arising from their respective 
          actions or inactions under these Terms. This mutual protection ensures fair risk allocation.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Client Indemnification
              </h3>
              <p className="text-blue-700 text-sm mb-4">
                You agree to indemnify and hold us harmless from:
              </p>
              <ul className="text-sm text-blue-600 space-y-2">
                <li>• Claims arising from your content or materials</li>
                <li>• Violations of third-party intellectual property rights</li>
                <li>• Breaches of your obligations under these Terms</li>
                <li>• Misuse of our services or deliverables</li>
                <li>• Claims by your customers or end users</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Our Indemnification
              </h3>
              <p className="text-green-700 text-sm mb-4">
                We agree to indemnify and hold you harmless from:
              </p>
              <ul className="text-sm text-green-600 space-y-2">
                <li>• Claims arising from our gross negligence</li>
                <li>• Violations of our confidentiality obligations</li>
                <li>• Breaches of our service warranties</li>
                <li>• Claims by our employees or subcontractors</li>
                <li>• Infringement of our own intellectual property</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Indemnification Process</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Notification</h4>
                  <p className="text-sm text-gray-600">Prompt written notice of any claim or potential claim</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Cooperation</h4>
                  <p className="text-sm text-gray-600">Reasonable assistance in defense and settlement</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Control</h4>
                  <p className="text-sm text-gray-600">Indemnifying party controls defense and settlement</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Limitations</h4>
                  <p className="text-sm text-gray-600">Excludes consequential and punitive damages</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Exclusions</h3>
              <p className="text-red-700 text-sm mb-3">
                Indemnification does not cover:
              </p>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Claims arising from the other party&apos;s gross negligence</li>
                <li>• Willful misconduct or intentional violations</li>
                <li>• Claims covered by insurance policies</li>
                <li>• Consequential or punitive damages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-section="compliance-laws" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Compliance & Laws
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-8">
          Both parties agree to comply with all applicable laws, regulations, and industry standards. 
          This includes data protection, export controls, and other relevant legal requirements.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Data Protection & Privacy
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2">GDPR Compliance</h4>
                  <p className="text-sm text-purple-600">Processing personal data in accordance with GDPR requirements</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Data Security</h4>
                  <p className="text-sm text-purple-600">Implementing appropriate technical and organizational measures</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Data Breach Notification</h4>
                  <p className="text-sm text-purple-600">Prompt notification of any data security incidents</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Export Controls & Sanctions
              </h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Export Compliance</h4>
                  <p className="text-sm text-blue-600">Compliance with applicable export control regulations</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Sanctions Screening</h4>
                  <p className="text-sm text-blue-600">Screening against applicable sanctions lists</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-blue-700 mb-2">Technology Transfer</h4>
                  <p className="text-sm text-blue-600">Proper licensing for controlled technology</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Industry Standards</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Security Standards</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• ISO 27001 Information Security</li>
                    <li>• SOC 2 Type II Compliance</li>
                    <li>• OWASP Security Guidelines</li>
                    <li>• Industry best practices</li>
                  </ul>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-medium text-gray-700 mb-2">Quality Standards</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• ISO 9001 Quality Management</li>
                    <li>• Agile development methodologies</li>
                    <li>• Code review and testing standards</li>
                    <li>• Documentation requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Regulatory Changes</h3>
              <p className="text-yellow-700 text-sm mb-3">
                Both parties agree to:
              </p>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Monitor relevant regulatory changes</li>
                <li>• Update practices to maintain compliance</li>
                <li>• Notify each other of compliance issues</li>
                <li>• Cooperate in compliance audits</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Non-Compliance Consequences</h3>
              <p className="text-red-700 text-sm">
                Failure to comply with applicable laws may result in immediate termination of services 
                and potential legal action. Both parties reserve the right to suspend services if 
                compliance cannot be maintained.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-section="severability" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Severability
        </h2>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg mb-6">
          <p className="text-green-800 font-medium">
            If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Should any provision of these Terms be determined to be invalid, illegal, or unenforceable 
          by a court of competent jurisdiction, the validity, legality, and enforceability of the 
          remaining provisions shall not be affected or impaired in any way.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Partial Invalidity
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Invalid provisions do not affect other terms</li>
              <li>• Remaining provisions remain fully enforceable</li>
              <li>• Parties may negotiate replacement terms</li>
              <li>• Court may modify unenforceable provisions</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Reformation
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Courts may reform invalid provisions</li>
              <li>• Terms modified to be enforceable</li>
              <li>• Original intent preserved where possible</li>
              <li>• Parties agree to reasonable modifications</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Severability Process</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">1</div>
              <h4 className="font-medium text-gray-700 mb-1">Identification</h4>
              <p className="text-gray-600">Identify the specific unenforceable provision</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">2</div>
              <h4 className="font-medium text-gray-700 mb-1">Assessment</h4>
              <p className="text-gray-600">Evaluate impact on remaining terms</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">3</div>
              <h4 className="font-medium text-gray-700 mb-1">Enforcement</h4>
              <p className="text-gray-600">Continue with valid provisions</p>
            </div>
          </div>
        </div>
      </section>

      <section data-section="entire-agreement" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Entire Agreement
        </h2>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
          <p className="text-blue-800 font-medium">
            These Terms constitute the complete and exclusive agreement between the parties regarding the subject matter.
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-8">
          These Terms of Service, together with any project-specific agreements, statements of work, 
          and other documents expressly incorporated by reference, constitute the entire agreement 
          between you and NavioX Solutions Inc. regarding the subject matter hereof.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Supersedes Previous Agreements
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• All prior oral and written agreements</li>
                <li>• Previous terms of service</li>
                <li>• Contradictory communications</li>
                <li>• Informal understandings</li>
                <li>• Standard industry practices</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Incorporated Documents
              </h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Project-specific agreements</li>
                <li>• Statements of work (SOW)</li>
                <li>• Service level agreements (SLA)</li>
                <li>• Non-disclosure agreements (NDA)</li>
                <li>• Change orders and amendments</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Amendment Process</h3>
              <div className="space-y-3">
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Written Amendments</h4>
                  <p className="text-sm text-purple-600">All changes must be in writing and signed by both parties</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Specific References</h4>
                  <p className="text-sm text-purple-600">Amendments must specifically reference these Terms</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4">
                  <h4 className="font-medium text-purple-700 mb-2">Effective Date</h4>
                  <p className="text-sm text-purple-600">Changes become effective upon mutual agreement</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Parol Evidence Rule</h3>
              <p className="text-yellow-700 text-sm">
                No oral statements, negotiations, or other communications outside of this written agreement 
                shall be considered part of the agreement or used to interpret its terms.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Integration Clause</h3>
              <p className="text-gray-700 text-sm">
                This agreement represents the final, complete, and exclusive statement of the terms and conditions 
                between the parties and supersedes all prior negotiations, representations, or agreements 
                relating to the subject matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-section="contact-information" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Contact Information
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Legal & Contracts</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-blue-700">legal@navioxbd.com</span>
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
                <span className="text-blue-700">Business hours: 9 AM - 6 PM (GMT+6)</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">General Inquiries</h3>
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
                <span className="text-green-700">24/7 Support Portal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Company Information</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <p><strong>Legal Name:</strong> NavioX Solutions Inc.</p>
              <p><strong>Business Registration:</strong> Bangladesh</p>
              <p><strong>Tax ID:</strong> [Tax Identification Number]</p>
            </div>
            <div>
              <p><strong>Established:</strong> 2024</p>
              <p><strong>Industry:</strong> Software Development Services</p>
              <p><strong>Specialization:</strong> Custom Software, Web &amp; Mobile Apps</p>
            </div>
          </div>
        </div>
      </section>

    </LegalPageLayout>
  )
} 