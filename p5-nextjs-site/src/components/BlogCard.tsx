import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage?: string;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  date,
  featuredImage,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${slug}`}>
      <article className="p5-p-card cursor-pointer h-full flex flex-col">
        {featuredImage && (
          <div className="w-full h-48 bg-gradient-to-br from-p5-accent/20 to-p5-accent-alt/20 rounded-lg mb-4" />
        )}
        <h3>{title}</h3>
        <p className="text-sm text-p5-text-dim mb-4 flex-grow line-clamp-3">
          {excerpt.replace(/<[^>]*>/g, '')}
        </p>
        <p className="text-xs text-p5-text-dim">{formattedDate}</p>
      </article>
    </Link>
  );
}
