
<script setup>
    import Logo from '../componentes/Logo.vue';
    import FormField from "../componentes/FormField.vue";
    import validation from '../utils/validations.js';
    import autenticate from '../services/auth'
    import getUtilities from '../utils/utils.js';
    import Layout from './Layout.vue';
    import {onBeforeUnmount, ref, onMounted} from 'vue';

    const utils = getUtilities();

    const children_refs = utils.ref([]);
    const navigateToPlans = () =>  {
        utils.router.push('/plans');
    };

    const windowWidth = ref(window.innerWidth);
    const windowHeight = ref(window.innerHeight);

    const updateWindowSize = () => {
      windowWidth.value = window.innerWidth;
      windowHeight.value = window.innerHeight;
      console.log(windowWidth.value, windowHeight.value)
    };
    onMounted(() => {
        updateWindowSize();
        window.addEventListener('resize', updateWindowSize);
    });
    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateWindowSize);
    })

    

    const fields = [
        {
            name: "email",
            placeholder: "Seu e-mail",
            label: "E-mail",
            type: "email ",
            validate: validation.email
        },
        {
            name: "username",
            placeholder: "Nome do usuário",
            label: "Usuário de acesso",
            type: "text ",
            validate: validation.username
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
            username: form_state.user_inputs.username,
            password: form_state.user_inputs.password
        };

        const token = autenticate(loginData);
        if (token.token != ""){
            utils.store.commit("login", loginData.username, token.token)
        }else{
            console.log("Usuario ou senha incorretos")
        }

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
    <Layout>
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
    </Layout>
</template>

<style scoped>

    .container{
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }
    .form-container{

        width: 300px;
    }
    .login-card{
        margin-top: 5%;
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
        background-color: v-bind("utils.store.state.theme.buttonColor");
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