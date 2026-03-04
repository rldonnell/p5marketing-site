# P5 Marketing - Next.js Frontend

A complete Next.js 14+ frontend for P5 Marketing, a headless WordPress architecture. This is a high-performance, dark-themed intent data marketing agency website built with Next.js, React, and the P5 custom design system.

## Architecture

This is the **frontend only** of a headless WordPress setup:
- **Frontend**: Next.js (this project) - handles all visitor-facing pages
- **Backend**: WordPress (headless, no theme) - serves content via REST API
- **Communication**: REST API for blog posts, pages, and dynamic content

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: P5 Custom CSS (dark theme with teal accents)
- **UI Framework**: React 18
- **Fonts**: DM Sans (body), Space Mono (monospace)
- **Icons**: Emoji-based for simplicity
- **Forms**: Contact forms ready for CRM integration

## Project Structure

```
p5-nextjs/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog listing
│   │   ├── blog/[slug]/       # Dynamic blog posts
│   │   ├── contact/           # Contact page
│   │   ├── markets/           # Markets overview
│   │   ├── wedding-venues/    # Vertical: Wedding Venues
│   │   ├── plastic-surgeons/  # Vertical: Plastic Surgeons
│   │   ├── how-it-works/      # How it works page
│   │   ├── privacy/           # Privacy policy
│   │   ├── terms/             # Terms of service
│   │   ├── do-not-sell/       # CCPA Do Not Sell
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable React components
│   │   ├── Header.tsx         # Sticky navigation
│   │   ├── Footer.tsx         # Footer with links
│   │   ├── Hero.tsx           # Full-width hero (grid)
│   │   ├── VertHero.tsx       # Centered hero
│   │   ├── PageHero.tsx       # Simple page header
│   │   ├── StatBar.tsx        # Statistics display
│   │   ├── SectionHeader.tsx  # Section titles
│   │   ├── ParadigmGrid.tsx   # 3-column card grid
│   │   ├── DiffBox.tsx        # Comparison layout
│   │   ├── TestimonialGrid.tsx # Customer testimonials
│   │   ├── FAQ.tsx            # Accordion component
│   │   ├── FinalCTA.tsx       # Bottom CTA section
│   │   ├── JourneyBox.tsx     # Process flow
│   │   ├── Breadcrumb.tsx     # Navigation breadcrumbs
│   │   ├── ContactSidebar.tsx # Contact info card
│   │   ├── BlogCard.tsx       # Blog post card
│   │   └── FadeUp.tsx         # Scroll animation wrapper
│   ├── lib/
│   │   └── wordpress.ts       # WordPress REST API client
│   └── styles/
│       └── globals.css        # P5 design system CSS
├── public/                     # Static assets
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── .env.example               # Environment variables template
└── package.json               # Dependencies
```

## Setup & Installation

### 1. Install Dependencies

```bash
cd p5-nextjs
npm install
```

### 2. Configure WordPress API

Create a `.env.local` file (copy from `.env.example`):

```bash
WORDPRESS_URL=http://localhost:8080
NEXT_PUBLIC_WORDPRESS_URL=http://localhost:8080
```

Update these values to point to your WordPress instance.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production

```bash
npm run build
npm start
```

## Features

### Complete Pages Included

- **Homepage** - Full marketing page with hero, stats, features, markets, testimonials, FAQ
- **About** - Company story, founders, team
- **Markets** - Vertical overview with links to specific markets
- **Wedding Venues** - Detailed page for that vertical
- **Plastic Surgeons** - Detailed page for that vertical
- **How It Works** - 3-step process explanation with deliverables
- **Blog** - Dynamic blog listing and post pages (powered by WordPress)
- **Contact** - Contact form placeholder + sidebar info
- **Legal Pages** - Privacy Policy, Terms of Service, CCPA Do Not Sell

### Components Library

All components are reusable and fully typed:

- **Layout**: Header, Footer
- **Heroes**: Hero, VertHero, PageHero
- **Content**: SectionHeader, StatBar, ParadigmGrid
- **Cards**: BlogCard, TestimonialGrid, DiffBox
- **Interactive**: FAQ (accordion), FadeUp (scroll animations)
- **Utility**: Breadcrumb, ContactSidebar, JourneyBox

### Design System

- **Colors**: Dark theme (#080c14) with teal accents (#00e5c7)
- **Responsive**: Mobile-first, tested at 320px-1920px
- **Animations**: Fade-up on scroll, hover effects, smooth transitions
- **Typography**: DM Sans (body), Space Mono (monospace/ui)
- **Spacing**: 8px base unit with consistent padding/margins

## WordPress Integration

### API Endpoints Used

The app calls these WordPress REST API endpoints:

```
GET /wp-json/wp/v2/posts
GET /wp-json/wp/v2/posts?slug=post-slug
GET /wp-json/wp/v2/categories
GET /wp-json/wp/v2/pages
```

### Features

- Real-time blog listing with pagination
- Dynamic blog post pages with featured images
- Author information
- Category filtering
- Graceful fallback when WordPress isn't connected

## Environment Variables

```
WORDPRESS_URL              # Server-side WordPress URL
NEXT_PUBLIC_WORDPRESS_URL  # Client-side WordPress URL
```

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/wordpress.ts` | WordPress API client with error handling |
| `src/styles/globals.css` | Complete P5 design system (1600+ lines) |
| `src/app/layout.tsx` | Root layout with fonts and metadata |
| `src/app/page.tsx` | Full homepage with all sections |

## Performance

- Static generation (SSG) for all pages
- Incremental Static Regeneration (ISR) for blog posts
- Optimized images with Next.js Image component support
- Code splitting per route
- Zero JavaScript for static content when possible

### Build Stats

- **Homepage**: ~87 kB JS
- **Dynamic Pages**: ~96 kB JS
- **First Load JS**: 87.3 kB (shared)
- **All pages**: Prerendered as static

## Customization

### Change Colors

Edit CSS variables in `src/styles/globals.css`:

```css
:root {
  --p5-accent: #00e5c7;        /* Teal */
  --p5-accent-alt: #7b61ff;    /* Purple */
  --p5-bg-deep: #080c14;       /* Very dark blue */
  --p5-bg-surface: #0d1420;    /* Dark blue */
  --p5-text: #e2e8f0;          /* Light gray */
  --p5-text-dim: #94a3b8;      /* Medium gray */
}
```

### Add New Pages

1. Create folder: `src/app/new-page/`
2. Create file: `src/app/new-page/page.tsx`
3. Use existing page patterns as templates

### Add New Components

1. Create: `src/components/NewComponent.tsx`
2. Export from component
3. Import and use in pages

## Common Tasks

### Connect WordPress

Update `.env.local` with your WordPress URL, then the blog pages will automatically fetch posts.

### Customize Homepage

Edit `src/app/page.tsx` - it's fully self-contained with all content inline.

### Add Team Members

Edit the team grid in `src/app/about/page.tsx`.

### Update Contact Info

Edit `src/components/ContactSidebar.tsx`.

### Change Navigation

Edit menu links in `src/components/Header.tsx`.

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub, then import in Vercel
# Vercel automatically detects Next.js
```

### Docker

```bash
docker build -t p5-nextjs .
docker run -p 3000:3000 p5-nextjs
```

### Self-Hosted

```bash
npm run build
npm start
```

## ESLint & TypeScript

```bash
npm run lint
```

Linting is configured with `next/core-web-vitals` and custom rules for this project.

## Troubleshooting

### Blog not showing posts?

- Check `WORDPRESS_URL` in `.env.local`
- Ensure WordPress is running and REST API is enabled
- Check WordPress console for CORS issues

### Styles not applying?

- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `npm run dev`

### Build fails?

- Check Node version: `node -v` (should be 18+)
- Clear cache: `npm cache clean --force`
- Reinstall: `rm -rf node_modules && npm install`

## Support & Next Steps

1. **Connect WordPress** - Update `.env.local` with your WordPress URL
2. **Test Blog** - Navigate to `/blog` to verify WordPress integration
3. **Customize Content** - Update copy, images, colors in the code
4. **Deploy** - Push to Vercel or your hosting platform

## License

This project is proprietary to P5 Marketing.
