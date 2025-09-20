import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/db766789-7ebe-4af9-859c-e9ed85fd4f56',
    path:'/db766789-7ebe-4af9-859c-e9ed85fd4f56',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"engine"},
},
{
    name:'/17abc1a1-ea37-45e2-8d7a-b8ceb77c05d4',
    path:'/17abc1a1-ea37-45e2-8d7a-b8ceb77c05d4',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"engine"},
},
]

export default routes