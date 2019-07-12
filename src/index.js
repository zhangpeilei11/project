import Vue from "vue"
import App from "./App.vue"
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import "./lib/mui/css/mui.min.css"
import "./lib/mui/js/mui.js"
import "bootstrap/dist/css/bootstrap.css"
import "./css/index.css"
var vm = new Vue({
    el:"#app",
    render(c){
        return c(App)
    }
})