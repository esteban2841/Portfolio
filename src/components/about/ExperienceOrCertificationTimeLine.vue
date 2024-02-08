<template >
    <div class="timeline-container" v-for="(card, index) in cards" 
        :id="card.key" 
        :ref="card.key"
        :key="index"
    >
        <div class="icon-timeline">
            
        </div>
        <div class="experience-card-container">
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
            const cardsRefs = this.cards.map(card => {
                const cardRef = {
                    [card.key]:this.$refs[card.key]
                }
                
                return {
                    [card.key]:this.$refs[card.key],
                }
            });

            cardsRefs.forEach(card => {
                const [element] = Object.values(card)[0]
                this.observeCard(element)
            });
        },
        methods: {
            observeCard(element) {
                let observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        entries[0].target.classList.add('bounce');
                    }else{
                        entries[0].target.classList.remove('bounce');
                    }
                });
                observer.observe(element);
            },
        },
    }
</script>
<style >

    .timeline-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        border-left: 10px solid var(--primary-font-color);
        margin-left: 30px;
        padding-left: 20px;
    }

    .icon-timeline{
        background-color: var(--primary-border-color);
        height: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: relative;
        left: -60px;
        top:-5px;
        border: 10px solid var(--primary-font-color);
    }

    .experience-card-container{
        position: relative;
        padding: 14px;
        margin-bottom: 30px;
        border-radius: 10px;
        background-color: var(--terciary-bg-color);
        box-shadow: var(--first-shadow);
        width: 65%;
        top: -60px;
        left: 30px;
    }
    
    .experience-card-container::before{
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border-top: 20px solid var(--terciary-bg-color);
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
    .bounce{
        animation: bounce-in 1s ease-in;
    }
</style>