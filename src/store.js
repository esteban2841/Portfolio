import { createStore } from 'vuex'
import esDict from './common/i18n/es.json'
console.log("🚀 ~ file: store.js:3 ~ esDict:", esDict)
import engDict from './common/i18n/eng.json'
console.log("🚀 ~ file: store.js:5 ~ engDict:", engDict)
// Create a new store instance.
export const store = createStore({
    state () {
        return {
            locale: ["ES", "ENG"]
        }
    },
    mutations: {
        SET_LOCALE_LANG (state, key) {
            state.locale = key
            
        }
    },
    actions: {
        setLocale({commit}, localeName){
            console.log("🚀 ~ file: store.js:21 ~ setLocale ~ localeName:", localeName)
            commit('SET_LOCALE_LANG', localeName)
        }
    },
    getters:{
        getLocale: (state) => {
            console.log("🚀 ~ file: store.js:29 ~ state:", state)
            return state.locale
        }
    }
})