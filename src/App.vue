<script>
import { onMounted } from "vue";
// import Home from "@/views/Home.vue";
export default {
  // components: { Home },
  setup() {
    // const name = ref("张三");
    // provide("name", name);
    // function changeName(params) {
    //   name.value = "李四";
    // }
    //
    // onMounted(() => {});
    // return {
    //   name,
    //   changeName,
    // };
  },
};
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
.box {
  width: 300px;

  .box2 {
    width: 100px;
    height: 100px;
  }
}
</style>
