import {defineStore} from "pinia";
import {computed} from "vue";
import {useUserStore} from "./usersStore";
import {insertCartApi,findNewCartListApi,delCartAPI} from "@/apis/cart.js";

export const useCartStore = defineStore("cart",() => {
  const cartList = ref([]);
  const userStore = useUserStore();
  const isLogin = computed(() => userStore.userInfo.token);
  const addCart = async (goods) => {
    if(isLogin.value){
      await insertCartApi({skuId:goods.skuId, count:goods.count});
      updateNewCartList();
    }else{
      //添加过：count+1，未添加过：直接push
      const item = cartList.value.find(item => item.skuId === goods.skuId);
      if(item){
        item.count ++
      }else{
        cartList.value.push(goods);
      }
    }
  };

  const delCart = async (id) => {
    if(isLogin.value){
      await delCartAPI([id]);
      updateNewCartList();
    }else{
      const index = cartList.value.findIndex(item => item.skuId === id);
      cartList.value.splice(index,1);
    }
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
  //最新购物车：
  const updateNewCartList = async () => {
    // 获取最新的购物车列表：
    const res = await findNewCartListApi();
    // 覆盖本地的购物车列表
    cartList.value = res.result;
  };

  //清除购物车信息：
  const clearCart = () => {
    cartList.value = [];
  };

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
    clearCart
  }
},{
  persist:true
})