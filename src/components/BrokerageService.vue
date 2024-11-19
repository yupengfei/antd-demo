<template>
  <div class="brokerage-service">
    <h2>经纪服务</h2>
    <a-table :dataSource="services" :columns="columns" rowKey="key" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { Table } from 'ant-design-vue';

const services = ref([
  {
    key: '1',
    serviceType: '基础服务',
    serviceContent: [
      '提供存量房买卖市场行情咨询',
      '导找、提供发布房源、客源信息',
      '引领买受人实地看房',
      '协助查看存量房权属证明文件',
      '协助买卖双方协商存量房买卖合同的相关条款内容'
    ].join('; '),
    chargingMethod: '按面积收费',
    chargingStandard: '按照存量房成交总价的2.2%',
    remarks: '无'
  },
  {
    key: '2',
    serviceType: '延伸服务',
    serviceContent: [
      '提供存量房买卖市场行情咨询',
      '导找、提供发布房源、客源信息',
      '引领买受人实地看房',
      '协助查看存量房权属证明文件',
      '协助买卖双方协商存量房买卖合同的相关条款内容',
      '促成交易双方签署合法有效的买卖合同'
    ].join('; '),
    chargingMethod: '其它',
    chargingStandard: '一次性收取一个月成交租金，标准的费用作为服务费',
    remarks: '无'
  }
]);

const columns = [
  {
    title: '服务类型',
    dataIndex: 'serviceType',
    key: 'serviceType'
  },
  {
    title: '服务内容',
    dataIndex: 'serviceContent',
    key: 'serviceContent'
  },
  {
    title: '收费方式',
    dataIndex: 'chargingMethod',
    key: 'chargingMethod'
  },
  {
    title: '收费标准',
    dataIndex: 'chargingStandard',
    key: 'chargingStandard'
  },
  {
    title: '备注',
    dataIndex: 'remarks',
    key: 'remarks'
  }
];
</script>

<style scoped>
.brokerage-service {
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.brokerage-service h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}
</style> 