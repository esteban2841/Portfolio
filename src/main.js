import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NavItem from './components/NavItem.vue'
import { store } from './store'

const app = createApp(App)

app.use(router)
app.use(store)
console.log(store.state.locale, 'state')
app.component('NavItem', NavItem)
app.mount('#app')
