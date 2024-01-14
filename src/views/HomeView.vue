<script  lang="ts">
  import { MenuIcon } from "heroicons-vue3/solid"
  import { mapActions, mapState } from 'vuex'
  import ParticlesImplemented from './../components/ParticlesImplemented.vue'
  export default {
        data() {
            return {
                
            }
        },
        methods: {
          ...mapActions(['toggleNavBar'])
        },
        computed:{
          ...mapState(['isNavOpen', 'mobile', 'desktopWidthForHome'])
        },
        components: {
          MenuIcon
        }
    }
</script>

<template>
  <section class="home-section" :style="{ width: desktopWidthForHome }" :class="[{ isNavOpen, mobile }, !isNavOpen && mobile && 'views-container navOpenedMobile' || isNavOpen && !mobile && 'views-container NavOpenedDesktop']">
    <MenuIcon class="menu-icon" @click="toggleNavBar" v-show="!isNavOpen&&!mobile"/>
    <ParticlesImplemented/>
  </section>
</template>
<style>
  .home-section{
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background-color: #212121;
    padding: 20px;
    left: 280px;
    position: absolute;
  }

  .menu-icon{
    width: 40px;
    fill: #fff;
  }

  .navOpenedMobile{
    top: 100vh;
    position: absolute;
    height: 100vh;
    background-color: #212121
  }
  .navOpenedDesktop{
    top: 0;
    height: 100vh;
    background-color: #212121
  }
</style>