import request from "@/utils/request.js";

//Nav列表：
export function getCategoryApi(id) {
  return request({
    url: '/category',
    params:{
      id,
    }
  })
}
