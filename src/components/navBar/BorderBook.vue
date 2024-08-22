<template >
    <div class="border-container" @click="toggleCvFile">
        <v-icon class="doble-right" scale="1.5" name="md-keyboarddoublearrowright"/>
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
        position: relative;
        height: 100%;
        width: 20px;
        background-color: var(--secondary-bg-color);
        border-radius: 0px 220px 220px 0px;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        cursor: pointer;
    }

    .doble-right{
        fill : var(--primary-font-color)
    }
</style>