<script lang="ts">
  import { RouterView } from 'vue-router'
  import NavItem from './components/navBar/NavItem.vue';
  import { mapState, mapActions } from "vuex";
  import Home from './views/HomeView.vue';
  import About from './views/AboutView.vue';
  import {XIcon} from 'heroicons-vue3/solid'
  import PdfEmbed from 'vue-pdf-embed';
  import SkillsView from './views/SkillsView.vue';
  import ProjectsView from './views/ProjectsView.vue';
  import ContactView from './views/ContactView.vue';
  export default {
    data() {
      return {
        pdfUrl: '../CV_ENGLISH.pdf'
        }
      },
    components:{
      NavItem,
      Home,
      About,
      PdfEmbed,
      SkillsView,
      ProjectsView,
      ContactView,
      XIcon
    },
    computed:{
      ...mapState(['isNavOpen','desktopWidthForHome', 'isCvOpened', 'mobile', 'centerContainer'])
    },
    methods: {
      ...mapActions(['toggleCvFile'])
    },
    mounted() {
      this.$store.commit('SET_REF', this.$refs);
      console.log("TCL: PdfEmbed", PdfEmbed)
			console.log("TCL: mounted -> this.pdfUrl", this.pdfUrl)
    },
  }
</script>

<template>
  <header v-show="isNavOpen">
    <NavItem/>
  </header>
  <div class="right-section-container" v-show="!isCvOpened" ref="parent">
    <Home ref="home"/>
    <About ref="about"/>
    <SkillsView ref="skills" />
    <ProjectsView ref="projects" />
    <ContactView ref="contact" />
    
  </div>
  <transition name="slide-left" >
    <div class="right-section-container-pdf" v-if="isCvOpened" >
      <span class="close-icon-section-pdf"  @click="toggleCvFile">
        <XIcon class="close-icon-pdf" />
      </span>
      <pdf-embed class="pdf-container" :source="pdfUrl" ></pdf-embed>
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
  left: v-bind(centerContainer);
  position: absolute;
  border-radius: 10px;
  width: v-bind(desktopWidthForHome);
  overflow:hidden;
  max-width: 1000px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background-color: var(--transparent-bg-color);
}
.right-section-container-pdf{
  left: 282px;
  position: relative;
  border-radius: 10px;
  height: 100vh;
  width: v-bind(mobile ? '100%' : desktopWidthForHome);
}
 
.close-icon-section-pdf{
  position: fixed;
  top: 0;
  right:16px;
  background-color: var(--primary-font-color);
  z-index: 10;
  width: 40px;
  height: 40px;
  border: solid 2px var(--primary-bg-color);
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
  fill: var(--primary-bg-color);
  width: 40px;
  height: 40px;
  z-index: 10;
}

@media (max-width: 750px){
  header{
    width: 100%;
  }
  .right-section-container{
    left: 0;
    width: 100%;
    top: v-bind(isNavOpen && '100vh')
  }
  .right-section-container-pdf{
    width: 100%;
    left:0;
  }
  .vue-pdf-embed{
    width: 100%;
  }
}


</style>
