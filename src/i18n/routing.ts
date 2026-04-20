import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { appLocales, defaultAppLocale } from '@/lib/site-config'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: appLocales,

  // Used when no locale matches
  defaultLocale: defaultAppLocale,

  // Avoid redirecting the default locale to a prefixed route for better SEO
  localePrefix: 'as-needed',
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
