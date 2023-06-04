

<script setup>
    import Logo from '../assets/logo_localweb_bg0.png';
    import {useRouter} from 'vue-router';

    const router = useRouter();
    const navigateToHome = () => {
        router.push('/');
    }

</script>

<template>
    <div class="logo" @click="navigateToHome">
        <img :src="Logo"/>
    </div>
</template>

<style scoped>
.logo{
    min-width: 50px;
    width: 30%;
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