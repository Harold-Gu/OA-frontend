import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import en from 'element-plus/es/locale/lang/en'
import axios from 'axios' 

import App from './App.vue'
import router from './router'


axios.defaults.baseURL = import.meta.env.VITE_BASE_API || 'https://oa-backend-j4mi.onrender.com/api'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(ElementPlus, {
  locale: en,
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.mount('#app')