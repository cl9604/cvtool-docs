import { RouteRecordRaw } from 'vue-router'
import design from './1.0_design'
import engine from './2.0_engine'
import cli from './3.0_cli'
const routes: RouteRecordRaw[] = [
    {
        name: 'design',
        path: '/design',
        children: design,
        redirect:'/45ba0225-82c3-413e-a5e7-a1f006d18ba6',
    },
    {
        name: 'engine',
        path: '/engine',
        children: engine,
        redirect:'/e67f9442-3c09-411c-8af9-6ea678893705',
    },
    {
        name: 'cli',
        path: '/cli',
        children: cli,
        redirect:'/aed21238-8186-488c-9faf-56b2ccf0f090',
    },
]
export default routes