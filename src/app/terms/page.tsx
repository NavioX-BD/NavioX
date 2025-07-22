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
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'modifications', title: 'Terms Modifications' },
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