import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/reset.css';
import router from './router'

const app = createApp(App).use(router);

app.use(Antd).mount('#app');