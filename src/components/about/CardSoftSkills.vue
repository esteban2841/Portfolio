<template >
    <div class="flip-card">
        <div class="flip-card-inner diamond">
            <div class="flip-card-front ">
                <img :src="backImage"/>
                <component v-show="!!icon" :is="icon" class="icon-poker-card"></component>
                <v-icon v-show="ohVue" scale="1.5" fill="black" :name="ohVue" class="icon-poker-card ohvue"></v-icon>
            </div>
            <div class="flip-card-back ">
                <div class="skills-card-text">
                    <h1>{{ $t(name) }}</h1>
                    <text-area>{{ $t(name2) }}</text-area>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">

export default {
    props: ['width', 'height', 'name', "name2", 'backImage', 'icon', 'ohVue'],
    data() {

        return {
            
        }
    },
    
}
</script>
<style >
    .flip-card {
        background-color: transparent;
        width: 200px;
        height: 200px;
        perspective: 1000px;
        
    }
    
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        margin: 50px 0px;
        width: 200px;
        height: 300px;
        border-radius: 100px;
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-back:hover {
        transform: rotate(-45deg);
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        justify-content:center;
        align-items:center;
        border-radius: 20px;
        img{
            transform: rotate(180deg)
        }
    }
    
    .flip-card-front {
        background-color: #bbb;
        color: #fff;
        p{
            transform: rotate(180deg);
        }
        width: 200px;
        height: 300px;
        transform: rotate(135deg);
    }
    .ohvue{
        position: absolute;
        width: 130px;
        height: 130px;
        fill: black;
        color: black;
        background-color: white;
    }
    
    .flip-card-back {
        background-color: #fff;
        color: white;
        top: 0;
        width: 100%;
        height: 100%;
        transform: rotateY(3.14159rad);
    }

    .diamond{
        transform: rotate(45deg)
    }
    .icon-poker-card{
        fill:black;
        position:absolute;
        width: 130px;
        transform:rotate(180deg)
    }

    .skills-card-text{
        color:var(--primary-bg-color)
    }
    
    /* .card{
        background-color: #fff;
        height: 220px;
        width: 220px;
        display: flex;
        flex-direction:
    } */

    .left{
        background-color: var(--left-card-bg-color);
    }
    .center{
        background-color: var(--center-card-bg-color);
    }
    .right{
        background-color: var(--right-card-bg-color);
    }
</style>