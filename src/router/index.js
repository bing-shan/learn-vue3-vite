import {createRouter, createWebHistory, createWebHashHistory} from "vue-router";
// import Home from ";
// import Category from "@/views/category/Index.vue";
// import Layout from "";
// import SubCategory from "@/views/subCategory/Index.vue"
// import Detail from "@/views/detail/Index.vue"

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
      },
    ]
  },
  // {
  //   path: "/:pathMatch(.*)",
  //   name: "Layout",
  //   component: Layout,
  // },
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
