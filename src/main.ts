import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import CvExample from './CvExample.vue'

createApp(App).component('CvExample', CvExample).use(router).mount('#app')