<template>
  <div class="about-container">
    <h1>SOBRE MI</h1>
    <CardSoftSkills/>
  </div>
</template>

<script lang="ts">
  import CardSoftSkills from './../components/about/CardSoftSkills.vue'
  export default {
    components:{
      CardSoftSkills
    }

  }
</script>

<style>

.about-container{
  color: var(--primary-font-color);
  position: relative;
  width: 100%;
  height: 98vh;
  background-color: var(--primary-bg-color);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
@media (min-width: 1024px) {
}
</style>
