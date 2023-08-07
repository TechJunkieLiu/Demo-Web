import VueRouter from "vue-router"
import Index from "./components/Index";
const routes = [
    // 一级路由
    {
        path: '/index',
        name: 'index',
        component: Index,
        redirect: '/index/Main',
        // 路由嵌套
        children:[
            {path: '/index/Main', component: () => import('./components/Main.vue')},
            {path: '/index/menu1', component: () => import('./components/Main1.vue')},
            {path: '/index/menu2', component: () => import('./components/Main2.vue')},
            {path: '/index/menu3', component: () => import('./components/Main3.vue')}
        ]
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export  default router;
