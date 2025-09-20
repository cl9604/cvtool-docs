import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/e67f9442-3c09-411c-8af9-6ea678893705',
    path:'/e67f9442-3c09-411c-8af9-6ea678893705',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"engine"},
},
{
    name:'/dd53f971-1f2a-407c-bc60-5f5275680212',
    path:'/dd53f971-1f2a-407c-bc60-5f5275680212',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"engine"},
},
]

export default routes