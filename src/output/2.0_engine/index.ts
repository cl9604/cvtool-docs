import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/fbc01a68-a8a7-484a-b369-624fac90793e',
    path:'/fbc01a68-a8a7-484a-b369-624fac90793e',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"engine"},
},
{
    name:'/4040943e-c0ba-4035-9195-fbaa8996e58c',
    path:'/4040943e-c0ba-4035-9195-fbaa8996e58c',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"engine"},
},
]

export default routes