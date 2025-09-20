import { RouteRecordRaw } from 'vue-router'
import design from './1.0_design'
import engine from './2.0_engine'
import cli from './3.0_cli'
const routes: RouteRecordRaw[] = [
    {
        name: 'design',
        path: '/design',
        children: design,
        redirect:'/fd0f5a82-5b6b-45dd-a610-cb201b4389c8',
    },
    {
        name: 'engine',
        path: '/engine',
        children: engine,
        redirect:'/ef1b5339-e3c8-43a6-8e02-b35903e4afdd',
    },
    {
        name: 'cli',
        path: '/cli',
        children: cli,
        redirect:'/98111a8b-42d2-4da7-871b-7448f388a4cb',
    },
]
export default routes