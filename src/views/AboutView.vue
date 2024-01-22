<template>
  <div class="about-container">
    <h1>SOBRE MI</h1>
    <CardSoftSkills v-for="(card, index) in cards" :key="index" {{ card.name }} />
  </div>
</template>

<script lang="ts">
  import CardSoftSkills from './../components/about/CardSoftSkills.vue'
  const cards = [
    {
      name: $t("multicultural_text"),
      

    },
    {
      name: "hola aca ando",
      

    },
  ]
  export default {
    data() {
      return {
        cards
      }
    },
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
