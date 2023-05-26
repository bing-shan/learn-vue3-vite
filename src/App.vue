<script setup>
import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import {ref, reactive, watch, onMounted} from "vue";

const temp = reactive({
  name: "zs",
  age: 20
});
const handleClick = () => {
  temp.name = "ls";
};
const refDom = ref(null);
const refCpnt = ref(null);
onMounted(() => {
  // console.log(refDom.value)
  console.log(refCpnt.value)
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" ref="refDom" src="./assets/logo.svg" width="125" height="125"/>

    <div class="wrapper">
      <HelloWorld msg="You did it!" ref="refCpnt"/>
      <button @click="handleClick">{{ temp.name }}</button>
    </div>
  </header>

  <main>
    <!--    <TheWelcome />-->
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
