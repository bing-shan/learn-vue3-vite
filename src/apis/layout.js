import request from "@/utils/request.js";

export function getCategory(data) {
  return request({
    url: '/home/category/head'
  })
}


export function getBanner(data) {
  return request({
    url: '/home/banner'
  })
}