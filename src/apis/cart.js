import request from "@/utils/request.js";

//加入购物车：
export function insertCartApi({skuId, count}) {
  return request({
    url: '/member/cart',
    method:"POST",
    data:{
      skuId,
      count
    }
  })
}


//获取购物车列表：
export function findNewCartListApi() {
  return request({
    url: '/member/cart',
  })
}


// 删除购物车
export const delCartAPI = (ids) => {
  return request({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

// 合并购物车
export const mergeCartApi = (data) => {
  return request({
    url: '/member/cart/merge',
    method: 'POST',
    data: data
  })
}