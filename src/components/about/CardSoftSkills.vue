<template >
    <div class="flip-card">
        <div class="flip-card-inner diamond">
            <div class="flip-card-front ">
                <p>{{name2}}</p>
            </div>
            <div class="flip-card-back ">
                <p>{{ name }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    props: ['width', 'height', 'name', "name2"],
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

    .flip-card-back {
        background-color: dodgerblue;
        color: white;
        top: 0;
        width: 100%;
        height: 100%;
        transform: rotateY(3.14159rad);
    }

    .diamond{
        transform: rotate(45deg)
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