import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate);

const app = createApp(App)

app.use(router)
app.use(store)
app.use(pinia)

app.mount('#app')
