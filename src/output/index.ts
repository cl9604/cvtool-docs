import { RouteRecordRaw } from 'vue-router'
import design from './1.0_design'
import engine from './2.0_engine'
import cli from './3.0_cli'
const routes: RouteRecordRaw[] = [
    {
        name: 'design',
        path: '/design',
        children: design,
        redirect:'/7e439059-6b68-4b7f-bc64-0426026a9dd5',
    },
    {
        name: 'engine',
        path: '/engine',
        children: engine,
        redirect:'/fb9c39b1-71d7-49d5-8c60-60394ba443d5',
    },
    {
        name: 'cli',
        path: '/cli',
        children: cli,
        redirect:'/964c5c95-3f79-4f8b-96a6-8e773ca8aac1',
    },
]
export default routes