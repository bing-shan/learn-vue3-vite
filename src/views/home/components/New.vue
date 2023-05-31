<script setup>
import HomePanel from "./HomePanel.vue";
import GoodsItem from "./GoodsItem.vue";
import {getNew} from "@/apis/layout.js";
import {onMounted} from "vue";

const newList = ref([]);
const getNewList = async () => {
  const res = await getNew();
  newList.value = res.result;
};

onMounted(() => {
  getNewList();
})
</script>
<template>
  <home-panel h2="新鲜好物" h3="新鲜出炉 品质靠谱">
    <ul class="goods-list">
      <li v-for="(item,index) in newList" :key="item.id">
        <RouterLink to="/">
          <goods-item
              :imgUrl="item.picture"
              :text1="item.name"
              :text2="item.price"
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