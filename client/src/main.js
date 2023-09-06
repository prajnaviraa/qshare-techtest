import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(Toast)
app.use(pinia)
app.use(router)

app.mount('#app')
