<template>
  <div class="home">
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
    <!-- <button @click="$router.push('/about')">点击我跳转到about</button> -->

  <van-grid :gutter="10" :column-num="5">
    <van-grid-item v-for="value in 10" :key="value" icon="photo-o" text="文字" />
  </van-grid>

  <van-card v-for="(item, i) in 10" :key="i"
  num="1"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"/>
  
  </div>
</template>

 <script>
//  @ is an alias to /src

export default {
  name: "Home",
  components: {
  },
};
 </script>
<style>
  .my-swipe .van-swipe-item {
    color: rgb(22, 17, 17);
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>


