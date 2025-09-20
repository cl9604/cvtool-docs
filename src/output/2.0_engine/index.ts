import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/ef1b5339-e3c8-43a6-8e02-b35903e4afdd',
    path:'/ef1b5339-e3c8-43a6-8e02-b35903e4afdd',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"engine"},
},
{
    name:'/dd5c537f-59f4-47a0-9649-770261e81edd',
    path:'/dd5c537f-59f4-47a0-9649-770261e81edd',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"engine"},
},
]

export default routes