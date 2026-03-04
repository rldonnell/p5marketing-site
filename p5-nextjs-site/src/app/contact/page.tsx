import { Metadata } from 'next';
import VertHero from '@/components/VertHero';
import ContactSidebar from '@/components/ContactSidebar';

export const metadata: Metadata = {
  title: 'Contact P5 Marketing',
  description: 'Get in touch with our team to discuss your lead generation needs.',
};

export default function Contact() {
  return (
    <>
      <VertHero
        kicker="Get In Touch"
        title="See What Your Traffic Is Really Worth"
        subtitle="Let's schedule a 20-minute consultation to explore how P5 can drive qualified leads to your business."
      />

      <section className="p5-section">
        <div className="p5-wrap">
          <div className="p5-contact-layout">
            <div className="p5-embed-container">
              <div className="flex items-center justify-center h-full min-h-96 text-p5-text-dim">
                <div className="text-center">
                  <p className="text-lg font-semibold mb-2">Contact Form</p>
                  <p className="text-sm">A contact form will be embedded here</p>
                  <p className="text-sm">(Connect your CRM to enable lead capture)</p>
                </div>
              </div>
            </div>
            <ContactSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
