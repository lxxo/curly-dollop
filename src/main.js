import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;

//使用mint-ui  引入全部组件
import Mint from 'mint-ui';
Vue.use(Mint);

import 'mint-ui/lib/style.css'



new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
