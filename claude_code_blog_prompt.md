---

I need you to create a blog for Seedling Sports using Astro deployed to GitHub Pages. This is a youth sports development company — the blog will publish science-backed articles for parents of young athletes in soccer, basketball, and American football. The tone is authoritative but warm, the audience is anxious parents looking for trustworthy guidance.

## Requirements

### 1. Astro Project Setup
- Initialize a new Astro project with the blog starter template
- Use Astro's Content Collections for blog posts (Markdown files in `src/content/blog/`)
- TypeScript enabled
- No UI framework needed (pure Astro components, no React/Vue/Svelte)

### 2. Design & Branding
- Clean, minimal, professional design — not flashy, not generic
- Color palette: primary green (#2D6A4F — represents "seedling/growth"), white backgrounds, dark text (#1A1A1A), subtle warm gray accents (#F5F3F0)
- Font: use system font stack for performance (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`)
- Mobile-first responsive design
- No dark mode needed for v1

### 3. Pages & Layout
- **Homepage** (`/`): Hero section with tagline "Science-backed guidance for sports parents", brief description of what Seedling Sports is, list of latest 6 blog posts as cards with title, date, excerpt, and estimated reading time
- **Blog listing page** (`/blog`): All posts listed chronologically (newest first) with pagination (10 per page), each showing title, date, excerpt, reading time, and sport tag(s)
- **Individual blog post page** (`/blog/[slug]`): Clean reading experience — title, date, reading time, sport tags, author, body content with proper typography (max-width ~700px for readability), a call-to-action box at the bottom ("Seedling Sports gives you this kind of guidance — personalised to your child. Coming soon to the App Store." with an email signup placeholder)
- **About page** (`/about`): Placeholder content about Seedling Sports mission — "We help parents make confident, science-backed decisions about their child's athletic development"
- **Simple header**: Logo text "Seedling Sports" (no image logo needed) + nav links: Blog, About
- **Simple footer**: "© 2026 Seedling Sports" + link to About page

### 4. Blog Post Frontmatter Schema
Each markdown blog post should support this frontmatter:
```yaml
---
title: "Post Title Here"
description: "Short excerpt for SEO and listing pages"
pubDate: 2026-03-17
author: "Seedling Sports"
sports: ["soccer", "basketball", "football"]  # one or more tags
image: ""  # optional hero image path
draft: false
---
```

### 5. SEO
- Dynamic `<title>` and `<meta description>` on every page from frontmatter
- Open Graph tags (og:title, og:description, og:type, og:url) on blog posts
- Canonical URLs
- Sitemap generation (use @astrojs/sitemap)
- RSS feed for the blog (use @astrojs/rss)
- robots.txt allowing all crawlers
- Set the site URL to `https://seedlingsports.com` in astro.config

### 6. GitHub Pages Deployment
- Configure Astro for static output (`output: 'static'`)
- Add the `@astrojs/sitemap` integration
- Create a GitHub Actions workflow file (`.github/workflows/deploy.yml`) that:
  - Triggers on push to `main` branch
  - Builds the Astro site
  - Deploys to GitHub Pages
- Include instructions for setting up the custom domain `seedlingsports.com` in GitHub Pages (CNAME file in `public/`)

### 7. Sample Blog Post
Create one sample blog post to verify everything works:

**File:** `src/content/blog/car-ride-home-doing-more-damage.md`

```markdown
---
title: "The Car Ride Home Is Doing More Damage Than the Bad Game"
description: "What sports psychology research says you should — and shouldn't — say to your child after a tough match. The post-game conversation shapes your child's relationship with sport more than the game itself."
pubDate: 2026-03-17
author: "Seedling Sports"
sports: ["soccer", "basketball", "football"]
draft: false
---

*This is a placeholder post. Full content coming soon.*

Every sports parent has been there. Your child walks off the field after a tough loss, a bad performance, or barely any playing time — and you have a 15-minute car ride home together.

What you say in those 15 minutes matters more than you think.

## What the research says

According to studies in sports psychology, the post-game conversation between parent and child is one of the single most influential factors in whether a young athlete continues playing — or quits.

*Full article content will replace this placeholder.*
```

### 8. Project Structure
```
seedling-blog/
├── src/
│   ├── content/
│   │   ├── blog/
│   │   │   └── car-ride-home-doing-more-damage.md
│   │   └── config.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── rss.xml.ts
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro
│   │   ├── SportTag.astro
│   │   └── CTABox.astro
│   └── styles/
│       └── global.css
├── public/
│   ├── CNAME  (contains: seedlingsports.com)
│   ├── robots.txt
│   └── favicon.svg
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

### 9. What NOT to include
- No analytics (I'll add this later)
- No comment system
- No newsletter integration (just a placeholder email input in the CTA — not functional)
- No image optimization setup beyond Astro's built-in
- No complex animations or transitions
- No JavaScript-heavy interactivity

### 10. After Setup
Once the project is created and builds successfully:
1. Run `npm run build` to verify the static build works
2. Run `npm run dev` to verify local development server works
3. Show me the commands I need to:
   - Create a new GitHub repo
   - Push the code
   - Enable GitHub Pages
   - Configure my custom domain in Namecheap DNS settings to point to GitHub Pages

Keep it simple, keep it fast, keep it clean. This blog needs to look trustworthy to American parents — professional but not corporate, warm but not casual. The content is the star, the design just needs to stay out of the way.
