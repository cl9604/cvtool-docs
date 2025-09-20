import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/aed21238-8186-488c-9faf-56b2ccf0f090',
    path:'/aed21238-8186-488c-9faf-56b2ccf0f090',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"cli"},
},
{
    name:'/dd11dd9a-45a7-4398-b6b2-efc83d3f7243',
    path:'/dd11dd9a-45a7-4398-b6b2-efc83d3f7243',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"cli"},
},
]

export default routes