import { Metadata } from 'next';
import VertHero from '@/components/VertHero';
import FadeUp from '@/components/FadeUp';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Markets | P5 Marketing',
  description: 'Proven intent data solutions for high-trust, high-ticket businesses.',
};

export default function Markets() {
  return (
    <>
      <VertHero
        kicker="Verticals"
        title="Proven for High-Trust, High-Ticket Businesses"
        subtitle="We specialize in markets where intent data creates immediate, measurable ROI."
      />

      <section className="p5-section">
        <div className="p5-wrap">
          <div className="p5-market-grid">
            <FadeUp className="p5-delay-1">
              <a href="/wedding-venues" className="p5-market-card">
                <div className="p5-m-icon">💍</div>
                <h3>Wedding Venues</h3>
                <p>Identify engaged couples actively planning weddings in your area. Track search behavior, reviews checked, and site visits.</p>
                <span className="p5-arrow">→</span>
              </a>
            </FadeUp>
            <FadeUp className="p5-delay-2">
              <a href="/plastic-surgeons" className="p5-market-card">
                <div className="p5-m-icon">✨</div>
                <h3>Cosmetic Surgery</h3>
                <p>Reach patients researching specific procedures. Know their budget, concerns, and readiness to consult before they reach out.</p>
                <span className="p5-arrow">→</span>
              </a>
            </FadeUp>
            <FadeUp className="p5-delay-3">
              <div className="p5-market-card">
                <div className="p5-m-icon">🚀</div>
                <h3>More Coming</h3>
                <p>We're expanding to additional high-value verticals. Tell us which markets you'd like us to prioritize next.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Ready to Dominate Your Market?"
        subtitle="Let's discuss how P5 can help you capture ready-to-buy customers in your vertical."
        buttonText="Schedule Demo"
        buttonLink="/contact"
      />
    </>
  );
}
