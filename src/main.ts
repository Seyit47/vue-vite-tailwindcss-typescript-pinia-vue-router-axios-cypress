import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import '@/assets/scss/style.scss'

const app = createApp(App)
const store = createPinia()
app.use(store)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.use(router)
app.mount('#app')
