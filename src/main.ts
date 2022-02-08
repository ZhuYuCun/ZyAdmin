import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '../src/router/index'
import http from './utils/request'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)

app.config.globalProperties.$http = http

app.mount('#app')
