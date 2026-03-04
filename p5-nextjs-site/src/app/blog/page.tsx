import { Metadata } from 'next';
import VertHero from '@/components/VertHero';
import BlogCard from '@/components/BlogCard';
import { getPosts } from '@/lib/wordpress';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Blog | P5 Marketing',
  description: 'Insights on intent data, lead generation, and modern marketing strategy.',
};

export default async function Blog() {
  const { posts } = await getPosts({ perPage: 12 });

  return (
    <>
      <VertHero
        kicker="Resources"
        title="Intent Data Insights & Strategy"
        subtitle="Articles on lead generation, buyer behavior, and modern marketing tactics."
      />

      <section className="p5-section">
        <div className="p5-wrap">
          {posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title.rendered}
                  excerpt={post.excerpt.rendered}
                  slug={post.slug}
                  date={post.date}
                  featuredImage={
                    post._embedded?.['wp:featuredmedia']?.[0]?.source_url
                  }
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-p5-text-dim text-lg mb-4">No articles yet</p>
              <p className="text-p5-text-dim">
                Blog will be powered by WordPress. Connect your WordPress instance to see articles here.
              </p>
            </div>
          )}
        </div>
      </section>

      <FinalCTA
        title="Subscribe for Updates"
        subtitle="Get the latest insights on intent data and lead generation delivered to your inbox."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
}
