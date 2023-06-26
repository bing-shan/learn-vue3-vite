<script setup>
import LayoutHeader from "./components/Header.vue";
import LayoutNav from "./components/Nav.vue";
import LayoutFooter from "./components/Footer.vue";
import LayoutFixed from './components/LayoutFixed.vue';
import {useCategoryStore} from '@/store/categoryStore';
import {onMounted} from "vue";

const categoryStore = useCategoryStore();
onMounted(() => categoryStore.getCategoryList());
</script>
<template>
  <layout-fixed></layout-fixed>
  <layout-nav></layout-nav>
  <layout-header></layout-header>
<!--  <router-view :key="$route.fullPath"></router-view>-->
  <router-view/>
  <layout-footer></layout-footer>
</template>
<style lang="scss" scoped>

</style>