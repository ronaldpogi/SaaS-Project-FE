import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Icon } from '@iconify/vue'
import DashboardLayout from './layout/DashboardLayout.vue'
import EmptyLayout from './layout/EmptyLayout.vue'

const app = createApp(App)

app.component('default-layout', DashboardLayout)
app.component('empty-layout', EmptyLayout)
app.component('Icon', Icon)

app.use(createPinia())
app.use(router)

app.mount('#app')
