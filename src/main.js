import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入初始化样式文件
import '@/assets/styles/common.scss'
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
