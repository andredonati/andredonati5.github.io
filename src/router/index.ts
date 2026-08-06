import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'
import WorkView from '@/views/WorkView.vue'
import ExperienceView from '@/views/ExperienceView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Andrea Donati — Software Engineer' },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About — Andrea Donati' },
  },
  {
    path: '/work',
    name: 'work',
    component: WorkView,
    meta: { title: 'Work — Andrea Donati' },
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView,
    meta: { title: 'Experience & Skills — Andrea Donati' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Contact — Andrea Donati' },
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

router.beforeEach((to, _from, next) => {
  const defaultTitle = 'Andrea Donati — Software Engineer'
  document.title = (to.meta?.title as string) || defaultTitle
  next()
})

export default router
