import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import Article01 from '@/views/articles/Article-01.vue';
import Article02 from '@/views/articles/Article-02.vue';
import Article03 from '@/views/articles/Article-03.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
            children: [
                {
                    path: '/article-01',
                    component: Article01,
                },
                {
                    path: '/article-02',
                    component: Article02,
                },
                {
                    path: '/article-03',
                    component: Article03,
                },
            ],
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
