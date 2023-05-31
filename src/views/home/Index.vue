<script setup>
import HomeCategory from './components/Category.vue'
import HomeBanner from './components/Banner.vue'
import HomeNew from './components/New.vue'
import HomeHot from './components/Hot.vue'
import HomeProduct from './components/Product.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
</template>
<style>
</style>