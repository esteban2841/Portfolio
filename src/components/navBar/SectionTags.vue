<template >
    <a class="home section-container" @click="getSelectedViewName">
        Home
    </a>
    <a class="about section-container" @click="getSelectedViewName">
        About
    </a>
</template>
<script lang="ts">
    import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {
            
        }
    },computed:{
        ...mapState(['activeView']),
    },methods: {
        ...mapActions(['setActiveView']),
        getSelectedViewName (event) {
            const selectedView = event.target.classList[0]
			console.log("TCL: getSelectedViewName -> selectedView", selectedView)
            this.setActiveView(selectedView)
        }
    }
}
</script>
<style >
    .section-container{
        width: 260px;
        height: 53px;
        color: #fff;
    }
</style>