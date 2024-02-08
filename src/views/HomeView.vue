<script  lang="ts">
  import { MenuIcon, ChevronDoubleDownIcon } from "heroicons-vue3/solid"
  import { mapActions, mapState } from 'vuex'
  import ParticlesImplemented from './../components/home/ParticlesImplemented.vue'
  import Particles from "@tsparticles/vue3";
  import { loadFull } from "tsparticles";
  import { createApp } from 'vue'

  const ParticlesChunk = createApp(ParticlesImplemented)
  const texts = [
    'profession_text_first_line',
    'profession_text_snd_line'
  ]
  export default {
    data() {
      return {
        text1:'',
        text2: '',
        styleObject: {
          width: this.desktopWidthForHome,
        }
      }
    },
    methods: {
      ...mapActions(['toggleNavBar',]),
      getSelectedViewName (event) {
        const selectedView = event.currentTarget.classList[0]
        const htmlElement = this.$store.state.ref[selectedView].$el
				console.log("TCL: getSelectedViewName -> selectedView", selectedView)
				console.log("TCL: getSelectedViewName -> htmlElement", htmlElement)
        this.$store.dispatch('scrollToSection', htmlElement);
      },
      typeWrittingEffect (){
        let text = this.$t(texts[0]);
        
				console.log("TCL: typeWrittingEffect -> text", text)
        let index = 0;
        const typeInterval = setInterval(()=>{
          if(index < text.length){
            this.text1 += text.charAt(index)
            index++
          }else{
            clearInterval(typeInterval)
          }
        }, 100)
      },
      typeWrittingEffect2 (){
        let text = this.$t(texts[1]);
        let index = 0;
        const typeInterval = setInterval(()=>{
          if(index < text.length){
            this.text2 += text.charAt(index);
            index++
          }else{
            clearInterval(typeInterval)
          }
        }, 100)
      },
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
      this.typeWrittingEffect()
      this.typeWrittingEffect2()
    },
  }
</script>

<template>
  <section class="home-section">
    <MenuIcon class="menu-icon" @click="toggleNavBar" v-show="!isNavOpen&&mobile"/>
    <div class="title-container">
      <h1 class="first-line">Esteban</h1>
      <h1 class="second-line">Puentes</h1>
      <div class="professions-title" >
        <p class="tirdh-line">{{ $t('profession_text_first_line') }}</p>
        <p class="tirdh-line">{{ text2 }}</p>
        <v-icon name="" />
      </div>
      <button class="about icon-container-menu" @click.prevent="getSelectedViewName">
        <ChevronDoubleDownIcon class="about menu-icon-doublearrow"/>
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
    background-color: var(--transparent-bg-color) !important;
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
    .professions-title{
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
  
  .first-line, .second-line{
    font-size: 60px;
    color: var(--third-font-color);
    
  }
  .tirdh-line, .fourth-line{
    font-family: 'Philosopher', sans-serif;
    font-style: italic;
    font-size: 20px;
    
    
  }

  .icon-container-menu{
    background-color: var(--primary-bg-color);
    border: none;
    position: relative;
    bottom: -150px;
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
  }

  .icon-container-menu:hover{
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-icon-doublearrow{
    width: 40px;
    fill: var(--primary-font-color) !important;
    z-index: 5;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
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