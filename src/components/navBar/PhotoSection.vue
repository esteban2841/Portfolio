<template>
    <div class="close-container">
        <span class="close-icon-container" v-show="mobile" @click="toggleNavBar">
            <XIcon class="close-icon" />
        </span>
    </div>
    <div class="photo-section">
        <div class="photo-mask">
            <div class="photo-container">
                <img class="cv-photo" :src="photo" alt="photo"/>
            </div>
            <div class="change-settings-container">
                <div class="theme-settings-container" @click="changeColors">
                        <SunIcon class="sun-icon"/>
                </div>
                <div class="locale-settings-container">
                    <span class="translate-icon">
                        <TranslateIcon class="translate"/>
                    </span>
                    <span class="lang">
                        <div @click="openLocaleList">
                            {{ $t(lang) }}
                        </div>
                        <ul class="lang-list" v-show="isLocaleListOpen">
                            <li v-for="(localeName, index) in locale" :key="index" @click="changeLocale(localeName)">{{ $t(localeName) }}</li>
                        </ul>
                    </span>
                    <span class="down-arrow-container">
                        
                    </span>
                </div>
            </div>
        </div>
    </div>

</template>
<script lang="ts">
    import photo from '../../assets/foto-mask-left.png'
    import {XIcon} from 'heroicons-vue3/solid'
    import {SunIcon} from 'heroicons-vue3/solid'
    import { TranslateIcon } from "heroicons-vue3/solid"
    import { mapState, mapActions, mapGetters } from 'vuex';
    export default {
        data (){
            return {
                photo,
            }
        },
        computed:{
            ...mapState(['locale', 'mobile', 'isNavOpen', 'lang','isLocaleListOpen']),
            ...mapGetters(['getLocale'])
        },
        methods:{
            ...mapActions(['toggleNavBar', 'toggleTheme', 'openLocaleList', 'setLocaleLang']),
            changeLocale(locale) {
				console.log("TCL: changeLocale -> locale", locale)
                this.$i18n.locale = locale
                this.setLocaleLang(locale)
                this.openLocaleList()

            },
            changeColors(){
				this.toggleTheme()
            }
        },
        components: {
            XIcon,
            SunIcon,
            TranslateIcon
        },
        mounted () {
        }
    }
</script>
<style scoped>
    .close-container{
        display: flex;
        padding: 10px;
        width: 100%;
        height: 70px;
        justify-content: flex-end;
        box-sizing: border-box;
    }
    .close-icon-container{
        width: 40px;
        height: 40px;
        border: solid 1px white;
        display: flex;
        justify-content: center;
        align-items: center
    }
    .close-icon{
        fill: white;
        width: 35px;
        height: 35px;
    }
    
    .photo-section{
        display: flex;
        width: 100%;
        height: 170px;
        padding: 10px;
        box-sizing: border-box;
    }
    .photo-mask{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 50px;
        align-items: flex-end;
        width: 100%;
    }
    .photo-container{
        width: 90px;
        height: 90px;
    }
    
    .cv-photo{
        height: 92px;
        border-radius: 5px;

    }
    .change-settings-container{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        gap: 15px

    }
    .sun-icon{
        fill: yellow;
        width: 40px;
        height: 40px;
    }
    .theme-settings-container{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .theme-settings-container:hover{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #3C4043;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .translate{
        fill: var(--primary-font-color);
        width: 30px;
        height: 30px;
    }
    .locale-settings-container{
        width: 130px;
        height: 42px;
        background-color: transparent;
        border-radius: 5px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: var(--primary-font-color)
    }

    .locale-settings-container:hover{
        cursor: pointer;
        background-color: var(--secondary-bg-color);
    }

    .lang-list{
        list-style-type: none;
        padding: 5px 20px;
        gap: 5px;
        position: absolute;
        left: -20px;
        border-radius: 5px;
        background-color: var(--secondary-bg-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        z-index: 5;
    }
</style>