import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home';
import Welcome from '../components/Welcome';
import SingleView from "../views/SingleView";

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
  },
  {
    path : '/SingleView/:id',
    name : 'SingleView',
    props : true,
    component : SingleView
  }

  
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
