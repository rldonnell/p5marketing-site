import Link from "next/link";
import Image from "next/image";
import type { WPPost } from "@/types/wordpress";
import { getFeaturedImageUrl, getAuthorName, formatDate, stripHtml } from "@/lib/wordpress";

interface BlogCardProps {
  post: WPPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const imageUrl = getFeaturedImageUrl(post);
  const author = getAuthorName(post);
  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 150);

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md">
      {imageUrl && (
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
          <Image
            src={imageUrl}
            alt={stripHtml(post.title.rendered)}
            width={400}
            height={225}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      )}
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2 text-xs text-gray-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>&middot;</span>
          <span>{author}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary-600">
          <Link href={`/blog/${post.slug}`}>
            <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </Link>
        </h3>
        {excerpt && (
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            {excerpt}...
          </p>
        )}
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-block text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          Leer más &rarr;
        </Link>
      </div>
    </article>
  );
}
