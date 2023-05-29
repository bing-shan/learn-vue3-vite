import { createPinia } from "pinia";
//引入pinia的持久化存储插件：
import piniaPluginPersist from "pinia-plugin-persist";

const store = createPinia();
store.use(piniaPluginPersist);

export default store;

