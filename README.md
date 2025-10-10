# Saturne Lab Website

A modern, responsive, multilingual website for Saturne Lab - a data science consultancy based in the Democratic Republic of Congo. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Multilingual Support**: Full French/English localization with i18n
- **Modern Design**: Clean, professional UI optimized for data analytics branding
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Blog System**: MDX-powered blog with dynamic routing and search functionality
- **Contact Form**: Serverless contact form with validation and API integration
- **SEO Optimized**: Comprehensive SEO with structured data, canonical URLs, and hreflang tags
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS with custom brand colors
- **Analytics Ready**: Google Analytics 4 integration
- **Performance**: Image optimization, lazy loading, and code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Content**: MDX for blog posts and rich content
- **Icons**: Lucide React icons
- **i18n**: next-i18next for multilingual support
- **Analytics**: Google Analytics 4
- **Deployment**: Optimized for Vercel

## 📁 Project Structure

```
saturnelab/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── ThemeProvider.tsx
├── content/            # MDX content
│   └── posts/         # Blog posts
├── lib/               # Utility functions
│   └── blog.ts        # Blog post utilities
├── pages/             # Next.js pages
│   ├── api/           # API routes
│   ├── blog/          # Blog pages
│   ├── _app.tsx       # App wrapper
│   ├── _document.tsx  # HTML document
│   ├── index.tsx      # Homepage
│   ├── about.tsx      # About page
│   ├── services.tsx   # Services page
│   └── contact.tsx    # Contact page
├── public/            # Static assets
└── styles/            # Global styles
```

## 🎨 Brand Colors

The website uses a custom color palette reflecting Saturne Lab's brand:

- **Primary**: Blue tones (#1e40af to #3b82f6)
- **Secondary**: Purple tones (#7c3aed to #a855f7)
- **Accent**: Emerald tones (#059669 to #10b981)

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saturnelab
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   SENDGRID_API_KEY=your-sendgrid-api-key (optional)
   ```
   
   See `.env.example` for reference.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in `content/posts/`
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Your Post Title"
   description: "Brief description"
   date: "2024-01-15"
   author: "Author Name"
   category: "Category"
   tags: ["tag1", "tag2"]
   readTime: "5 min read"
   ---
   ```
3. Write your content using Markdown/MDX syntax

### Customizing Pages

- **Homepage**: Edit `pages/index.tsx`
- **About**: Edit `pages/about.tsx`
- **Services**: Edit `pages/services.tsx`
- **Contact**: Edit `pages/contact.tsx`

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting (recommended)
- Tailwind CSS for styling

## 📧 Contact Form Setup

The contact form uses a serverless API route (`/api/contact`). To enable email sending:

1. **Using SendGrid** (recommended):
   ```bash
   npm install @sendgrid/mail
   ```
   Add your SendGrid API key to `.env.local`

2. **Using other providers**:
   Modify `pages/api/contact.ts` to use your preferred email service

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Export static files** (if using static export)
   ```bash
   npm run export
   ```

3. **Deploy** the `out` folder to your hosting provider

## 🔍 SEO Features

### Comprehensive SEO Implementation

- ✅ **Meta Tags**: Dynamic, locale-aware meta tags for all pages
- ✅ **Open Graph**: Full OG tags for Facebook, Twitter, WhatsApp sharing
- ✅ **Structured Data**: JSON-LD schema for Organization, Services, Articles, Website
- ✅ **Canonical URLs**: Proper canonical tags to prevent duplicate content
- ✅ **Hreflang Tags**: Multilingual SEO with fr/en language tags
- ✅ **Sitemap**: XML sitemap with multilingual support at `/sitemap.xml`
- ✅ **Robots.txt**: Search engine crawling instructions at `/robots.txt`
- ✅ **Image Optimization**: Next.js Image component with WebP/AVIF support
- ✅ **Performance**: DNS prefetch, preconnect, and compression enabled
- ✅ **Analytics**: Google Analytics 4 integration ready
- ✅ **Geo-targeting**: DRC-specific meta tags for local search

### SEO Quick Start

1. **Set up Google Search Console** (CRITICAL - Do this first!)
   - Visit: https://search.google.com/search-console
   - Add property: https://www.saturne-lab.com
   - Submit sitemap: https://www.saturne-lab.com/sitemap.xml

2. **Configure Google Analytics**
   - Create GA4 property
   - Add measurement ID to `.env.local`:
     ```env
     NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
     ```

3. **Create Google Business Profile**
   - Essential for local DRC visibility
   - Add business details, photos, and services

📖 **For detailed SEO instructions, see:**
- `SEO_QUICK_START.md` - Immediate action items
- `SEO_IMPLEMENTATION_GUIDE.md` - Comprehensive guide

## 🎯 Performance

- Static site generation (SSG) for blog posts
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minimal bundle size with tree shaking

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized typography scaling

## 🌐 Internationalization (i18n)

- **Languages**: French (default) and English
- **URL Structure**: `/fr/` and `/en/` prefixes
- **Middleware-based routing**: Custom Next.js 15 middleware
- **Translation files**: Located in `/public/locales/`
- **Client-side locale handling**: Robust hook for navigation
- **SEO-friendly**: Hreflang tags and locale-specific sitemaps

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Saturne Lab. All rights reserved.

## 📞 Support

For technical support or questions about the website:

- **Email**: contact@saturnelab.com
- **Phone**: +243 XXX XXX XXX
- **Location**: Kinshasa, DRC

---

**Saturne Lab** - Transforming organizations through data science in the Democratic Republic of Congo.
