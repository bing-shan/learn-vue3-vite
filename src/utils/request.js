import axios from "axios";
import {useUserStore} from "@/store/users.js";
// import {useRouter} from "vue-router";
import router from "@/router"
const userStore = useUserStore();
// const router = useRouter();
const instance = axios.create({
    baseURL:"http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout:5000,
})

instance.interceptors.request.use(config => {
    if(userStore.userInfo.token){
        config.headers.Authorization = `Bearer ${userStore.userInfo.token}`
    }
    return config
},e => Promise.reject(e));

instance.interceptors.response.use(res => res.data,e => {
    console.log(e)
    ElMessage({
        message: e.response.data.msg,
        type: 'warning',
    });
    if(e.response.status === 401){
        userStore.clearUserInfo();
        router.replace("/login")
    }
    return Promise.reject(e);
})

export default instance;