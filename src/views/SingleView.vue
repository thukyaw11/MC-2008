<template>
<div class="singleView">
    <NavBar :title="singleView.title" />
    <div id="content">
      <vue-mark-down>{{singleView.content}}</vue-mark-down>
    </div>

</div>
</template>

<style>
h5{
    line-height: 30px;
}
#content {
    height: auto;
    margin-top: 70px;
    padding: 10px;
    font-size: 15px;
    line-height: 25px;
}
</style>

<script>
/* eslint-disable no-console */
import NavBar from "../components/NavBar";
import VueMarkDown from 'vue-markdown'; 
import {
    Data
} from "../content/data.js";


export default {
    components: {
        NavBar,
        VueMarkDown
    },
    data() {
        return {
            data: "",
            singleView: []
        };
    },
    props: ["id"],
    created(){
        this.data = Data;
        this.singleView = this.data[this.$props.id];

        console.log(this.singleView.content);

    }
};

/* eslint-enable no-console */
</script>
