

<script setup>
    import CompostText from '../componentes/CompostText.vue';
    import { defineProps } from 'vue';
    const {planData, planIndex} = defineProps(['planData', 'planIndex']);

    console.log(globalState.selectedPlan);

    const selectPlan = () => {
        globalState.selectedPlan = planIndex;
        console.log(globalState);
    }

</script>


<template>
    <div class="main-wrapper">
        <div class="pretitle" v-if="planData.pretitle != ''">
            {{planData.pretitle }}
        </div>
        <div class="container">
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
                <button @click="selectPlan">{{planData.buttonCaption}}</button>
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
        position: absolute;
        background-color: rgb(16, 195, 0);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        padding: 4px;
        color: white;
        font-size: 10px;
        border-radius: 8px;
        translate: 63.5% -50%;
    }
    .container{
        margin: 20px;
        display: flex;
        flex-direction: column;
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
</style>
