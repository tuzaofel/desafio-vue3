

<script setup>
    import { useRouter } from 'vue-router';
    import Logo from '../componentes/Logo.vue';

    const route = useRouter();

    const goToHelp = () => {
        route.push('/help')
    }

</script>

<template>
    <main class="container">
        <div class="logo"><Logo/></div>
        
        <div class="video-wrapper">
            <text class="title">Olá João,</text>
            <text class="subtitle">Seja bem vindo a sua conta de hospedagem</text>
            <div class="video">
                <iframe width="853" height="480" src="https://www.youtube.com/embed/fpa2W3YNg0Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div class="subtitle">
                <span>Caso tenha alguma dúvida, </span>
                <span @click="goToHelp" :style="{textDecoration: 'underline', cursor: 'pointer'}">visite nossa central de ajuda </span>
            </div>
            
        </div>
    </main>

</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: start;
    }
    .logo{
        flex: 1;
    }
    .video-wrapper{
        display: flex;
        flex: 5;
        flex-direction: column;
        margin: 60px;
    }
    .title{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .subtitle{
        font-size: 12px;
    }
    .video{
        margin: 20px 0px;
    }

</style>