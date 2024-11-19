<template>
  <div class="business-info">
    <h2>工商信息</h2>
    <a-form layout="vertical">
      <a-form-item>
        <div class="form-item">
          <label>社会统一信用代码</label>
          <a-input v-model="form.creditCode" placeholder="31FHDFJ129803923" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>成立日期</label>
          <a-input v-model="form.establishmentDate" placeholder="2024-12-12" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>营业执照截止有效期</label>
          <a-input v-model="form.licenseExpiry" placeholder="2024-12-12" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>注册币种</label>
          <a-input v-model="form.currency" placeholder="人民币" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>注册资本（万元）</label>
          <a-input-number v-model="form.registeredCapital" placeholder="200" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>机构注册地址</label>
          <a-input v-model="form.registeredAddress" placeholder="山东省济南市历下区经十路舜泰广场3区4栋12楼1203" disabled />
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  creditCode: '31FHDFJ129803923',
  establishmentDate: '2024-12-12',
  licenseExpiry: '2024-12-12',
  currency: '人民币',
  registeredCapital: 200,
  registeredAddress: '山东省济南市历下区经十路舜泰广场3区4栋12楼1203'
});
</script>

<style scoped>
.business-info {
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.business-info h2 {
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

input[disabled], .ant-input-number-input {
  text-align: right; /* 文字右对齐 */
}
</style> 