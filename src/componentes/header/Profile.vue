

<script setup>
    import getUtilities from '../../utils/utils';
    const utils = getUtilities();

    const login = () =>{
        utils.router.push({name: "login"});
    }
    const logout = () =>{
        utils.store.commit("logout");
    }

</script>

<template>
    <main>
        <div class="container">
            <div class="username-and-button" v-if="!utils.store.state.auth.authorized">
                <div  @click=login class="header-button">Logar</div>
            </div>
            <div class="username-and-button" v-else>
                <text class="username">{{ `Olá, ${utils.store.state.auth.username}`}}</text>
                <div  @click=logout class="header-button">Sair</div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    
    .container{
        display: flex;
        flex-direction: row;
        justify-content: end;
        font-size: 18px;
        margin-right: 10px;
    }
    .username-and-button{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .username{
        margin-right: 5px;
        color: #ff8a00;
        font-weight: bold;
        text-decoration: wavy;
    }
    .header-button {
        display: flex;
        padding: 12px 24px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        border-radius: 30px;
        background: linear-gradient(to right, #ff8a00, #e52e71);
        color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: background 0.3s ease;
        cursor: pointer;
      }
      
      /* Hover effect */
      .header-button:hover {
        background: linear-gradient(to right, #e52e71, #ff8a00);
      }
</style>