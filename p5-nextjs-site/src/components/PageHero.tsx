interface PageHeroProps {
  title: string;
}

export default function PageHero({ title }: PageHeroProps) {
  return (
    <section className="p5-page-hero">
      <div className="p5-wrap">
        <h1>{title}</h1>
      </div>
    </section>
  );
}
