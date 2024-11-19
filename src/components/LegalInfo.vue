<template>
  <div class="legal-info">
    <h2>法人信息</h2>
    <a-form layout="vertical">
      <a-form-item>
        <div class="form-item">
          <label>法人姓名</label>
          <a-input v-model="form.legalName" placeholder="王长生" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>法人证件类型</label>
          <a-input v-model="form.legalIdType" placeholder="身份证" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>法人证件号</label>
          <a-input v-model="form.legalIdNumber" placeholder="370910**********34" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>法人手机号</label>
          <a-input v-model="form.legalPhone" placeholder="156****1234" disabled />
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  legalName: '王长生',
  legalIdType: '身份证',
  legalIdNumber: '370910**********34',
  legalPhone: '156****1234'
});
</script>

<style scoped>
.legal-info {
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.legal-info h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.form-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.form-item label {
  width: 150px; /* 设置标签的宽度 */
  margin-right: 10px; /* 标签和输入框之间的间距 */
}

input[disabled] {
  text-align: right; /* 文字右对齐 */
}
</style> 