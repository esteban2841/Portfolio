import { createStore } from 'vuex'
import esDict from './common/i18n/es.json'
import engDict from './common/i18n/eng.json'
const isMobile = window.innerWidth < 750
// Create a new store instance.
export const store = createStore({
    state () {
        return {
            locale: ["ES", "ENG"],
            mobile: isMobile,
            isNavOpen: isMobile ? false : true,
            desktopWidthForHome: window.innerWidth - 280 -20 + 'px',
            activeView: "home",
        }
    },
    mutations: {
        SET_LOCALE_LANG (state, key) {
            state.locale = key
            
        },
        SET_REF(state, payload) {
            state.ref = payload;
        }
         
    },
    actions: {
        setLocale({commit}, localeName){
            commit('SET_LOCALE_LANG', localeName)
        },
        toggleNavBar ({state}) {
            state.isNavOpen = !state.isNavOpen
            console.log("🚀 ~ toggleNavBar ~ state:", state)
        },
        scrollToSection({ commit, state }, section) {
            state.ref[section].$el.scrollIntoView({ behavior: 'smooth' });
        },
    },
    getters:{
        getLocale: (state) => {
            return state.locale
        }
    }
})