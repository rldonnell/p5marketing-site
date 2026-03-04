import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost, getPosts } from '@/lib/wordpress';
import Breadcrumb from '@/components/Breadcrumb';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const { posts } = await getPosts({ perPage: 100 });
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post not found',
    };
  }

  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160),
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const publishDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const author = post._embedded?.author?.[0]?.name || 'P5 Marketing';

  return (
    <>
      <section className="p5-section pt-0">
        <div className="p5-wrap">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title.rendered },
            ]}
          />
        </div>
      </section>

      <article className="p5-section">
        <div className="p5-wrap max-w-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            {post.title.rendered}
          </h1>
          <div className="flex gap-4 text-p5-text-dim mb-8">
            <span>{publishDate}</span>
            <span>By {author}</span>
          </div>

          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <div className="w-full h-96 bg-gradient-to-br from-p5-accent/20 to-p5-accent-alt/20 rounded-2xl mb-12" />
          )}

          <div
            className="p5-legal-content prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </article>
    </>
  );
}
