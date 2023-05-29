import axios from "axios";
const instance = axios.create({
    baseURL:"http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout:5000,
})

instance.interceptors.request.use(config => {

},e => Promise.reject(e));

instance.interceptors.response.use(res => res.data,e => {
    return Promise.reject(e);
})

export default instance;