import { Metadata } from 'next';
import VertHero from '@/components/VertHero';
import Breadcrumb from '@/components/Breadcrumb';
import JourneyBox from '@/components/JourneyBox';
import SectionHeader from '@/components/SectionHeader';
import FadeUp from '@/components/FadeUp';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Wedding Venues | P5 Marketing',
  description: 'Find engaged couples actively planning weddings with intent data.',
};

export default function WeddingVenues() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Markets', href: '/markets' }, { label: 'Wedding Venues' }]} />

      <VertHero
        kicker="Vertical Focus"
        title="Reach Engaged Couples Ready to Book"
        subtitle="Identify couples actively researching venues, comparing pricing, and preparing to make decisions."
      />

      <section className="p5-section">
        <div className="p5-wrap">
          <FadeUp>
            <JourneyBox
              intro="The wedding journey happens in predictable stages. We intercept couples at each one."
              steps={['Research Phase', 'Comparison Stage', 'Decision Ready', 'Book & Celebrate']}
            />
          </FadeUp>
        </div>
      </section>

      <section className="p5-section bg-p5-bg-surface">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader label="Segments" title="Couple Personas We Identify" centered />
          </FadeUp>
          <div className="p5-seg-grid mt-16">
            <FadeUp className="p5-delay-1">
              <div className="p5-seg-card">
                <div className="p5-seg-label">Segment 1</div>
                <h3>Early Planners</h3>
                <p>Couples engaged 12+ months out. Actively researching trends, budgets, and comparing multiple venues. High research velocity.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-2">
              <div className="p5-seg-card">
                <div className="p5-seg-label">Segment 2</div>
                <h3>Active Bookers</h3>
                <p>Couples 3-9 months from wedding date. Visiting venues, requesting quotes, checking availability. Buying signals peak here.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-3">
              <div className="p5-seg-card">
                <div className="p5-seg-label">Segment 3</div>
                <h3>Decision Ready</h3>
                <p>Couples within 2-3 months of wedding. Usually down to final 2-3 venues. Ready to make decisions quickly.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-1">
              <div className="p5-seg-card">
                <div className="p5-seg-label">Segment 4</div>
                <h3>Local Searchers</h3>
                <p>People searching "wedding venues near me" or specific city venues. Highly location-targeted, lower cost acquisition.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="p5-section">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader label="Results" title="Expected Outcomes" centered />
          </FadeUp>
          <div className="p5-outcome-grid mt-16">
            <FadeUp className="p5-delay-1">
              <div className="p5-outcome-card">
                <div className="p5-o-icon">📞</div>
                <h3>More Inquiries</h3>
                <p>Wedding venues typically see 30-50% increase in qualified venue tour requests within 60 days.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-2">
              <div className="p5-outcome-card">
                <div className="p5-o-icon">⏱️</div>
                <h3>Faster Booking</h3>
                <p>Reach couples exactly when they're ready. Average sales cycle compresses from 60 days to 14 days.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-3">
              <div className="p5-outcome-card">
                <div className="p5-o-icon">💰</div>
                <h3>Higher Revenue</h3>
                <p>Fill more dates, reduce seasonal downtime, and increase bookings during peak season.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Get More Wedding Bookings"
        subtitle="Stop waiting for couples to find you. We'll bring them directly to your door."
        buttonText="Book Demo"
        buttonLink="/contact"
      />
    </>
  );
}
