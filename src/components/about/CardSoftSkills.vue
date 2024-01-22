<template >
    <div class="card-container diamond">
        <div class="flip-card-front">

        </div>
        <div class="flip-card-front">
            {{ name }}
        </div>
    </div>
</template>
<script lang="ts">
export default {
    props: ['width', 'height', 'name'],
    data() {

        return {
            
        }
    },
    
}
</script>
<style >
    .card-container{
        position: relative;
        display:flex;
        flex-direction: row;
        height: 150px;
        width: 150px;
        
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    .flip-card-front {
        background-color: #bbb;
        color: black;
    }

    .flip-card-back {
        background-color: dodgerblue;
        color: white;
        transform: rotateY(180deg);
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