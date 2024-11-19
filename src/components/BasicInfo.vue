<template>
  <a-form :model="form" layout="vertical">
    <a-form-item label="组织形式">
      <a-input v-model="form.organizationType" placeholder="请输入组织形式" />
    </a-form-item>
    <a-form-item label="行政区域">
      <a-input v-model="form.administrativeRegion" placeholder="请输入行政区域" />
    </a-form-item>
    <a-form-item label="经纪机构类型">
      <a-input v-model="form.brokerageType" placeholder="请输入经纪机构类型" />
    </a-form-item>
    <a-form-item label="自有流动资金(万元)">
      <a-input-number v-model="form.funds" placeholder="请输入自有流动资金" />
    </a-form-item>
    <a-form-item label="组织办公地址">
      <a-input v-model="form.officeAddress" placeholder="请输入组织办公地址" />
    </a-form-item>
    <a-form-item label="主管部门">
      <a-input v-model="form.supervisoryDepartment" placeholder="请输入主管部门" />
    </a-form-item>
    <a-form-item label="批准部门">
      <a-input v-model="form.approvalDepartment" placeholder="请输入批准部门" />
    </a-form-item>
    <a-form-item label="组织机构简介">
      <a-textarea v-model="form.introduction" placeholder="请输入组织机构简介" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="submit">提交</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  organizationType: '',
  administrativeRegion: '',
  brokerageType: '',
  funds: null,
  officeAddress: '',
  supervisoryDepartment: '',
  approvalDepartment: '',
  introduction: ''
});

const submit = () => {
  console.log(form.value);
  // 提交表单的逻辑可以在这里实现
};
</script>

<style scoped>
/* 可以在这里添加样式 */
</style> 