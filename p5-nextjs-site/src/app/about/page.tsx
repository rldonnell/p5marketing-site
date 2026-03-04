import { Metadata } from 'next';
import VertHero from '@/components/VertHero';
import SectionHeader from '@/components/SectionHeader';
import FinalCTA from '@/components/FinalCTA';
import FadeUp from '@/components/FadeUp';

export const metadata: Metadata = {
  title: 'About P5 Marketing',
  description: '25 years of building lead systems that work. Meet the founders and team.',
};

export default function About() {
  return (
    <>
      <VertHero
        kicker="Our Story"
        title="25 Years of Building Lead Systems That Work"
        subtitle="From B2B SaaS to consumer services, we've helped thousands of businesses find their next customer."
      />

      <section className="p5-section">
        <div className="p5-wrap">
          <FadeUp>
            <div className="p5-about-intro">
              <p>
                P5 Marketing was founded on a simple belief: marketing should be precise, not guesswork. For over 25 years,
                Robert and Irene Donnell have been building lead generation systems that actually work. What started as a
                consulting practice evolved into a data platform trusted by hundreds of businesses.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="p5-section bg-p5-bg-surface">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader label="Leadership" title="The Founders" centered />
          </FadeUp>
          <div className="p5-founders-grid mt-16">
            <FadeUp className="p5-delay-1">
              <div className="p5-founder-card">
                <div className="p5-avatar-lg">RD</div>
                <div>
                  <h3>Robert Donnell</h3>
                  <p>
                    CEO & Co-Founder. Robert built his first lead generation system in 1998. He's consulted for Fortune 500 companies and scaled from startup to acquisition.
                  </p>
                </div>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-2">
              <div className="p5-founder-card">
                <div className="p5-avatar-lg">ID</div>
                <div>
                  <h3>Irene Donnell</h3>
                  <p>
                    Head of Operations & Co-Founder. Irene brings 20+ years of marketing operations expertise. She's the architect of our customer success framework.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="p5-section">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader label="Team" title="Meet Our Experts" centered />
          </FadeUp>
          <div className="p5-team-grid mt-16">
            <FadeUp className="p5-delay-1">
              <div className="p5-team-card">
                <div className="p5-avatar-sm">JC</div>
                <h3>James Chen</h3>
                <p className="p5-role">VP of Product</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-2">
              <div className="p5-team-card">
                <div className="p5-avatar-sm">SJ</div>
                <h3>Sarah Johnson</h3>
                <p className="p5-role">Lead Data Scientist</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-3">
              <div className="p5-team-card">
                <div className="p5-avatar-sm">MB</div>
                <h3>Marcus Brown</h3>
                <p className="p5-role">VP of Sales</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-1">
              <div className="p5-team-card">
                <div className="p5-avatar-sm">LP</div>
                <h3>Lisa Park</h3>
                <p className="p5-role">Customer Success Lead</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Join Our Mission"
        subtitle="We're hiring engineers, data scientists, and sales professionals who believe in precision marketing."
        buttonText="View Careers"
        buttonLink="/contact"
      />
    </>
  );
}
