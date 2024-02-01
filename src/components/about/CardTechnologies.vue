<template >
    <div class="tech-card" @mouseover="showTooltip = true" @mouseout="showTooltip = false">
        <v-icon v-show="ohVue" scale="1.5" fill="white" :class="name" :name="ohVue" class="icon-tech"></v-icon>
        <div class="tooltip" v-if="showTooltip">
            <p>{{ name }}</p>
        </div>
    </div>
</template>
<script lang="ts">

export default {
    props: ['name', 'icon', 'ohVue'],
    data() {
        
        return {
            showTooltip: false
        }
    },
    mounted(){
    },
    
}
</script>
<style >
    .tech-card{
        width: 150px;
        height: 150px;
        background-color: transparent;
        position: relative;
        display: flex;
        justify-content:center;
        align-items:center;
        border-radius: 20px;
    }

    .tech-card:hover{
        background-color: var(--secondary-bg-color)
    }

    .tooltip{
        z-index: 6;
        width: 80px;
        position:absolute;
        bottom: -60px;
        background-color: var(--secondary-bg-color);
        border-radius: 10px;
        display: flex;
        justify-content:center;
        align-items: center;
    }

    .Mongo:hover{
        fill: #429745
    }
    .Docker:hover{
        fill: #1d63ed
    }
    .React:hover{
        fill: #087ea4
    }
    .Javascript:hover{
        fill: #f5de19
    }
    .Backbone:hover{
        fill: #002a41
    }
    .Vue{
        fill: #fff
    }
    .Cypress:hover{
        fill: #545a3e
    }
    .Kubernetes:hover{
        fill: #326de6
    }

    .icon-tech{
        fill: var(--primary-font-color);
        width: 150px;
        height: 150px;
    }

        
    @media (max-width: 750px){
        .tech-card{
            width: 100px;
            height: 100px;
            
        }
        .icon-tech{
            width: 100px;
            height: 100px;
        }
    }


</style>