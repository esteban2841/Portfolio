<script  lang="ts">
  import { MenuIcon, ChevronDoubleDownIcon } from "heroicons-vue3/solid"
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
      ...mapActions(['toggleNavBar']),
      getSelectedViewName (event) {
				console.log("TCL: getSelectedViewName -> event", event)
        const selectedView = event.target.classList[0]
				console.log("TCL: getSelectedViewName -> selectedView", selectedView)
				console.log("TCL: getSelectedViewName -> this.$store", this.$store, selectedView)
        this.$store.dispatch('scrollToSection', selectedView);
      }
    },
    computed:{
      ...mapState(['isNavOpen', 'mobile', 'desktopWidthForHome'])
    },
    components: {
      MenuIcon,
      ParticlesImplemented,
      ChevronDoubleDownIcon,
    },
    mounted() {
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
    <div class="title-container">
      <h1 class="first-line">Esteban</h1>
      <h1 class="second-line">Puentes</h1>
      <div class="professions-title">
        <p class="tirdh-line">Full stack developer</p>
        <p class="fourth-line"> also an Industrial Engineer</p>

      </div>
      <button class="about icon-container" @click="getSelectedViewName">
        <ChevronDoubleDownIcon class="about menu-icon" @click="getSelectedViewName"/>
      </button>
    </div>

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50%;
    line-height: 0px;
    left: 0;
    z-index: 2;
    color: #fff;
    font-family: 'Philosopher', sans-serif;
    h1{
      font-size: 60px;
      color: var(--primary-border-color);
    }
    p{
      font-family: 'Philosopher', sans-serif;
      font-style: italic;
      font-size: 20px;
    }
    .professions-title{
      display: flex;
      gap: 5px;
    }
  }
  
  .icon-container{
    background-color: var(--primary-bg-color);
    border: none;
    position: absolute;
    bottom: -150px;
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