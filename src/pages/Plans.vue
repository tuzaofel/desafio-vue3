

<script setup>
    import Plan from '../componentes/Plan.vue';
    import plansData from '../data/plansData.js';
    import FormHeader from '../componentes/FormHeader.vue';
    import Layout from './Layout.vue';
    import {ref, onMounted, onBeforeUnmount} from 'vue';


    const deviceStyle = {
        desktop:{
            flexDirection: 'column'
        },
        mobile:{
            flexDirection: 'row'
        }
    }
    const device = ref({});
    const updateWindowSize = () => {
        
        if ( window.innerWidth > 575 ){
            device.value = deviceStyle.mobile;
        }else{
            device.value = deviceStyle.desktop;
        }
    }
    onMounted(() => {
        updateWindowSize();
        window.addEventListener('resize', updateWindowSize);
    });
    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateWindowSize);
    })



</script>

<template>
    <Layout>
        <main>
            <FormHeader />
            <text class="choose">Escolha o seu plano</text>
            <div class="plans">
                <Plan v-for="(planData, planIndex) in plansData" :planData="planData" :planIndex="planIndex" :selectedMode="false" />
            </div>
        </main>
    </Layout>
</template>

<style scoped>
    main{
        display: flex;
        background-color: rgb(250, 250, 252);
        width: 100%;
        min-width: 250px;
        flex-direction: column;
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
        flex-direction: v-bind('device.flexDirection');
        margin: 1%;
        justify-content: center;
        align-self: center;
        
    }
</style>
