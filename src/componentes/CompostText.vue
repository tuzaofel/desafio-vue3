

<script setup>
    import {defineProps} from 'vue';

    const {text}  = defineProps(["text"]);
    const text_array = text.split("_");
    
</script>

<template>
        <div class="text-wrapper">
            <span class="text" v-for="(subtext, index) in text_array">
                <text v-if="index % 2 == 0">{{subtext}}</text>
                <text v-else class="underline">{{subtext}}</text>
            </span>
        </div>
   

</template>

<style scoped>
    
    .text-wrapper{
        inline-size: 150px; 
        overflow: hidden;
        word-wrap: normal;
    }
    .text {
        
    }
    .underline{
        text-decoration: underline;
    }

</style>