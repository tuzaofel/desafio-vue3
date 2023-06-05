


async function autenticate (loginData) {
    const str_loginData = JSON.stringify(loginData);
    const token = await fetch('https://fakestoreapi.com/auth/login', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:str_loginData
        })
            .then(res=> res.json())
            .catch(error => {return {"token": ""}})
    console.log(token);
    return token
}

export default autenticate;