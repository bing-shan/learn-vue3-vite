<script setup>
import HomePanel from "./HomePanel.vue";
import GoodsItem from "./GoodsItem.vue";
import {getHot} from "@/apis/layout.js";
import {onMounted} from "vue";

const hotList = ref([]);
const getHotList = async () => {
  const res = await getHot();
  hotList.value = res.result;
};

onMounted(() => {
  getHotList();
})
</script>
<template>
  <home-panel h2="人气推荐" h3="人气爆款 不容错过">
    <ul class="goods-list">
      <li v-for="(item,index) in hotList" :key="item.id">
        <RouterLink to="/">
          <goods-item
              :imgUrl="item.picture"
              :text1="item.title"
              :text2="item.alt"
          ></goods-item>
        </RouterLink>
      </li>
    </ul>
  </home-panel>
</template>
<style lang="scss" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }
  }
}
</style>