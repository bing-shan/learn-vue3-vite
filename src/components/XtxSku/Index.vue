<script setup>
import { onMounted } from 'vue'
import axios from 'axios';
import powerSet from "./power-set";

// 商品数据
const goods = ref({});
let pathMap = {};
const getGoods = async () => {
  // 1135076  初始化就有无库存的规格
  // 1369155859933827074 更新之后有无库存项（蓝色-20cm-中国）
  const res = await axios.get('http://pcapi-xiaotuxian-front-devtest.itheima.net/goods?id=1369155859933827074');
  goods.value = res.data.result;
  pathMap = getPathMap(goods.value);
  initDisabledStatus(goods.value.specs,pathMap);
}
onMounted(() => getGoods());

//切换选中状态：
const clickSpecs = (item,val) => {
  if(val.disabled) return;
  if(val.selected){
    val.selected = false;
  }else{
    item.values.forEach(val => val.selected = false);
    val.selected = true;
  }
  updateDisabledStatus(goods.value.specs,pathMap);
  const idx = getSelectedValues(goods.value.specs).findIndex(item => item === undefined);
  if(idx > -1){
    console.log("不是完整的sku")
  }else{
    const key = getSelectedValues(goods.value.specs).join("-");
    const skuIds = pathMap[key];
    const skuObj = goods.value.skus.find(item => item.id === skuIds[0]);
  }
};

//生成有效路径字典对象：
const getPathMap = (goods) => {
  const pathMap = {};
  //1.根据skus字段生成有效的sku数组：
  const effectiveSkus = goods.skus.filter(sku => sku.inventory > 0);

  //2.根据有效的sku数组使用算法（子集算法）
  effectiveSkus.forEach(sku => {
    //2.1获取匹配的valueName组成的数组：
    const selectedValArr = sku.specs.map(val => val.valueName);
    //2.2使用算法获取子集：
    const valueArrPowerSet = powerSet(selectedValArr);
    //3.把得到子集生成最终的路径字典对象：
    valueArrPowerSet.forEach(arr => {
      const key = arr.join("-");
      if(pathMap[key]){
        pathMap[key].push(sku.id);
      }else{
        pathMap[key] = [sku.id];
      }
    })
  });
  return pathMap;
};

//初始化禁用状态：
const initDisabledStatus = (specs,pathMap) => {
  specs.forEach(spec => {
    spec.values.forEach(val => {
      val.disabled = !pathMap[val.name];
    })
  })
};

//获取选中项的匹配数组：
const getSelectedValues = (specs) => {
  const arr = [];
  specs.forEach(spec => {
  //找到values中selected为true的项，然后把它的name字段添加到数组的对应位置：
    const selectedVal = spec.values.find(item => item.selected);
    arr.push(selectedVal?selectedVal.name:undefined);
  });
  return arr;
}

//切换时更新禁用状态：
const updateDisabledStatus = (specs,pathMap) => {
  console.log(specs);
  specs.forEach((spec,index) => {
    const selectedValues = getSelectedValues(specs);
    console.log(selectedValues);
    spec.values.forEach(val => {
      selectedValues[index] = val.name;
      const key = selectedValues.filter(value => value).join("-");
      val.disabled = !pathMap[key];
    })
  })
};

</script>
<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.id">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="val in item.values" :key="val.name">
          <img
              :class="{ selected: val.selected, disabled: val.disabled }"
              @click="clickSpecs(item, val)"
              v-if="val.picture"
              :src="val.picture"
          />
          <span
              :class="{ selected: val.selected, disabled: val.disabled }"
              @click="clickSpecs(item, val)"
          >{{ val.name }}</span>
        </template>
      </dd>
    </dl>
  </div>
</template>
<style scoped lang="scss">
@mixin sku-state-mixin {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;

  &.selected {
    border-color: $xtxColor;
  }

  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}

.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;

    dt {
      width: 50px;
      color: #999;
    }

    dd {
      flex: 1;
      color: #666;

      > img {
        width: 50px;
        height: 50px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }

      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }
    }
  }
}
</style>