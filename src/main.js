import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Button from 'ant-design-vue/lib/button'; // for js
import Icon from 'ant-design-vue/lib/icon';
import 'ant-design-vue/dist/antd.css';
import VueMarkDown from "vue-markdown";
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import MaterialDesignTransition from 'vue-router-md-transition';

Vue.config.productionTip = false;
Vue.use(MaterialDesignTransition);
Vue.use(Button);
Vue.use(Icon);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(VueMarkDown);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
