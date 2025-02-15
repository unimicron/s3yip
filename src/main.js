import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.css'  // 添加這行
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
