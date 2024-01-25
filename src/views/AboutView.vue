<template>
  <div class="about-container">
    <h1>SOBRE MI</h1>
    <div class="cards-container ">
        <CardSoftSkills v-for="(card, index) in cards" :key="index" :name="card.name" :name2="card.name2" />
    </div>
  </div>
</template>

<script lang="ts">
  import CardSoftSkills from './../components/about/CardSoftSkills.vue'
  const cards = [
    {
      name: "melopela",
      name2: "voltie"
      
      
    },
    {
      name: "hola aca ando",
      name2: "hola me fui"
      

    },
    {
      name: "hola aca ando",
      name2: "hola me fui"
      

    },
    {
      name: "Rafinha",
      name2: "hola me fui"
      

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
    },
    computed:{
      localeUsage (){
        const multicultural = this.$t("multicultural_text")
        return {
          multicultural
        }
      }
    }

  }
</script>

<style>

.about-container{
  color: var(--primary-font-color);
  position: relative;
  min-width: 800px;
  width: 100%;
  height: 98vh;
  background-color: var(--primary-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

}
.cards-container{
  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
  height: 80vh;
}

@media (min-width: 1024px) {
}
</style>
