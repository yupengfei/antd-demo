<template>
  <div class="basic-info">
    <h2>基本信息</h2>
    <a-form layout="vertical">
      <a-form-item>
        <div class="form-item">
          <label>行政区域</label>
          <a-input v-model="form.administrativeRegion" placeholder="历下区" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>经纪机构类型</label>
          <a-input v-model="form.brokerageType" placeholder="国有经纪机构" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>自有流动资金（万元）</label>
          <a-input-number v-model="form.funds" placeholder="300" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>组织办公地址</label>
          <a-input v-model="form.officeAddress" placeholder="山东省济南市历下区经十路舜泰广场3区4栋12楼1203" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>主管部门</label>
          <a-input v-model="form.supervisoryDepartment" placeholder="——" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>批准部门</label>
          <a-input v-model="form.approvalDepartment" placeholder="——" disabled />
        </div>
      </a-form-item>
      <a-form-item>
        <div class="form-item">
          <label>组织机构简介</label>
          <a-textarea v-model="form.introduction" placeholder="昨日17点44分左右，离岸人民币兑美元升破7.10关口，日内大涨超600点，创去年12月以来新高。在岸人民币兑美元16点30收盘报7.1385，较上一交易日涨765个基点。" disabled />
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  administrativeRegion: '历下区',
  brokerageType: '国有经纪机构',
  funds: 300,
  officeAddress: '山东省济南市历下区经十路舜泰广场3区4栋12楼1203',
  supervisoryDepartment: '——',
  approvalDepartment: '——',
  introduction: '昨日17点44分左右，离岸人民币兑美元升破7.10关口，日内大涨超600点，创去年12月以来新高。在岸人民币兑美元16点30收盘报7.1385，较上一交易日涨765个基点。'
});
</script>

<style scoped>
.basic-info {
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.basic-info h2 {
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