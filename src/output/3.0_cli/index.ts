import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/43852d55-fc96-4e9b-af94-f93fe6bfdc1b',
    path:'/43852d55-fc96-4e9b-af94-f93fe6bfdc1b',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"cli"},
},
{
    name:'/daa8c478-6f01-416f-8ef3-3c969f5c3d95',
    path:'/daa8c478-6f01-416f-8ef3-3c969f5c3d95',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"cli"},
},
]

export default routes