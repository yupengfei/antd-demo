<template>
  <div class="main_sidebar">
    <h2>导航</h2>
    <ul>
      <li>
        <router-link to="/company">公司信息</router-link>
      </li>
      <li>
        <router-link to="/brokerage-service">经纪服务</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style scoped>
.main_sidebar {
  width: 200px;
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.main_sidebar h2 {
  margin-bottom: 20px;
  font-size: 20px;
  color: #333;
}

.main_sidebar ul {
  list-style-type: none;
  padding: 0;
}

.main_sidebar li {
  margin-bottom: 10px;
}

.main_sidebar a {
  color: #42b983;
  text-decoration: none;
}

.main_sidebar a:hover {
  text-decoration: underline;
}
</style> 