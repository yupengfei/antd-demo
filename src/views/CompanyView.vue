<template>
  <div class="company-view">
    <div class="info-container">
      <BasicInfo />
      <BusinessInfo />
    </div>
    <LegalInfo />
  </div>
</template>

<script setup>
import BasicInfo from '../components/BasicInfo.vue';
import BusinessInfo from '../components/BusinessInfo.vue';
import LegalInfo from '../components/LegalInfo.vue';
</script>

<style scoped>
.company-view {
  display: flex;
  flex-direction: column;
}

.info-container {
  display: flex;
  width: 100%;
}

.info-container > * {
  flex: 1;
  margin: 10px;
}
</style>

