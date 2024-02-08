import { createStore } from 'vuex'
import {i18n} from './main';
import { ref } from 'vue';
const isMobile = window.innerWidth < 750
// Create a new store instance.
const myElementRef = ref(null);

export const store = createStore({
    state () {
        return {
            locale: ["es", "en", "pt"],
            lang:"en",
            mobile: isMobile,
            isNavOpen: isMobile ? false : true,
            desktopWidthForHome: window.innerWidth - 300 + 'px',
            centerContainer: ((window.innerWidth / 2 ) /2) < 281 ? '281px' : ((window.innerWidth / 2 ) /2) + 'px',
            activeView: "home",
            isLocaleListOpen: false,
            isCvOpened: false,
            showMore: false,
            isAppThemeDark: true,
            currentView: "home"
        }
    },
    mutations: {
        SET_LOCALE_LANG (state, key) {
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
        toggleNavBar ({state, dispatch}) {
            state.isNavOpen = !state.isNavOpen
        },
        scrollToSection({ state, dispatch }, sectionHtml) {
            if( state.mobile ){
                sectionHtml.scrollIntoView({ behavior: 'smooth' });
                dispatch('scrollUpByViewportHeight')
            }else{
                
                
                sectionHtml.scrollIntoView({ behavior: 'smooth' });
            }
        },
        openLocaleList({state}){
            state.isLocaleListOpen = !state.isLocaleListOpen
        },
        toggleCvFile({state}){
            state.isCvOpened = !state.isCvOpened
        },
        toggleShowMore({state}){
            state.showMore = !state.showMore
        },
        scrollUpByViewportHeight() {
            if (myElementRef.value) {
              // Calculate the new scroll position
              const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
              const newScrollPosition = currentScrollPosition;
          
              // Scroll to the new position
              window.scrollTo({
                top: newScrollPosition,
                behavior: 'smooth' // Optional: Smooth scrolling effect
              });
            }
        },
        toggleTheme({state}){
            state.isAppThemeDark = !state.isAppThemeDark
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