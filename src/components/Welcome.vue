<template>
  <div class="col-12 text-center pt-4">
    <h5>ရပ်ကွက် သို့မဟုတ် ကျေးရွာအုပ်စု အုပ်ချုပ်ရေးဥပဒေ</h5>
    <router-link to="/home">
      <md-button class="md-raised md-accent" id="startBtn">စဖတ်ရန်</md-button>
    </router-link>
    <br />

    <img src="../assets/flag.jpg" alt="open myanmar initiative" id="flag-img" />
    <br />
    <div id="icon_area">
      <a href="https://www.facebook.com/OpenMyanmarInitiative/" target="_blank">
        <a-icon type="facebook" theme="filled" :style="{ fontSize: '30px', color: 'grey' }" />
      </a>
      <a href="mailto:kyaw261517@gmail.com" target="_blank">
        <a-icon type="mail" theme="filled" :style="{ fontSize: '30px', color: 'grey' }" />
      </a>
      <a href="tel:09254272220" target="_blank">
        <a-icon type="phone" theme="filled" :style="{ fontSize: '30px', color: 'grey' }" />
      </a>
      <a href="https://www.google.com/maps/place/Open+Myanmar+Initiative/@16.8493086,96.1756018,17z/data=!3m1!4b1!4m5!3m4!1s0x30c193460862b387:0x98733ef84d9a1817!8m2!3d16.8493086!4d96.1777905" target="_blank">
        <a-icon type="environment" theme="filled" :style="{ fontSize: '30px', color: 'grey' }" />
      </a>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-console */

export default {
  name: "Welcome"
};

/* eslint-enable no-console */
</script>

<style>
#icon_area {
  margin-top: 70px;
  display: flex-box;
}
#icon_area a {
  padding: 10px;
}
</style>