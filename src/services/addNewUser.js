

async function addNewUser(userData){
    try{
        const allUsers = await fetch('https://fakestoreapi.com/users').then(res=>res.json())
        const userNames = allUsers.map((user) => user.username);

        if (userNames.includes(userData.username)){
            return {done: false, erro: "Usuário já existe"}
        }
        return {done: true, erro: "Usuário cadastrado"}

    }catch(error){
        return {done: false, erro: error}
    }
}


export default addNewUser;