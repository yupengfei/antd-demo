<template>
  <div class="brokerage-service-view">
    <h1>经纪服务</h1>
    <BrokerageService />
  </div>
</template>

<script setup>
import BrokerageService from '../components/BrokerageService.vue';
</script>

<style scoped>
.brokerage-service-view {
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}
</style> 