<template >
    <div class="section-container">
        <a class="home section-tag" @click="getSelectedViewName">
            <HomeIcon class="section-icon"/>
            <h2>Home</h2>
        </a>
        <a class="about section-tag" @click="getSelectedViewName">
            <UserIcon class="section-icon"/>
            <h2>About</h2>
        </a>
        <a class="skills section-tag" @click="getSelectedViewName">
            <InformationCircleIcon  class="section-icon"/>
            <h2>Skills</h2>
        </a>
        <a class="projects section-tag" @click="getSelectedViewName">
            <ArchiveIcon class="section-icon"/>
            <h2>Projects</h2>
        </a>
        <a class="contact section-tag" @click="getSelectedViewName">
            <MailOpenIcon class="section-icon"/>
            <h2>Contact</h2>
        </a>

    </div>
</template>
<script lang="ts">
    import { mapState, mapActions } from 'vuex';
    import { HomeIcon, UserIcon, InformationCircleIcon, ArchiveIcon, MailOpenIcon } from "heroicons-vue3/solid"
    export default {
        data() {
            return {
                
            }
        },computed:{
            ...mapState(['activeView']),
        },methods: {
            getSelectedViewName (event) {
				console.log("TCL: getSelectedViewName -> event", event)
                const selectedView = event.target.parentElement.classList[0]
				console.log("TCL: getSelectedViewName -> selectedView", selectedView)
				console.log("TCL: getSelectedViewName -> this.$store", this.$store, selectedView)
                this.$store.dispatch('scrollToSection', selectedView);
            }
        },
        components:{
            HomeIcon,
            UserIcon,
            InformationCircleIcon,
            ArchiveIcon,
            MailOpenIcon
        }
    }
</script>
<style >
    .section-container{
        width: 100%;
        color: #fff;
        padding: 5px 10px;
        margin-top: 20px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        border-top: 0.5px solid var(--primary-border-color);
        border-bottom: 0.5px solid var(--primary-border-color);
        border-bottom: 0.5px solid var(--primary-border-color);
        h2{
            line-height: 0;
            font-family: 'Unna', serif;
            font-size: 24px;
        }
    }

    .section-tag{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 40px;
    }

    .section-icon{
        width: 24px;
        height: 24px;
        fill: #fff;
    }
</style>