import { createWebHistory, createRouter } from 'vue-router';
const history = createWebHistory()

export const router  =  createRouter({
    history,
    routes: [
        { path: '/', 
            component: () => import('../components/index/Index.vue') 
        },
        {
            path: '/register',
            component: () => import('../components/register/Register.vue')
        },
        {
            path: '/login',
            component: () => import('../components/login/Login.vue')
        },
        {
            path: '/space',
            component: () => import('../components/space/Space.vue')
        },
        {
            path: '/:catchAll(.*)',
            component: () => import('../components/notFound/NotFound.vue')
        },
    ]
})
