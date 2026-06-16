import 'server-only'

import fs from 'node:fs'
import path from 'node:path'
import type { ReactNode } from 'react'
import { cache } from 'react'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const blogContentDir = path.join(process.cwd(), 'content/blog')

type BlogFrontmatter = {
  title?: string
  date?: string | Date
  excerpt?: string
  tag?: string
  readingTime?: string
  cover?: string
  keywords?: string[]
}

export type BlogPostSummary = {
  slug: string
  title: string
  date: string
  displayDate: string
  excerpt: string
  tag: string
  readingTime: string
  cover?: string
  keywords: string[]
}

export type BlogPost = BlogPostSummary & {
  content: ReactNode
}

function ensureBlogContentDir() {
  if (!fs.existsSync(blogContentDir)) {
    return []
  }

  return fs.readdirSync(blogContentDir).filter(fileName => fileName.endsWith('.mdx'))
}

function formatDisplayDate(date: string) {
  return date.replaceAll('-', '.')
}

function normalizeDateValue(value: BlogFrontmatter['date']) {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10)
  }

  return String(value ?? '')
}

function normalizeFrontmatter(slug: string, data: BlogFrontmatter): BlogPostSummary {
  const normalizedDate = normalizeDateValue(data.date)

  if (!data.title || !normalizedDate || !data.excerpt || !data.tag || !data.readingTime) {
    throw new Error(`博客文章 ${slug}.mdx 缺少必要 frontmatter 字段`)
  }

  return {
    slug,
    title: data.title,
    date: normalizedDate,
    displayDate: formatDisplayDate(normalizedDate),
    excerpt: data.excerpt,
    tag: data.tag,
    readingTime: data.readingTime,
    cover: data.cover,
    keywords: Array.isArray(data.keywords) ? data.keywords.map(item => String(item)) : [],
  }
}

function compareBlogPosts(a: BlogPostSummary, b: BlogPostSummary) {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
}

export const getAllBlogPosts = cache((): BlogPostSummary[] => {
  return ensureBlogContentDir()
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const source = fs.readFileSync(path.join(blogContentDir, fileName), 'utf8')
      const { data } = matter(source)

      return normalizeFrontmatter(slug, data)
    })
    .sort(compareBlogPosts)
})

export const getLatestBlogPosts = cache((limit: number) => getAllBlogPosts().slice(0, limit))

export const getBlogSlugs = cache(() => getAllBlogPosts().map(post => post.slug))

export const getBlogSummaryBySlug = cache((slug: string) => getAllBlogPosts().find(post => post.slug === slug))

export const getBlogPostBySlug = cache(async (slug: string): Promise<BlogPost | undefined> => {
  const filePath = path.join(blogContentDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return undefined
  }

  const source = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(source)
  const summary = normalizeFrontmatter(slug, data)
  const compiled = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'append',
              properties: {
                className: ['heading-anchor'],
                ariaLabel: '标题锚点',
              },
            },
          ],
        ],
      },
    },
  })

  return {
    ...summary,
    content: compiled.content,
  }
})
