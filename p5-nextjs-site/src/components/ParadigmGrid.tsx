interface ParadigmGridProps {
  items: Array<{ num: string; title: string; description: string }>;
}

export default function ParadigmGrid({ items }: ParadigmGridProps) {
  return (
    <div className="p5-paradigm-grid">
      {items.map((item, idx) => (
        <div key={idx} className="p5-p-card">
          <div className="p5-num">{item.num}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
