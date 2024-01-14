<script lang="ts">
  import { RouterView } from 'vue-router'
  import NavItem from './components/NavItem.vue';
  import { mapState } from "vuex";

  export default {
    data() {
        return {
            
        }
    },
    components:{
      NavItem,
      RouterView
    },
    computed:{
      ...mapState(['isNavOpen'])
    }
  }
</script>

<template>
  <header v-show="isNavOpen">
    <NavItem/>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  padding: 0;
  margin: 0;
  width: 260px;
  height: 100%;
}

@media (max-width: 750px){
  header{
    width: 100%;
  }
}


</style>
