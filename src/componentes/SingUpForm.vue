
<script setup>
    
    import FormField from "../componentes/FormField.vue";
    import validation from '../utils/validations.js';
    import getUtilities from '../utils/utils.js';
    import addNewUser from '../services/addNewUser';

    const utils = getUtilities();

    const children_refs = utils.ref([]);
    const checked = utils.ref(false);
    
    const goToWelcome = () => {
        utils.router.push('/welcome');
    }

    const fields = [
        {
            name: "name",
            placeholder: "Informe seu nome completo",
            label: "Nome completo",
            type: "text ",
            validate: validation.name
        },
        {
            name: "username",
            placeholder: "Nome do usuário",
            label: "Usuário de acesso",
            type: "text ",
            validate: validation.username
        },
        {
            name: "cel",
            placeholder: "(99) 99999-0000",
            label: "Celular",
            type: "tel ",
            mask:['(##) #####-####'],
            validate: validation.phone
        },
        {
            name: "email",
            placeholder: "Informe seu e-mail",
            label: "E-mail",
            type: "email ",
            validate: validation.email
        },
        {
            name: "password",
            placeholder: "",
            label: "Senha",
            type: "password",
            validate: validation.password
        },
        {
            name: "confirmPassword",
            placeholder: "",
            label: "Confirme sua senha",
            type: "password",
            validate: (input) => {
                if(input != getFormState().user_inputs.password){
                    return "A confirmação de senha deve ser igual a senha."
                }
                return "";
            }
        },
        {
            name: "site",
            placeholder: "Meu Site",
            label: "Nome do seu site",
            type: "text",
            validate: validation.notRequired
        },
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
        const form_state = getFormState();
        if (!form_state.valid && !checked.value){
            console.log(form_state);
            return;
        }
        const res = addNewUser(form_state.user_inputs).then(resp => resp)
    }
    const onUserInput = () =>{
        const form_state = getFormState();
    }


</script>

<template>
    <main class="container">
        <div class="form-container">
            
            <div class="form-card">
                <div class="header-form">
                    <text class="title">Dados pessoais</text>
                    <text class="subtitle">Informe seus dados pessoais para acesso à sua conta</text>
                </div>
                <div class="form-fields">
                    <FormField v-for="(field, index) in fields.slice(0,-1)" :field="field" :key="index" @userInput="onUserInput" ref="children_refs"/>
                </div>
                
                <div class="form-card2">
                    <text class="title2">Dados do seu site</text>
                    <FormField v-for="(field, index) in fields.slice(fields.length -1)" :field="field" :key="index" @userInput="onUserInput" ref="children_refs"/>
                    
                    <div class="check-wrapper">
                        <input class="checkbox" v-model="checked" type="checkbox"> 
                        <div class="check-label">
                            <span>Ao concluir com seu cadastro você concorda com nossos </span>
                            <span class="link">termos de uso </span>
                            <span> e </span>
                            <span class="link">políticas de privacidade.</span>
                        </div>
                    </div>
                    <button @click="onSubmit">CRIAR CONTA</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

    .container{
        background-color: white;
        max-width: 370px;
        display: flex;
        margin-bottom: 20px;
        
    }
    .form-container{
        width: 350px;
    }
    .form-card{
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        padding: 3%;
        background-color: white;
        border-style: ridge;
        border: gray solid 1px;
        border-radius: 2px;
    }
    .form-card2 {
        border-top: black solid 1px;
        margin-top: 15px;
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
        font-size: 16px;
        font-weight: bold;
    }
    .title2{
        font-size: 16px;
        font-weight: bold;
    }
    .subtitle{
        margin-top: 0px;
        font-size: 10px;
    }
    
    .checkbox{
        cursor: pointer;
    }
    button{
        margin-top: 10px;
        width: 100%;
        padding: 15px;
        color: white;
        background-color: rgb(243, 1, 104);
        font-size: 12px;
        font-weight: lighter;
    }

    .check-wrapper{
        margin-top: 15px;
        margin-bottom: 15px;
        display: flex;
        align-items: start;
    }
    .check-label{
        font-size: 10px;
    }
    .link{
        text-decoration: underline;
        cursor: pointer
    }
</style>