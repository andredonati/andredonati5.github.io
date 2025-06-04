import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import AboutView from '@/views/AboutView.vue';
import ServicesView from '@/views/ServicesView.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { title: 'Home – Donati Designs' },
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: { title: 'About – Donati Designs' },
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
        meta: { title: 'Contact – Donati Designs' },
    },
    {
        path: '/services',
        name: 'services',
        component: ServicesView,
        meta: { title: 'Services – Donati Designs' },
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
// Ensure proper type for `meta.title`
router.beforeEach((to, from, next) => {
    const defaultTitle = 'Donati Designs';
    document.title = to.meta?.title || defaultTitle;
    next();
});
export default router;
