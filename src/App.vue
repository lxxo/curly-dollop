
<template>
  <div id="app">
    <!--顶部栏-->
    <mt-header title="标题">
      <router-link to="/" slot="left">
       <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

      <!--路由组件出口-->
    <router-view />

<!--顶部栏-->
<mt-tabbar v-model="selected">
  <mt-tab-item id="frist">
    <img slot="icon" src="..\src\assets\frist.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="vip">
    <img slot="icon" src="..\src\assets\账号.png">
    会员
  </mt-tab-item>
  <mt-tab-item id="shopcart">
    <img slot="icon" src="..\src\assets\数据.png">
    购物车
  </mt-tab-item>
  <mt-tab-item id="search">
    <img slot="icon" src="..\src\assets\系统设置.png">
    查找
  </mt-tab-item>
</mt-tabbar>

  </div>
</template>

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
*{
  padding: 0;
  margin: 0;
}
</style>
<script>
export default {
  name:'App',
  data(){
    return{
      selected:''
    }
  },
  // watch:{
  //   selected:function(newV,oldV){
  //     console.log(newV);
  //     this.$router.push({name:this.selected});
  //   }
  // },
}
</script>
