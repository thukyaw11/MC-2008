<template>
    <div class="home">
        <NavBar title="အုပ်ချုပ်ရေးဥပဒေ"/>
        <SecondNavBar/>
        <div id="itemsContainer" >
            <div v-for="data in datas" v-bind:key="data.id">
            <router-link :to="`/SingleView/${data.id}`">
                <div class="nav_item">{{data.title}}</div>
                <hr>
            </router-link>
            </div>
        </div>
    </div> 
</template>
<style>
    .nav_item{
        padding: 15px 10px;
        margin: 0;
    }
    hr{
        margin: 0;
        padding: 0;
    }
</style>

<script>
/* eslint-disable no-console */

import { Data } from "../content/data";
import NavBar from "../components/NavBar";
import SecondNavBar from "../components/SecondNavBar";
export default {
    components : {
        NavBar,
        SecondNavBar
    },
    data() {
        return {
            datas : Data
        }
    },
    mounted() {
        console.log("hello");
    }
}
/* eslint-enable no-console */

</script>

<style>
    #itemsContainer{
        margin-top: 121px;
        height: 826px;
    
    }


</style>