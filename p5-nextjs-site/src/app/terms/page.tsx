import { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Service | P5 Marketing',
};

export default function Terms() {
  return (
    <>
      <PageHero title="Terms of Service" />

      <section className="p5-section">
        <div className="p5-wrap">
          <div className="p5-legal-content">
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf
              of an entity ("you") and P5 Marketing ("we," "us," "our," or "Company"), concerning your access to and use of the
              p5marketing.com website as well as any other media form, media channel, mobile website, or mobile application relating,
              linked, or otherwise connected thereto (collectively, the "Site").
            </p>

            <h2>2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software,
              website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks,
              service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected
              by copyright and trademark laws.
            </p>

            <h2>3. User Representations</h2>
            <p>By using the Site, you represent and warrant that:</p>
            <ul>
              <li>All registration information you submit is true, accurate, current, and complete</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information</li>
              <li>You have the legal capacity and you agree to comply with these Terms and Conditions</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You agree not to access the Site through automated or non-human means, whether through a bot, script, or otherwise</li>
            </ul>

            <h2>4. User Prohibited Behavior</h2>
            <p>You may not access or use the Site for any purpose other than that for which we make the Site available.</p>
            <p>The Site may not be used in connection with any commercial endeavors except those specifically endorsed or approved by us.</p>

            <h2>5. Fees and Payment</h2>
            <p>
              We may charge fees for access to certain features or services. All fees are exclusive of applicable federal, state, local,
              or other governmental sales, use, value-added, excise, or other tax, which you will pay in addition to the fees quoted.
            </p>

            <h2>6. Term and Termination</h2>
            <p>
              These Terms and Conditions shall remain in full force and effect while you use the Site. Without limiting any other provision
              of these Terms and Conditions, we reserve the right to, in our sole discretion and without notice or liability, deny access
              to and use of the Site to any person for any reason or for no reason, including without limitation for breach of any representation,
              warranty, or covenant contained herein or of any applicable law or regulation.
            </p>

            <h2>7. Disclaimer of Warranties</h2>
            <p>
              THE SITE IS PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. WE MAKE NO WARRANTIES, EXPRESSED OR IMPLIED, REGARDING THE SITE.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL THE COMPANY OR ITS SUPPLIERS BE LIABLE FOR ANY DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF DATA
              OR PROFIT, OR DUE TO BUSINESS INTERRUPTION) ARISING OUT OF OR IN CONNECTION WITH THE USE OR INABILITY TO USE THE SITE.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless the Company and its officers, directors, employees, agents, and successors from
              and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, arising out of or
              connected with your use of the Site or your violation of these Terms and Conditions.
            </p>

            <h2>10. Contact Us</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
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
