'use client'

import { useEffect, useRef, useState } from 'react'
import { Download, Loader2 } from 'lucide-react'

type BlogImageDownloadProps = {
  title: string
  images: string[]
}

function safeFileName(value: string) {
  return value.replace(/[<>:"/\\|?*\u0000-\u001f]/g, '-').replace(/[. ]+$/g, '').slice(0, 100) || 'article'
}

export default function BlogImageDownload({ title, images }: BlogImageDownloadProps) {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [completed, setCompleted] = useState(0)
  const activeDownload = useRef<AbortController | null>(null)

  useEffect(() => () => activeDownload.current?.abort(), [])

  if (images.length === 0) {
    return null
  }

  async function downloadImages() {
    if (activeDownload.current) return

    const controller = new AbortController()
    activeDownload.current = controller
    setState('loading')
    setCompleted(0)

    try {
      const { zipSync } = await import('fflate')
      const files: Record<string, Uint8Array> = {}

      for (let index = 0; index < images.length; index += 1) {
        const source = images[index]
        const timeout = window.setTimeout(() => controller.abort(), 30_000)
        try {
          const response = await fetch(source, { signal: controller.signal })
          if (!response.ok) throw new Error('Image download failed')

          const contentType = response.headers.get('content-type')?.split(';')[0].trim()
          if (!contentType?.startsWith('image/')) throw new Error('Invalid image response')

          const bytes = new Uint8Array(await response.arrayBuffer())
          if (bytes.length === 0) throw new Error('Empty image response')

          const originalName = decodeURIComponent(new URL(source, window.location.href).pathname.split('/').pop() || 'image')
          const name = `${String(index + 1).padStart(2, '0')}-${safeFileName(originalName)}`
          files[name] = bytes
          setCompleted(index + 1)
        } finally {
          window.clearTimeout(timeout)
        }
      }

      // PNG/JPEG/WebP are already compressed; store original bytes without recompressing.
      const archive = zipSync(files, { level: 0 })
      const url = URL.createObjectURL(new Blob([new Uint8Array(archive).buffer], { type: 'application/zip' }))
      const link = document.createElement('a')
      link.href = url
      link.download = `${safeFileName(title)}-图片.zip`
      document.body.appendChild(link)
      link.click()
      link.remove()
      // Give the browser time to consume the download before releasing the blob.
      window.setTimeout(() => URL.revokeObjectURL(url), 60_000)
      setState('success')
    } catch {
      setState('error')
    } finally {
      activeDownload.current = null
    }
  }

  const status = state === 'loading'
    ? `正在收集图片 ${completed}/${images.length}，请稍候…`
    : state === 'error'
      ? '图片下载失败，请检查网络后重试。'
      : state === 'success'
        ? '图片包已准备好，请查看浏览器下载列表。'
        : `共 ${images.length} 张正文配图，打包为 ZIP。`

  return (
    <div className='mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between'>
      <p className='text-sm text-muted-foreground' role='status' aria-live='polite' aria-atomic='true'>{status}</p>
      <button
        type='button'
        onClick={downloadImages}
        disabled={state === 'loading'}
        aria-busy={state === 'loading'}
        className='inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-purple-500/40 px-4 py-2.5 text-sm font-bold text-purple-700 transition-colors hover:bg-purple-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-wait disabled:opacity-60 dark:text-purple-300'
      >
        {state === 'loading' ? <Loader2 className='h-4 w-4 motion-safe:animate-spin' aria-hidden='true' /> : <Download className='h-4 w-4' aria-hidden='true' />}
        {state === 'loading' ? '正在打包…' : state === 'error' ? '重试下载图片' : '下载文章图片'}
      </button>
    </div>
  )
}
