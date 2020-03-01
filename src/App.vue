<template>
  <div id="app container">


    <router-link to="/"></router-link>
    <router-view></router-view>

  </div>
  
  
</template>



<style>
.navbar {
  overflow: hidden;
  background-color: #C5342D;
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

.navbar #heading{
  color: white;
}
.navbar p {
  color: #f2f2f2;
  margin: 0 auto;
  padding: 14px 16px;
  font-size: 20px;
}
#flag-img{
  width: 180px;
  height: 80px;
  margin-top: 300px;
}
#startBtn{
  margin-top: 200px;
  background-color: #C5342D;
  color: white;
  height: 45px;
  font-size: 20px;
  width: 150px;
}
  
</style>