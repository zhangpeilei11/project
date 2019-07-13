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
import { Swipe, SwipeItem ,button} from 'mint-ui';
import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.http.options.root="http://www.liulongbin.top:3005/"
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(button.name, button);
import moment from "moment"
// Vue.filter("timeFormat",(time,pattern)=>{
//     var dt = new Date(time);
//         var y = dt.getFullYear();
//         var m = (dt.getMonth()+1).toString().padStart(2,"0");
//         var d = dt.getDate().toString().padStart(2,"0");
//         if(pattern.toLowerCase()==="yyyy-mm-dd"){
//             return `${y}-${m}-${d}`;
//         }else{
//             var hh = dt.getHours().toString().padStart(2,"0");
//             var mm = dt.getMinutes().toString().padStart(2,"0");
//             var ss = dt.getSeconds().toString().padStart(2,"0");
//             return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
//         }
// })
Vue.filter("timeFormat",(time,pattern)=>{
    return moment(time).format(pattern)
})
// filters:{
//     timeFormat(time,pattern){
//         var dt = new Date(time);
//         var y = dt.getFullYear();
//         var m = (dt.getMonth()+1).toString().padStart(2,"0");
//         var d = dt.getDate().toString().padStart(2,"0");
//         if(pattern.toLowerCase()==="yyyy-mm-dd"){
//             return `${y}-${m}-${d}`;
//         }else{
//             var hh = dt.getHours().toString().padStart(2,"0");
//             var mm = dt.getMinutes().toString().padStart(2,"0");
//             var ss = dt.getSeconds().toString().padStart(2,"0");
//             return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
//         }
//     }
// },
var vm = new Vue({
    el:"#app",
    router,
    render(c){
        return c(App)
    }
})