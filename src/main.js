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
// app.directive("img_lazy",{
//     mounted(el,binding){
//         //el:指令绑定的那个元素
//         //binding:一个对象，包含多个属性，其中一个为value，就是传递给指令的表达式的值。
//         console.log(el,binding.value)
//     }
// })
