

<script setup>
    import Logo from '../componentes/Logo.vue';
</script>

<template>
    <main>
        <Logo width="120px"/>
        <div class="subtitle-wrapper">
            <text class="subtitle"> Você está muito próximo de mudar a forma de</text>
            <text class="link">hospedar seu site</text>
        </div>
    </main>
</template>

<style scoped>
    main{
        display: flex;
        flex-direction: column;
        background-color: rgb(250, 250, 252);
        margin-bottom: 20px;
    }
    .subtitle-wrapper{
        display: flex;
        flex-direction: column;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
    }
    .link{
        color: rgb(243, 1, 104);
        text-decoration: underline;
        cursor: pointer;
    }
</style>
