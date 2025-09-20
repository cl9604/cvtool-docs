import { RouteRecordRaw } from 'vue-router'
import design from './1.0_design'
import engine from './2.0_engine'
import cli from './3.0_cli'
const routes: RouteRecordRaw[] = [
    {
        name: 'design',
        path: '/design',
        children: design,
        redirect:'/4a11490d-2258-43b6-9470-222b10b62926',
    },
    {
        name: 'engine',
        path: '/engine',
        children: engine,
        redirect:'/d3099193-bc6d-427f-a6c2-874f84b527b7',
    },
    {
        name: 'cli',
        path: '/cli',
        children: cli,
        redirect:'/8c47c9db-b9de-4c65-a92d-71758423c0e1',
    },
]
export default routes