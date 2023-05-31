<script setup>
import {onMounted} from "vue";

defineProps({
  imgUrl:{
    type:String,
    default:""
  },
  text1:{
    type:String,
    default:""
  },
  text2:{
    type:String,
    default:""
  },
})

</script>
<template>
  <img alt="" v-img-lazy="imgUrl"/>
  <p class="name">{{ text1 }}</p>
  <p class="name">{{ text2 }}</p>
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