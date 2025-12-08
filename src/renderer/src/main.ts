import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'
import ui from '@nuxt/ui/vue-plugin'

createApp(App).use(router).use(ui).mount('#app')
