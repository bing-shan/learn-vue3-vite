<script setup>
import LayoutHeader from "./components/Header.vue";
import LayoutNav from "./components/Nav.vue";
import LayoutFooter from "./components/Footer.vue";
import LayoutFixed from './components/LayoutFixed.vue';
import Home from '../home/Index.vue';
import {useCategoryStore} from '@/store/category';
import {onMounted} from "vue";

const categoryStore = useCategoryStore();


onMounted(() => {
  categoryStore.getCategoryList();
})
</script>
<template>
  <layout-fixed></layout-fixed>
  <layout-nav></layout-nav>
  <layout-header></layout-header>
<!--  <home></home>-->
  <RouterView />
  <layout-footer></layout-footer>
</template>
<style lang="scss" scoped>

</style>