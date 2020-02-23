import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home';
import Welcome from '../components/Welcome';


Vue.use(VueRouter);

const routes = [
  {
    path : '/home',
    name : 'Home',
    component : Home
  },
  {
    path: '/',
    name : 'Welcome',
    component : Welcome
  }
  
];

const router = new VueRouter({
  routes
});

export default router;
