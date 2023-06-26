import axios from "axios";
import router from "@/router"
const instance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
})

import {useUserStore} from "@/store/usersStore.js";
instance.interceptors.request.use(config => {
  const userStore = useUserStore();//userStore这个变量需要在请求拦截器和相应拦截器里面分别定义，不能一次性定义在外面，否则会报错。
  if (userStore.userInfo.token) {
    config.headers.Authorization = `Bearer ${userStore.userInfo.token}`
  }
  return config
}, e => Promise.reject(e));

instance.interceptors.response.use(res => res.data, e => {
  ElMessage({
    message: e.response.data.msg,
    type: 'warning',
  });
  if (e.response.status === 401) {
    const userStore = useUserStore();
    userStore.clearUserInfo();
    router.replace("/login")
  }
  return Promise.reject(e);
})

export default instance;