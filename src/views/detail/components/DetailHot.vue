<script setup>
import {onMounted} from "vue";
import GoodsItem from "@/views/home/components/GoodsItem.vue"
import {getHotGoodsAPI} from "@/apis/detail.js";
const prop = defineProps({
  type: {
    type: Number,
    default: 1,
  }
});

const TYPEMAP = {
  1: '24小时热榜',
  2: '周热榜'
};
const title = computed(() => TYPEMAP[prop.type]);

const route = useRoute();
const hotList = ref([]);
const getGoodsList = async () => {
  const payload = {
    id:route.params.id,
    type:prop.type
  };
  const res = await getHotGoodsAPI(payload);
  hotList.value = res.result;
};

onMounted(() => getGoodsList());
</script>
<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in 3" :key="item.id">
      <ul class="goods-list">
        <li v-for="goods in hotList" :key="goods.id">
          <goods-item
              :imgUrl="goods.picture"
              :text1="goods.name"
              :text2="goods.desc"
          ></goods-item>
        </li>
      </ul>
    </RouterLink>
  </div>
</template>
<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>