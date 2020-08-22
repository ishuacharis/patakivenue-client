import { createWebHistory, createRouter } from 'vue-router';
const history = createWebHistory()

export const router  =  createRouter({
    history,
    routes: [
            { path: '/', 
            component: () => import('../components/index/Index.vue') 
        }
    ]
})
