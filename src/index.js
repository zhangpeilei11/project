import Vue from "vue"
import App from "./App.vue"
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./router.js"
import "./lib/mui/css/mui.min.css"
// import "./lib/mui/js/mui.js"
import "bootstrap/dist/css/bootstrap.css"
import "./css/index.css"
import { Swipe, SwipeItem } from 'mint-ui';
import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
var vm = new Vue({
    el:"#app",
    router,
    render(c){
        return c(App)
    }
})