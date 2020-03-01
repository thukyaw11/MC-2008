<template>
  <div class="singleView">
    <NavBar :title="singleView.title"/>
    <div id="content">
      <p>{{singleView.content}}</p>
    </div>
  </div>
</template>

<style>
  #content{
    margin-top: 70px;
    padding: 10px;
  }  
</style>

<script>
/* eslint-disable no-console */
import NavBar from "../components/NavBar";
import { Data } from "../content/data.js";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      data: "",
      singleView: []
    };
  },
  props: ["id"],
  mounted() {
    this.data = Data;
    this.singleView = this.data[this.$props.id];

  }
};

/* eslint-enable no-console */
</script>

