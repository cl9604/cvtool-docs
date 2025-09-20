import { RouteRecordRaw } from 'vue-router'
import design from './1.0_design'
import engine from './2.0_engine'
import cli from './3.0_cli'
const routes: RouteRecordRaw[] = [
    {
        name: 'design',
        path: '/design',
        children: design,
        redirect:'/4efd3a7b-9e74-4781-8a0e-06677c5c7ff4',
    },
    {
        name: 'engine',
        path: '/engine',
        children: engine,
        redirect:'/fbc01a68-a8a7-484a-b369-624fac90793e',
    },
    {
        name: 'cli',
        path: '/cli',
        children: cli,
        redirect:'/50a9626b-d3aa-43af-90e9-fd532d4bb42e',
    },
]
export default routes