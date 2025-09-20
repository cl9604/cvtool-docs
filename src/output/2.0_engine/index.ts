import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/d3099193-bc6d-427f-a6c2-874f84b527b7',
    path:'/d3099193-bc6d-427f-a6c2-874f84b527b7',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"engine"},
},
{
    name:'/bd21665b-83f5-4425-9b50-f4a7cb3bcd5b',
    path:'/bd21665b-83f5-4425-9b50-f4a7cb3bcd5b',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"engine"},
},
]

export default routes