<script  lang="ts">
  import { MenuIcon } from "heroicons-vue3/solid"
  import { mapActions, mapState } from 'vuex'
  import ParticlesImplemented from './../components/home/ParticlesImplemented.vue'
  import Particles from "@tsparticles/vue3";
  import { loadFull } from "tsparticles";
  import { createApp } from 'vue'

  const ParticlesChunk = createApp(ParticlesImplemented)

  export default {
    data() {
      return {
        styleObject: {
          width: this.desktopWidthForHome,
        }
      }
    },
    methods: {
      ...mapActions(['toggleNavBar'])
    },
    computed:{
      ...mapState(['isNavOpen', 'mobile', 'desktopWidthForHome'])
    },
    components: {
      MenuIcon,
      ParticlesImplemented
    },
    mounted() {
      console.log("🚀 ~ data ~ this.desktopWidthForHome:", this.desktopWidthForHome)
      ParticlesChunk.use(Particles, {
            init: async engine => {
            await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
            // await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
        },
      })
      ParticlesChunk.mount('#tsparticles')
    },
  }
</script>

<template>
  <section class="home-section" :class="[{ isNavOpen, mobile }, isNavOpen && mobile && 'views-container navOpenedMobile' 
  || isNavOpen && !mobile && 'views-container NavOpenedDesktop'
  || !isNavOpen && mobile && 'views-container NavClosedMobile'
  ]">
    <MenuIcon class="menu-icon" @click="toggleNavBar" v-show="!isNavOpen"/>
    <ParticlesImplemented/>
  </section>
</template>
<style>
  .home-section{
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    padding: 20px;
    position: relative;
  }
  
  
  .navOpenedMobile{
    top: 100vh;
    position: relative;
    height: 100vh;
    width: 100%;
  }
  .NavClosedMobile{
    top: 0;
    position: relative;
    height: 100vh;
    width: 100%;
  }
  .navOpenedDesktop{
    top: 0;
    height: 100vh;
    left: 280px;
  }
  .menu-icon{
    width: 40px;
    fill: #fff !important;
    z-index: 5;
    position: relative;
  }
  </style>