<template >
    <div class="projects-container">
        <h1 class="projects-title">{{$t('projects_section_text')}}</h1>
        <SwiperProjectSlider />
    </div>
</template>
<script lang="ts">
    import SwiperProjectSlider from '../components/projects/SwiperProjectsSlider.vue'
    export default {
        data() {
            return {
                
            }
        },
        components:{
            SwiperProjectSlider
        }
    }
</script>
<style >
    .projects-container{
        color: var(--primary-font-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: var(--transparent-bg-color);
        box-sizing: border-box;
        width: 100%;
        max-width: 1000px;
    }
    .projects-title{
        text-transform: uppercase;
        border-bottom: 2px solid var(--primary-border-color);
        padding-bottom: 5px;

    }
</style>