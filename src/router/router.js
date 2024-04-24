import { createRouter, createWebHistory } from 'vue-router'

import app from '../App.vue';
import Dashboard from '../pages/dashboard/Dashboard.vue';
import Todo from '../pages/todo/Todo.vue';
import Weather from '../pages/weather/Weather.vue';
import Profile from '../pages/profile/Profile.vue';


const routes = [
    { path: '/', component: app },
    { path: '/dashboard', component: Dashboard },
    { path: '/todo', component: Todo },
    { path: '/weather', component: Weather },
    { path: '/profile', component: Profile },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
