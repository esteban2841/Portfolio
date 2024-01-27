<template >
    <div class="tech-card">
        <component v-show="!!icon" :is="icon" class="icon-tech"></component>
        <v-icon v-show="ohVue" scale="1.5" fill="black" :name="ohVue" class="icon-tech ohvue"></v-icon>
    </div>
</template>
<script lang="ts">

export default {
    props: ['width', 'height', 'name', "name2", 'icon', 'ohVue'],
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
        background-color: white;
        position: absolute;
    }

    .icon-tech{
        fill: grey;
        width: 50px;
    }
</style>