<template>
  <div id="app container">


    <router-link to="/"></router-link>
    <router-view></router-view>

  </div>
  
  
</template>



<style>
.navbar {
  overflow: hidden;
  background-color: #F7D336;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
}
#heading{
  color: black;
}
#martikar{
  text-align: center;
  margin-top: 15px;
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
#flag-img{
  width: 100px;
  height: 40px;
  margin-top: 300px;
}
#startBtn{
  margin-top: 200px;
  background-color: #F7D336;

}
  
</style>