import { RouteRecordRaw } from 'vue-router'
import design from './1.0_design'
import engine from './2.0_engine'
import cli from './3.0_cli'
const routes: RouteRecordRaw[] = [
    {
        name: 'design',
        path: '/design',
        children: design,
        redirect:'/8839a097-424a-4542-b036-ca999268f93a',
    },
    {
        name: 'engine',
        path: '/engine',
        children: engine,
        redirect:'/db766789-7ebe-4af9-859c-e9ed85fd4f56',
    },
    {
        name: 'cli',
        path: '/cli',
        children: cli,
        redirect:'/1a3febdb-c282-4969-a9d8-eafea8f9ce11',
    },
]
export default routes