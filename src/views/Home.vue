<template>
  <div class="home">
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
    <!-- <button @click="$router.push('/about')">点击我跳转到about</button> -->
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
    color: rgb(218, 29, 29);
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>


