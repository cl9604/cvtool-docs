import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/fb9c39b1-71d7-49d5-8c60-60394ba443d5',
    path:'/fb9c39b1-71d7-49d5-8c60-60394ba443d5',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"engine"},
},
{
    name:'/cb63a63c-3390-4713-800e-cfa2a03a603e',
    path:'/cb63a63c-3390-4713-800e-cfa2a03a603e',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"engine"},
},
]

export default routes