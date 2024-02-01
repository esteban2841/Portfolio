<template>
    <nav class="navBar" v-show="isNavOpen">
        <PhotoSection/>
        <SectionTags/>
        <SocialNetworks/>
        <BorderBook/>
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
        flex-direction: column;
        position: fixed;
        width: 260px;
        background-color: var(--primary-bg-color);
        height: 100%;
        box-sizing: border-box;
        z-index: 11;
        opacity: 1;
    }

    @media (max-width: 750px){
        .navBar{
            width:100%;
            position: relative;
            height: 100vh;
        }
    }

</style>