<template>
  <div class="about-container">
    <h1 class="about-title">{{ $t('about_me_section')  }}</h1>
    <div class="about-introduction">
      <div class="introduction-text">
        <h4>
          {{ $t('intrduction_description') }}
        </h4>

      </div>
      <div class="introduction-button">
        <button class="cv-opener" @click="toggleCvFile">
          <p class="text-button-cv">
            {{$t('pdf_opener_text')}}

          </p>
        </button>

      </div>
    </div>
    <!-- <pdf-embed :source="pdfUrl"></pdf-embed> -->
    <div class="cards-container ">
        <CardSoftSkills v-for="(card, index) in cards" :key="index" :name="card.name" :name2="card.name2" :backImage="card.backgroundImage[index]" :icon="card.icon" :ohVue="card.ohVue"/> 
    </div>
    <h1 class="tech_solution_text">{{ $t('tech_solution_text') }}</h1>
    <div class="cards-technologies">
      <CardTechnologies v-for="(card, index) in cardsTechnologies" :key="index" :name="card.name" :icon="card.icon" :ohVue="card.ohVue"/>
    </div>
    <div class="accordion-container" :style="`--dynamic-width: ${mobile ? '100%' : desktopWidthForHome};`">
      <AccordionWorkAndCertifications/>
      
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
  import { mapActions, mapState } from 'vuex'
  import CardSoftSkills from './../components/about/CardSoftSkills.vue'
  import CardTechnologies from './../components/about/CardTechnologies.vue'
  import AccordionWorkAndCertifications from './../components/about/AccordionWorkAndCertifications.vue'

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

  const cardsTechnologies = [
    {
      name: 'Mongo',
      ohVue: 'si-mongodb'
    },
    {
      name: 'Docker',
      ohVue: 'la-docker'
    },
    {
      name: 'React',
      ohVue: 'ri-reactjs-line'
    },
    {
      name: 'Express',
      ohVue: 'si-express'
    },
    {
      name: 'Javascript',
      ohVue: 'si-nodedotjs'
    },
    {
      name: 'Backbone',
      ohVue: 'si-backbonedotjs'
    },
    {
      name: 'Cypress',
      ohVue: 'si-cypress'
    },
    {
      name: 'Kubernetes',
      ohVue: 'si-kubernetes'
    },
    {
      name: 'Vue',
      ohVue: 'vi-file-type-vue'
    },
  ]
  export default {
    data() {
      return {
        cards,
        cardsTechnologies,
        dynamicWidth: this.mobile ? '100%' : this.desktopWidthForHome
      }
    },
    components:{
      CardSoftSkills,
      GlobeIcon,
      AcademicCapIcon,
      CardTechnologies,
      AccordionWorkAndCertifications
    },
    computed: {
      ...mapState(['desktopWidthForHome', 'mobile'])
    },
    methods:{
      ...mapActions(['toggleCvFile'])
    },
    mounted() {
      
    },
  }
</script>

<style>

.about-container{
  color: var(--primary-font-color);
  position: relative;
  width: 100%;
  background-color: var(--transparent-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;

}
.cards-container{
  display: flex;
  flex-direction: row;
  gap: 30px 30px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 100px;
  border-radius: 20px;
  padding:20px;
}
.cards-technologies{
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  padding-bottom: 70px;
  border-radius: 20px;
  padding:20px;
}

.about-title{
  text-transform: uppercase;
  border-bottom: solid 3px var(--primary-border-color);
}

.about-introduction{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding:30px;
  align-items:center;
  gap: 20px;
  text-align: justify;
}
.cv-opener{
  position: relative;
  width:115px;
  height: 40px;
  border-radius: 10px;
  background-color: var(--terciary-bg-color);
  border: solid 2px var(--primary-font-color);
  color: var(--primary-font-color);
  overflow: hidden;
  z-index:8;
  display: flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;
}

.text-button-cv{
  z-index: 8

}

.tech_solution_text{
  text-transform: uppercase;
  border-bottom: 2px solid var(--primary-border-color);
  padding: 8px 0px;
  margin: 40px 0px;
  text-align:center;
}

.cv-opener::before, .cv-opener::after {
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 0;
 background: var(--primary-border-color);
 transition: all 2s ease;
}
.cv-opener::before {
 left: 0;
}
.cv-opener::after {
 right: 0;
}

.cv-opener:hover::before {
 width: 100%;
}
.cv-opener:hover::after {
 width: 100%;
}
.cv-opener:hover {
  border: none;
}

.accordion-container{
  width: var(--dynamic-width);
  position:relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  max-width: 1000px;
}

.introduction-text{
  width: var(--dynamic-width);
}
.introduction-button{
  width:20%;
}

@media only screen and (max-width: 1000px) and (min-width: 750px) {
  .introduction-button{
    width:30%;
  }
  .cv-opener{
    width: 115px;
    height: 115px;
  }
  
}

@media (max-width: 750px){
  .cards-container{
    width: 100%;
    margin-bottom: 0px;
  }
  .about-introduction{
    flex-direction: column;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
  }
  .introduction-text{
    width: 100% !important;
  }
  .tech_solution_text{
    padding: 20px 30px;
    margin: 30px 30px;
  }
  .cards-technologies{
    padding-right: 20px;
    padding-bottom: 20px;
  }
  .introduction-button{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
  }
  .cv-opener{
    width: 100%;
    height: 115px;
  }
}

</style>
