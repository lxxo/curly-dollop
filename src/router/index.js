import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 开发一般  都是先创建路由  也就是页面 一个路由对应一个页面
// 然后去开发代码  
const routes = [
  {
    path: '/first',// 匹配的是这个路由
    name: 'first',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/first/first.vue') // @代表src  匹配到上个路由显示的页面
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
    path: '/search',// 匹配的是这个路由
    name: 'search',
    meta: {
      title: '搜索'
    },
    component: () => import('@/views/search/search.vue') // @代表src  匹配到上个路由显示的页面
  }
];
const router = new VueRouter({
  routes,
});
export default router;
