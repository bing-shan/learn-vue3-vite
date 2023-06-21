import { defineStore } from "pinia";
import {loginAPI} from "@/apis/user.js";

export const useUserStore = defineStore("user", () => {
  let userInfo = reactive({});
  const getUserInfo = async ({account,password}) => {
    const res = await loginAPI({account,password});
    if(res.code === "1"){
      ElMessage({
        message: "登录成功！",
        type: 'success',
      });
      // console.log(res);
      userInfo = res.result;
      // console.log(userInfo);
    }
  };

  return {
    userInfo,
    getUserInfo
  }
});
