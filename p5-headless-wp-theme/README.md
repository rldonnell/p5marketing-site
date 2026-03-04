# P5 Headless WordPress Theme

A minimal, headless WordPress theme for P5 Marketing that turns WordPress into a pure content management API. Frontend rendering is disabled — the Next.js frontend consumes content via the REST API.

## Features

- **REST API First**: All content served via the WordPress REST API
- **CORS Enabled**: Configured for cross-origin requests from your Next.js frontend
- **Automatic Frontend Redirect**: Non-API requests redirect to the Next.js site
- **Enhanced REST Fields**: Reading time estimates, featured image URLs, author info
- **Next.js ISR Integration**: Automatic cache revalidation webhooks on content changes
- **Customized Admin**: Branded WordPress admin interface
- **Security Hardened**: Disables XML-RPC, exposes only necessary endpoints
- **Image Optimization**: Built-in image sizes for cards and hero sections

## Installation

1. **Upload Theme**
   - Download or clone this theme to `wp-content/themes/p5-headless/`
   - Or upload via WordPress admin: Appearance → Themes → Upload Theme

2. **Activate Theme**
   - Go to WordPress admin
   - Navigate to Appearance → Themes
   - Find "P5 Headless" and click Activate

3. **Configure Constants**
   Add these to your `wp-config.php` (before `/* That's all, stop editing! */`):

   ```php
   // Frontend URL for redirects
   define('P5_FRONTEND_URL', 'https://p5marketing.com');

   // Next.js ISR revalidation endpoint
   define('P5_REVALIDATION_URL', 'https://p5marketing.com/api/revalidate');

   // Secret key for revalidation requests (keep it private!)
   define('P5_REVALIDATION_SECRET', 'your-secret-key-here');
   ```

4. **Install Plugins** (Recommended)
   - Classic Editor (optional, for familiar editing)
   - Application Passwords plugin (for secure REST API authentication)

5. **Configure Permalinks**
   - Go to Settings → Permalinks
   - Select "Post name"
   - Click Save Changes

6. **Create Categories**
   - Go to Posts → Categories
   - Create categories like "Blog", "News", "Case Studies", etc.

7. **Start Creating Content**
   - Go to Posts → Add New
   - Write your post, add featured image, assign categories/tags
   - Publish
   - ISR webhook will automatically trigger on your frontend

## API Endpoints

All endpoints are accessible at `https://your-wordpress-site/wp-json/wp/v2/`

### Posts
- `GET /posts` — List all published posts
- `GET /posts/:id` — Get a single post
- `GET /posts?categories=5` — Filter by category
- `GET /posts?search=keyword` — Search posts
- `POST /posts` — Create post (requires authentication)
- `PUT /posts/:id` — Update post (requires authentication)
- `DELETE /posts/:id` — Delete post (requires authentication)

### Categories
- `GET /categories` — List all categories
- `POST /categories` — Create category (requires authentication)

### Media
- `GET /media` — List all media files
- `GET /media/:id` — Get a specific media item

### Custom Fields (Enhanced in REST API)
Each post includes:
- `featured_image_url` — Direct URL to featured image
- `reading_time` — Estimated reading time in minutes
- `author_info` — Author name, bio, and avatar

## Authentication

For creating/updating/deleting posts, use WordPress Application Passwords:

1. **Create Application Password**
   - Log in to WordPress admin
   - Go to Users → Edit your user
   - Scroll to "Application Passwords"
   - Enter app name: "MCP Server" or similar
   - Click "Add New Application Password"
   - Copy the generated password

2. **Use in MCP Server**
   Add to your `.env`:
   ```
   WORDPRESS_USERNAME=admin
   WORDPRESS_APP_PASSWORD=xxxx xxxx xxxx xxxx xxxx xxxx
   ```

## Next.js Frontend Integration

### Example: Fetch Posts

```javascript
const response = await fetch('https://cms.p5marketing.com/wp-json/wp/v2/posts', {
  headers: {
    'Accept': 'application/json',
  },
});
const posts = await response.json();
```

### Example: Fetch with ISR Revalidation

In your Next.js API route (`pages/api/revalidate.js`):

```javascript
export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate(`/posts/${req.body.slug}`);
    await res.revalidate('/blog');
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: 'Error revalidating' });
  }
}
```

## Directory Structure

```
p5-headless/
├── style.css         — Theme stylesheet (minimal)
├── functions.php     — All theme functionality
├── index.php         — Silent redirect to admin/frontend
└── README.md         — This file
```

## Security Considerations

- Application Passwords expire after inactivity — renew periodically
- Keep `P5_REVALIDATION_SECRET` private and strong
- Only expose necessary REST endpoints
- Use HTTPS in production
- Regularly update WordPress and plugins

## Troubleshooting

### "REST API returning 404"
- Check that permalinks are set to "Post name"
- Verify theme is activated
- Check that `wp-json` directory is not blocked in `.htaccess`

### "CORS errors in frontend"
- Verify `P5_FRONTEND_URL` is in the allowed origins
- Check browser console for exact error
- Add domain to `$allowed_origins` in `functions.php` if needed

### "ISR revalidation not triggering"
- Verify `P5_REVALIDATION_URL` and `P5_REVALIDATION_SECRET` are correct
- Check WordPress debug log: `wp-content/debug.log`
- Confirm Next.js revalidation endpoint exists and returns 200

## License

GPL-2.0+ — Same as WordPress

## Support

For issues with this theme, check the P5 Marketing wiki or contact the development team.
