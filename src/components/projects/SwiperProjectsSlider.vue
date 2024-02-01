<template >
    <swiper class="swiper-container"
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
        <swiper-slide class="slide-content-container" v-for="(item, index) in projectCards" :key="index">
            <a :href="item.url" class="projects-card" >
                <div class="header-card" :style="{ backgroundImage: 'url(' + item.backImg + ')'}">
                    <div class="frontend-technologies-container" >
                        <div>
                            <h2 >Frontend: </h2>
                        </div>
                        <div v-for="(word, index) in item.frontend">
                            <p class="frontend-technologies" >{{ word }}</p>
                        </div>

                    </div>
                    <div class="backend-technologies-container">

                        <div>
                            <h2>Backend: </h2>
    
                        </div>
                        <div v-for="(word, index) in item.backend">
                            <p class="backend-technologies">{{ word }}</p>
                        </div>
                    </div>
                </div>
                <div class="footer-card">
                    <div class="title-container-project">
                        <h2>{{ item.name }}</h2>
                        
                    </div>
                    <div class="description-container-project">
                        <p>{{ $t(item.description) }}</p>
                    </div>
                </div>
            </a>
        </swiper-slide>
    </swiper>
</template>
<script>
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

    import { Swiper, SwiperSlide } from 'swiper/vue';

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

    import devsNFTPhoto from '../../assets/projectImages/7devsNFT.png'
    import onlineNaturePhoto from '../../assets/projectImages/onlineNature.png'
    import pokemonsPhoto from '../../assets/projectImages/pokemonsApp.png'

    const projectImages = [devsNFTPhoto,onlineNaturePhoto, pokemonsPhoto]
	console.log("TCL: projectImages", projectImages)

    const projectCards = [
        {
            name: "Online nature",
            url: "https://online-nature-pf-front-git-main-ezeluiten.vercel.app/",
            frontend: ['React', 'Auth0', 'Redux', 'styled-components', 'vanilla js', 'material ui', 'formik'],
            backend: ['Express', 'MercadoPago', 'Mongo', 'Moongose'],
            backImg: projectImages[1],
            description: 'experience_card_job2_goals_title_text'
        },
        {
            name: "7devsNFT",
            url: "https://7devsnft.netlify.app",
            frontend: ['React', 'Redux', 'styled-components', 'vanilla js', 'material ui', 'ReactForms'],
            backend: ['Express', 'MercadoPago', 'Metamask', 'Mongo', 'Moongose', 'JSONWebTokens'],
            backImg: projectImages[0],
            description: 'experience_card_job3_goals_title_text'
            
        },
        {
            name: "Pokemons App",
            url: "https://pokemons-info-2841.netlify.app",
            frontend: ['React', 'Redux', 'styled-components', 'vanilla js', 'ReactForms'],
            backend: ['Express', 'PosgreSQL', 'sequalize'],
            backImg: projectImages[2],
            description: 'experience_card_job5_goals_title_text'

        }
    ]

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                modules: [Navigation, Pagination, Scrollbar, A11y],
                projectCards,
                projectImages
            };
        },
        methods: {
            onSwiper(swiper) {
                console.log(swiper);
            },
            onSlideChange() {
                console.log('slide change');
            },
        },
    };
</script>
<style >
    .swiper-container{
        position: relative;
        width: 100%;
        height: 85vh;
        display:flex;
        justify-content:center;
        align-items:center;
        box-sizing: border-box;
    }
    .projects-card{
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        text-decoration: none;
        color: var(--primary-font-color);
        width: 90%;
        height: 100%;
        box-sizing: border-box;
    }
    .slide-content-container{
        position: relative;
        width: 100%;
        height: 100%;
        display:flex;
        justify-content:center;
        align-items:center;
        box-sizing: border-box;
    }
    .header-card{
        display:flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items: flex-start;
        height: 380px;
        width: 90%;
        flex-wrap: wrap;
        border-radius: 10px 10px 0px 0px;
        overflow:hidden;
        box-sizing: border-box;
        padding: 10px;
        background-repeat: no-repeat;
        background-size: 210% 110%;
    }
    .frontend-technologies-container{
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: 0px 10px;
        width: 90%;
        padding: 10px;
        box-sizing: border-box;
    }
    .frontend-technologies{
        background-color: var(--terciary-bg-color);
        box-shadow: var(--first-shadow);
        border-radius: 6px;
        padding: 5px 10px;

    }
    .backend-technologies-container{
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: 0px 10px;
        width: 90%;
        box-sizing: border-box;
    }
    .backend-technologies{
        background-color: var(--primary-border-color);
        box-shadow: var(--first-shadow);
        padding: 5px 10px;
        border-radius: 6px;
    }
    .footer-card{
        display:flex;
        flex-wrap: wrap;
        justify-content:flex-start;
        align-items:flex-start;
        width:90%;
        background-color:var(--terciary-bg-color);
        margin-bottom:40px;
        border-radius: 0px 0px 10px 10px;
        padding:10px;
        box-sizing: border-box;
    }

    .title-container-project{
        width:100%;
        text-transform: uppercase
    }
    .description-container-project{
        width:100%
    }
</style>
