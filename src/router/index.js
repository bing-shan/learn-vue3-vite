import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from "@/views/Home/Index.vue";
import Category from "@/views/Home/Category.vue";
import Layout from "../views/layout/Index.vue";

const routes = [
  {
    path: "/",
    // component: Layout,//重定向不需要写component
    redirect:"/layout"
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
    children:[
      {
        path:"",
        component:Home
      }, {
        path:"category",
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
