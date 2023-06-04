

<script setup>
    import Logo from '../componentes/Logo.vue'
    import Plan from '../pages/Plan.vue'
    import plansData from '../data/plansData.js'

</script>

<template>
    <main>
        {{globalState.selectedPlan }}
        <Logo />
        <div class="subtitle-wrapper">
            <text class="subtitle"> Você está muito próximo de mudar a forma de</text>
            <text class="link">hospedar seu site</text>
            <text class="choose">Escolha o seu plano</text>
        </div>
        <div class="plans">
            <Plan v-for="(planData, planIndex) in plansData" :planData="planData" :planIndex="planIndex"/>
        </div>
    </main>
</template>

<style scoped>
    main{
        display: grid;
        background-color: rgb(250, 250, 252)
    }
    .subtitle-wrapper{
        display: flex;
        margin-top: 20px;
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
    .choose{
        margin-top: 20px;
        font-weight: bold;
        font-size: 12px;
        margin: 10px;
    }
    .plans{
        display: flex;
        margin: 10px;
    }
</style>
