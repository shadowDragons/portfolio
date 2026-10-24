import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import matter from 'gray-matter'

// Run against the dev server with: node --test tests/blog-routes.test.mjs
const baseUrl = process.env.BLOG_TEST_BASE_URL || 'http://localhost:3000'
const slugs = [
  'c-和-c-有什么区别-从血缘关系到六大差异-适用场景与学习路径',
  '什么是-markdown-用普通字符标记文档结构的一套写法',
  'what-is-c-language',
]

for (const slug of slugs) {
  test(`article and metadata resolve for ${slug}`, async () => {
    const source = await readFile(new URL(`../content/blog/${slug}.mdx`, import.meta.url), 'utf8')
    const { data } = matter(source)
    const response = await fetch(`${baseUrl}/blog/${encodeURIComponent(slug)}`)
    const html = await response.text()

    assert.equal(response.status, 200)
    assert.equal(html.includes('NEXT_NOT_FOUND'), false, 'An existing article must not trigger the 404 boundary')
    assert.ok(html.includes(`<title>${data.title}｜仁戈</title>`), 'Article metadata must resolve too')
    assert.match(html, /<article\b/, 'The article body must render')
  })
}

test('a missing article includes a recovery fallback within the document layout', async () => {
  const response = await fetch(`${baseUrl}/blog/portfolio-missing-post-regression`)
  const html = await response.text()

  // Streaming can commit a 200 before notFound() runs; both statuses are valid.
  assert.ok([200, 404].includes(response.status))
  assert.match(html, /<html\b/)
  assert.match(html, /<body\b/)
  assert.ok(html.includes('content="noindex"'), 'Missing articles must not be indexed')
  // The loading boundary sends the fallback in the React stream, not initial HTML.
  assert.ok(html.includes('返回首页'), 'The streamed 404 fallback must provide a way back')
})
