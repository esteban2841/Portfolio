<template >
    <div class="right-text-show-more-accordion">
        <div class="show-more-container" v-if="!showMore" @click="toggleShowMore">
            <h2>{{ $t('show_more')+ ' ' + $t('about_me_section') + '...' }}</h2>
            <v-icon scale="1.5" fill="white" :name="'md-keyboarddoublearrowdown-twotone'" class="icon-show-more"></v-icon>
        </div>
        <div class="show-less-container" v-if="showMore" @click="toggleShowMore">
            <h2>{{ $t('show_less')+ ' ' + $t('about_me_section') + '...' }}</h2>
            <v-icon scale="1.5" fill="white" :name="'md-keyboarddoublearrowup-twotone'" class="icon-show-more"></v-icon>
        </div>
        <div class="vertical-timeline-container" v-if="showMore">
            <div class="left-section">
                <h1>{{$t('experience_text')}}</h1>
                
                <ExperienceOrCertificationTimeLine class="timeline-item" 
                    :cards="cardsExperience" 

                />
            </div>
            <div class="right-section">
                
                <h1>{{$t('certification_text')}}</h1>
                <EducationTimeLine class="timeline-item" 
                    :cards="cardsEducation" 
    
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import ExperienceOrCertificationTimeLine from './ExperienceOrCertificationTimeLine.vue';
    import EducationTimeLine from './EducationTimeLine.vue';
    import { mapActions, mapState } from 'vuex';
    
    const cardsExperience = [
        {
            charge_title : ('experience_card_job1_charge_title_text'),
            modality_type: ('experience_card_job1_modality_title_text'),
            company_name: ('experience_card_job1_company_title_text'),
            location: ('experience_card_job1_location_title_text'),
            goals_functions: ('experience_card_job1_goals_title_text'),
            start_date: "06-2022",
            end_date: '10-2023',
            key: "bewe",
        },
        {
            charge_title : ('experience_card_job2_charge_title_text'),
            modality_type: ('experience_card_job2_modality_title_text'),
            company_name: ('experience_card_job2_company_title_text'),
            location: ('experience_card_job2_location_title_text'),
            goals_functions: ('experience_card_job2_goals_title_text'),
            start_date: "01-2023",
            end_date: '02-2023',
            key: "OnlineNature",
            
        },
        {
            charge_title : ('experience_card_job3_charge_title_text'),
            modality_type: ('experience_card_job3_modality_title_text'),
            company_name: ('experience_card_job3_company_title_text'),
            location: ('experience_card_job3_location_title_text'),
            goals_functions: ('experience_card_job3_goals_title_text'),
            start_date: "04-2023",
            end_date: '05-2023',
            key: "sevenDevs",
            
        },
        {
            charge_title : ('experience_card_job4_charge_title_text'),
            modality_type: ('experience_card_job4_modality_title_text'),
            company_name: ('experience_card_job4_company_title_text'),
            location: ('experience_card_job4_location_title_text'),
            goals_functions: ('experience_card_job4_goals_title_text'),
            start_date: "03-2023",
            end_date: '05-2023',
            key: "henry",
            
        },
        {
            charge_title : ('experience_card_job5_charge_title_text'),
            modality_type: ('experience_card_job5_modality_title_text'),
            company_name: ('experience_card_job5_company_title_text'),
            location: ('experience_card_job5_location_title_text'),
            goals_functions: ('experience_card_job5_goals_title_text'),
            start_date: "11-2021",
            end_date: '04-2022',
            key: "pokemonsInfo",
            
        },
        {
            charge_title : ('experience_card_job6_charge_title_text'),
            modality_type: ('experience_card_job6_modality_title_text'),
            company_name: ('experience_card_job6_company_title_text'),
            location: ('experience_card_job6_location_title_text'),
            goals_functions: ('experience_card_job6_goals_title_text'),
            start_date: "10-2021",
            end_date: '03-2022',
            key: "kbx",
            
        },
        {
            charge_title : ('experience_card_job7_charge_title_text'),
            modality_type: ('experience_card_job7_modality_title_text'),
            company_name: ('experience_card_job7_company_title_text'),
            location: ('experience_card_job7_location_title_text'),
            goals_functions: ('experience_card_job7_goals_title_text'),
            start_date: "01-2019",
            end_date: '09-2021',
            key: "concentrix",
            
        },
    ]
    const cardsEducation = [
        {
            charge_title : ('education_card_job1_charge_title_text'),
            modality_type: ('education_card_job1_modality_title_text'),
            company_name: ('education_card_job1_company_title_text'),
            location: ('education_card_job1_location_title_text'),
            goals_functions: ('education_card_job1_goals_title_text'),
            start_date: "01-2022",
            end_date: '05-2022',
            key: "Henry",
            theme: "dark",
        },
        {
            charge_title : ('education_card_job2_charge_title_text'),
            modality_type: ('education_card_job2_modality_title_text'),
            company_name: ('education_card_job2_company_title_text'),
            location: ('education_card_job2_location_title_text'),
            goals_functions: ('education_card_job2_goals_title_text'),
            start_date: "01-2013",
            end_date: '12-2017',
            key: "Universidad Antonio Nariño",
            theme: "dark",
            
        },
       
    ]
    
    export default {
        data() {
            return{
                cardsExperience,
                cardsRefs: [],
                cardsEducation,
            }
        },
        computed: {
            ...mapState(['showMore'])
        },
        methods:{
            ...mapActions(['toggleShowMore'])
        },
        components:{
            ExperienceOrCertificationTimeLine,
            EducationTimeLine,
        },
        mounted() {
        },
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
        box-sizing: border-box;
        max-width: 900px;
    }

    .show-more-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }
    .icon-show-more{
        display: flex;
        width: 70px;
        height: 70px;
        fill: #ff9100;
    }

    .show-less-container{
        display: flex;
        flex-direction: row;
        align-items: center;
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
    
    @media (max-width: 750px){
        
        .vertical-timeline-container{
            
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 30px;
            align-items: center;
        }
        .left-section{
            width: 90%;
            padding: 10px;
        }
        .right-section{
            width: 90%;
            padding: 10px;
        }
    }



</style>