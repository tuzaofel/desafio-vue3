

<script setup>
    import Logo from '../assets/logo_localweb_bg0.png';
    import {useRouter} from 'vue-router';
    import { defineProps } from 'vue';


    const { width } = defineProps(["width"]);

    const router = useRouter();
    const navigateToHome = () => {
        router.push('/');
    }

</script>

<template>
    <div class="logo" @click="navigateToHome" :style="{width:width}">
        <img :src="Logo"/>
    </div>
</template>

<style scoped>
.logo{
    display: flex;
    margin: auto;
    cursor: pointer;
    
}
img{
    display: block;
    width: 100%;
    height: auto;
}
</style>