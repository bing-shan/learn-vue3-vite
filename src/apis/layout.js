import request from "@/utils/request.js";

//Nav列表：
export function getCategory(data) {
  return request({
    url: '/home/category/head'
  })
}

//轮播图：
export function getBanner(data) {
  return request({
    url: '/home/banner'
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