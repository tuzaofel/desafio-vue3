
<script setup>
    import {useStore} from 'vuex';
    import Plan from '../componentes/Plan.vue';
    import plansData from '../data/plansData.js';
    import FormHeader from '../componentes/FormHeader.vue'
    import SingUpForm from '../componentes/SingUpForm.vue'
    const store = useStore();
    
    
</script>

<template>
    <main>
        <div class="main-container">
            <FormHeader />
            <div class="form-and-plan">
                <SingUpForm />
                <Plan class="plan" :planData="plansData[store.state.currentPlan]" :planIndex="currentPlan" :selectedMode="true"/>
            </div>
        </div>
    </main>

</template>

<style scoped>
    .main-container{
        background-color: rgb(250, 250, 252);

    }
    .form-and-plan{
        background-color: rgb(250, 250, 252);
        display: flex;
        flex-direction: row;
        margin-top: 20px;
    }
    
</style>