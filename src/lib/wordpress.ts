import type {
  WPPost,
  WPPage,
  WPMedia,
  WPCategory,
  WPTerm,
} from "@/types/wordpress";

const WORDPRESS_URL =
  process.env.NEXT_PUBLIC_WORDPRESS_URL || "https://your-wordpress-site.com";
const API_BASE = `${WORDPRESS_URL}/wp-json/wp/v2`;

const REVALIDATE = Number(process.env.REVALIDATE_SECONDS) || 60;

// Autenticación con WordPress Application Password
const WP_AUTH_USER = process.env.WP_AUTH_USER;
const WP_AUTH_PASSWORD = process.env.WP_AUTH_PASSWORD;

function getAuthHeaders(): Record<string, string> {
  if (WP_AUTH_USER && WP_AUTH_PASSWORD) {
    const token = Buffer.from(`${WP_AUTH_USER}:${WP_AUTH_PASSWORD}`).toString("base64");
    return { Authorization: `Basic ${token}` };
  }
  return {};
}

// ------------------------------------------------------------------
// Helper genérico para fetch con manejo de errores
// ------------------------------------------------------------------
async function fetchAPI<T>(
  endpoint: string,
  params: Record<string, string | number> = {},
  options: { revalidate?: number } = {}
): Promise<T> {
  const url = new URL(`${API_BASE}/${endpoint}`);
  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.set(key, String(value))
  );

  const res = await fetch(url.toString(), {
    headers: { ...getAuthHeaders() },
    next: { revalidate: options.revalidate ?? REVALIDATE },
  });

  if (!res.ok) {
    throw new Error(
      `WordPress API error: ${res.status} ${res.statusText} - ${endpoint}`
    );
  }

  return res.json();
}

// ------------------------------------------------------------------
// Posts (Blog)
// ------------------------------------------------------------------
export async function getPosts(
  page = 1,
  perPage = 10
): Promise<{ posts: WPPost[]; totalPages: number }> {
  const url = new URL(`${API_BASE}/posts`);
  url.searchParams.set("page", String(page));
  url.searchParams.set("per_page", String(perPage));
  url.searchParams.set("_embed", "true");

  const res = await fetch(url.toString(), {
    next: { revalidate: REVALIDATE },
  });

  if (!res.ok) {
    throw new Error(`Error fetching posts: ${res.status}`);
  }

  const posts: WPPost[] = await res.json();
  const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;

  return { posts, totalPages };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchAPI<WPPost[]>("posts", {
    slug,
    _embed: "true",
  });
  return posts[0] ?? null;
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await fetchAPI<WPPost[]>("posts", {
    per_page: 100,
    _fields: "slug",
  });
  return posts.map((p) => p.slug);
}

// ------------------------------------------------------------------
// Pages
// ------------------------------------------------------------------
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await fetchAPI<WPPage[]>("pages", {
    slug,
    _embed: "true",
  });
  return pages[0] ?? null;
}

export async function getPages(): Promise<WPPage[]> {
  return fetchAPI<WPPage[]>("pages", {
    per_page: 100,
    _embed: "true",
  });
}

// ------------------------------------------------------------------
// Categories & Tags
// ------------------------------------------------------------------
export async function getCategories(): Promise<WPCategory[]> {
  return fetchAPI<WPCategory[]>("categories", { per_page: 100 });
}

export async function getTags(): Promise<WPTerm[]> {
  return fetchAPI<WPTerm[]>("tags", { per_page: 100 });
}

// ------------------------------------------------------------------
// Media
// ------------------------------------------------------------------
export async function getMedia(id: number): Promise<WPMedia | null> {
  try {
    return await fetchAPI<WPMedia>(`media/${id}`);
  } catch {
    return null;
  }
}

// ------------------------------------------------------------------
// Custom Post Types (Portafolio, Servicios, etc.)
// Requieren que el CPT esté registrado con show_in_rest = true
// ------------------------------------------------------------------
export async function getCustomPosts<T extends WPPost>(
  postType: string,
  perPage = 100
): Promise<T[]> {
  return fetchAPI<T[]>(postType, {
    per_page: perPage,
    _embed: "true",
  });
}

export async function getCustomPostBySlug<T extends WPPost>(
  postType: string,
  slug: string
): Promise<T | null> {
  const items = await fetchAPI<T[]>(postType, {
    slug,
    _embed: "true",
  });
  return items[0] ?? null;
}

// ------------------------------------------------------------------
// Utilidades
// ------------------------------------------------------------------
export function getFeaturedImageUrl(post: WPPost | WPPage): string | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  return media?.source_url ?? null;
}

export function getAuthorName(post: WPPost): string {
  return post._embedded?.author?.[0]?.name ?? "Autor";
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
