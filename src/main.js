import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
console.log("TCL: store", store.state.lang)
import { createI18n } from 'vue-i18n';
import esDict from './common/i18n/es.json'
import enDict from './common/i18n/eng.json'
import ptDict from './common/i18n/pt.json'

const messages = {...esDict, ...enDict, ...ptDict}
console.log("TCL: messages", messages)

export const i18n = createI18n({
    legacy: false, 
    locale: store.state.lang, 
    messages
});
const app = createApp(App)


app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')
