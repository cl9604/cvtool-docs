import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/633d5015-adc6-4f15-b248-f4b4d0f0df41',
    path:'/633d5015-adc6-4f15-b248-f4b4d0f0df41',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"engine"},
},
{
    name:'/e8dfeacd-e760-4cfe-ac72-0a9cc9c373bb',
    path:'/e8dfeacd-e760-4cfe-ac72-0a9cc9c373bb',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"engine"},
},
]

export default routes