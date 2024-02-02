<template >
    <div class="contact-view-container">
        <h1 class="contact-section-title">{{ $t('contact_section_text') }}</h1>
        <ContactForm/>
    </div>
</template>
<script lang="ts">
    import ContactForm from '../components/contact/ContactForm.vue'
    export default {
        data() {
            return {
                
            }
        },
        components:{
            ContactForm
        },
    }
</script>
<style >
    .contact-view-container{
        width: 100%;
        box-sizing: border-box;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        color: var(--primary-font-color);
        position: relative;
        background-color: var(--transparent-bg-color);
    }
    
    .contact-section-title{
        text-transform: uppercase;
        border-bottom: 4px solid var(--primary-border-color);
        padding-bottom: 10px;
        margin-top: 20px;
        margin-bottom: 20px;

    }
</style>