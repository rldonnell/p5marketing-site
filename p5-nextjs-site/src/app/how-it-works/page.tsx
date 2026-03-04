import { Metadata } from 'next';
import VertHero from '@/components/VertHero';
import SectionHeader from '@/components/SectionHeader';
import FadeUp from '@/components/FadeUp';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'How It Works | P5 Marketing',
  description: 'The P5 process: data collection, AI analysis, and real-time delivery.',
};

export default function HowItWorks() {
  return (
    <>
      <VertHero
        kicker="Process"
        title="How P5 Works"
        subtitle="A proven 3-step system to identify and reach high-intent prospects."
      />

      <section className="p5-section">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader label="Steps" title="Our Methodology" centered />
          </FadeUp>

          <div className="p5-hiw-detail mt-16 max-w-2xl mx-auto">
            <FadeUp>
              <div className="p5-hiw-block">
                <span className="p5-hiw-num">1</span>
                <h3>Data Aggregation</h3>
                <p>
                  We connect to 500+ data sources including web activity, form submissions, tech stack changes, hiring data, funding announcements, and more. Every hour, we process millions of signals to identify companies showing purchase intent.
                </p>
              </div>
            </FadeUp>

            <FadeUp className="p5-delay-1">
              <div className="p5-hiw-block">
                <span className="p5-hiw-num">2</span>
                <h3>AI Scoring</h3>
                <p>
                  Our machine learning models analyze each signal to calculate intent probability. We don't just look at individual behaviors—we score based on timing, velocity, and fit with your ideal customer profile. This gives you confidence that leads are truly ready to buy.
                </p>
              </div>
            </FadeUp>

            <FadeUp className="p5-delay-2">
              <div className="p5-hiw-block">
                <span className="p5-hiw-num">3</span>
                <h3>Real-Time Delivery</h3>
                <p>
                  When high-intent signals are detected, they're delivered immediately to your CRM, Slack, or email. You can respond within minutes, not days. Most sales cycles compress dramatically because you're reaching prospects exactly when they're most receptive.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="p5-section bg-p5-bg-surface">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader label="Features" title="Deliverables Included" centered />
          </FadeUp>
          <div className="p5-del-grid mt-16">
            <FadeUp className="p5-delay-1">
              <div className="p5-del-card">
                <div className="p5-del-icon">📊</div>
                <h3>Dashboard</h3>
                <p>Real-time visibility into all identified prospects, scores, and engagement metrics.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-2">
              <div className="p5-del-card">
                <div className="p5-del-icon">⚡</div>
                <h3>API Access</h3>
                <p>Full REST API to pull data into your systems, build custom workflows, and automate responses.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-3">
              <div className="p5-del-card">
                <div className="p5-del-icon">🔗</div>
                <h3>CRM Sync</h3>
                <p>Native integrations with Salesforce, HubSpot, Pipedrive, and 20+ other platforms.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-1">
              <div className="p5-del-card">
                <div className="p5-del-icon">📈</div>
                <h3>Analytics</h3>
                <p>Detailed reporting on ROI, conversion rates, and performance benchmarks against your industry.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-2">
              <div className="p5-del-card">
                <div className="p5-del-icon">🎯</div>
                <h3>Custom Filters</h3>
                <p>Target by company size, industry, tech stack, location, growth stage, and 50+ other dimensions.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-3">
              <div className="p5-del-card">
                <div className="p5-del-icon">🚀</div>
                <h3>Dedicated Support</h3>
                <p>Account manager, onboarding, training, and 24/5 technical support included.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Start Getting Smarter Leads Today"
        subtitle="See the difference when you know which prospects are truly ready to buy."
        buttonText="Request Demo"
        buttonLink="/contact"
      />
    </>
  );
}
