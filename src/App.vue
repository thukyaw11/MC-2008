<template>
  <div id="app container">
    <router-link to="/"></router-link>

    <md-transition :reverse="true">
      <router-view></router-view>
    </md-transition>
  </div>
</template>
<script>
import MaterialDesignTransition from "vue-router-md-transition";
export default {
    components: {
    'md-transition': MaterialDesignTransition,
  },
};
</script>


<style>
body{
  overscroll-behavior: contain;
}
.navbar {
  overflow: hidden;
  background-color: #c5342d;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
}
#heading {
  color: black;
}
#martikar {
  text-align: center;
  margin-top: 15px;
}

.navbar #heading {
  color: white;
}
.navbar p {
  color: #f2f2f2;
  margin: 0 auto;
  padding: 14px 16px;
  font-size: 20px;
}
#flag-img {
  width: 180px;
  height: 80px;
  margin-top: 150px;
}
#startBtn {
  margin-top: 150px;
  background-color: #c5342d;
  color: white;
  height: 45px;
  font-size: 20px;
  width: 150px;
}
</style>