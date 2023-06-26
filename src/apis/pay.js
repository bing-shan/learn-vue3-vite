import request from "@/utils/request.js";

export function getOrderApi(id) {
  return request({
    url: `/member/order/${id}`,
  })
}