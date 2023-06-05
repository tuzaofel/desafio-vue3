

<script setup>
    import Plan from '../componentes/Plan.vue';
    import plansData from '../data/plansData.js';
    import FormHeader from '../componentes/FormHeader.vue'

</script>

<template>
    <main>
        <FormHeader />
        <text class="choose">Escolha o seu plano</text>
        <div class="plans">
            <Plan v-for="(planData, planIndex) in plansData" :planData="planData" :planIndex="planIndex" :selectedMode="false" />
        </div>
    </main>
</template>

<style scoped>
    main{
        display: grid;
        background-color: rgb(250, 250, 252)
    }
    .choose{
        margin-top: 20px;
        font-weight: bold;
        font-size: 12px;
        margin: 10px;
        text-align: center;
    }
    .plans{
        display: flex;
        margin: 10px;
    }
</style>
