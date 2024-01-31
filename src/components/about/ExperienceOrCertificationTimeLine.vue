<template >
    <div class="timeline-container">
        <div class="perpendicular-line">
        
        </div>
        <div class="experience-card-container">
            <div class="charge_title-container">

                <h4 class="charge_title">{{ $t(charge_title) }}</h4>
            </div>
            <div class="modality_type-container">

                <p class="modality_type">{{ $t(modality_type) }}</p>
            </div>
            <div class="location-container">

                <p class="location">{{ $t(location) }}</p>
            </div>
            <div class="goals_functions-container">

                <h5 class="goals_functions">{{ $t(goals_functions) }}</h5>
            </div>
            <div class="start_date-container">

                <h4 class="start_date">{{ $t(start_date) }}</h4>
            </div>
            <div class="end_date-container">

                <h4 class="end_date">{{ $t(end_date) }}</h4>
            </div>
            
        </div>
    </div>
</template>
<script lang="ts">
    export default {
        props: [
            'charge_title',
            'modality_type',
            'company_name',
            'location',
            'goals_functions',
            'start_date',
            'end_date'
        ],
        mounted() {
            console.log("TCL: props", this.$props)
        },
    }
</script>
<style >

    .timeline-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        
    }

    .perpendicular-line{
        content: "|";
        background-color: var(--primary-border-color);
        width: 2px;

    }

    .experience-card-container{
        border: 1px solid var(--primary-font-color);
        padding: 14px;
        margin-bottom: 30px;
        border-radius: 10px;
    }
</style>