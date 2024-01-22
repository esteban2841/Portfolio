<template>
  <div class="about-container">
    <h1>SOBRE MI</h1>
    <div class="cards-container flip-card">
      <div class="flip-card-inner">
        <CardSoftSkills v-for="(card, index) in cards" :key="index" :name="card.name" />

      </div>
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
  width: 100%;
  height: 98vh;
  background-color: var(--primary-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.cards-container{
  display: flex;
  flex-direction: row;
  gap: 100px;
}

.flip-card {
  background-color: transparent;
  position: relative;
  display:flex;
  flex-direction: row;
  height: 150px;
  width: 150px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}


@media (min-width: 1024px) {
}
</style>
