import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/964c5c95-3f79-4f8b-96a6-8e773ca8aac1',
    path:'/964c5c95-3f79-4f8b-96a6-8e773ca8aac1',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"cli"},
},
{
    name:'/19573bf8-7334-47e9-829f-f70f99c19a5d',
    path:'/19573bf8-7334-47e9-829f-f70f99c19a5d',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"cli"},
},
]

export default routes