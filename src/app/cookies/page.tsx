import LegalPageLayout from '@/components/ui/LegalPageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | NavioX Solutions Inc.',
  description: 'Learn about how NavioX Solutions Inc. uses cookies and tracking technologies to enhance your experience on our website.',
  keywords: 'cookie policy, tracking technologies, privacy, web analytics, NavioX Solutions',
}

export default function CookiePolicy() {
  const lastUpdated = 'December 15, 2024'

  const sections = [
    { id: 'what-are-cookies', title: 'What Are Cookies' },
    { id: 'how-we-use-cookies', title: 'How We Use Cookies' },
    { id: 'types-of-cookies', title: 'Types of Cookies We Use' },
    { id: 'third-party-cookies', title: 'Third-Party Cookies' },
    { id: 'cookie-duration', title: 'Cookie Duration & Storage' },
    { id: 'managing-cookies', title: 'Managing Your Preferences' },
    { id: 'browser-settings', title: 'Browser-Specific Settings' },
    { id: 'opt-out-options', title: 'Opt-Out Options' },
    { id: 'impact-disabling', title: 'Impact of Disabling Cookies' },
    { id: 'policy-updates', title: 'Policy Updates' },
    { id: 'contact-us', title: 'Contact Information' },
  ]

  return (
    <LegalPageLayout
      title="Cookie Policy"
      lastUpdated={lastUpdated}
      description="Transparent information about our cookie usage. Learn how we use cookies to improve your experience while respecting your privacy choices."
      sections={sections}
    >
      <section data-section="what-are-cookies" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          What Are Cookies
        </h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
          <p className="text-blue-800 font-medium">
            Cookies are small text files stored on your device when you visit our website. They help us provide you with a better, 
            more personalized experience and enable essential website functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              How Cookies Work
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-1">1</div>
                <p>When you visit our website, small text files are placed on your device by your web browser</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-1">2</div>
                <p>These files contain information about your preferences, login status, and browsing behavior</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-1">3</div>
                <p>On subsequent visits, cookies help us remember your preferences and provide personalized content</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold mr-3 mt-1">4</div>
                <p>You have full control over cookie settings through your browser and our preference center</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Types of Information Stored
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                User preferences and settings
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Authentication and session data
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Website performance metrics
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Analytics and usage patterns
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Marketing and advertising data
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Note About Privacy</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Cookies themselves do not contain personally identifiable information. They are simply unique identifiers that 
            reference information stored on our secure servers. We use industry-standard security measures to protect all 
            cookie-related data and comply with international privacy regulations including GDPR and CCPA.
          </p>
        </div>
      </section>

      <section data-section="how-we-use-cookies" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          How We Use Cookies
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-8">
          As a software development company, we use cookies strategically to enhance your experience, improve our services, 
          and provide valuable insights into how our website performs for potential clients and partners.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Security & Authentication</h3>
            <ul className="text-sm text-blue-700 space-y-2">
              <li>• Maintain secure user sessions</li>
              <li>• Prevent unauthorized access</li>
              <li>• Enable single sign-on features</li>
              <li>• Detect suspicious activities</li>
              <li>• Implement two-factor authentication</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
            <div className="text-green-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-3">Performance Optimization</h3>
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Monitor website loading speeds</li>
              <li>• Optimize content delivery</li>
              <li>• Track error rates and bugs</li>
              <li>• Improve server response times</li>
              <li>• Enhance mobile performance</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-lg p-6">
            <div className="text-purple-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-purple-800 mb-3">User Experience</h3>
            <ul className="text-sm text-purple-700 space-y-2">
              <li>• Remember your preferences</li>
              <li>• Personalize content recommendations</li>
              <li>• Maintain shopping cart contents</li>
              <li>• Save form progress</li>
              <li>• Customize interface settings</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
            <div className="text-orange-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Analytics & Insights</h3>
            <ul className="text-sm text-orange-700 space-y-2">
              <li>• Understand user behavior patterns</li>
              <li>• Measure website effectiveness</li>
              <li>• Track conversion rates</li>
              <li>• Identify popular content</li>
              <li>• Analyze traffic sources</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6">
            <div className="text-teal-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-teal-800 mb-3">Marketing & Outreach</h3>
            <ul className="text-sm text-teal-700 space-y-2">
              <li>• Display relevant service recommendations</li>
              <li>• Personalize email marketing campaigns</li>
              <li>• Track marketing campaign effectiveness</li>
              <li>• Segment audiences for targeted content</li>
              <li>• Measure lead generation success</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-lg p-6">
            <div className="text-pink-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-pink-800 mb-3">Social Integration</h3>
            <ul className="text-sm text-pink-700 space-y-2">
              <li>• Enable social media sharing</li>
              <li>• Integrate LinkedIn and GitHub</li>
              <li>• Track social engagement</li>
              <li>• Facilitate team collaboration</li>
              <li>• Support OAuth authentication</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Our Commitment to Privacy
          </h3>
          <p className="text-blue-700 text-sm leading-relaxed">
            We only collect and use cookie data that is necessary for the specified purposes. All data is processed in accordance 
            with our Privacy Policy and applicable data protection laws. You can opt out of non-essential cookies at any time 
            through our cookie preference center or browser settings.
          </p>
        </div>
      </section>

      <section data-section="types-of-cookies" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Types of Cookies We Use
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-8">
          We categorize our cookies based on their purpose and functionality. Understanding these categories helps you make 
          informed decisions about which cookies to allow on your device.
        </p>

        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-start mb-4">
              <div className="bg-red-100 text-red-600 rounded-full p-3 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                  Essential Cookies
                  <span className="ml-3 bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">Required</span>
                </h3>
                <p className="text-gray-600 mb-4">
                  These cookies are necessary for our website to function properly and cannot be disabled. They enable core functionality 
                  such as security, network management, and accessibility.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Purpose & Function</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Session management and user authentication</li>
                      <li>• Security features and CSRF protection</li>
                      <li>• Load balancing and server optimization</li>
                      <li>• Accessibility settings and preferences</li>
                      <li>• Cookie consent preferences storage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Examples & Duration</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <code className="bg-gray-100 px-1 rounded">navioxbd_session</code> (Session)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">csrf_token</code> (Session)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">cookie_consent</code> (1 year)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">load_balancer</code> (Session)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">accessibility_prefs</code> (30 days)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-start mb-4">
              <div className="bg-green-100 text-green-600 rounded-full p-3 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                  Functional Cookies
                  <span className="ml-3 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">Recommended</span>
                </h3>
                <p className="text-gray-600 mb-4">
                  These cookies enable enhanced functionality and personalization features. They improve your user experience 
                  but are not essential for basic website operation.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Purpose & Function</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Language and regional preferences</li>
                      <li>• Theme and UI customization settings</li>
                      <li>• Form data retention for convenience</li>
                      <li>• Recently viewed services and content</li>
                      <li>• Personalized dashboard configurations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Examples & Duration</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <code className="bg-gray-100 px-1 rounded">language_pref</code> (1 year)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">theme_settings</code> (6 months)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">form_data</code> (7 days)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">recent_views</code> (30 days)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">dashboard_config</code> (3 months)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 text-blue-600 rounded-full p-3 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                  Analytics Cookies
                  <span className="ml-3 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Optional</span>
                </h3>
                <p className="text-gray-600 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information 
                  anonymously. This data helps us improve our services and user experience.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Purpose & Function</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Website traffic analysis and reporting</li>
                      <li>• User behavior and interaction tracking</li>
                      <li>• Performance monitoring and optimization</li>
                      <li>• Conversion and goal tracking</li>
                      <li>• A/B testing and feature effectiveness</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Examples & Duration</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <code className="bg-gray-100 px-1 rounded">_ga</code> (2 years)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">_gid</code> (24 hours)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">_gat</code> (1 minute)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">hotjar_session</code> (30 minutes)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">mixpanel_distinct</code> (1 year)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex items-start mb-4">
              <div className="bg-purple-100 text-purple-600 rounded-full p-3 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                  Marketing Cookies
                  <span className="ml-3 bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">Optional</span>
                </h3>
                <p className="text-gray-600 mb-4">
                  These cookies are used to track visitors across websites to display relevant advertisements and measure 
                  the effectiveness of marketing campaigns. They help us show you more relevant content and services.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Purpose & Function</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Personalized content recommendations</li>
                      <li>• Retargeting and remarketing campaigns</li>
                      <li>• Cross-platform advertising tracking</li>
                      <li>• Marketing campaign performance analysis</li>
                      <li>• Lead generation and conversion tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Examples & Duration</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <code className="bg-gray-100 px-1 rounded">_fbp</code> (90 days)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">linkedin_tracking</code> (6 months)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">google_ads</code> (90 days)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">hubspot_tracking</code> (1 year)</li>
                      <li>• <code className="bg-gray-100 px-1 rounded">retargeting_pixel</code> (30 days)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="third-party-cookies" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Third-Party Cookies & Services
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-8">
          Our website integrates with trusted third-party services to enhance functionality and provide valuable features. 
          These services may set their own cookies governed by their respective privacy policies.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Analytics & Performance
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h4 className="font-medium text-gray-700 mb-1">Google Analytics</h4>
                  <p className="text-sm text-gray-600 mb-2">Website traffic analysis and user behavior insights</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full mr-2">Analytics</span>
                    <span>Data retention: 26 months</span>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-300 pl-4">
                  <h4 className="font-medium text-gray-700 mb-1">Hotjar</h4>
                  <p className="text-sm text-gray-600 mb-2">Heatmaps and user session recordings for UX optimization</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full mr-2">UX Analytics</span>
                    <span>Session duration: 30 minutes</span>
                  </div>
                </div>

                <div className="border-l-4 border-purple-300 pl-4">
                  <h4 className="font-medium text-gray-700 mb-1">Mixpanel</h4>
                  <p className="text-sm text-gray-600 mb-2">Advanced event tracking and conversion analysis</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full mr-2">Event Tracking</span>
                    <span>Data retention: 1 year</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                Marketing & CRM
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-300 pl-4">
                  <h4 className="font-medium text-gray-700 mb-1">HubSpot</h4>
                  <p className="text-sm text-gray-600 mb-2">Customer relationship management and lead tracking</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full mr-2">CRM</span>
                    <span>Data retention: 1 year</span>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-300 pl-4">
                  <h4 className="font-medium text-gray-700 mb-1">Mailchimp</h4>
                  <p className="text-sm text-gray-600 mb-2">Email marketing campaigns and newsletter management</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full mr-2">Email Marketing</span>
                    <span>Subscription based</span>
                  </div>
                </div>

                <div className="border-l-4 border-pink-300 pl-4">
                  <h4 className="font-medium text-gray-700 mb-1">Facebook Pixel</h4>
                  <p className="text-sm text-gray-600 mb-2">Social media advertising and conversion tracking</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full mr-2">Social Ads</span>
                    <span>Data retention: 90 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Communication & Support
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-300 pl-4">
                  <h4 className="font-medium text-gray-700 mb-1">Intercom</h4>
                  <p className="text-sm text-gray-600 mb-2">Live chat support and customer communication</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-teal-100 text-teal-600 px-2 py-1 rounded-full mr-2">Support Chat</span>
                    <span>Session based</span>
                  </div>
                </div>
                
                <div className="border-l-4 border-indigo-300 pl-4">
                  <h4 className="font-medium text-gray-700 mb-1">Calendly</h4>
                  <p className="text-sm text-gray-600 mb-2">Meeting scheduling and appointment booking</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full mr-2">Scheduling</span>
                    <span>External service</span>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-300 pl-4">
                  <h4 className="font-medium text-gray-700 mb-1">Zendesk</h4>
                  <p className="text-sm text-gray-600 mb-2">Customer support ticket management and help desk</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full mr-2">Support Tickets</span>
                    <span>Account based</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Third-Party Privacy Policies
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Each third-party service operates under its own privacy policy. We recommend reviewing these policies to understand 
                how your data is handled by external services.
              </p>
              <div className="space-y-2">
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                   className="block text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  → Google Privacy Policy
                </a>
                <a href="https://www.hotjar.com/legal/policies/privacy/" target="_blank" rel="noopener noreferrer" 
                   className="block text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  → Hotjar Privacy Policy
                </a>
                <a href="https://mixpanel.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" 
                   className="block text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  → Mixpanel Privacy Policy
                </a>
                <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" 
                   className="block text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  → HubSpot Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-section="managing-cookies" className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-100">
          Managing Your Cookie Preferences
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-8">
          You have full control over which cookies are stored on your device. We provide multiple ways to manage your cookie 
          preferences to ensure your browsing experience aligns with your privacy preferences.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              Our Cookie Preference Center
            </h3>
            <p className="text-green-700 mb-4 text-sm">
              Use our built-in preference center to customize exactly which types of cookies you want to allow. 
              Your choices are saved and respected across all your visits.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white/60 rounded-lg p-3">
                <span className="text-sm text-green-700">Essential Cookies</span>
                <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">Always On</span>
              </div>
              <div className="flex items-center justify-between bg-white/60 rounded-lg p-3">
                <span className="text-sm text-green-700">Functional Cookies</span>
                <button className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">Toggle</button>
              </div>
              <div className="flex items-center justify-between bg-white/60 rounded-lg p-3">
                <span className="text-sm text-green-700">Analytics Cookies</span>
                <button className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">Toggle</button>
              </div>
              <div className="flex items-center justify-between bg-white/60 rounded-lg p-3">
                <span className="text-sm text-green-700">Marketing Cookies</span>
                <button className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">Toggle</button>
              </div>
            </div>
            <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
              Open Cookie Preferences
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Browser-Level Controls
            </h3>
            <p className="text-blue-700 mb-4 text-sm">
              Most web browsers allow you to control cookies through their settings. You can block all cookies, 
              delete existing ones, or set up notifications when cookies are being set.
            </p>
            <div className="space-y-3">
              <div className="bg-white/60 rounded-lg p-3">
                <h4 className="font-medium text-blue-700 text-sm mb-1">Block All Cookies</h4>
                <p className="text-xs text-blue-600">Prevent all websites from storing cookies</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <h4 className="font-medium text-blue-700 text-sm mb-1">Block Third-Party Cookies</h4>
                <p className="text-xs text-blue-600">Allow only first-party cookies from our website</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <h4 className="font-medium text-blue-700 text-sm mb-1">Clear Existing Cookies</h4>
                <p className="text-xs text-blue-600">Delete all previously stored cookies</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <h4 className="font-medium text-blue-700 text-sm mb-1">Cookie Notifications</h4>
                <p className="text-xs text-blue-600">Get alerts when websites try to set cookies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            Important Considerations
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
            <div>
              <h4 className="font-medium mb-2">When You Block Cookies:</h4>
              <ul className="space-y-1">
                <li>• Some website features may not work properly</li>
                <li>• You may need to re-enter information frequently</li>
                <li>• Personalization features will be disabled</li>
                <li>• Performance optimization may be reduced</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Your Privacy Rights:</h4>
              <ul className="space-y-1">
                <li>• Change your preferences at any time</li>
                <li>• Request deletion of your data</li>
                <li>• Access information about stored cookies</li>
                <li>• Opt out of marketing communications</li>
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
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Cookie & Privacy Questions</h3>
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
                <span className="text-green-700">24/7 Support Portal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Related Policies</h3>
          <p className="text-gray-600 mb-4">
            For complete information about how we handle your data, please review our related privacy documents:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/privacy" className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-1">Privacy Policy</h4>
              <p className="text-sm text-gray-600">Comprehensive data protection practices</p>
            </a>
            <a href="/terms" className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-1">Terms of Service</h4>
              <p className="text-sm text-gray-600">Legal terms governing our services</p>
            </a>
            <a href="/gdpr" className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h4 className="font-medium text-gray-800 mb-1">GDPR Compliance</h4>
              <p className="text-sm text-gray-600">EU data protection compliance details</p>
            </a>
          </div>
        </div>
      </section>

    </LegalPageLayout>
  )
} 