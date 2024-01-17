<script lang="ts">
  import { RouterView } from 'vue-router'
  import NavItem from './components/navBar/NavItem.vue';
  import { mapState } from "vuex";
  import Home from './views/HomeView.vue';
  import About from './views/AboutView.vue';

  export default {
    data() {
        return {
            
        }
    },
    components:{
      NavItem,
      Home,
      About
    },
    computed:{
      ...mapState(['isNavOpen','desktopWidthForHome'])
    }
  }
</script>

<template>
  <header v-show="isNavOpen">
    <NavItem/>
  </header>
  <div class="right-section-container">
    <Home/>
    <About/>
  </div>

</template>

<style scoped>
header {
  padding: 0;
  margin: 0;
  width: 260px;
}

.right-section-container{
  left: 280px;
  width: v-bind(desktopWidthForHome);
  position: absolute;
}

@media (max-width: 750px){
  header{
    width: 100%;
  }
}


</style>
