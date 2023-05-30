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

//好物推荐：
export function getNew(data) {
  return request({
    url: '/home/new'
  })
}