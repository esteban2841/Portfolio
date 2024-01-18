import { createStore } from 'vuex'
import esDict from './common/i18n/es.json'
import engDict from './common/i18n/eng.json'
import ptDict from './common/i18n/pt.json'

const isMobile = window.innerWidth < 750
// Create a new store instance.
export const store = createStore({
    state () {
        return {
            locale: ["ES", "ENG", "PT"],
            lang:"ENG",
            mobile: isMobile,
            isNavOpen: isMobile ? false : true,
            desktopWidthForHome: window.innerWidth - 280 -20 + 'px',
            activeView: "home",
            dictionaries: {...esDict,...engDict,...ptDict},
            isLocaleListOpen: false,
        }
    },
    mutations: {
        SET_LOCALE_LANG (state, key) {
            state.lang = key
            state.isLocaleListOpen = !state.isLocaleListOpen
            
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
        async t$( {state}, keyToTranslate){
			console.log("TCL: keyToTranslate", keyToTranslate)
            const currentLanguage = state.lang
            const indexDictionary = state.locale.findIndex((lang)=>{
                return lang === currentLanguage  
            })
            const currentDictionaryKey = state.locale[indexDictionary].toLowerCase()
			const currentDictionary = state.dictionaries[currentDictionaryKey]
            const textTranslated = await currentDictionary[keyToTranslate.toLowerCase()]
			console.log("TCL: textTranslated", textTranslated)
            return textTranslated
        },
    },
    getters:{
        getLocale: (state) => {
            return state.locale
        }
    }
})