import { RouteRecordRaw } from 'vue-router'
import design from './1.0_design'
import engine from './2.0_engine'
import cli from './3.0_cli'
const routes: RouteRecordRaw[] = [
    {
        name: 'design',
        path: '/design',
        children: design,
        redirect:'/322e4687-0ba4-4725-aab3-d34283ef9a6b',
    },
    {
        name: 'engine',
        path: '/engine',
        children: engine,
        redirect:'/633d5015-adc6-4f15-b248-f4b4d0f0df41',
    },
    {
        name: 'cli',
        path: '/cli',
        children: cli,
        redirect:'/43852d55-fc96-4e9b-af94-f93fe6bfdc1b',
    },
]
export default routes