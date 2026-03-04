interface TestimonialGridProps {
  testimonials: Array<{
    initials: string;
    name: string;
    role: string;
    quote: string;
  }>;
}

export default function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  return (
    <div className="p5-test-grid">
      {testimonials.map((test, idx) => (
        <div key={idx} className="p5-test-card">
          <div className="p5-avatar">{test.initials}</div>
          <div className="p5-stars">★★★★★</div>
          <blockquote>{test.quote}</blockquote>
          <p>{test.name}</p>
          <p className="p5-attribution">{test.role}</p>
        </div>
      ))}
    </div>
  );
}
