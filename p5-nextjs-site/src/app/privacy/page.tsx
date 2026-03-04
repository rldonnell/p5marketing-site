import { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy | P5 Marketing',
};

export default function Privacy() {
  return (
    <>
      <PageHero title="Privacy Policy" />

      <section className="p5-section">
        <div className="p5-wrap">
          <div className="p5-legal-content">
            <h2>Introduction</h2>
            <p>
              P5 Marketing ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul>
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
              <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
              <li><strong>Data From Third Parties:</strong> Third-party data we receive about you from other sources, such as public databases, joint marketing partners, social media platforms, as well as from other third parties.</li>
            </ul>

            <h2>2. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience.</p>
            <p>Specifically, we may use information collected about you via the Site to:</p>
            <ul>
              <li>Generate a personal profile about you so that future visits to the Site are personalized as possible</li>
              <li>Increase the efficiency and operation of the Site</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
              <li>Notify you of important changes to the Site or our policies</li>
              <li>Respond to your comments, questions and provide customer service</li>
            </ul>

            <h2>3. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations:
            </p>
            <ul>
              <li><strong>By Law or to Protect Rights:</strong> If we believe that the release of information is necessary to comply with the law, to enforce our Site policies, or to protect the rights, property, and safety of others.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us, including payment processors, data analysis providers, email delivery services, customer service, and marketing assistance.</li>
            </ul>

            <h2>4. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p>
              P5 Marketing<br />
              hello@p5marketing.com<br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
