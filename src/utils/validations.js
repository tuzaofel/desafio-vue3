

const email_pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const password_pattern = new RegExp("^(?=.*[a-zA-Z])(?=.*\d).+$");


const validation = {
    username: (input) => {
        if (input == ""){return "Este campo é obrigatório!"}
        if (input.length < 4){return "O usuário deve conter no mínimo 4 caracteres"}
        if (input.length > 16){return "O usuário deve conter no máximo 16 caracteres"}
        return "";
    },
    name: (input) => {
        if (input == ""){return "Este campo é obrigatório!"}
        if (input.length < 8){return "O nome deve conter no mínimo 8 caracteres"}
        if (input.length > 50){return "O nome deve conter no máximo 50 caracteres"}
        return "";
    },
    email: (input) => {
        if (input == ""){return "Este campo é obrigatório!"}
        if (!email_pattern.test(input)){return "Formato de e-mail inválido"}
        if (input.length > 100){return "E-mail muito longo"}
        return "";
    },
    password: (input) => {
        if (input.length < 6){return "A senha deve conter no mínimo 6 caracteres"}
        if (input.length > 32){return "A senha deve conter no máximo 32 caracteres"}
        if (!password_pattern.test(input)){return "A senha deve conter pelo menos uma letra e um número."}
        return "";
    },
    phone: (input) => {
        if (input.length == 0){return "Este campo é obrigatório!"}
        if (input.length != 15){return "Faltam algarismo no número"}
        return "";
    },
    notRequired: (input) => {return ""}
}

export default validation;