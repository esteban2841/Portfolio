import { createStore } from 'vuex'
import {i18n} from './main';

const isMobile = window.innerWidth < 750
// Create a new store instance.
console.log("TCL: state -> window.innerWidth - 280 -20 + 'px'", window.innerWidth - 280 -20 + 'px')
export const store = createStore({
    state () {
        return {
            locale: ["es", "en", "pt"],
            lang:"en",
            mobile: isMobile,
            isNavOpen: isMobile ? false : true,
            desktopWidthForHome: window.innerWidth - 300 + 'px',
            activeView: "home",
            isLocaleListOpen: false,
            isCvOpened: false,
            showMore: false,
            isAppThemeDark: true,
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
            state.isCvOpened = !state.isCvOpened
        },
        toggleShowMore({state}){
			console.log("TCL: toggleCvFile -> state", state)
            state.showMore = !state.showMore
			console.log("TCL: toggleCvFile -> state2", state)
        },
        toggleTheme({state}){
            console.log("TCL: toggleCvFile -> state", state)
            state.isAppThemeDark = !state.isAppThemeDark
            console.log("TCL: toggleCvFile -> state2", state)
            if(state.isAppThemeDark){
                document.documentElement.style.setProperty('--primary-bg-color', '#212121')
                document.documentElement.style.setProperty('--primary-font-color', '#fff')
                document.documentElement.style.setProperty('--transparent-bg-color', 'transparent')
                document.documentElement.style.setProperty('--secondary-bg-color',  '#3C4043')
                document.documentElement.style.setProperty('--terciary-bg-color',  'rgb(48, 48, 48)')
                document.documentElement.style.setProperty('--primary-border-color',  ' #6573C3')
                
            }else{
                document.documentElement.style.setProperty('--primary-bg-color', '#f5f5f5')
                document.documentElement.style.setProperty('--primary-font-color', '#6573C3')
                document.documentElement.style.setProperty('--transparent-bg-color', 'rgb(48, 48, 48)')
                document.documentElement.style.setProperty('--secondary-bg-color', '#212121')
                document.documentElement.style.setProperty('--terciary-bg-color',  '#fff')
                document.documentElement.style.setProperty('--primary-border-color',  'rgb(48, 48, 48)')

            }

        },
    },
    getters:{
        getLocale: (state) => {
            return state.locale
        }
    }
})