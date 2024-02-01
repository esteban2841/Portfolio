<template >
    <div class="timeline-container-education" v-for="(card, index) in cards" 
        :id="card.key" 
        :ref="card.key"
    >
        <div class="icon-timeline-education">
            
        </div>
        <div class="experience-card-container-education">
            <div class="charge_title-container">

                <h4 class="charge_title">{{ $t(card.charge_title) }}</h4>
            </div>
            <div class="modality_type-container">

                <p class="modality_type">{{ $t(card.modality_type) }}</p>
            </div>
            <div class="location-container">

                <p class="location">{{ $t(card.location) }}</p>
            </div>
            <div class="goals_functions-container">

                <h5 class="goals_functions">{{ $t(card.goals_functions) }}</h5>
            </div>
            <div class="start_date-container">

                <h4 class="start_date">{{ $t(card.start_date) }}</h4>
            </div>
            <div class="end_date-container">

                <h4 class="end_date">{{ $t(card.end_date) }}</h4>
            </div>
            
        </div>
    </div>
</template>
<script lang="ts">
    import { ref } from 'vue';
    export default {
        props: [
            'cards',
        ], 
        mounted(){
            this.$nextTick(()=>{
				console.log("TCL: mounted -> this.$refs", )
                const cardsRefs = this.cards.map(element => {
                    const cardRef = {
                        [element.key]:this.$refs[element.key]
                    }
                    
					console.log("TCL: mounted -> cardRef", cardRef)
                    return {
                        [element.key]:this.$refs[element.key],
                        ...cardRef
                    }
                });

                cardsRefs.forEach(element => {
					console.log("TCL: mounted -> element", element.__vnode)
                    this.observeCard()
                });
            })
        },
        methods: {
            observeCard(element) {
				console.log("TCL: observeCard -> element", element)
                const observer = new IntersectionObserver((entries) => {
					console.log("TCL: observeCard -> entries", entries)
                    if (entries[0].isIntersecting) {
                        element.classList.add('bounce-in');
                    }else{
                        element.classList.remove('bounce-in');
                    }
                });
                observer.observe(element);
            },
        },
    }
</script>
<style >

    .timeline-container-education{
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        border-left: 10px solid var(--terciary-bg-color);
        margin-left: 30px;
        padding-left: 20px;
    }

    .icon-timeline-education{
        background-color: var(--primary-font-color);
        height: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: relative;
        left: -60px;
        top:-5px;
        border: 10px solid var(--terciary-bg-color);
    }

    .experience-card-container-education{
        position: relative;
        padding: 14px;
        margin-bottom: 30px;
        border-radius: 10px;
        background-color: var(--primary-border-color);
        box-shadow: var(--first-shadow);
        color:var(--terciary-bg-color);
        width: 65%;
        top: -60px;
        left: 30px;
    }
    
    .experience-card-container-education::before{
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border-top: 20px solid var(--primary-border-color);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        box-shadow: var(--first-shadow);
        top: 12px;
        left:-18px;
        transform: rotate(90deg);
        
    }
    @keyframes bounce-in {
        0% {
            opacity: 0;
            transform: scale(0.5);
        }
        60% {
            opacity: 1;
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);    
        }
    }
    .timeline-container-education{
        animation: bounce-in 1s;
    }
</style>