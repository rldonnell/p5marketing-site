interface SectionHeaderProps {
  label?: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeader({ label, title, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && <div className="p5-section-label">{label}</div>}
      <h2 className="p5-section-title">{title}</h2>
    </div>
  );
}
