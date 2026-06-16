import { contentTimestamps, getLocalizedUrl } from '@/lib/site-config'
import { getAllBlogPosts } from '@/lib/blog'
import { getAllProjects } from '@/lib/portfolio-content'

const staticEntries = [
  { pathname: '', priority: 1, lastModified: contentTimestamps.home },
  { pathname: '/projects', priority: 0.92, lastModified: contentTimestamps.projectsHub },
  { pathname: '/blog', priority: 0.78, lastModified: contentTimestamps.blogHub },
] as const

const entries = [
  ...staticEntries,
  ...getAllProjects().map(project => ({
    pathname: `/projects/${project.slug ?? project.key}`,
    priority: 0.82,
    lastModified: contentTimestamps.projectsHub,
  })),
  ...getAllBlogPosts().map(post => ({
    pathname: `/blog/${post.slug}`,
    priority: 0.72,
    lastModified: post.date,
  })),
]

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function formatLastModified(value: string) {
  return new Date(value).toISOString()
}

function buildSitemapXml() {
  const body = entries
    .map(entry => {
      const loc = getLocalizedUrl('zh', entry.pathname)

      return [
        '<url>',
        `<loc>${escapeXml(loc)}</loc>`,
        `<lastmod>${formatLastModified(entry.lastModified)}</lastmod>`,
        '<changefreq>weekly</changefreq>',
        `<priority>${entry.priority}</priority>`,
        '</url>',
      ].join('')
    })
    .join('')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    body,
    '</urlset>',
  ].join('')
}

export const dynamic = 'force-static'
export const revalidate = 86400

export function GET() {
  return new Response(buildSitemapXml(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
      'X-Robots-Tag': 'noindex',
    },
  })
}
