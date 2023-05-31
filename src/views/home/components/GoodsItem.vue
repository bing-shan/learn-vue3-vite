<script setup>
defineProps({
  goods:{
    type:Object,
    default:{}
  },
})

</script>
<template>
  <img alt="" v-img-lazy="imgUrl"/>
  <p class="name">{{ goods.name }}</p>
  <p class="name">{{ goods.desc }}</p>
  <p class="price">&yen;{{ goods.price }}</p>
</template>
<style lang="scss" scoped>
img {
  width: 306px;
  height: 306px;
}

p {
  font-size: 18px;
  padding-top: 12px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.price {
  color: $priceColor;
}
</style>