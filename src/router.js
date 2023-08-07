import VueRouter from "vue-router";
import Index from "./components/Index";
import Aside from "./components/Aside";
import axios from 'axios';
import store from "./store/store.js";

const routes = [
    // 一级路由
    {
        path: '/index',
        name: 'index',
        component: Index,
        redirect: '/index/Main',
        // 路由嵌套
        children:[
            {path: '/index/Main', component: () => import('./components/Main.vue')}
        ]
    },
    {
        path: '/aside',
        name: 'aside',
        component: Aside
    }
];

const router = new VueRouter({
    mode:'history',
    routes
});

// 动态路由
let oRouters = router.options.routes;
const buildRouter = ()=>{
    let data = store.state.menu_data;
    data.forEach(item=>{
        let new_router = {
            path:item.path,
            component:() => import('./components/'+item.component+'.vue')
        }
        oRouters[0].children.push(new_router);
    })
    router.addRoutes(oRouters)
};

router.beforeEach((to, from, next)=>{
    // 判断路由是否已经加载过
    let isLoadRoute = store.state.isLoadRoute;
    if (!isLoadRoute){
        axios.get('/post/menuList').then(res=>{
            store.commit('setMenuData', res.data.menu_data);
            // 动态创建路由
            buildRouter();
            // 设置已经加载过的标记
            store.commit("setLoadRoute", true);
        });
    }
    next();
});

export default router;
