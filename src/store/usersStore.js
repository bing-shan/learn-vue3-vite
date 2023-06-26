import { defineStore } from "pinia";
import {loginAPI} from "@/apis/user.js";
import {useCartStore} from "./cartStore";

export const useUserStore = defineStore("user", () => {
  const userInfo = ref({});

  const getUserInfo = async ({account,password}) => {
    const res = await loginAPI({account,password});
    if(res.code === "1"){
      ElMessage({
        message: "登录成功！",
        type: 'success',
      });
      userInfo.value = res.result;
    }
  };

  //退出登录时清除用户信息：
  const clearUserInfo = () => {
    userInfo.value = {};
    const cartStore = useCartStore();
    cartStore.clearCart();
  };

  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},{
  persist:true
});