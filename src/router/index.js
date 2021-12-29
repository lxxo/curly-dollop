import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);


// 开发一般  都是先创建路由  也就是页面 一个路由对应一个页面
// 然后去开发代码  

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/about',// 匹配的是这个路由
    name: 'about',
    meta: {
      title: '会员'
    },
    component: () => import('@/views/About.vue') // @代表src  匹配到上个路由显示的页面
  },
  {
    path: '/abc',// 匹配的是这个路由
    name: 'abc',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/abc/abc.vue') // @代表src  匹配到上个路由显示的页面
  }

];

const router = new VueRouter({
  routes,
});




export default router;
