<template>
    <nav class="navBar">
        <PhotoSection/>
        <SocialNetworks/>
        <BorderBook/>
    </nav>
</template>
<script setup lang="ts">
    import { RouterLink } from 'vue-router'
    import ConsoleIcon from './icons/ConsoleIcon.vue'
    import SocialNetworks from './SocialNetworks.vue';
    import PhotoSection from './PhotoSection.vue';
    import BorderBook from "./"
</script>
<style scoped>
.navBar {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 260px;
    background-color: #212121;
    height: 100vh;
    box-sizing: border-box;
}


</style>