<template >
    <div class="tech-card">
        <component v-show="!!icon" :is="icon" class="icon-tech"></component>
        <v-icon v-show="ohVue" scale="1.5" fill="white" :class="name" :name="ohVue" class="icon-tech"></v-icon>
    </div>
</template>
<script lang="ts">

export default {
    props: ['name', 'icon', 'ohVue'],
    data() {
        
        return {
            
        }
    },
    mounted(){
        console.log("TCL: ohVue", this.props)
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
        overflow: hidden;
    }

    .tech-card:hover{
        background-color: var(--secondary-bg-color)
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
    .Cypress{
        fill: #545a3e
    }
    .Kubernetes{
        fill: #326de6
    }

    .icon-tech{
        fill: white;
        width: 150px;
        height: 150px;
    }
</style>