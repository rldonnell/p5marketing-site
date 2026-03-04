/**
 * WordPress REST API Client
 * Handles authentication and HTTP requests to WordPress
 */
const WP_URL = process.env.WORDPRESS_URL || 'http://localhost:8080';
const WP_USER = process.env.WORDPRESS_USERNAME || 'admin';
const WP_APP_PASS = process.env.WORDPRESS_APP_PASSWORD || '';
/**
 * Generate Basic Auth header from username and app password
 */
function getAuthHeader() {
    const credentials = `${WP_USER}:${WP_APP_PASS}`;
    const base64 = Buffer.from(credentials).toString('base64');
    return `Basic ${base64}`;
}
/**
 * Make an authenticated request to the WordPress REST API
 */
export async function wpFetch(endpoint, options = {}) {
    const url = `${WP_URL}/wp-json/wp/v2${endpoint}`;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': getAuthHeader(),
    };
    // Merge with provided headers
    if (options.headers) {
        Object.assign(headers, options.headers);
    }
    const response = await fetch(url, {
        ...options,
        headers,
    });
    if (!response.ok) {
        let errorMessage = `WordPress API error (${response.status})`;
        try {
            const errorData = await response.json();
            if (errorData && errorData.message) {
                errorMessage = `${errorMessage}: ${errorData.message}`;
            }
            if (errorData && errorData.data && errorData.data.params) {
                errorMessage = `${errorMessage} - ${JSON.stringify(errorData.data.params)}`;
            }
        }
        catch {
            const text = await response.text();
            if (text) {
                errorMessage = `${errorMessage}: ${text}`;
            }
        }
        throw new Error(errorMessage);
    }
    return response.json();
}
/**
 * List posts with optional filters
 */
export async function listPosts(options = {}) {
    const params = new URLSearchParams();
    if (options.status)
        params.append('status', options.status);
    if (options.categories)
        params.append('categories', String(options.categories));
    if (options.search)
        params.append('search', options.search);
    if (options.per_page)
        params.append('per_page', String(options.per_page));
    if (options.page)
        params.append('page', String(options.page));
    if (options.orderby)
        params.append('orderby', options.orderby);
    if (options.order)
        params.append('order', options.order);
    const queryString = params.toString();
    const endpoint = `/posts${queryString ? `?${queryString}` : ''}`;
    return wpFetch(endpoint);
}
/**
 * Get a single post by ID
 */
export async function getPost(id) {
    return wpFetch(`/posts/${id}`);
}
/**
 * Get a post by slug
 */
export async function getPostBySlug(slug) {
    const posts = await listPosts({
        search: slug,
        per_page: 1,
    });
    if (posts.length === 0) {
        throw new Error(`Post with slug "${slug}" not found`);
    }
    return posts[0];
}
/**
 * Create a new post
 */
export async function createPost(data) {
    const body = {
        title: data.title,
        content: data.content,
        status: data.status || 'draft',
    };
    if (data.excerpt)
        body.excerpt = data.excerpt;
    if (data.categories && data.categories.length > 0) {
        body.categories = data.categories;
    }
    if (data.tags && data.tags.length > 0) {
        body.tags = data.tags;
    }
    if (data.featured_media)
        body.featured_media = data.featured_media;
    if (data.author)
        body.author = data.author;
    return wpFetch('/posts', {
        method: 'POST',
        body: JSON.stringify(body),
    });
}
/**
 * Update an existing post
 */
export async function updatePost(id, data) {
    const body = {};
    if (data.title)
        body.title = data.title;
    if (data.content)
        body.content = data.content;
    if (data.excerpt)
        body.excerpt = data.excerpt;
    if (data.status)
        body.status = data.status;
    if (data.categories)
        body.categories = data.categories;
    if (data.tags)
        body.tags = data.tags;
    if (data.featured_media !== undefined)
        body.featured_media = data.featured_media;
    return wpFetch(`/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
    });
}
/**
 * Delete a post (move to trash)
 */
export async function deletePost(id) {
    return wpFetch(`/posts/${id}`, {
        method: 'DELETE',
    });
}
/**
 * Permanently delete a post
 */
export async function permanentlyDeletePost(id) {
    return wpFetch(`/posts/${id}?force=true`, {
        method: 'DELETE',
    });
}
/**
 * List categories
 */
export async function listCategories(options = {}) {
    const params = new URLSearchParams();
    if (options.per_page)
        params.append('per_page', String(options.per_page));
    if (options.page)
        params.append('page', String(options.page));
    if (options.search)
        params.append('search', options.search);
    const queryString = params.toString();
    const endpoint = `/categories${queryString ? `?${queryString}` : ''}`;
    return wpFetch(endpoint);
}
/**
 * Get a single category
 */
export async function getCategory(id) {
    return wpFetch(`/categories/${id}`);
}
/**
 * Create a new category
 */
export async function createCategory(data) {
    const body = {
        name: data.name,
    };
    if (data.slug)
        body.slug = data.slug;
    if (data.description)
        body.description = data.description;
    return wpFetch('/categories', {
        method: 'POST',
        body: JSON.stringify(body),
    });
}
/**
 * List media
 */
export async function listMedia(options = {}) {
    const params = new URLSearchParams();
    if (options.per_page)
        params.append('per_page', String(options.per_page));
    if (options.page)
        params.append('page', String(options.page));
    if (options.search)
        params.append('search', options.search);
    const queryString = params.toString();
    const endpoint = `/media${queryString ? `?${queryString}` : ''}`;
    return wpFetch(endpoint);
}
/**
 * Get a single media item
 */
export async function getMedia(id) {
    return wpFetch(`/media/${id}`);
}
/**
 * Get site info
 */
export async function getSiteInfo() {
    return wpFetch('/');
}
/**
 * Get tags
 */
export async function listTags(options = {}) {
    const params = new URLSearchParams();
    if (options.per_page)
        params.append('per_page', String(options.per_page));
    if (options.page)
        params.append('page', String(options.page));
    if (options.search)
        params.append('search', options.search);
    const queryString = params.toString();
    const endpoint = `/tags${queryString ? `?${queryString}` : ''}`;
    return wpFetch(endpoint);
}
//# sourceMappingURL=wordpress-client.js.map