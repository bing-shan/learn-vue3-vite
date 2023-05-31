import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
// import Home from "@/views/Home.vue";
// import Login from "../views/Login.vue";
import Layout from "../views/layout/Index.vue";

const routes = [
  {
    path: "/",
    // component: Layout,
    redirect:"/layout"
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: Login,
  // },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
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
