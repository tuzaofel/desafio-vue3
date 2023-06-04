
<script setup>
    import Logo from '../componentes/Logo.vue';
    import FormField from "../componentes/FormField.vue";
    import validation from '../utils/validations.js';
    import { ref} from 'vue';
    import {useRouter} from 'vue-router'
 

    const children_refs = ref([]);
    const router = useRouter();

    const navigateToSingUP = () =>  {
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
    
    const getUserInputs = () => {
        let user_inputs = {}
        children_refs._rawValue.map((children, index) => user_inputs[fields[index].name] = children.user_input);
        if(!Object.values(user_inputs).filter(value => value).length){clearAll()}
    }

    const onSubmit = () =>{
        children_refs._rawValue.map(children => children.show_error = true)
    }

    const onUserInput = () =>{getUserInputs();}

    const clearAll = () =>{ 
        children_refs._rawValue.map(children => children.user_input = "");
        children_refs._rawValue.map(children => children.show_error = false)
    }

    
</script>

<template>
    <main class="container">
        <div class="form-container">
            <Logo />
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
                <div @click="navigateToSingUP()"><text class="link">Cadastre-se</text></div>
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
        background-color: rgb(243, 1, 104);
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