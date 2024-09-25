<template>
    <nav class="navBar" v-show="isNavOpen">
        <div class="left-side">
            <PhotoSection/>
            <SectionTags/>
            <SocialNetworks/>
        
        </div>
        <div class="right-side" v-show="isNavOpen">
            <BorderBook/>
        </div>
        
    </nav>
</template>
<script lang="ts">
    import SocialNetworks from './SocialNetworks.vue';
    import PhotoSection from './PhotoSection.vue';
    import BorderBook from "./BorderBook.vue"
    import { mapActions, mapState } from 'vuex'
    import SectionTags from './SectionTags.vue';
    export default {
        data() {
            return {
                
            }
        },
        computed:{
            ...mapState(['mobile', 'isNavOpen'])
        },
        methods:{
            ...mapActions(['toggleNavBar'])
        },
        components:{
            SocialNetworks,
            PhotoSection,
            BorderBook,
            SectionTags
        }
    }
</script>
<style scoped>
    .navBar {
        display: flex;
        flex-direction: row;
        position: fixed;
        height: 100vh;
        width: 300px;
        background-color: var(--primary-bg-color);
        height: 100%;
        box-sizing: border-box;
        z-index: 11;
        opacity: 1;
        top: 0;
    }
    .left-side {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        gap:10px;
    }

    @media (max-width: 750px){
        .navBar{
            width:100%;
            position: fixed;
            height: 100vh;
        }
    }

</style>