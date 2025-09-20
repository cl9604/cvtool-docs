import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/98111a8b-42d2-4da7-871b-7448f388a4cb',
    path:'/98111a8b-42d2-4da7-871b-7448f388a4cb',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"cli"},
},
{
    name:'/e84f65a6-ce0a-484e-8c8d-6255ebd1cef9',
    path:'/e84f65a6-ce0a-484e-8c8d-6255ebd1cef9',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"cli"},
},
]

export default routes