#!/usr/bin/env node
/**
 * P5 WordPress MCP Server
 * Connects Claude to WordPress REST API for conversational content management
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { ListToolsRequestSchema, CallToolRequestSchema, } from '@modelcontextprotocol/sdk/types.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { listPosts, getPost, getPostBySlug, createPost, updatePost, deletePost, listCategories, createCategory, listMedia, getMedia, getSiteInfo, listTags, } from './wordpress-client.js';
// Validate environment
if (!process.env.WORDPRESS_URL) {
    console.error('Error: WORDPRESS_URL environment variable is required');
    process.exit(1);
}
if (!process.env.WORDPRESS_USERNAME || !process.env.WORDPRESS_APP_PASSWORD) {
    console.error('Error: WORDPRESS_USERNAME and WORDPRESS_APP_PASSWORD are required');
    process.exit(1);
}
// Initialize MCP Server
const server = new Server({
    name: 'p5-wordpress-mcp',
    version: '1.0.0',
});
// Define all available tools
const tools = [
    {
        name: 'wp_list_posts',
        description: 'List blog posts with optional filters (status, category, search, pagination)',
        inputSchema: {
            type: 'object',
            properties: {
                status: {
                    type: 'string',
                    enum: ['publish', 'draft', 'pending', 'private'],
                    description: 'Filter by post status (default: publish)',
                },
                categories: {
                    type: 'number',
                    description: 'Filter by category ID',
                },
                search: {
                    type: 'string',
                    description: 'Search posts by keyword',
                },
                per_page: {
                    type: 'number',
                    description: 'Number of posts per page (default: 10, max: 100)',
                },
                page: {
                    type: 'number',
                    description: 'Page number for pagination',
                },
                orderby: {
                    type: 'string',
                    enum: ['date', 'title', 'relevance'],
                    description: 'Sort by field (default: date)',
                },
                order: {
                    type: 'string',
                    enum: ['asc', 'desc'],
                    description: 'Sort order (default: desc)',
                },
            },
        },
    },
    {
        name: 'wp_get_post',
        description: 'Get a single post by ID or slug',
        inputSchema: {
            type: 'object',
            properties: {
                id: {
                    type: 'number',
                    description: 'Post ID',
                },
                slug: {
                    type: 'string',
                    description: 'Post slug (alternative to ID)',
                },
            },
        },
    },
    {
        name: 'wp_create_post',
        description: 'Create a new blog post',
        inputSchema: {
            type: 'object',
            properties: {
                title: {
                    type: 'string',
                    description: 'Post title',
                },
                content: {
                    type: 'string',
                    description: 'Post content (HTML)',
                },
                excerpt: {
                    type: 'string',
                    description: 'Post excerpt/summary',
                },
                status: {
                    type: 'string',
                    enum: ['draft', 'publish', 'pending'],
                    description: 'Post status (default: draft)',
                },
                categories: {
                    type: 'array',
                    items: { type: 'number' },
                    description: 'Array of category IDs',
                },
                tags: {
                    type: 'array',
                    items: { type: 'number' },
                    description: 'Array of tag IDs',
                },
                featured_media: {
                    type: 'number',
                    description: 'Media ID for featured image',
                },
            },
            required: ['title', 'content'],
        },
    },
    {
        name: 'wp_update_post',
        description: 'Update an existing blog post',
        inputSchema: {
            type: 'object',
            properties: {
                id: {
                    type: 'number',
                    description: 'Post ID',
                },
                title: {
                    type: 'string',
                    description: 'New post title',
                },
                content: {
                    type: 'string',
                    description: 'New post content (HTML)',
                },
                excerpt: {
                    type: 'string',
                    description: 'New post excerpt',
                },
                status: {
                    type: 'string',
                    enum: ['draft', 'publish', 'pending'],
                    description: 'New post status',
                },
                categories: {
                    type: 'array',
                    items: { type: 'number' },
                    description: 'Array of category IDs',
                },
                tags: {
                    type: 'array',
                    items: { type: 'number' },
                    description: 'Array of tag IDs',
                },
                featured_media: {
                    type: 'number',
                    description: 'Media ID for featured image',
                },
            },
            required: ['id'],
        },
    },
    {
        name: 'wp_delete_post',
        description: 'Delete a post (move to trash)',
        inputSchema: {
            type: 'object',
            properties: {
                id: {
                    type: 'number',
                    description: 'Post ID to delete',
                },
                permanent: {
                    type: 'boolean',
                    description: 'Permanently delete (skip trash)',
                },
            },
            required: ['id'],
        },
    },
    {
        name: 'wp_publish_post',
        description: 'Publish a draft post',
        inputSchema: {
            type: 'object',
            properties: {
                id: {
                    type: 'number',
                    description: 'Post ID to publish',
                },
            },
            required: ['id'],
        },
    },
    {
        name: 'wp_list_categories',
        description: 'List all post categories',
        inputSchema: {
            type: 'object',
            properties: {
                search: {
                    type: 'string',
                    description: 'Search category by name',
                },
                per_page: {
                    type: 'number',
                    description: 'Number of results per page',
                },
                page: {
                    type: 'number',
                    description: 'Page number for pagination',
                },
            },
        },
    },
    {
        name: 'wp_create_category',
        description: 'Create a new post category',
        inputSchema: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    description: 'Category name',
                },
                slug: {
                    type: 'string',
                    description: 'Category slug (URL-friendly)',
                },
                description: {
                    type: 'string',
                    description: 'Category description',
                },
            },
            required: ['name'],
        },
    },
    {
        name: 'wp_list_tags',
        description: 'List all post tags',
        inputSchema: {
            type: 'object',
            properties: {
                search: {
                    type: 'string',
                    description: 'Search tag by name',
                },
                per_page: {
                    type: 'number',
                    description: 'Number of results per page',
                },
                page: {
                    type: 'number',
                    description: 'Page number for pagination',
                },
            },
        },
    },
    {
        name: 'wp_list_media',
        description: 'List uploaded media files',
        inputSchema: {
            type: 'object',
            properties: {
                search: {
                    type: 'string',
                    description: 'Search media by filename',
                },
                per_page: {
                    type: 'number',
                    description: 'Number of results per page',
                },
                page: {
                    type: 'number',
                    description: 'Page number for pagination',
                },
            },
        },
    },
    {
        name: 'wp_get_media',
        description: 'Get details of a specific media file',
        inputSchema: {
            type: 'object',
            properties: {
                id: {
                    type: 'number',
                    description: 'Media ID',
                },
            },
            required: ['id'],
        },
    },
    {
        name: 'wp_site_info',
        description: 'Get WordPress site information',
        inputSchema: {
            type: 'object',
            properties: {},
        },
    },
];
// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools,
}));
/**
 * Format post data for display
 */
function formatPost(post) {
    const lines = [
        `ID: ${post.id}`,
        `Title: ${post.title.rendered}`,
        `Slug: ${post.slug}`,
        `Status: ${post.status}`,
        `Date: ${new Date(post.date).toLocaleDateString()}`,
        `Author: ${post.author}`,
        `Categories: ${post.categories.join(', ') || 'None'}`,
        `Tags: ${post.tags.join(', ') || 'None'}`,
    ];
    if (post.excerpt?.rendered) {
        lines.push(`Excerpt: ${post.excerpt.rendered.replace(/<[^>]*>/g, '')}`);
    }
    if (post.featured_image_url) {
        lines.push(`Featured Image: ${post.featured_image_url}`);
    }
    if (post.reading_time) {
        lines.push(`Reading Time: ${post.reading_time} min`);
    }
    if (post.author_info) {
        lines.push(`Author Info: ${post.author_info.name} - ${post.author_info.bio}`);
    }
    return lines.join('\n');
}
/**
 * Handle tool calls
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { params } = request;
    const name = params.name;
    const args = params.arguments || {};
    try {
        switch (name) {
            case 'wp_list_posts': {
                const typedArgs = args;
                const posts = await listPosts({
                    status: typedArgs.status || 'publish',
                    categories: typedArgs.categories,
                    search: typedArgs.search,
                    per_page: typedArgs.per_page || 10,
                    page: typedArgs.page,
                    orderby: typedArgs.orderby || 'date',
                    order: typedArgs.order || 'desc',
                });
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Found ${posts.length} post(s):\n\n${posts.map((p) => `- ${p.title.rendered} (ID: ${p.id}, Status: ${p.status})`).join('\n')}`,
                        },
                    ],
                };
            }
            case 'wp_get_post': {
                const typedArgs = args;
                let post;
                if (typedArgs.id) {
                    post = await getPost(typedArgs.id);
                }
                else if (typedArgs.slug) {
                    post = await getPostBySlug(typedArgs.slug);
                }
                else {
                    return {
                        content: [
                            {
                                type: 'text',
                                text: 'Error: Either id or slug is required',
                            },
                        ],
                    };
                }
                return {
                    content: [
                        {
                            type: 'text',
                            text: formatPost(post),
                        },
                    ],
                };
            }
            case 'wp_create_post': {
                const typedArgs = args;
                const newPost = await createPost({
                    title: typedArgs.title,
                    content: typedArgs.content,
                    excerpt: typedArgs.excerpt,
                    status: typedArgs.status || 'draft',
                    categories: typedArgs.categories,
                    tags: typedArgs.tags,
                    featured_media: typedArgs.featured_media,
                });
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Post created successfully!\n\n${formatPost(newPost)}`,
                        },
                    ],
                };
            }
            case 'wp_update_post': {
                const typedArgs = args;
                const updatedPost = await updatePost(typedArgs.id, {
                    title: typedArgs.title,
                    content: typedArgs.content,
                    excerpt: typedArgs.excerpt,
                    status: typedArgs.status,
                    categories: typedArgs.categories,
                    tags: typedArgs.tags,
                    featured_media: typedArgs.featured_media,
                });
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Post ${typedArgs.id} updated successfully!\n\n${formatPost(updatedPost)}`,
                        },
                    ],
                };
            }
            case 'wp_delete_post': {
                const typedArgs = args;
                await deletePost(typedArgs.id);
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Post ${typedArgs.id} deleted successfully.`,
                        },
                    ],
                };
            }
            case 'wp_publish_post': {
                const typedArgs = args;
                const published = await updatePost(typedArgs.id, {
                    status: 'publish',
                });
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Post ${typedArgs.id} published!\n\nURL: ${published.link}`,
                        },
                    ],
                };
            }
            case 'wp_list_categories': {
                const typedArgs = args;
                const categories = await listCategories({
                    search: typedArgs.search,
                    per_page: typedArgs.per_page || 20,
                    page: typedArgs.page,
                });
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Found ${categories.length} categor${categories.length === 1 ? 'y' : 'ies'}:\n\n${categories.map((c) => `- ${c.name} (ID: ${c.id}, Posts: ${c.count})`).join('\n')}`,
                        },
                    ],
                };
            }
            case 'wp_create_category': {
                const typedArgs = args;
                const newCat = await createCategory({
                    name: typedArgs.name,
                    slug: typedArgs.slug,
                    description: typedArgs.description,
                });
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Category created: ${newCat.name} (ID: ${newCat.id})`,
                        },
                    ],
                };
            }
            case 'wp_list_tags': {
                const typedArgs = args;
                const tags = await listTags({
                    search: typedArgs.search,
                    per_page: typedArgs.per_page || 20,
                    page: typedArgs.page,
                });
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Found ${tags.length} tag${tags.length === 1 ? '' : 's'}:\n\n${tags.map((t) => `- ${t.name} (ID: ${t.id}, Posts: ${t.count})`).join('\n')}`,
                        },
                    ],
                };
            }
            case 'wp_list_media': {
                const typedArgs = args;
                const media = await listMedia({
                    search: typedArgs.search,
                    per_page: typedArgs.per_page || 10,
                    page: typedArgs.page,
                });
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Found ${media.length} media file(s):\n\n${media.map((m) => `- ${m.title.rendered} (ID: ${m.id}, Type: ${m.media_type})`).join('\n')}`,
                        },
                    ],
                };
            }
            case 'wp_get_media': {
                const typedArgs = args;
                const mediaItem = await getMedia(typedArgs.id);
                const lines = [
                    `ID: ${mediaItem.id}`,
                    `Title: ${mediaItem.title.rendered}`,
                    `URL: ${mediaItem.source_url}`,
                    `Type: ${mediaItem.media_type}`,
                    `MIME Type: ${mediaItem.mime_type}`,
                ];
                if (mediaItem.media_details) {
                    lines.push(`Size: ${mediaItem.media_details.width}x${mediaItem.media_details.height}`);
                }
                return {
                    content: [
                        {
                            type: 'text',
                            text: lines.join('\n'),
                        },
                    ],
                };
            }
            case 'wp_site_info': {
                const info = await getSiteInfo();
                const lines = [
                    `Site: ${info.name}`,
                    `URL: ${info.url}`,
                    `Description: ${info.description}`,
                    `WordPress Version: ${info.wordpress_version || 'Unknown'}`,
                    `Timezone: ${info.timezone_string}`,
                ];
                return {
                    content: [
                        {
                            type: 'text',
                            text: lines.join('\n'),
                        },
                    ],
                };
            }
            default:
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Unknown tool: ${name}`,
                        },
                    ],
                };
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        return {
            content: [
                {
                    type: 'text',
                    text: `Error: ${errorMessage}`,
                },
            ],
            isError: true,
        };
    }
});
/**
 * Start the server
 */
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('P5 WordPress MCP Server running on stdio');
}
main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map