<template >
    <div class="paticles-container">
        <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" />

        <vue-particles
            id="tsparticles"
            :particlesLoaded="particlesLoaded"
            :options="{
                background: {
                    color: {
                        value: ''
                    }
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push'
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse'
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40
                        },
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: '#f5f5f5' 
                    },
                    links: {
                        color: '#f5f5f5',
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: 'bounce',
                        random: false,
                        speed: 6,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 80
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: { min: 1, max: 5 }
                    }
                },
                detectRetina: true
            }"
        />
    </div>
</template>
<script lang="ts">

import {mapState} from "vuex"

export default {
    data() {
        return {
            
        }
    },
    computed:{
        ...mapState(['isAppThemeDark'])
    },
    components:{
    },
    
};
</script>
<style >
    .paticles-container{
        width: 700px !important;
        height: 100vh !important;
        position: relative;
    }
</style>


<!-- :options="{
    background: {
        color: {
            value: '#212121'
        }
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push'
            },
            onHover: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: '#ffffff'
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'bounce'
            },
            random: false,
            speed: 6,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: 'circle'
        },
        size: {
            value: { min: 1, max: 5 },
        }
    },
    detectRetina: true
  }" -->