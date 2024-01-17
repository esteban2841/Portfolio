<template>
    <div class="close-container">
        <span class="close-icon-container" v-show="mobile" @click="toggleNavBar">
            <XIcon class="close-icon" />
        </span>
    </div>
    <div class="photo-section">
        <div class="photo-mask">
            <div class="photo-container">
                <img :src="photo" alt="photo"/>
            </div>
            <div class="change-settings-container">
                <div class="theme-settings-container">
                        <SunIcon class="sun-icon"/>
                </div>
                <div class="locale-settings-container">
                    <span class="translate-icon">
                        <TranslateIcon class="translate"/>
                    </span>
                    <span class="lang">
                        <div @click="getLocale">
                        </div>
                        <ul class="lang-list" >
                            <li v-for="(localeName, index) in locale" :key="index">{{ localeName }}</li>
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
    import photo from '../assets/foto-mask-left.png'
    import {XIcon} from 'heroicons-vue3/solid'
    import {SunIcon} from 'heroicons-vue3/solid'
    import { TranslateIcon } from "heroicons-vue3/solid"
    import { mapState, mapActions, mapGetters } from 'vuex';
    export default {
        data (){
            return {
                photo,
                locale: this.locale
            }
        },
        computed:{
            ...mapState(['locale', 'mobile', 'isNavOpen']),
            ...mapGetters(['getLocale'])
        },
        methods:{
            ...mapActions(['setLocale', 'toggleNavBar'])
        },
        components: {
            XIcon,
            SunIcon,
            TranslateIcon
        },
        mounted () {
            const log = this.getLocale
            console.log("🚀 ~ file: PhotoSection.vue:64 ~ mounted ~ log:", log)
        }
    }
</script>
<style scoped>
    .close-container{
        display: flex;
        background-color: #212121;
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
        width: 100%;
    }
    .photo-container{
        width: 90px;
        height: 90px;
        img{
            height: 92px;
        }
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
        fill: white;
        width: 30px;
        height: 30px;
    }
    .locale-settings-container{
        width: 86px;
        height: 42px;
        background-color: #363636;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .lang-list{
        list-style-type: none;
        padding: 0px;
    }
</style>