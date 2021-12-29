<template>
  <div class="home">
    我是首页 
    <button @click="$router.push('/about')">点击我跳转到about</button>
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


