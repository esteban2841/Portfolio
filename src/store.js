import { createStore } from 'vuex'
import {i18n} from './main';

const isMobile = window.innerWidth < 750
// Create a new store instance.
export const store = createStore({
    state () {
        return {
            locale: ["es", "en", "pt"],
            lang:"en",
            mobile: isMobile,
            isNavOpen: isMobile ? false : true,
            desktopWidthForHome: window.innerWidth - 280 -20 + 'px',
            activeView: "home",
            isLocaleListOpen: false,
            isCvOpened: false,
        }
    },
    mutations: {
        SET_LOCALE_LANG (state, key) {
			console.log("TCL: SET_LOCALE_LANG -> key", key)
            state.lang = key
        },
        SET_REF(state, payload) {
            state.ref = payload;
        }
         
    },
    actions: {
        setLocaleLang({commit}, localeName){
            commit('SET_LOCALE_LANG', localeName)
        },
        toggleNavBar ({state}) {
            state.isNavOpen = !state.isNavOpen
        },
        scrollToSection({ commit, state }, section) {
            state.ref[section].$el.scrollIntoView({ behavior: 'smooth' });
        },
        openLocaleList({state}){
            state.isLocaleListOpen = !state.isLocaleListOpen
        },
        toggleCvFile({state}){
			console.log("TCL: toggleCvFile -> state", state)
            state.isCvOpened = !state.isCvOpened
			console.log("TCL: toggleCvFile -> state2", state)
        }
    },
    getters:{
        getLocale: (state) => {
            return state.locale
        }
    }
})