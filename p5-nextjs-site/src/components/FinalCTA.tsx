interface FinalCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export default function FinalCTA({ title, subtitle, buttonText, buttonLink }: FinalCTAProps) {
  return (
    <section className="p5-final-cta">
      <div className="p5-wrap">
        <div className="p5-cta-card">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <a href={buttonLink} className="p5-btn p5-btn-primary">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
