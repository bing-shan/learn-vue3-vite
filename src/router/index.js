import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";
const routes = [
  // {
  //   path: "/",
  // component: Layout,//重定向不需要写component
  // redirect:"/layout"
  // },
  {
    path: "/",
    name: "Layout",
    component: () => import("@/views/layout/Index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/home/Index.vue"),
      }, {
        path: "category/:id",
        name: "Category",
        component: () => import("@/views/category/Index.vue"),
      }, {
        path: "category/sub/:id",
        name: "SubCategory",
        component: () => import("@/views/subCategory/Index.vue"),
      },{
        path: 'detail/:id',
        component: () => import("@/views/detail/Index.vue"),
      },{
        path: "cartList",
        name: "cartList",
        component: () => import("@/views/cartList/Index.vue"),
      },{
        path: "checkout",
        name: "checkout",
        component: () => import("@/views/checkout/Index.vue"),
      },{
        path: "pay",
        name: "pay",
        component: () => import("@/views/pay/Index.vue"),
      },{
        path: "paycallback",
        name: "payBack",
        component: () => import("@/views/pay/payBack.vue"),
      },{
        path: "member",
        component: () => import("@/views/member/Index.vue"),
        children:[
          {
            path: "",
            component: () => import("@/views/member/components/UserInfo.vue"),
          },{
            path: "order",
            component: () => import("@/views/member/components/UserOrder.vue"),
          }
        ]
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Index.vue"),
  }
];
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to,from,savePosition) {
    return {
      top:0
    }
  },
  routes,
});
export default router;
