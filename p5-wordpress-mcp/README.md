# P5 WordPress MCP Server

A Model Context Protocol (MCP) server that connects Claude to P5 Marketing's headless WordPress CMS. Manage blog posts, categories, and media entirely through conversation with Claude.

## What is MCP?

MCP is a standardized protocol that allows Claude to interact with external tools and systems. This server bridges Claude and WordPress, enabling you to:

- List, read, and search blog posts
- Create and publish blog posts
- Update existing posts
- Manage categories and tags
- View site information
- All through natural conversation

## Features

- **Complete Post Management**: Create, read, update, delete blog posts
- **Category & Tag Management**: Organize content with categories and tags
- **Media Browsing**: View uploaded images and files
- **Search & Filter**: Find posts by category, keyword, date
- **Error Handling**: Graceful error messages if something goes wrong
- **Type-Safe**: Built with TypeScript for reliability
- **Environment-Based Config**: Uses environment variables for security

## Installation

### Prerequisites

- Node.js 18+ (required for native fetch)
- npm or yarn
- WordPress site with P5 Headless theme installed
- WordPress Application Password for authentication

### Step 1: Install Dependencies

```bash
cd p5-wordpress-mcp
npm install
```

### Step 2: Create `.env` File

Copy `.env.example` to `.env` and fill in your details:

```bash
cp .env.example .env
```

Edit `.env`:

```
WORDPRESS_URL=https://cms.p5marketing.com
WORDPRESS_USERNAME=admin
WORDPRESS_APP_PASSWORD=xxxx xxxx xxxx xxxx xxxx xxxx
```

### Step 3: Generate WordPress Application Password

1. Log in to your WordPress admin panel
2. Go to **Users** → **Profile** (Your User)
3. Scroll to **Application Passwords**
4. Enter app name: "MCP Server"
5. Click **Add New Application Password**
6. Copy the generated password (format: `xxxx xxxx xxxx xxxx xxxx xxxx`)
7. Paste into `.env` as `WORDPRESS_APP_PASSWORD`

### Step 4: Build the Server

```bash
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` directory.

### Step 5: Configure Claude Desktop

Edit your Claude Desktop config file:

**macOS/Linux**: `~/.config/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Add this MCP server:

```json
{
  "mcpServers": {
    "p5-wordpress": {
      "command": "node",
      "args": ["/path/to/p5-wordpress-mcp/dist/index.js"],
      "env": {
        "WORDPRESS_URL": "https://cms.p5marketing.com",
        "WORDPRESS_USERNAME": "admin",
        "WORDPRESS_APP_PASSWORD": "xxxx xxxx xxxx xxxx xxxx xxxx"
      }
    }
  }
}
```

Replace `/path/to/p5-wordpress-mcp` with the actual absolute path.

### Step 6: Restart Claude Desktop

Close and reopen Claude Desktop. The MCP server will be available in the Tools menu.

## Available Tools

### Post Management

#### `wp_list_posts`
List blog posts with filtering and pagination.

**Parameters:**
- `status` - Filter: `publish`, `draft`, `pending`, or `private`
- `categories` - Filter by category ID
- `search` - Search by keyword
- `per_page` - Items per page (1-100, default: 10)
- `page` - Page number for pagination
- `orderby` - Sort by: `date`, `title`, or `relevance`
- `order` - Sort direction: `asc` or `desc`

**Example:**
```
"List all published posts in the 'Blog' category"
"Show me 20 posts about marketing, sorted by title"
"Find posts matching 'SEO strategy'"
```

#### `wp_get_post`
Get details of a specific post.

**Parameters:**
- `id` - Post ID (required if slug not provided)
- `slug` - Post slug (required if id not provided)

**Example:**
```
"Get the post with ID 42"
"Show me the post with slug 'getting-started-with-seo'"
```

#### `wp_create_post`
Create a new blog post.

**Parameters:**
- `title` - Post title (required)
- `content` - Post content in HTML (required)
- `excerpt` - Short summary
- `status` - `draft`, `publish`, or `pending` (default: draft)
- `categories` - Array of category IDs
- `tags` - Array of tag IDs
- `featured_media` - Media ID for featured image

**Example:**
```
"Create a new post titled 'Introduction to API Design' as a draft"
"Write a published post about our latest product launch with categories [5, 8]"
```

#### `wp_update_post`
Update an existing post.

**Parameters:**
- `id` - Post ID (required)
- `title` - New title
- `content` - New content
- `excerpt` - New excerpt
- `status` - New status
- `categories` - New category IDs
- `tags` - New tag IDs
- `featured_media` - New featured image

**Example:**
```
"Update post 42 with a new title 'Advanced API Design Patterns'"
"Change post 15 to draft status"
```

#### `wp_delete_post`
Delete a post (move to trash).

**Parameters:**
- `id` - Post ID (required)
- `permanent` - Skip trash and permanently delete (optional)

**Example:**
```
"Delete post 99"
"Permanently remove post with ID 12"
```

#### `wp_publish_post`
Publish a draft post.

**Parameters:**
- `id` - Post ID (required)

**Example:**
```
"Publish post 42"
"Make draft 15 live"
```

### Category & Tag Management

#### `wp_list_categories`
List all post categories.

**Parameters:**
- `search` - Search category name
- `per_page` - Items per page
- `page` - Page number

**Example:**
```
"Show me all categories"
"Find categories containing 'Tech'"
```

#### `wp_create_category`
Create a new category.

**Parameters:**
- `name` - Category name (required)
- `slug` - URL-friendly name
- `description` - Category description

**Example:**
```
"Create a category called 'Case Studies' with slug 'case-studies'"
"Add a new category 'Product News' with description 'Latest news about our products'"
```

#### `wp_list_tags`
List all post tags.

**Parameters:**
- `search` - Search tag name
- `per_page` - Items per page
- `page` - Page number

**Example:**
```
"Show me all tags"
"List tags starting with 'dev'"
```

### Media Management

#### `wp_list_media`
List uploaded media files.

**Parameters:**
- `search` - Search by filename
- `per_page` - Items per page
- `page` - Page number

**Example:**
```
"Show me all uploaded images"
"Find media files containing 'hero'"
```

#### `wp_get_media`
Get details of a specific media file.

**Parameters:**
- `id` - Media ID (required)

**Example:**
```
"Get details of media file 123"
"Show me the featured image info"
```

### Site Information

#### `wp_site_info`
Get WordPress site metadata.

**Example:**
```
"What's the site name and URL?"
"Show me site information"
```

## Usage Examples

### Create a Blog Post

```
User: Create a blog post about our Q2 results

Claude: I'll create a blog post about your Q2 results. Let me draft it for you as a draft post first so you can review it.

[Claude creates the post]

Claude: I've created the post "Q2 2024 Results Summary" (ID: 127) as a draft.
Here's what I created:

- Title: Q2 2024 Results Summary
- Status: draft
- Content: [post content]

Would you like me to publish it, add categories, or make any changes?
```

### Publish a Post

```
User: Publish post 127

Claude: I've published post 127! It's now live at: https://p5marketing.com/q2-2024-results-summary/
```

### Search and Update

```
User: Find posts about API design and update them with the tag 'technical'

Claude: [Lists matching posts]

Claude: Found 3 posts about API design. I'll add the 'technical' tag to all of them.

[Updates complete]

Claude: Updated 3 posts with the 'technical' tag.
```

### List Categories

```
User: What categories do we have?

Claude: Here are your post categories:

- Blog (ID: 5, 23 posts)
- Case Studies (ID: 8, 7 posts)
- News (ID: 12, 15 posts)
- Technical (ID: 18, 31 posts)
```

## Development

### Run in Development Mode

```bash
npm run dev
```

This uses `tsx` to run TypeScript directly without compiling.

### Build for Production

```bash
npm run build
```

Compiles TypeScript to `dist/` directory.

### Start the Server

```bash
npm start
```

Or use Node directly:

```bash
node dist/index.js
```

## Troubleshooting

### "Invalid credentials" Error

Check your `.env` file:
- Verify `WORDPRESS_USERNAME` is correct
- Verify `WORDPRESS_APP_PASSWORD` is correctly formatted (spaces included)
- Application passwords are case-sensitive

### "Connection refused" Error

Check your `WORDPRESS_URL`:
- Verify the URL is correct and the site is running
- Ensure it includes `http://` or `https://`
- Check network connectivity from your machine

### "POST not found" Error

When using `wp_get_post` with a slug:
- Ensure the post is published (drafts won't appear in searches)
- Use the exact slug (URL-friendly name)
- Check the post slug in WordPress admin

### Tools Not Showing in Claude

1. Verify the config file path is correct
2. Ensure the `node` command works in terminal: `node --version`
3. Check that the path in config is absolute, not relative
4. Restart Claude Desktop after changing config
5. Check Claude Desktop logs for errors

### Build Errors

```bash
# Clear and rebuild
rm -rf dist
npm run build
```

If TypeScript errors persist:
```bash
npm install
npm run build
```

## Architecture

```
p5-wordpress-mcp/
├── src/
│   ├── index.ts              # Main MCP server and tool handlers
│   └── wordpress-client.ts   # HTTP client for WordPress REST API
├── dist/                     # Compiled JavaScript (generated)
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── .env.example              # Environment variables template
└── README.md                 # This file
```

### How It Works

1. **Claude requests a tool**: User asks Claude to perform an action
2. **MCP Server receives request**: Server matches the tool name
3. **Client calls WordPress API**: Uses authenticated REST API request
4. **Response formatted**: Results are formatted for Claude to read
5. **Claude responds to user**: Presents the information naturally

## Security

- **Never commit `.env`** to version control
- **Rotate Application Passwords** periodically in WordPress
- **Use HTTPS** in production for all connections
- **Keep Node.js updated** to latest LTS version
- **Review logs** for suspicious activity

## License

This MCP server is provided as-is for P5 Marketing.

## Support

For issues or questions about this MCP server:
1. Check the troubleshooting section above
2. Review WordPress debug logs: `wp-content/debug.log`
3. Check that your WordPress theme supports the REST API
4. Verify you're using P5 Headless theme or compatible theme

## Additional Resources

- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [MCP Documentation](https://modelcontextprotocol.io/)
- [Claude Documentation](https://claude.ai/docs/)
