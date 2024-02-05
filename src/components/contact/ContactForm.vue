<template >
    <form ref="emailForm" @submit.prevent="handleSubmit" class="contact-form-container">
        <div class="name-container">
            <input class="input-form" required placeholder="Name:" v-model="user_name" :name="user_name" type="text" />
        </div>
        <div class="email-subject-container">
            <div class="email">
                <input class="input-form" required placeholder="Email:" v-model="user_email" :name="user_email" type="text" />

            </div>
            <div class="subject">
                <input class="input-form" required placeholder="Subject:" v-model="subject" :name="subject" type="text" />
                
            </div>
            
        </div>
        <div class="message-container">
            <input class="input-form" required placeholder="Message:" v-model="message" :name="message" type="text" />

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
    import emailjs from 'emailjs-com';
    export default {
        data() {
            return {
                user_name : '',
                user_email : '',
                subject  : '',
                message : '',
            }
        },
        methods:{
            handleSubmit(event){
                // const data = this.$refs.emailForm
                const data = {
                    user_name: this.user_name,
                    email: this.email,
                    contact_number  : Math.random() * 50000 ,
                    message: this.message,
                    subject: this.subject
                    
                }
                console.log("TCL: handleSubmit -> data", data)
                this.sendEmail(data)
            },
            sendEmail(data){
                emailjs.init('CXKBkq93CSW21c2gl')
                emailjs.send('service_iydl0s7', 'contact_form', data, )
                    .then((result) => {
                        console.log('SUCCESS!', result.text, result);
                    }, (error) => {
                        console.log('FAILED...', error.text, error);
                });
                this.user_name = ""
                this.user_email = ""
                this.subject = ""
                this.message = ""
            }
        }
        
    }
</script>
<style >
    .contact-form-container{
        height: 500px;
        width: 600px;
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
        .input-form{
            width:100%;
            height: 53px;
            border-radius:10px;
            box-sizing: border-box;
            background-color: var(--terciary-bg-color);
            border: none;
            padding-left: 10px; 
        };
        .input-form::placeholder {
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
        .input-form{
            width:100%;
            box-sizing: border-box;
            border-radius: 10px;
            height: 100%;
            background-color: var(--terciary-bg-color);
            border: none;
            padding-left: 10px; 
        }
        .input-form::placeholder {
            padding: 15px;
            color: var(--primary-font-color);
        }
    }
    .subject{
        width:49%;
        box-sizing: border-box;
        height: 53px;
        .input-form{
            border-radius: 10px;
            box-sizing: border-box;
            width:100%;
            height: 100%;
            background-color: var(--terciary-bg-color);
            border: none;
            padding-left: 10px; 
        }
        .input-form::placeholder {
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
        .input-form{
            border-radius: 10px;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            background-color: var(--terciary-bg-color);
            border: none;
            padding-left: 10px; 
        }
        .input-form::placeholder {
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
        cursor: pointer;
    }
    @media only screen and (max-width: 1000px) and (min-width: 750px) {
        .contact-form-container{
            width: 450px;

        }
    }   
    @media (max-width: 750px) {
        .contact-form-container{
            width: 90%;

        }
    }   
    </style>