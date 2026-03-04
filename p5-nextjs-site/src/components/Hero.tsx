interface HeroProps {
  kicker?: string;
  title: string;
  subtitle: string;
  primaryCTA?: string;
  primaryLink?: string;
  secondaryCTA?: string;
  secondaryLink?: string;
}

export default function Hero({
  kicker,
  title,
  subtitle,
  primaryCTA,
  primaryLink,
  secondaryCTA,
  secondaryLink,
}: HeroProps) {
  return (
    <section className="p5-hero">
      <div className="p5-wrap">
        <div className="p5-hero-grid">
          <div className="p5-hero-copy">
            {kicker && <div className="p5-kicker">{kicker}</div>}
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            <p className="p5-sub">{subtitle}</p>
            {(primaryCTA || secondaryCTA) && (
              <div className="p5-cta-row mt-8">
                {primaryCTA && primaryLink && (
                  <a href={primaryLink} className="p5-btn p5-btn-primary">
                    {primaryCTA}
                  </a>
                )}
                {secondaryCTA && secondaryLink && (
                  <a href={secondaryLink} className="p5-btn p5-btn-ghost">
                    {secondaryCTA}
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="p5-hero-illus">
            <div className="w-full h-96 bg-gradient-to-br from-p5-accent/20 to-p5-accent-alt/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
