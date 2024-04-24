import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/dashboard/Dashboard.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '/todo',
            component: () => import('../pages/todo/Todo.vue')
        },
        {
            path: '/weather',
            component: () => import('../pages/weather/Weather.vue')
        },
        {
            path: '/profile',
            component: () => import('../pages/profile/Profile.vue')
        },
    ]
});

export default router;
