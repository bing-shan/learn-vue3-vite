import {defineStore} from "pinia";
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

  return {
    cartList,
    addCart,
    delCart
  }
},{
  persist:true
})