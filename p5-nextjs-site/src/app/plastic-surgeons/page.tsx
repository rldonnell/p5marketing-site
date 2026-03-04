import { Metadata } from 'next';
import VertHero from '@/components/VertHero';
import Breadcrumb from '@/components/Breadcrumb';
import JourneyBox from '@/components/JourneyBox';
import SectionHeader from '@/components/SectionHeader';
import FadeUp from '@/components/FadeUp';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Plastic Surgeons | P5 Marketing',
  description: 'Identify patients researching cosmetic procedures with high-intent data.',
};

export default function PlasticSurgeons() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Markets', href: '/markets' }, { label: 'Plastic Surgeons' }]} />

      <VertHero
        kicker="Vertical Focus"
        title="Reach Patients Ready for Consultations"
        subtitle="Identify individuals actively researching procedures, comparing surgeons, and preparing to schedule consultations."
      />

      <section className="p5-section">
        <div className="p5-wrap">
          <FadeUp>
            <JourneyBox
              intro="Cosmetic surgery decisions follow a clear research pattern. We identify patients at every stage."
              steps={['Research Begins', 'Reviews Checked', 'Surgeon Compared', 'Schedule Consult']}
            />
          </FadeUp>
        </div>
      </section>

      <section className="p5-section bg-p5-bg-surface">
        <div className="p5-wrap">
          <FadeUp>
            <SectionHeader label="Segments" title="Patient Personas We Identify" centered />
          </FadeUp>
          <div className="p5-seg-grid mt-16">
            <FadeUp className="p5-delay-1">
              <div className="p5-seg-card">
                <div className="p5-seg-label">Segment 1</div>
                <h3>Curious Researchers</h3>
                <p>Early-stage patients researching procedures, costs, and recovery times. Looking at before/after photos and reading reviews.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-2">
              <div className="p5-seg-card">
                <div className="p5-seg-label">Segment 2</div>
                <h3>Active Shoppers</h3>
                <p>Comparing multiple surgeons, reading detailed reviews, checking credentials. Asking specific medical questions.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-3">
              <div className="p5-seg-card">
                <div className="p5-seg-label">Segment 3</div>
                <h3>Ready to Consult</h3>
                <p>Patients who've made a decision to proceed. Checking office hours, locations, and current availability for appointments.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-1">
              <div className="p5-seg-card">
                <div className="p5-seg-label">Segment 4</div>
                <h3>Specific Procedure</h3>
                <p>Patients researching specific procedures like rhinoplasty, breast augmentation, liposuction, etc. Highly targeted.</p>
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
                <div className="p5-o-icon">📅</div>
                <h3>More Consultations</h3>
                <p>Plastic surgeons typically see 40-60% increase in qualified consultation requests within 90 days.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-2">
              <div className="p5-outcome-card">
                <div className="p5-o-icon">📈</div>
                <h3>Higher Conversion</h3>
                <p>Patients reaching out are truly interested and ready. Consultation-to-procedure conversion rates improve 25-35%.</p>
              </div>
            </FadeUp>
            <FadeUp className="p5-delay-3">
              <div className="p5-outcome-card">
                <div className="p5-o-icon">💼</div>
                <h3>Booked Surgeries</h3>
                <p>Reduce time from consultation to surgery. Fill your OR schedule more consistently throughout the year.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Grow Your Patient Base"
        subtitle="Connect with patients researching your procedures right now. They're ready. Are you?"
        buttonText="Schedule Demo"
        buttonLink="/contact"
      />
    </>
  );
}
