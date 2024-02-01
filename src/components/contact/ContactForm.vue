<template >
    <form @submit.prevent="handleSubmit" class="contact-form-container">
        <div class="name-container">
            <input placeholder="Name:" v-model="name" type="text" />
        </div>
        <div class="email-subject-container">
            <div class="email">
                <input placeholder="Email:" v-model="email" type="text" />

            </div>
            <div class="subject">
                <input placeholder="Subject:" v-model="subject" type="text" />
                
            </div>
            
        </div>
        <div class="message-container">
            <input placeholder="Message:" v-model="message" type="text" />

        </div>
        <div class="button-container">
            <button type="submit" class="send-button">
                <h4>
                    {{ $t('send_message') }}

                </h4>
            </button>
        </div>
    </form>
</template>
<script lang="ts">
export default {
    data() {
        return {
            name : '',
            email : '',
            subject : '',
            message : '',
        }
    },
    methods:{
        handleSubmit(event){
			console.log("TCL: handleSubmit -> event", event)
            const data = {
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message,
                
            }
            this.name = ""
            console.log("TCL: handleSubmit -> data", data)
        }
    }
    
}
</script>
<style >
    .contact-form-container{
        width: 650px;
        height: 500px;
        background-color: transparent;
        margin: 10px;
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        box-sizing: border-box;  
        gap: 20px;     
    }

    .name-container{
        width: 100%;
        display:flex;
        flex-direction: row;
        box-sizing: border-box;
        input{
            width:100%;
            height: 53px;
            border-radius:10px;
            box-sizing: border-box;
            background-color: var(--terciary-bg-color);
            border: none;
            padding-left: 10px; 
        };
        input::placeholder {
            padding: 15px;
            color: var(--primary-font-color);
        }
        
    }
    .email-subject-container{
        box-sizing: border-box;
        width: 100%;
        display:flex;
        flex-direction: row;
        gap: 30px
        
    }
    .email{
        width:49%;
        height: 53px;
        box-sizing: border-box;
        input{
            width:100%;
            box-sizing: border-box;
            border-radius: 10px;
            height: 100%;
            background-color: var(--terciary-bg-color);
            border: none;
            padding-left: 10px; 
        }
        input::placeholder {
            padding: 15px;
            color: var(--primary-font-color);
        }
    }
    .subject{
        width:49%;
        box-sizing: border-box;
        height: 53px;
        input{
            border-radius: 10px;
            box-sizing: border-box;
            width:100%;
            height: 100%;
            background-color: var(--terciary-bg-color);
            border: none;
            padding-left: 10px; 
        }
        input::placeholder {
            padding: 15px;
            color: var(--primary-font-color);
        }
        
    }
    .message-container{
        box-sizing: border-box;
        width: 100%;
        display:flex;
        flex-direction: row;
        height: 200px;
        input{
            border-radius: 10px;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            background-color: var(--terciary-bg-color);
            border: none;
            padding-left: 10px; 
        }
        input::placeholder {
            padding: 15px;
            color: var(--primary-font-color);
        }
    }
    .button-container{
        text-transform: uppercase;
        width: 100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .send-button{
        width: 327px;
        height: 53px;
        border: 1px solid var(--primary-border-color);
        background-color: var(--primary-border-color);
        color: var(--primary-font-color);
        border-radius: 10px;
    }
</style>