import { defineStore } from "pinia";
import {loginAPI} from "@/apis/user.js";
import {mergeCartApi} from "@/apis/cart.js";
import {useCartStore} from "./cartStore";

export const useUserStore = defineStore("user", () => {
  const userInfo = ref({});
  const getUserInfo = async ({account,password}) => {
    const res = await loginAPI({account,password});
    const cartStore = useCartStore();
    if(res.code === "1"){
      ElMessage({
        message: "登录成功！",
        type: 'success',
      });
      userInfo.value = res.result;
      await mergeCartApi(cartStore.cartList.map(item => {
        return {
          skuId:item.skuId,
          selected:item.selected,
          count:item.count
        }
      }));
      cartStore.updateNewCartList();
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