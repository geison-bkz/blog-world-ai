import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import Article01 from '@/views/articles/Article-01.vue';
import Article02 from '@/views/articles/Article-02.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/article-01',
            name: 'article-01',
            component: Article01,
        },
        {
            path: '/article-02',
            name: 'article-02',
            component: Article02,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.path === '/') {
            return { top: 0, behavior: 'smooth' };
        } else if (to.path) {
            return { top: 700, behavior: 'smooth' };
        }
    },
});

export default router;
