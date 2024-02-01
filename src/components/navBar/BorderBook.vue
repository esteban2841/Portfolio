<template >
    <div class="border-container" v-show="!mobile" @click="toggleCvFile">
        
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
            ...mapActions(['toggleCvFile'])
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
        background-color: var(--secondary-bg-color);
        border: solid 1px var(--primary-border-color);
        border-radius: 0px 220px 220px 0px;
    }
</style>