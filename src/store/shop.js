import { defineStore } from "pinia";

export const user = defineStore("user", {
  state: () => {
    return {
      shopList: ["语文", "数学"],
    };
  },
  getters: {},

  actions: {},

  //开启数据缓存：
  // persist: {
  //   enabled: true,
  // },
});
