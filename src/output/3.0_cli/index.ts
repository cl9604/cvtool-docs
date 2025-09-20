import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
{
    name:'/8c47c9db-b9de-4c65-a92d-71758423c0e1',
    path:'/8c47c9db-b9de-4c65-a92d-71758423c0e1',
    component: ()=>import('./简介.vue'),
    meta:{"name":"简介","package":"cli"},
},
{
    name:'/8f23b434-eccb-403d-a66a-73f9e69b1fd3',
    path:'/8f23b434-eccb-403d-a66a-73f9e69b1fd3',
    component: ()=>import('./快速上手.vue'),
    meta:{"name":"快速上手","package":"cli"},
},
]

export default routes