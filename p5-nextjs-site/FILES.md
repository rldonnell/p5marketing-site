# P5 Marketing - Complete File Listing

All files are located in `/sessions/zealous-hopeful-mendel/p5-nextjs/`

## Configuration Files

```
/sessions/zealous-hopeful-mendel/p5-nextjs/
├── package.json                  - npm dependencies and scripts
├── tsconfig.json                 - TypeScript configuration
├── next.config.js                - Next.js configuration
├── tailwind.config.js            - Tailwind CSS configuration
├── postcss.config.js             - PostCSS configuration
├── .eslintrc.json                - ESLint configuration
├── .gitignore                    - Git ignore rules
├── .env.example                  - Environment variables template
└── next-env.d.ts                 - TypeScript Next.js types
```

## Source Files

### Root Layout
```
/sessions/zealous-hopeful-mendel/p5-nextjs/src/app/
└── layout.tsx                    - Root layout with metadata and fonts
```

### Pages
```
/sessions/zealous-hopeful-mendel/p5-nextjs/src/app/
├── page.tsx                      - Homepage (180 lines)
├── about/
│   └── page.tsx                  - About page (85 lines)
├── contact/
│   └── page.tsx                  - Contact page (40 lines)
├── markets/
│   └── page.tsx                  - Markets overview (70 lines)
├── wedding-venues/
│   └── page.tsx                  - Wedding venues vertical (95 lines)
├── plastic-surgeons/
│   └── page.tsx                  - Plastic surgeons vertical (100 lines)
├── how-it-works/
│   └── page.tsx                  - How it works page (140 lines)
├── blog/
│   ├── page.tsx                  - Blog listing (55 lines)
│   └── [slug]/
│       └── page.tsx              - Blog post template (85 lines)
├── privacy/
│   └── page.tsx                  - Privacy policy (140 lines)
├── terms/
│   └── page.tsx                  - Terms of service (145 lines)
└── do-not-sell/
    └── page.tsx                  - CCPA compliance page (135 lines)
```

### Components (28 files)
```
/sessions/zealous-hopeful-mendel/p5-nextjs/src/components/

Layout:
├── Header.tsx                    - Sticky navigation (use client)
└── Footer.tsx                    - Footer section

Heroes:
├── Hero.tsx                      - Grid hero with illustration
├── VertHero.tsx                  - Centered vertical hero
└── PageHero.tsx                  - Simple page header

Content:
├── SectionHeader.tsx             - Section labels and titles
├── StatBar.tsx                   - Statistics display
├── ParadigmGrid.tsx              - 3-column card grid
├── DiffBox.tsx                   - Comparison layout
├── TestimonialGrid.tsx           - Testimonials grid (2-column)
├── JourneyBox.tsx                - Process flow visualization
├── ContactSidebar.tsx            - Contact information
└── BlogCard.tsx                  - Blog post card

Interactive:
├── FAQ.tsx                       - Accordion component (use client)
└── FadeUp.tsx                    - Scroll animation (use client)

CTA:
└── FinalCTA.tsx                  - Bottom CTA section

Navigation:
└── Breadcrumb.tsx                - Breadcrumb navigation
```

### Styling
```
/sessions/zealous-hopeful-mendel/p5-nextjs/src/styles/
└── globals.css                   - P5 design system (1600+ lines)
    ├── CSS Variables (design tokens)
    ├── Base Resets
    ├── Button Styles
    ├── Hero Variants
    ├── Card Grids (paradigm, hiw, deliverables, markets, etc.)
    ├── Component Styles (testimonials, FAQ, contact, legal)
    ├── Animations & Transitions
    └── Responsive Breakpoints (320px-1920px)
```

### Library
```
/sessions/zealous-hopeful-mendel/p5-nextjs/src/lib/
└── wordpress.ts                  - WordPress REST API client
    ├── getPosts()                - Fetch blog posts
    ├── getPost()                 - Fetch single post by slug
    ├── getCategories()           - Fetch categories
    └── getPages()                - Fetch all pages
```

## Build Output
```
/sessions/zealous-hopeful-mendel/p5-nextjs/.next/
├── BUILD_ID                      - Build identifier
├── app-build-manifest.json       - App routes manifest
├── app-path-routes-manifest.json - Route manifest
├── prerender-manifest.json       - Pre-rendered pages
├── build-manifest.json           - Build manifest
├── routes-manifest.json          - Route manifest
├── images-manifest.json          - Image manifest
├── static/                       - Static assets
├── server/                       - Server files
└── cache/                        - Build cache
```

## Documentation
```
/sessions/zealous-hopeful-mendel/p5-nextjs/
├── README.md                     - Project guide and setup
├── DEPLOYMENT.md                 - Deployment instructions
├── PROJECT_SUMMARY.md            - Complete project summary
└── FILES.md                      - This file
```

## Dependencies
```
/sessions/zealous-hopeful-mendel/p5-nextjs/
├── package.json                  - 407 total packages:
│   ├── next@14.2.0+             - Next.js framework
│   ├── react@18.3.0+            - React library
│   ├── react-dom@18.3.0+        - React DOM
│   ├── typescript@5.0+          - TypeScript
│   ├── tailwindcss@3.4.1+       - Tailwind CSS
│   ├── @tailwindcss/postcss     - Tailwind PostCSS plugin
│   └── Other tools and utilities
└── package-lock.json            - Dependency lock file
```

## Statistics

### Lines of Code
- **Pages**: ~1,200 lines (13 pages)
- **Components**: ~2,000 lines (28 components)
- **CSS**: 1,600+ lines (design system)
- **TypeScript Config**: 25 lines
- **Total Source**: ~4,500+ lines

### File Count
- **Pages**: 13 static + 1 dynamic = 14
- **Components**: 28
- **Configuration**: 8 files
- **Documentation**: 4 files
- **Total Source Files**: 32

### Project Size
- **Total with node_modules**: 409 MB
- **Build output (.next)**: 44 MB
- **Source code only**: ~5 MB

## Key Directories

```
Source Code:
/sessions/zealous-hopeful-mendel/p5-nextjs/src/

Built Output:
/sessions/zealous-hopeful-mendel/p5-nextjs/.next/

Dependencies:
/sessions/zealous-hopeful-mendel/p5-nextjs/node_modules/

Config & Docs:
/sessions/zealous-hopeful-mendel/p5-nextjs/
```

## How to Find Files

### By Purpose

**Homepage Content**:
- `/sessions/zealous-hopeful-mendel/p5-nextjs/src/app/page.tsx`

**About Page**:
- `/sessions/zealous-hopeful-mendel/p5-nextjs/src/app/about/page.tsx`

**Blog Integration**:
- `/sessions/zealous-hopeful-mendel/p5-nextjs/src/app/blog/page.tsx`
- `/sessions/zealous-hopeful-mendel/p5-nextjs/src/app/blog/[slug]/page.tsx`
- `/sessions/zealous-hopeful-mendel/p5-nextjs/src/lib/wordpress.ts`

**Design System**:
- `/sessions/zealous-hopeful-mendel/p5-nextjs/src/styles/globals.css`

**Navigation**:
- `/sessions/zealous-hopeful-mendel/p5-nextjs/src/components/Header.tsx`
- `/sessions/zealous-hopeful-mendel/p5-nextjs/src/components/Footer.tsx`

**Interactive Components**:
- `/sessions/zealous-hopeful-mendel/p5-nextjs/src/components/FAQ.tsx`
- `/sessions/zealous-hopeful-mendel/p5-nextjs/src/components/FadeUp.tsx`

**Configuration**:
- `/sessions/zealous-hopeful-mendel/p5-nextjs/tsconfig.json`
- `/sessions/zealous-hopeful-mendel/p5-nextjs/next.config.js`
- `/sessions/zealous-hopeful-mendel/p5-nextjs/package.json`

## Quick Reference

All files are organized by type:
- **App Pages**: `src/app/`
- **Reusable Components**: `src/components/`
- **API Client**: `src/lib/`
- **Styling**: `src/styles/`
- **Config**: Root directory

Everything you need is in:
```
/sessions/zealous-hopeful-mendel/p5-nextjs/
```

Start with the README.md for setup instructions.
