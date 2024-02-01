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
      ...mapActions(['toggleNavBar',]),
      getSelectedViewName (event) {
        const selectedView = event.currentTarget.classList[0]
        this.$store.dispatch('scrollToSection', selectedView);
      }
    },
    computed:{
      ...mapState(['isAppThemeDark','isNavOpen', 'mobile', 'desktopWidthForHome'])
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
  <section class="home-section">
    <MenuIcon class="menu-icon" @click="toggleNavBar" v-show="!isNavOpen&&mobile"/>
    <div class="title-container">
      <h1 class="first-line">Esteban</h1>
      <h1 class="second-line">Puentes</h1>
      <div class="professions-title">
        <p class="tirdh-line">{{ $t('profession_text_first_line') }}</p>
        <p class="fourth-line">{{$t('profession_text_snd_line')}}</p>

      </div>
      <button class="about icon-container" @click.prevent="getSelectedViewName">
        <ChevronDoubleDownIcon class="about menu-icon"/>
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
    background-color: var(--primary-bg-color) !important;
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
    color: var(--primary-font-color);
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
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
  }

  .icon-container:hover{
    background-color: var(--secondary-bg-color);
    border: none;
    cursor: pointer;
  }

  .menu-icon{
    width: 40px;
    fill: var(--primary-font-color) !important;
    z-index: 5;
    position: absolute;
    top: 5px;
    left: 5px;
  }

  
@media (max-width: 750px){
  .home-section{
    height: 100vh;
    width: 100%;
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .professions-title{
    display:flex;
    flex-direction: column;
  }
}
  </style>