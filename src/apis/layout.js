import request from "@/utils/request.js";

//Nav列表：
export function getCategory(data) {
  return request({
    url: '/home/category/head'
  })
}

//轮播图：
export function getBanner(params = {}) {
  //默认为1，商品为2；
  const {distributionSite = 1} = params;
  return request({
    url: '/home/banner',
    params:{
      distributionSite,
    }
  })
}

//新鲜好物：
export function getNew(data) {
  return request({
    url: '/home/new'
  })
}

//人气推荐
export function getHot(data) {
  return request({
    url: '/home/hot'
  })
}

//产品列表
export function getGoods(data) {
  return request({
    url: '/home/goods'
  })
}