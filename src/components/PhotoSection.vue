<template>
    <div class="photo-container">
        <span class="close-icon-container">
            <XIcon class="close-icon"/>
        </span>
    </div>
</template>
<script setup lang="ts">
    import {XIcon} from 'heroicons-vue3/solid'
</script>
<style scoped>
    .photo-container{
        background-color: #212121;
        padding: 10px;
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        .close-icon-container{
            width: 40px;
            height: 40px;
            border: solid 1px white;
        }
        .close-icon{
            fill: white;
            width: 40px;
            height: 40px;
        }
    }
</style>