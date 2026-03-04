import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="p5-breadcrumb">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
          {idx < items.length - 1 && <span>/</span>}
        </div>
      ))}
    </nav>
  );
}
