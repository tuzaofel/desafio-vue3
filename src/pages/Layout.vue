
<script setup>
  import Header from '../componentes/header/Header.vue'

</script>

<template>
  <div class="screen">
    <main class="container">
      <Header class="header"/>
      <div class="children">
        <slot></slot>
      </div>

    </main>
  </div>
</template>

<style scoped>

.screen {
  position: absolute;
  width: 100vw;
  height: 90vh;
  display: block;
  left: 0px;
  top: 0px;
  background-color: white;
}
.header{
    top: 0px
}
.container {
    max-width: 1080px;
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: white;
  }

  .children{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
</style>
