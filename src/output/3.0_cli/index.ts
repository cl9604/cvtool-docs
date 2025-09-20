import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/1a3febdb-c282-4969-a9d8-eafea8f9ce11',
    path:'/1a3febdb-c282-4969-a9d8-eafea8f9ce11',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"cli"},
},
{
    name:'/7b03db11-f701-412c-b0d7-b1ae9ec69147',
    path:'/7b03db11-f701-412c-b0d7-b1ae9ec69147',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"cli"},
},
]

export default routes