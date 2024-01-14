import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import Particles from "particles.vue3";

const app = createApp(App)

app.use(Particles)
app.use(router)
app.use(store)
app.mount('#app')
