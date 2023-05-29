<script setup>
import { storeToRefs } from "pinia";
import { userStore } from "../store/users";
const user_store = userStore();
let { name, age, changeAge } = storeToRefs(user_store);

function handleClick(params) {
  user_store.increaseAge(1);
}
</script>
<template>
  <div class="azj">
    <h2>这是A组件</h2>
    <h2>pinia中num的值是：{{ name }}</h2>
    <h2>pinia中count的值是：{{ age }}</h2>
    <h2>getters:{{ changeAge }}</h2>
    actions:<button @click="handleClick">按钮</button>
  </div>
</template>

<style scoped>
.azj {
  width: 300px;
  height: 600px;
  border: 1px solid;
}
</style>
