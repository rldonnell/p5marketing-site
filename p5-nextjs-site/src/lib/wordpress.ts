const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || process.env.WORDPRESS_URL || 'http://localhost:8080';

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
    author?: Array<{ name: string; avatar_urls: Record<string, string> }>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export async function getPosts(params?: {
  perPage?: number;
  page?: number;
  categories?: number[];
  search?: string;
}): Promise<{ posts: WPPost[]; totalPages: number; total: number }> {
  try {
    const searchParams = new URLSearchParams({
      _embed: 'true',
      per_page: String(params?.perPage || 10),
      page: String(params?.page || 1),
      orderby: 'date',
      order: 'desc',
    });
    if (params?.categories?.length) searchParams.set('categories', params.categories.join(','));
    if (params?.search) searchParams.set('search', params.search);

    const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?${searchParams}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return { posts: [], totalPages: 0, total: 0 };

    const posts = await res.json();
    return {
      posts,
      totalPages: Number(res.headers.get('X-WP-TotalPages') || 0),
      total: Number(res.headers.get('X-WP-Total') || 0),
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [], totalPages: 0, total: 0 };
  }
}

export async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed=true`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getCategories(): Promise<WPCategory[]> {
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/categories?per_page=100`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getPages(): Promise<any[]> {
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/pages?_embed=true&per_page=100`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}
