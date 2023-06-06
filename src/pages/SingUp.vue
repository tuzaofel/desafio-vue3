
<script setup>
    import {useStore} from 'vuex';
    import Plan from '../componentes/Plan.vue';
    import plansData from '../data/plansData.js';
    import FormHeader from '../componentes/FormHeader.vue'
    import SingUpForm from '../componentes/SingUpForm.vue'
    import Layout from './Layout.vue';
    import {ref, onMounted, onBeforeUnmount} from 'vue'

    const store = useStore();

    const deviceStyle = {
        desktop:{
            flexDirection: 'column',
            alignItems: 'center'
        },
        mobile:{
            flexDirection: 'row',
            alignItems: 'start'
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
            <div class="main-container">
                <FormHeader/>
                <div class="form-and-plan">
                    <SingUpForm class="form" />
                    <div class="plan">
                        <Plan  :planData="plansData[store.state.currentPlan]" :planIndex="store.state.currentPlan" :selectedMode="true"/>
                    </div>
                </div>
            </div>
        </main>
    </Layout>
</template>

<style scoped>
    main{
        width: 100%;
        display: flex;
        justify-content: center;

    }
    .main-container{
        background-color: rgb(250, 250, 252);
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .form-and-plan{
        background-color: rgb(250, 250, 252);
        display: flex;
        flex-direction: v-bind("device.flexDirection");
        align-items: v-bind("device.alignItems");;
        justify-content: center;
    }

    .form{
        
    }

    .plan{

    }
    
</style>