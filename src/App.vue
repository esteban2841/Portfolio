<script lang="ts">
  import { RouterView } from 'vue-router'
  import NavItem from './components/navBar/NavItem.vue';
  import { mapState, mapActions } from "vuex";
  import Home from './views/HomeView.vue';
  import About from './views/AboutView.vue';
  import {XIcon} from 'heroicons-vue3/solid'
  import PdfEmbed from 'vue-pdf-embed';
  export default {
    data() {
        return {
          pdfUrl: '../public/CV_ENGLISH.pdf'
        }
    },
    components:{
      NavItem,
      Home,
      About,
      PdfEmbed,
      XIcon
    },
    computed:{
      ...mapState(['isNavOpen','desktopWidthForHome', 'isCvOpened', 'mobile'])
    },
    methods: {
      ...mapActions(['toggleCvFile'])
    },
    mounted() {
      this.$store.commit('SET_REF', this.$refs);
    },
  }
</script>

<template>
  <header v-show="isNavOpen">
    <NavItem/>
  </header>
  <div class="right-section-container" v-show="!isCvOpened">
    <Home ref="home"/>
    <About ref="about"/>
    <!-- <ProjectsView/> -->
  </div>
  <transition name="slide-left" >
    <div class="right-section-container-pdf" v-if="isCvOpened" >
      <span class="close-icon-section-pdf"  @click="toggleCvFile">
        <XIcon class="close-icon-pdf" />
      </span>
      <pdf-embed :source="pdfUrl" ></pdf-embed>
    </div>
  
  </transition>

</template>

<style scoped>
header {
  padding: 0;
  margin: 0;
  width: 260px;
}

.right-section-container{
  left: 282px;
  position: absolute;
  border-radius: 10px;
  width: v-bind(desktopWidthForHome);
}
.right-section-container-pdf{
  left: 282px;
  position: relative;
  border-radius: 10px;
  height: 100vh;
  overflow:hidden;
  width: v-bind(desktopWidthForHome);
}
 
.close-icon-section-pdf{
  position: fixed;
  top: 0;
  right:16px;
  background-color: #fff;
  z-index: 10;
  width: 40px;
  height: 40px;
  border: solid 2px black;
  border-radius: 5px
}

.slide-left-enter-active, .slide-left-leave-active {
 transition: transform 0.5s linear;
}
.slide-left-enter-from, .slide-left-leave-to {
 transform: translateX(-100%);
}
.slide-left-enter-to, .slide-left-leave-from {
 transform: translateX(0);
}

.close-icon-pdf{
  position:absolute;
  fill: black;
  width: 40px;
  height: 40px;
  z-index: 10;
}

@media (max-width: 750px){
  header{
    width: 100%;
  }
}


</style>
