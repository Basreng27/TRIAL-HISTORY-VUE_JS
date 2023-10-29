import './assets/css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { db } from './config/config'

const app = createApp(App)

app.config.globalProperties.$firebase = db;

app.use(router)

app.mount('#app')
