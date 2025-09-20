import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/50a9626b-d3aa-43af-90e9-fd532d4bb42e',
    path:'/50a9626b-d3aa-43af-90e9-fd532d4bb42e',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"cli"},
},
{
    name:'/e5a824fb-fe27-4a5b-9dce-616f53b274a8',
    path:'/e5a824fb-fe27-4a5b-9dce-616f53b274a8',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"cli"},
},
]

export default routes