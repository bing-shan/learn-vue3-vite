import {defineStore} from "pinia";
import {computed} from "vue";
export const useCartStore = defineStore("cart",() => {
  const cartList = ref([]);
  const addCart = (goods) => {
    //添加过：count+1，未添加过：直接push
    const item = cartList.value.find(item => item.skuId === goods.skuId);
    if(item){
      item.count ++
    }else{
      cartList.value.push(goods);
    }
  };

  const delCart = (id) => {
    const index = cartList.value.findIndex(item => item.skuId === id);
    cartList.value.splice(index,1);
  };

  const allCount = computed(() => cartList.value.reduce((a,c) => a+c.count,0))
  const allPrice = computed(() => cartList.value.reduce((a,c) => a+c.count*c.price,0));

  const singleCheck = (skuId,selected) => {
    const item = cartList.value.find(item => item.skuId === skuId);
    item.selected = selected;
  };

  const isAll = computed(() => cartList.value.every(item => item.selected));
  const selectAll = val => cartList.value.forEach(item => item.selected = val);
  const selectCount = computed(() => cartList.value.filter(item => item.selected).reduce((a,c) => a+c.count,0));

  return {
    cartList,
    allCount,
    selectCount,
    allPrice,
    isAll,
    addCart,
    delCart,
    singleCheck,
    selectAll,
  }
},{
  persist:true
})