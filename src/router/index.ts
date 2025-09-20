import { createRouter, createWebHashHistory } from 'vue-router'
import Entry from '@/Entry.vue'
import AppNav from '@/AppNav.vue'
import output from '../output'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'entry',
            path: '/',
            component: Entry,
        },
        {
            name: 'nav',
            path: '/nav',
            component: AppNav,
            children: [
                ...output
            ]
        }
    ]
})

export default router