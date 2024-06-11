import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '@/views/LogIn'
import WelcomeHome from '@/views/WelcomeHome.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'WelcomeHome',
        component: WelcomeHome
    },
    {
        path: '/log-in',
        name: 'LogIn',
        component: LogIn
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;