import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/src/view/1",
    name: "1",
    component: 1,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
