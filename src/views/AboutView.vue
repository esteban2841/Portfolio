<template>
  <div class="about-container">
    <h1>{{ $t('about_section_text') }}</h1>
    <pdfvuer src="../../public/CV_ENGLISH.pdf"></pdfvuer>
    <div class="cards-container ">
        <CardSoftSkills v-for="(card, index) in cards" :key="index" :name="card.name" :name2="card.name2" :backImage="card.backgroundImage[index]" :icon="card.icon" :ohVue="card.ohVue"/>
    </div>
  </div>
</template>

<script lang="ts">
  import asCorazones from "./../assets/cards/as-corazones.png"
  import asDiamantes from "./../assets/cards/as-diamantes.png"
  import asTreboles from "./../assets/cards/as-treboles.png"
  import asPicas from "./../assets/cards/as-picas.png"
  import kCorazones from "./../assets/cards/k-corazones.png"
  import kDiamantes from "./../assets/cards/k-diamantes.png"
  import kTreboles from "./../assets/cards/k-treboles.png"
  import kPicas from "./../assets/cards/k-picas.png"
  import { GlobeIcon, AcademicCapIcon } from 'heroicons-vue3/solid'
  import pdfvuer from 'pdfvuer';
  
  

  import CardSoftSkills from './../components/about/CardSoftSkills.vue'

  const cardPictures = [ asCorazones, asDiamantes, asTreboles, asPicas, kCorazones, kDiamantes, kTreboles, kPicas]
  const cardIcons = [ GlobeIcon, ]

  const cards = [
    {
      name: "multicultural_text",
      name2: "multicultural_description",
      backgroundImage: cardPictures,
      ohVue: 'gi-globe'
      
    },
    {
      name: "academic_cerfication_text",
      name2: "academic_cerfication_description",
      backgroundImage: cardPictures,
      icon: AcademicCapIcon
      
      
    },
    {
      name: "fast_learner_text",
      name2: "fast_learner_description",
      backgroundImage: cardPictures,
      ohVue: 'gi-brainstorm'
      
      
    },
    {
      name: "polyglot_text",
      name2: "polyglot_description",
      backgroundImage: cardPictures,
      ohVue: 'md-gtranslate'
      
      
    },
    {
      name: "task_complection_text",
      name2: "task_complection_description",
      backgroundImage: cardPictures,
      ohVue: 'ai-preregistered'
      
      
    },
    {
      name: "team_work_text",
      name2: "team_work_description",
      backgroundImage: cardPictures,
      ohVue: 'fa-people-carry'
      
      
    },
    {
      name: "metrics_text",
      name2: "metrics_description",
      backgroundImage: cardPictures,
      ohVue: 'md-analytics'
      
      
    },
    {
      name: "self_improvement_text",
      name2: "self_improvement_description",
      backgroundImage: cardPictures,
      ohVue: 'gi-stairs-goal'
      
      
    },
  ]
  export default {
    data() {
      return {
        cards
      }
    },
    components:{
      CardSoftSkills,
      GlobeIcon,
      AcademicCapIcon,
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
  min-width: 700px;
  width: 100%;
  background-color: var(--primary-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

}
.cards-container{
  display: flex;
  flex-direction: row;
  gap: 30px 20px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 900px;
  height: 140vh;
}

@media (min-width: 1024px) {
}
</style>
