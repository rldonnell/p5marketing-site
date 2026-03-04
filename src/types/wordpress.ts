// WordPress REST API types

export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  slug: string;
  status: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: WPAuthor[];
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: WPTerm[][];
  };
}

export interface WPPage {
  id: number;
  date: string;
  slug: string;
  status: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  featured_media: number;
  parent: number;
  menu_order: number;
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
  };
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: Record<
      string,
      {
        source_url: string;
        width: number;
        height: number;
      }
    >;
  };
}

export interface WPAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  slug: string;
  avatar_urls: Record<string, string>;
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
  count: number;
}

export interface WPCategory extends WPTerm {
  parent: number;
  description: string;
}

// Custom Post Types (para portafolio, servicios, etc.)
export interface WPPortfolioItem extends WPPost {
  acf?: {
    client_name?: string;
    project_url?: string;
    results?: string;
  };
}

export interface WPService extends WPPost {
  acf?: {
    icon?: string;
    short_description?: string;
    features?: string[];
  };
}
