<template lang="">
    <div card-container>
    </div>
</template>
<script>
export default {
    props: ['width', 'height'],
    data() {

        return {
            
        }
    },
    
}
</script>
<style lang="">
    .card-container{
        width: 50px;
        height: 50px;
        background-color: #fff;
        position:relative;
    }
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