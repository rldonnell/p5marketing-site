interface VertHeroProps {
  kicker?: string;
  title: string;
  subtitle: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export default function VertHero({
  kicker,
  title,
  subtitle,
  showCTA,
  ctaText,
  ctaLink,
}: VertHeroProps) {
  return (
    <section className="p5-vert-hero">
      <div className="p5-wrap">
        {kicker && <div className="p5-kicker">{kicker}</div>}
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p className="p5-sub">{subtitle}</p>
        {showCTA && ctaText && ctaLink && (
          <div className="mt-8">
            <a href={ctaLink} className="p5-btn p5-btn-primary">
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
