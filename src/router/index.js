import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/Index.vue";
import Category from "@/views/category/Index.vue";
import Layout from "../views/layout/Index.vue";

const routes = [
  // {
  //   path: "/",
    // component: Layout,//重定向不需要写component
    // redirect:"/layout"
  // },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children:[
      {
        path:"",
        name:"Home",
        component:Home
      }, {
        path:"category/:id",
        name:"Category",
        component:Category
      },
    ]
  },
  {
    path: "/:pathMatch(.*)",
    name: "Layout",
    component: Layout,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
