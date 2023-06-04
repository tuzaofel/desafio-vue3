

const email_pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const password_pattern = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");

const validation = {
    email: (input) => {
        if (input == ""){return "Este campo é obrigatório!"}
        if (!email_pattern.test(input)){return "Formato de e-mail inválido"}
        if (input.length > 100){return "E-mail muito longo"}
        return "";
    },
    password: (input) => {
        if (input.length < 8){return "A senha deve conter no mínimo 8 caracteres"}
        if (input.length > 16){return "A senha deve conter no máximo 16 caracteres"}
        if (!password_pattern.test(input)){return "A senha deve conter letra maiúscula, minúscula e número."}
        return "";
    }
}

export default validation;