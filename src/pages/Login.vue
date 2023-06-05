
<script setup>
    import Logo from '../componentes/Logo.vue';
    import FormField from "../componentes/FormField.vue";
    import validation from '../utils/validations.js';
    import { ref, watch} from 'vue';
    import {useRouter} from 'vue-router'
    import autenticate from '../services/auth'
    import {useStore} from 'vuex'
    
    const store = useStore();

    const children_refs = ref([]);
    const router = useRouter();

    const navigateToPlans = () =>  {
        router.push('/plans');
    };

    const fields = [
        {
            name: "email",
            placeholder: "Seu e-mail",
            label: "E-mail",
            type: "email ",
            validate: validation.email
        },
        {
            name: "password",
            placeholder: "Sua Senha",
            label: "Senha",
            type: "password",
            validate: validation.password
        }
    ]
    
    const getFormState = () => {
        let user_inputs = {}
        children_refs._rawValue.map((children) => user_inputs[children.field.name] = children.user_input);
        let errors = {}
        children_refs._rawValue.map((children) => errors[children.field.name] = children.error);
        const valid = Object.values(errors).filter(erro => erro).length === 0;
        return {
            user_inputs: user_inputs,
            errors: errors,
            valid: valid
        }
    }

    const onSubmit = () =>{
        children_refs._rawValue.map(children => children.show_error = true)
        const form_state = getFormState()
        console.log(form_state)
        if (!form_state.valid){return}
        let loginData = {
            username: form_state.user_inputs.email,
            password: form_state.user_inputs.password
        };

        // test mode
        if ('test' == 'test'){
            loginData = {
                username: 'mor_2314',
                password: '83r5^_'
            }
        }
        // test mode
        const token = autenticate(loginData);

    }

    const onUserInput = () =>{
        const form_state = getFormState();
    }

    const clearAll = () =>{ 
        children_refs._rawValue.map(children => children.user_input = "");
        children_refs._rawValue.map(children => children.show_error = false)
    }

</script>

<template>
    <main class="container">
        <div class="form-container">
            <Logo width="30%"/>
            <div class="login-card">
                <div class="header-form">
                    <text class="title">Entre na sua conta</text>
                    <text class="subtitle">Para acessar sua conta informe seu e-mail e senha</text>
                </div>
                <div class="form-fields">
                    <FormField v-for="(field, index) in fields" :field="field" :key="index" @userInput="onUserInput" ref="children_refs"/>
                </div>
                <text class="forgot-password">Esqueci minha senha</text>
            <button @click="onSubmit">FAZER LOGIN</button>
            </div>
            <div class="singup">
                <text class="mensage">Ainda não tem conta?</text>
                <div @click="navigateToPlans()"><text class="link">Cadastre-se</text></div>
            </div>
        </div>
    </main>
</template>

<style scoped>

    .container{
        background-color: rgb(250,250,252);
        min-width: 500px;
        min-height: 500px;
        width: 100%;
        height: 100%;
        display: flex;
    }
    .form-container{
        width: 300px;
    }
    .login-card{
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        padding: 3%;
        background-color: white;
        border-style: ridge;
        border: gray solid 1px;
        border-radius: 2px;
    }
    .form-fields{
        min-width: 200px;
        width: 100%;
    }
    .form-field{
        margin-bottom: 0px;
    }
    .form-field input{
        width: 100%;
    }
    .header-form{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }
    .title{
        
        margin-bottom: 0px;
        font-size: 1.2em;
    }
    .subtitle{
        margin-top: 0px;
        font-size: 0.6em;
    }

    .forgot-password{
        width: 100%;
        margin-top: 0px;
        text-align: right;
        color: gray;
        font-size: 8px;
        cursor: pointer;
    }
    button{
        margin-top: 10px;
        padding: 15px;
        color: white;
        background-color: v-bind("store.state.theme.buttonColor");
        font-size: 12px;
        font-weight: lighter;
    }

    .singup{
        margin-top: 20px;
        display: flex;
        justify-content: center;
        font-size: 12px;
    }
    .singup .mensage{
        margin: 1px;
    }

    .singup .link{
        color: rgb(243, 1, 104);
        text-decoration: underline;
        cursor: pointer;
        margin: 1px;
    }
</style>