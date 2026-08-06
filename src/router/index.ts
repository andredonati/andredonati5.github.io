import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'
import WorkView from '@/views/WorkView.vue'
import ExperienceView from '@/views/ExperienceView.vue'

const SITE_URL = 'https://adonati.com'

// meta.description here is the per-route source of truth for <meta name="description">,
// og:description, and twitter:description — see router.beforeEach below, which is the
// "at minimum" client-side fix for SEO finding A4 (no head-management library in this
// stack yet, so canonical/OG/Twitter tags were static and never changed per route).
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Andrea Donati — Software Engineer',
      description:
        'Andrea Donati is a software engineer who architects and ships production platforms, and brings that same discipline to small-business technical work.',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About — Andrea Donati',
      description:
        'Software engineer whose enterprise work at TBWA and Credera now extends to small-business technical work. Read Andrea Donati\'s story.',
    },
  },
  {
    path: '/work',
    name: 'work',
    component: WorkView,
    meta: {
      title: 'Work — Andrea Donati',
      description:
        'Full builds, technical audits and fixes, and ongoing technical partnership: engineering-grade work for small businesses, from Andrea Donati.',
    },
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView,
    meta: {
      title: 'Experience & Skills — Andrea Donati',
      description:
        "Andrea Donati's work history at TBWA and Credera, plus a skills breakdown across frontend, mobile, backend, and AI-agentic development.",
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact — Andrea Donati',
      description:
        'Get in touch with software engineer Andrea Donati about a project or a professional opportunity.',
    },
  },
  // Legacy path from the old "Services" page — keep working, redirect to /work.
  {
    path: '/services',
    redirect: { name: 'work' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content)
}

router.beforeEach((to, _from, next) => {
  const defaultTitle = 'Andrea Donati — Software Engineer'
  const title = (to.meta?.title as string) || defaultTitle
  const description = (to.meta?.description as string) || ''
  const url = `${SITE_URL}${to.path === '/' ? '/' : to.path}`

  document.title = title

  document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
  setMetaContent('meta[name="description"]', description)
  setMetaContent('meta[property="og:url"]', url)
  setMetaContent('meta[property="og:title"]', title)
  setMetaContent('meta[property="og:description"]', description)
  setMetaContent('meta[name="twitter:title"]', title)
  setMetaContent('meta[name="twitter:description"]', description)

  next()
})

export default router
