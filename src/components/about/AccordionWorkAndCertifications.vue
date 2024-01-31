<template >
    <div class="right-text-show-more-accordion">
        <h2>{{ $t('show_more')+ '...' }}</h2>
        <div class="vertical-timeline-container">
            <div class="left-section">
                <h1>{{$t('experience_text')}}</h1>
                <ExperienceOrCertificationTimeLine v-for="(card, index) in cardsExperience" 
                    :charge_title="card.charge_title" 
                    :modality_type="card.modality_type" 
                    :company_name="card.company_name" 
                    :location="card.location" 
                    :goals_functions="card.goals_functions" 
                    :start_date="card.start_date" 
                    :end_date="card.end_date" 
                    :key="index"
                />
            </div>
            <div class="right-section">
                
                <h1>{{$t('certification_text')}}</h1>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import ExperienceOrCertificationTimeLine from './ExperienceOrCertificationTimeLine.vue';

    const cardsExperience = [
        {
            charge_title : ('experience_card_job1_charge_title_text'),
            modality_type: ('experience_card_job1_modality_title_text'),
            company_name: ('experience_card_job1_company_title_text'),
            location: ('experience_card_job1_location_title_text'),
            goals_functions: ('experience_card_job1_goals_title_text'),
            start_date: "06-2022",
            end_date: '10-2023',
            
        },
        {
            charge_title : ('experience_card_job2_charge_title_text'),
            modality_type: ('experience_card_job2_modality_title_text'),
            company_name: ('experience_card_job2_company_title_text'),
            location: ('experience_card_job2_location_title_text'),
            goals_functions: ('experience_card_job2_goals_title_text'),
            start_date: "01-2023",
            end_date: '02-2023',
            
        },
        {
            charge_title : ('experience_card_job3_charge_title_text'),
            modality_type: ('experience_card_job3_modality_title_text'),
            company_name: ('experience_card_job3_company_title_text'),
            location: ('experience_card_job3_location_title_text'),
            goals_functions: ('experience_card_job3_goals_title_text'),
            start_date: "04-2023",
            end_date: '05-2023',
            
        },
        {
            charge_title : ('experience_card_job4_charge_title_text'),
            modality_type: ('experience_card_job4_modality_title_text'),
            company_name: ('experience_card_job4_company_title_text'),
            location: ('experience_card_job4_location_title_text'),
            goals_functions: ('experience_card_job4_goals_title_text'),
            start_date: "03-2023",
            end_date: '05-2023',
            
        },
        {
            charge_title : ('experience_card_job5_charge_title_text'),
            modality_type: ('experience_card_job5_modality_title_text'),
            company_name: ('experience_card_job5_company_title_text'),
            location: ('experience_card_job5_location_title_text'),
            goals_functions: ('experience_card_job5_goals_title_text'),
            start_date: "11-2021",
            end_date: '04-2022',
            
        },
        {
            charge_title : ('experience_card_job6_charge_title_text'),
            modality_type: ('experience_card_job6_modality_title_text'),
            company_name: ('experience_card_job6_company_title_text'),
            location: ('experience_card_job6_location_title_text'),
            goals_functions: ('experience_card_job6_goals_title_text'),
            start_date: "10-2021",
            end_date: '03-2022',
            
        },
        {
            charge_title : ('experience_card_job7_charge_title_text'),
            modality_type: ('experience_card_job7_modality_title_text'),
            company_name: ('experience_card_job7_company_title_text'),
            location: ('experience_card_job7_location_title_text'),
            goals_functions: ('experience_card_job7_goals_title_text'),
            start_date: "01-2019",
            end_date: '09-2021',
            
        },
    ]

    export default {
        data() {
            return{

            }
        },
        components:{
            ExperienceOrCertificationTimeLine,
        },
        mounted(){

        }
    }
</script>
<style scoped>
    .right-text-show-more-accordion{
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }

    .vertical-timeline-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 30px;

    }

    .left-section{
        width: 50%;
        padding: 10px;
    }
    .right-section{
        width: 50%;
        padding: 10px;
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

</style>