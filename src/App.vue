<template>
  <div id="app container">


    <router-link to="/"></router-link>
    <router-view></router-view>

  </div>
  
  
</template>



<style>
.navbar {
  overflow: hidden;
  background-color: green;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
}
#heading{
  color: white;
  font-weight: bold;
}
#martikar{
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}
.second-navbar{
  width: 100%;
  background-color: white;
  height: 60px;
  position: fixed;
  top: 60px;
}

.navbar p {
  color: #f2f2f2;
  margin: 0 auto;
  padding: 14px 16px;
  font-size: 20px;
}

  
</style>