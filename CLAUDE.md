# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the corporate website for Tailwinds Inc. (株式会社Tailwinds), a Japanese company providing application software planning, development, and sales services. The site is built as a static Next.js application deployed to Cloudflare Pages.

## Essential Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static site generation)
npm run build

# Lint the codebase
npm run lint
```

## Architecture & Structure

### Technology Stack
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Build**: Static export (`next export`)
- **Deployment**: Cloudflare Pages

### Key Configuration
- Static site generation enabled (`output: 'export'` in next.config.js)
- Image optimization disabled for Cloudflare Pages compatibility
- Trailing slashes enabled for proper routing
- TypeScript strict mode enabled
- Path alias `@/*` configured for imports

### Development Guidelines

#### Color Scheme
Primary blues: `#1677ff`, `#003eb3`, `#91caff`
Accent: `#0ea5e9`, `#38bdf8`

#### Company Information
- Name: 株式会社Tailwinds (Tailwinds Inc.)
- Address: 〒108-0023 東京都港区芝浦３丁目１７−１１天翔オフィス田町 203
- Phone: 03-6275-1750
- Email: info@tailwinds.co.jp
- Mission: "ビジネスに追い風を" (Bringing tailwinds to business)

#### Site Sections
1. Header with navigation (Service, Company Info, Contact)
2. Hero section with main visual and CTA
3. Service introduction (Planning, Development, Sales/Support)
4. Company information with map
5. Contact form
6. Footer

### Deployment Notes
- Build command: `npm run build`
- Output directory: `out`
- Environment variable: `NODE_VERSION=18`