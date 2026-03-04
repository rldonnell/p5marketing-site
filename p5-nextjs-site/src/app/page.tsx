import Hero from '@/components/Hero';
import StatBar from '@/components/StatBar';
import SectionHeader from '@/components/SectionHeader';
import ParadigmGrid from '@/components/ParadigmGrid';
import DiffBox from '@/components/DiffBox';
import TestimonialGrid from '@/components/TestimonialGrid';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import FadeUp from '@/components/FadeUp';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Intent Data Marketing Agency for <span class='p5-highlight'>High-Trust, High-Value</span> Businesses"
        subtitle="Find ready-to-buy customers with precision intent data. Stop guessing who your next customer is."
        primaryCTA="Get Started"
        primaryLink="/contact"
        secondaryCTA="Learn More"
        secondaryLink="/how-it-works"
      />

      {/* Stats Bar */}
      <div className="p5-wrap">
        <StatBar
          stats={[
            { num: '60%', label: 'Unique Visitors Identified' },
            { num: '<5m', label: 'Resolution Speed' },
            { num: '25+', label: 'Years Building Lead Systems' },
          ]}
        />
      </div>

      {/* The P5 Paradigm */}
      <section className="p5-section">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader
              label="Core Framework"
              title="The P5 Paradigm"
              centered
            />
          </FadeUp>
          <div className="mt-16">
            <ParadigmGrid
              items={[
                {
                  num: '01',
                  title: 'IntentID',
                  description: 'Identify companies showing purchase intent through behavioral signals and data patterns.',
                },
                {
                  num: '02',
                  title: 'VisitorID',
                  description: 'Match individual decision-makers and prospects visiting your site in real-time.',
                },
                {
                  num: '03',
                  title: 'Follow-Up',
                  description: 'Execute targeted outreach with precision timing when intent signals peak.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* How It Works - Cards */}
      <section className="p5-section bg-p5-bg-surface">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader
              label="Process"
              title="How It Works"
              centered
            />
          </FadeUp>
          <div className="p5-hiw-grid mt-16">
            <FadeUp className="p5-delay-1">
              <div className="p5-hiw-card">
                <div className="p5-hiw-icon">🔍</div>
                <h3>Data Collection</h3>
                <p>We aggregate intent signals from 500+ sources, tracking behavior across the web.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-2">
              <div className="p5-hiw-card">
                <div className="p5-hiw-icon">🧠</div>
                <h3>AI Analysis</h3>
                <p>Our proprietary algorithms identify buying signals and score intent probability.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-3">
              <div className="p5-hiw-card">
                <div className="p5-hiw-icon">🎯</div>
                <h3>Delivery</h3>
                <p>Real-time alerts and data delivered to your CRM for immediate action.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="p5-section">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader
              label="Deliverables"
              title="What You Get"
              centered
            />
          </FadeUp>
          <div className="p5-del-grid mt-16">
            <FadeUp className="p5-delay-1">
              <div className="p5-del-card">
                <div className="p5-del-icon">📊</div>
                <h3>Intent Reports</h3>
                <p>Weekly summaries of high-intent prospects in your target markets.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-2">
              <div className="p5-del-card">
                <div className="p5-del-icon">⚙️</div>
                <h3>CRM Integration</h3>
                <p>Seamless sync with Salesforce, HubSpot, Pipedrive, and more.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-3">
              <div className="p5-del-card">
                <div className="p5-del-icon">📱</div>
                <h3>Real-Time Alerts</h3>
                <p>Instant notifications when high-intent signals are detected.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="p5-section bg-p5-bg-surface">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader
              label="Verticals"
              title="Proven Markets"
              centered
            />
          </FadeUp>
          <div className="p5-market-grid mt-16">
            <FadeUp className="p5-delay-1">
              <a href="/wedding-venues" className="p5-market-card">
                <div className="p5-m-icon">💍</div>
                <h3>Wedding Venues</h3>
                <p>Identify engaged couples actively planning their events.</p>
                <span className="p5-arrow">→</span>
              </a>
            </FadeUp>
            <FadeUp className="p5-delay-2">
              <a href="/plastic-surgeons" className="p5-market-card">
                <div className="p5-m-icon">✨</div>
                <h3>Plastic Surgeons</h3>
                <p>Reach patients researching cosmetic procedures.</p>
                <span className="p5-arrow">→</span>
              </a>
            </FadeUp>
            <FadeUp className="p5-delay-3">
              <div className="p5-market-card">
                <div className="p5-m-icon">🏢</div>
                <h3>More Coming</h3>
                <p>We're expanding to serve additional high-value markets.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="p5-section">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader
              label="Why P5?"
              title="We're Different"
              centered
            />
          </FadeUp>
          <div className="mt-16">
            <DiffBox
              leftTitle="Typical Agency"
              leftItems={[
                'Guesswork based on demographics',
                'Outdated intent data',
                'Long sales cycles (3-6 months)',
                'Generic bulk lists',
                'Manual data management',
                'Limited market expertise',
              ]}
              rightTitle="P5 Marketing"
              rightItems={[
                'Real intent signals from 500+ sources',
                'Fresh data updated hourly',
                'Fast response (contacts within minutes)',
                'Hyper-targeted high-intent prospects',
                'API-driven automation',
                'Specialized vertical expertise',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="p5-section bg-p5-bg-surface">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader
              label="Social Proof"
              title="What Clients Say"
              centered
            />
          </FadeUp>
          <div className="p5-test-grid mt-16">
            <FadeUp className="p5-delay-1">
              <TestimonialGrid
                testimonials={[
                  {
                    initials: 'JD',
                    name: 'Jane Doe',
                    role: 'Wedding Venue Director',
                    quote: 'P5 helped us identify 15 engaged couples in our area we would have missed. Our booking rate increased 40% in just 3 months.',
                  },
                ]}
              />
            </FadeUp>
            <FadeUp className="p5-delay-2">
              <TestimonialGrid
                testimonials={[
                  {
                    initials: 'RS',
                    name: 'Dr. Robert Smith',
                    role: 'Cosmetic Surgery Practice',
                    quote: 'The intent data is so accurate. We stopped wasting time on unqualified leads and focus on real prospects.',
                  },
                ]}
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="p5-section">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader
              label="Questions"
              title="Frequently Asked"
              centered
            />
          </FadeUp>
          <div className="mt-16">
            <FAQ
              items={[
                {
                  question: 'How accurate is the intent data?',
                  answer: 'Our data is 94% accurate based on third-party validation. We combine behavioral signals, technographic data, and firmographic information to ensure precision.',
                },
                {
                  question: 'How quickly can we see results?',
                  answer: 'Most clients see qualified leads within the first week. Full optimization typically takes 30-60 days.',
                },
                {
                  question: 'Do you offer a trial period?',
                  answer: 'Yes, we offer a 14-day trial with full access to our platform and data for qualifying businesses.',
                },
                {
                  question: 'What CRMs do you integrate with?',
                  answer: 'We integrate with Salesforce, HubSpot, Pipedrive, Monday.com, and most major CRM platforms via API.',
                },
                {
                  question: 'Is the data GDPR compliant?',
                  answer: 'Yes. All our data collection and processing follows GDPR, CCPA, and other privacy regulations.',
                },
                {
                  question: 'Can we target specific companies?',
                  answer: 'Absolutely. You can target by industry, company size, location, technology stack, and more.',
                },
                {
                  question: 'What if we don\'t see ROI?',
                  answer: 'We offer a 30-day money-back guarantee if you don\'t see a measurable improvement in lead quality.',
                },
                {
                  question: 'How is pricing structured?',
                  answer: 'Pricing is based on the size of your target market and data volume. We offer flexible monthly plans starting at $2,000.',
                },
                {
                  question: 'Do you provide training?',
                  answer: 'Yes. We include onboarding, training, and ongoing support with all plans.',
                },
                {
                  question: 'Can we scale our usage?',
                  answer: 'Yes. Plans are flexible and can be scaled up or down based on your needs each month.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA
        title="Ready to Find Your Next Customer?"
        subtitle="Let's talk about how P5 can transform your lead generation strategy."
        buttonText="Schedule a Demo"
        buttonLink="/contact"
      />
    </>
  );
}
