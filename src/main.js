import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入初始化样式文件
import '@/assets/styles/common.scss'

//引入懒加载指令插件：
import {lazyPlugin} from "./directives";
import {componentPlugin} from "@/components";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(lazyPlugin);
app.use(componentPlugin);
app.mount("#app");
