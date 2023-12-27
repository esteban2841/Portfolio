import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NavItem from './components/NavItem.vue'


const app = createApp(App)

app.use(router)

app.component('NavItem', NavItem)

app.mount('#app')
