<template>
    <div class="close-container">
        <span class="close-icon-container">
            <XIcon class="close-icon"/>
        </span>
    </div>
    <div class="photo-section">
        <div class="photo-mask">
            <div class="photo-container">
                <img :src="photo" alt="photo"/>
            </div>
            <div class="change-settings-container">
                <div class="theme-settings-container">
                    <SunIcon/>
                </div>
                <div class="locale-settings-container"></div>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
    import {XIcon} from 'heroicons-vue3/solid'
    import {SunIcon} from 'heroicons-vue3/solid'
    import photo from '../assets/foto-mask-left.png'
</script>
<style scoped>
    .close-container{
        display: flex;
        background-color: #212121;
        padding: 10px;
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        justify-content: flex-end;
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

    .photo-section{
        display: flex;
        height: 142px;
        padding: 10px;
    }
    .photo-mask{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: aliceblue;
        margin-top: 50px;
    }
    .photo-container{
        width: 90px;
        height: 90px;
        background-color: aliceblue;
        img{
            height: 92px;
        }
    }
    .change-settings-container{
        background-color: antiquewhite;
    }
</style>