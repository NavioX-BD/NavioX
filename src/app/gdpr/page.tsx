import LegalPageLayout from '@/components/ui/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDPR Compliance | NavioxBD',
  description: 'GDPR compliance information and your data protection rights under EU regulations.',
};

export default function GDPRPage() {
  const sections = [
    { id: 'your-rights', title: 'Your Rights Under GDPR' },
    { id: 'data-collection', title: 'Data Collection and Processing' },
    { id: 'international-transfers', title: 'International Data Transfers' },
    { id: 'consent-management', title: 'Consent Management' },
    { id: 'data-protection-officer', title: 'Data Protection Officer' },
    { id: 'data-breach', title: 'Data Breach Notification' },
    { id: 'exercising-rights', title: 'Exercising Your Rights' },
    { id: 'supervisory-authority', title: 'Supervisory Authority' },
    { id: 'updates', title: 'Updates to This Policy' }
  ]

  return (
    <LegalPageLayout 
      title="GDPR Compliance" 
      description="Your Data Protection Rights Under EU Regulations"
      lastUpdated="December 2024"
      sections={sections}
    >
      <section className="mb-8" data-section="your-rights">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Your Rights Under GDPR
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Under the General Data Protection Regulation (GDPR), if you are located in the European Union, 
          you have certain rights regarding your personal data. We are committed to ensuring these rights 
          are respected and easily exercisable.
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Right to Access
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You have the right to request a copy of all personal data we hold about you. This includes 
              the right to know what data we collect, how we use it, and who we share it with.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Right to Rectification
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You have the right to request correction of any inaccurate or incomplete personal data we hold about you.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Right to Erasure (Right to be Forgotten)
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You have the right to request deletion of your personal data under certain circumstances, 
              such as when the data is no longer necessary for the original purpose or when you withdraw consent.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Right to Restrict Processing
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You have the right to request that we limit the processing of your personal data under certain circumstances.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Right to Data Portability
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You have the right to receive your personal data in a structured, commonly used, and 
              machine-readable format and to transmit that data to another service provider.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Right to Object
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You have the right to object to the processing of your personal data for direct marketing 
              purposes or where processing is based on legitimate interests.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8" data-section="data-collection">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Data Collection and Processing
        </h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Legal Basis for Processing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              We process your personal data based on the following legal grounds:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
              <li><strong>Consent:</strong> When you explicitly consent to specific processing activities</li>
              <li><strong>Contract:</strong> When processing is necessary to fulfill our contractual obligations</li>
              <li><strong>Legal Obligation:</strong> When required by law</li>
              <li><strong>Legitimate Interest:</strong> When necessary for our legitimate business interests, balanced against your rights</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Data We Collect
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
              <li>Contact information (name, email, phone number)</li>
              <li>Project requirements and business information</li>
              <li>Communication history and preferences</li>
              <li>Website usage data and analytics</li>
              <li>Technical information (IP address, browser type, device information)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Data Retention
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, 
              comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods vary 
              based on the type of data and the purpose for which it was collected.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8" data-section="international-transfers">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          International Data Transfers
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          When we transfer your personal data outside the European Economic Area (EEA), we ensure appropriate 
          safeguards are in place to protect your data. These safeguards include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
          <li>Adequacy decisions by the European Commission</li>
          <li>Standard Contractual Clauses approved by the European Commission</li>
          <li>Binding Corporate Rules</li>
          <li>Certification mechanisms and codes of conduct</li>
        </ul>
      </section>

      <section className="mb-8" data-section="consent-management">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Consent Management
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Where we rely on consent as the legal basis for processing your personal data:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
          <li>Your consent is freely given, specific, informed, and unambiguous</li>
          <li>You can withdraw your consent at any time</li>
          <li>Withdrawal of consent does not affect the lawfulness of processing before withdrawal</li>
          <li>We maintain records of consent to demonstrate compliance</li>
        </ul>
      </section>

      <section className="mb-8" data-section="data-protection-officer">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Data Protection Officer
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          NavioxBD has appointed a Data Protection Officer (DPO) to oversee our data protection strategy 
          and ensure compliance with GDPR requirements. You can contact our DPO regarding:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
          <li>Questions about our data protection practices</li>
          <li>Exercising your data subject rights</li>
          <li>Data protection concerns or complaints</li>
          <li>Guidance on data protection matters</li>
        </ul>
      </section>

      <section className="mb-8" data-section="data-breach">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Data Breach Notification
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          In the event of a personal data breach that is likely to result in a high risk to your rights and freedoms, 
          we will notify you without undue delay and within 72 hours of becoming aware of the breach. 
          The notification will include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
          <li>Description of the nature of the breach</li>
          <li>Categories and approximate number of data subjects affected</li>
          <li>Likely consequences of the breach</li>
          <li>Measures taken or proposed to address the breach</li>
        </ul>
      </section>

      <section className="mb-8" data-section="exercising-rights">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Exercising Your Rights
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          To exercise any of your GDPR rights, please contact us using the information below. 
          We will respond to your request within one month, though this may be extended by up to two months 
          for complex requests.
        </p>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Contact Information
          </h3>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p><strong>Email:</strong> privacy@navioxbd.com</p>
            <p><strong>Data Protection Officer:</strong> dpo@navioxbd.com</p>
            <p><strong>Phone:</strong> +880 1234-567890</p>
            <p><strong>Address:</strong> Dhaka, Bangladesh</p>
          </div>
        </div>
      </section>

      <section className="mb-8" data-section="supervisory-authority">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Supervisory Authority
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          If you believe we have not handled your personal data in accordance with GDPR, you have the right 
          to lodge a complaint with your local supervisory authority. You can find contact information for 
          EU supervisory authorities at:
        </p>
        <p className="text-blue-600 dark:text-blue-400">
          <a href="https://edpb.europa.eu/about-edpb/board/members_en" 
             target="_blank" 
             rel="noopener noreferrer"
             className="hover:underline">
            https://edpb.europa.eu/about-edpb/board/members_en
          </a>
        </p>
      </section>

      <section data-section="updates">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Updates to This Policy
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          We may update this GDPR compliance information from time to time to reflect changes in our practices 
          or applicable law. We will notify you of any material changes by posting the updated information on 
          our website and updating the &ldquo;Last Updated&rdquo; date at the top of this page.
        </p>
      </section>
    </LegalPageLayout>
  );
} 