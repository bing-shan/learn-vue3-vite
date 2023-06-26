import request from "@/utils/request.js";

//生成-订单(结算页)：
export function getCheckInfoApi() {
  return request({
    url: '/member/order/pre',
  })
}

//创建订单：
export function createOrderApi(data) {
  console.log(data);
  return request({
    url: '/member/order',
    method:"POST",
    data:data
  })
}
//
// //支付-支付宝：
// export function getCheckInfoApi(orderId, redirect) {
//   return request({
//     url: '/pay/aliPay',
//     params:{
//       orderId,
//       redirect
//     }
//   })
// }
//