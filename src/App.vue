<template>
  <div id="app">
    <MainSidebar />
    <router-view />
  </div>
</template>

<script setup>
import MainSidebar from './components/MainSidebar.vue';
</script>

<style>
#app {
  display: flex;
}
</style>
