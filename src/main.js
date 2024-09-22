import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from './router'

const app = createSSRApp(App)
const router = createRouter()

app.use(router)

router.isReady().then(() => {
    app.mount('#app')
})
