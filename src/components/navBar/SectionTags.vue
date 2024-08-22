<template >
    <div class="section-container">
        <a class="home section-tag font" @click="getSelectedViewName">
            <HomeIcon class="section-icon"/>
            <h2 class="home-section-title font">{{$t('home_section_text')}}</h2>
        </a>
        <a class="about section-tag font" @click="getSelectedViewName">
            <UserIcon class="section-icon"/>
            <h2 class="font">{{$t('about_section_text')}}</h2>
        </a>
        <a class="skills section-tag font" @click="getSelectedViewName">
            <InformationCircleIcon  class="section-icon"/>
            <h2 class="font">{{$t('skills_section_text')}}</h2>
        </a>
        <a class="projects section-tag font" @click="getSelectedViewName">
            <ArchiveIcon class="section-icon"/>
            <h2 class="font">{{$t('projects_section_text')}}</h2>
        </a>
        <a class="contact section-tag" @click="getSelectedViewName">
            <MailOpenIcon class="section-icon"/>
            <h2 class="font">{{$t('contact_section_text')}}</h2>
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
            ...mapState(['activeView', 'mobile']),
        },methods: {
            getSelectedViewName (event) {
                const selectedView = event.currentTarget.classList[0]
                const element = this.$store.state.ref[selectedView].$el
                if(this.mobile){
                    this.toggleNavBar()
                    this.scrollToSection(element)
                }else{
                    this.scrollToSection(element)

                }
            },
            ...mapActions(['toggleNavBar', 'scrollToSection'])
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
        color: var(--primary-font-color);
        padding: 5px 20px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        border-top: 1px solid var(--secondary-bg-color);
        overflow-y: hidden !important;
        box-sizing:border-box;
        
    }

    .font{
        font-family: "Noto Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 200 !important;
        font-style: normal;
        font-variation-settings:"wdth" 70;
    }

    .section-tag{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 40px;
    }

    .section-tag:hover{
        cursor: pointer;
        border-radius: 10px;
        background-color: var(--secondary-bg-color);
    }

    .section-icon{
        width: 24px;
        height: 24px;
        fill: var(--primary-font-color);
    }

    @media (max-width: 750px){
        .section-container{
            overflow-y: scroll;
        }
    }

    
</style>