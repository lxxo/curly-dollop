<template>
  <div id="app">
    <!--顶部栏-->
   <van-nav-bar title="标题" left-text="返回" left-arrow  @click-left="onClickLeft" 
   @click-right="onClickRight">
   <template #right>
    <van-icon name="search" size="18" />
  </template>
   </van-nav-bar>

    <!--路由组件出口-->
    <router-view />
<van-tabbar v-model="active">
  <van-tabbar-item to='/first' icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item to='/search' icon="search" dot>搜索</van-tabbar-item>
  <van-tabbar-item to='/about' icon="friends-o" badge="5">关于我们</van-tabbar-item>
  <van-tabbar-item to='/user' icon="setting-o" badge="20">个人中心</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    send(e) {
      console.log(e);
    },
    func(e) {
      console.log(e);
      // e === 'vip' ? $router.push('/about') : $router.push('/abc');
    },
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('搜索');
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
