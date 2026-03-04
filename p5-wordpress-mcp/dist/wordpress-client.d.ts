/**
 * WordPress REST API Client
 * Handles authentication and HTTP requests to WordPress
 */
/**
 * Make an authenticated request to the WordPress REST API
 */
export declare function wpFetch(endpoint: string, options?: RequestInit): Promise<any>;
/**
 * List posts with optional filters
 */
export declare function listPosts(options?: {
    status?: string;
    categories?: number;
    search?: string;
    per_page?: number;
    page?: number;
    orderby?: string;
    order?: 'asc' | 'desc';
}): Promise<any[]>;
/**
 * Get a single post by ID
 */
export declare function getPost(id: number): Promise<any>;
/**
 * Get a post by slug
 */
export declare function getPostBySlug(slug: string): Promise<any>;
/**
 * Create a new post
 */
export declare function createPost(data: {
    title: string;
    content: string;
    excerpt?: string;
    status?: 'draft' | 'publish' | 'pending';
    categories?: number[];
    tags?: number[];
    featured_media?: number;
    author?: number;
}): Promise<any>;
/**
 * Update an existing post
 */
export declare function updatePost(id: number, data: {
    title?: string;
    content?: string;
    excerpt?: string;
    status?: 'draft' | 'publish' | 'pending';
    categories?: number[];
    tags?: number[];
    featured_media?: number;
}): Promise<any>;
/**
 * Delete a post (move to trash)
 */
export declare function deletePost(id: number): Promise<any>;
/**
 * Permanently delete a post
 */
export declare function permanentlyDeletePost(id: number): Promise<any>;
/**
 * List categories
 */
export declare function listCategories(options?: {
    per_page?: number;
    page?: number;
    search?: string;
}): Promise<any[]>;
/**
 * Get a single category
 */
export declare function getCategory(id: number): Promise<any>;
/**
 * Create a new category
 */
export declare function createCategory(data: {
    name: string;
    slug?: string;
    description?: string;
}): Promise<any>;
/**
 * List media
 */
export declare function listMedia(options?: {
    per_page?: number;
    page?: number;
    search?: string;
}): Promise<any[]>;
/**
 * Get a single media item
 */
export declare function getMedia(id: number): Promise<any>;
/**
 * Get site info
 */
export declare function getSiteInfo(): Promise<any>;
/**
 * Get tags
 */
export declare function listTags(options?: {
    per_page?: number;
    page?: number;
    search?: string;
}): Promise<any[]>;
//# sourceMappingURL=wordpress-client.d.ts.map