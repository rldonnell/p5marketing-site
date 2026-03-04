import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getPostSlugs,
  getFeaturedImageUrl,
  getAuthorName,
  formatDate,
  stripHtml,
} from "@/lib/wordpress";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all posts
export async function generateStaticParams() {
  try {
    const slugs = await getPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

// Dynamic metadata from WordPress post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post no encontrado" };

  return {
    title: stripHtml(post.title.rendered),
    description: stripHtml(post.excerpt.rendered).slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const imageUrl = getFeaturedImageUrl(post);
  const author = getAuthorName(post);

  return (
    <article className="py-12 lg:py-20">
      <div className="container-narrow">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm text-gray-500 hover:text-primary-600"
        >
          &larr; Volver al blog
        </Link>

        {/* Header */}
        <header className="mx-auto max-w-3xl">
          <h1
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>&middot;</span>
            <span>{author}</span>
          </div>
        </header>

        {/* Featured image */}
        {imageUrl && (
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl">
            <Image
              src={imageUrl}
              alt={stripHtml(post.title.rendered)}
              width={1200}
              height={630}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg mx-auto mt-12 max-w-3xl prose-headings:font-bold prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Back link bottom */}
        <div className="mx-auto mt-16 max-w-3xl border-t border-gray-100 pt-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            &larr; Volver al blog
          </Link>
        </div>
      </div>
    </article>
  );
}
