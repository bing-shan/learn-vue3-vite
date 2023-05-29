import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => {
    return {
      age: 1,
      name: 10,
    };
  },
  getters: {
    changeAge() {
      return this.age + 10;
    },
  },

  actions: {
    increaseAge(val) {
      console.log(222);
      this.age += val;
    },
  },

  //开启数据缓存：
  persist: {
    enabled: true,
    strategies: [
      {
        key: "my_user",
        storage: localStorage,
        paths: ["age"],
      },
    ],
  },
});
