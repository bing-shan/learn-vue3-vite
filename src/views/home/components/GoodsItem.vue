<script setup>
import {onMounted} from "vue";

defineProps({
  imgUrl: {
    type: String,
    default: ""
  },
  text1: {
    type: String,
    default: ""
  },
  text2: {
    type: String,
    default: ""
  },
})

</script>
<template>
  <RouterLink to="/" class="goods-item">
    <img alt="" v-img-lazy="imgUrl"/>
    <p class="name">{{ text1 }}</p>
    <p class="name">{{ text2 }}</p>
  </RouterLink>
</template>
<style lang="scss" scoped>
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all .5s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  img {
    width: 160px;
    height: 160px;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .desc {
    color: #999;
    height: 29px;
  }

  .price {
    color: $priceColor;
    font-size: 20px;
  }
}
</style>