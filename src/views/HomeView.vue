<script  lang="ts">
  import { MenuIcon } from "heroicons-vue3/solid"
  import { mapActions, mapState } from 'vuex'
  import ParticlesImplemented from './../components/ParticlesImplemented.vue'
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
      MenuIcon
    },
    mounted() {
      console.log("🚀 ~ data ~ this.desktopWidthForHome:", this.desktopWidthForHome)
      
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
    height: 100%;
    width: 100%;
    background-color: #212121;
    padding: 20px;
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
    width: 100%;
    background-color: #212121
  }
  .NavClosedMobile{
    top: 0;
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: #212121
  }
  .navOpenedDesktop{
    top: 0;
    height: 100vh;
    left: 280px;
    background-color: #212121;
  }
  </style>