

<script setup>
    import  getUtilities from '../../utils/utils';
    import Logo from '../Logo.vue';
    import Profile from './Profile.vue'

    const utils = getUtilities();


</script>

<template>
    <main>
        <header>
            <div class="container">
                <div class="logo-wrapper">
                    <Logo width="100px" />
                </div>
                <Profile />
            </div>
        </header>
    </main>
</template>

<style scoped>
    main{
        width: 100%;
        
    }
    header {
        position: relative;
        top: 0px;
        padding: 4px 0px;
        width: 100%;
        background-color: #f1f1f1;
        z-index: 9999;
    }
    .logo-wrapper{
        margin: 10px;
    }
    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
</style>