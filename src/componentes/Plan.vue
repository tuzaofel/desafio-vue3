

<script setup>
    import CompostText from './CompostText.vue';
    import { defineProps } from 'vue';
    import {useStore} from 'vuex';
    import {useRouter} from 'vue-router'
    const {planData, planIndex, selectedMode} = defineProps(['planData', 'planIndex', 'selectedMode']);
    
    const store = useStore();
    const router = useRouter();
    const selectPlan = () => {
        store.commit("setPlan", planIndex )
        router.push('/singup');
    }
    const navigateToPlans = () =>  {
        router.push('/plans');
    };
</script>


<template>
    <div class="main-wrapper">
        <div class="pretitle">
            <div class="pretitle-not-selected" v-if="planData.pretitle != '' && !selectedMode">
                {{planData.pretitle }}
            </div>
            <div class="pretitle-selected" v-if="selectedMode">
                PLANO ESCOLHIDO
            </div>
        </div>
        <div :class="'container-deg-' + selectedMode">
            <text class="title">
                {{planData.title}}
            </text>
            <text class="price">
                <text class="prefix">{{planData.price.prefix}}</text>
                <text class="value">{{planData.price.value}}</text>
                <text class="sufix">{{planData.price.sufix}}</text>
            </text>
            <text v-for="subtitle in planData.subtitles" class="subtitle">
                {{subtitle}}
            </text>
            <text class="indication">
                {{planData.indication}}
            </text>
            <div class="button-wrapper">
                <button v-if="!selectedMode" @click="selectPlan">{{planData.buttonCaption}}</button>
            </div>
            
            <div class="desctiptions">
                <div class="description" v-for="description in planData.descriptions">
                    <CompostText class="description-title" :text="description.title" />
                    
                    <div class="item" v-for="feature in description.features">
                        <text class="mark">✓</text>
                        <CompostText class="feature" :text="feature" />
                    </div>
                </div>
            </div>
        </div>
        <div v-if="selectedMode" class="change-plan-wrapper">
            <button class="change-plan" @click="navigateToPlans()">Trocar plano</button>
        </div>
    </div>
</template>


<style scoped>
    .main-wrapper{
        width: 200px;
        box-sizing: border-box;
        background-color: white;
        margin: 5px;
    }

    .pretitle{
        background-color:transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 22px;
        translate: 0% -50%;
        margin-bottom: -20px;
    }
     .pretitle-selected {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        color: white;
        padding: 4px;
        font-size: 10px;
        border-radius: 8px;
    }

     .pretitle-not-selected {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(16, 195, 0);
        color: white;
        padding: 4px;
        font-size: 10px;
        border-radius: 8px;
    }

    .container-deg-false{
        margin: 20px;
        display: flex;
        flex-direction: column;
    }
    .container-deg-true{
        margin: 20px;
        display: flex;
        flex-direction: column;
        -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
        mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    }

    text{
        font-size: 8px;
    }
    .title{
        font-size: 14px;
        text-align: center;
        color:dimgrey;
        font-weight: bold;
        margin-bottom: 5px;
        margin-top: 0px;
    }

    .price{
        font-size: 14px;
        text-align: center;
        color:rgb(243, 1, 104);
        font-weight: bold;
        margin-bottom: 10px;
    }

    .price .sufix
    .price .prefix{
        font-size: 16px;
    }
    .price .value{
        font-size: 20px;
    }

    .subtitle{
        text-align: center;
        margin-bottom: 5px;

    }

    .indication{
        text-align: center;
        margin-bottom: 10px;
        margin-top: 10px;
        padding: 10px;
        border-top: rgba(128, 128, 128, 0.466) solid 1px;
        border-bottom: rgba(128, 128, 128, 0.466) solid 1px;
    }

    .button-wrapper{
        width: 100%;
        display: flex;
        justify-content: center;
        
    }

    button{
        background-color: rgb(243, 1, 104);
        color: white;
        font-size: 10px;
        font-weight: lighter;
        width: 80%;
        height: 30px;
        border: none;
        border-radius: 2px;
        cursor: pointer;
    }
    .description{
        display: grid;
        margin-top: 10px;;
    }
    .description-title{
        font-size: 10px;
        font-weight: bold;
        padding: 0px;
        margin-bottom: 5px;
        margin-top: 5px;
    }
    .item{
        display: flex;
        flex-direction: row;
        margin-bottom: 5px;
    }
    .mark {
        font-weight: bolder;
        flex: 1;
         
    }
    .feature{
        flex: 10;
        font-size: 8px;
    }
    .change-plan-wrapper{
        display: flex;
        justify-content: center;

    }
    .change-plan{
        background-color: white;
        color: black;
        border: black solid 1px;
        translate: 0% -150%;
        font-weight: bold;
    }


</style>
