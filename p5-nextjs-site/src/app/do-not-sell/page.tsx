import { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Do Not Sell My Personal Information | P5 Marketing',
};

export default function DoNotSell() {
  return (
    <>
      <PageHero title="Do Not Sell My Personal Information" />

      <section className="p5-section">
        <div className="p5-wrap">
          <div className="p5-legal-content">
            <h2>Your Privacy Rights</h2>
            <p>
              Under the California Consumer Privacy Act (CCPA) and similar state privacy laws, you have the right to direct us not to
              sell your personal information. This page provides information about your rights and how to exercise them.
            </p>

            <h2>What Does "Selling" Mean?</h2>
            <p>
              Under the CCPA, "selling" means sharing personal information with third parties in exchange for valuable consideration.
              This includes sharing information for targeted advertising, marketing, or other commercial purposes.
            </p>

            <h2>Our Commitment</h2>
            <p>
              P5 Marketing is committed to protecting your privacy. We:
            </p>
            <ul>
              <li>Do not sell your personal information to third parties without your explicit consent</li>
              <li>Use your information primarily for providing and improving our services</li>
              <li>Maintain industry-standard security measures to protect your data</li>
              <li>Respect your rights under applicable privacy laws</li>
            </ul>

            <h2>How to Submit a "Do Not Sell" Request</h2>
            <p>
              If you believe your personal information is being used in a way that constitutes "selling" under applicable law, you can
              submit a do-not-sell request by:
            </p>
            <ul>
              <li>Emailing us at: privacy@p5marketing.com</li>
              <li>Calling us at: +1 (555) 123-4567</li>
              <li>Submitting a request through our contact form at: /contact</li>
            </ul>

            <h2>Verification</h2>
            <p>
              When you submit a request, we will verify your identity before taking action. We may ask for additional information to
              confirm that you are the consumer whose personal information is the subject of the request.
            </p>

            <h2>Responding to Requests</h2>
            <p>
              We will respond to verified requests within 45 days. If we need additional time, we will inform you of the reason and
              extension period (not to exceed an additional 45 days).
            </p>

            <h2>Non-Discrimination</h2>
            <p>
              We will not discriminate against you for exercising any of your privacy rights. This means we will not:
            </p>
            <ul>
              <li>Deny you goods or services</li>
              <li>Charge you different prices for goods or services</li>
              <li>Provide you with a different level or quality of goods or services</li>
              <li>Suggest that you will receive a different price or rate for exercising your rights</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this policy or our privacy practices, please contact us at:
            </p>
            <p>
              P5 Marketing<br />
              privacy@p5marketing.com<br />
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
