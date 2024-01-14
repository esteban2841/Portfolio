<template >
    <div class="border-container" @click="toggleNavBar" v-show="!mobile">
        
    </div>
</template>
<script lang="ts">
import { mapActions, mapState } from 'vuex'
    export default {
        data() {
            return {
                
            }
        },
        computed:{
            ...mapState(['mobile'])
        },
        methods:{
            ...mapActions(['toggleNavBar'])
        }
    }
</script>
<style>
    .border-container {
        display: flex;
        position: absolute;
        height: 100%;
        left: 260px;
        width: 20px;
        background-color: #3C4043;
        border: solid 1px #6573C3;
        border-radius: 0px 220px 220px 0px;
    }
</style>