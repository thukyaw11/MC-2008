import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Button from 'ant-design-vue/lib/button'; // for js
import 'ant-design-vue/dist/antd.css';
import VueMarkDown from "vue-markdown";


Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(VueMarkDown);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
