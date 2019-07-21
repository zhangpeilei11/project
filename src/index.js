import Vue from "vue"
import App from "./App.vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./router.js"
import "./lib/mui/css/mui.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "./css/index.css"
import "./css/preview.scss"
import VueResource from "vue-resource"
Vue.use(VueResource)
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
  })

// Vue.use(VuePreview, {
//     mainClass: 'pswp--minimal--dark',
//     barsSize: {top: 0, bottom: 0},
//     captionEl: false,
//     fullscreenEl: false,
//     shareEl: false,
//     bgOpacity: 0.85,
//     tapToClose: true,
//     tapToToggleControls: false
//   })
Vue.http.options.root="http://www.liulongbin.top:3005/"
// import { Header } from 'mint-ui';
// Vue.component(Header.name, Header);
// import { Swipe, SwipeItem ,button} from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(button.name, button);
// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);
import mint from "mint-ui";
Vue.use(mint);
import moment from "moment"
import "../node_modules/mint-ui/lib/style.css"
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
import Vuex from "vuex";
Vue.use(Vuex);
var store = new Vuex.Store({
    state:{
        num:0,
        regulation:1,
        car:[],
        carnum:[],
        total:0,
        counts:0,
    },
    mutations:{
        add(state,count){
            state.num = parseInt(state.num ) + parseInt(state.regulation)
        },
        caradd(state){
            state.num = 0;
            state.car.forEach(item => {
            state.num+=item.cou 
            // console.log(state.num)

            // console.log(item.cou)
            });
        },
        carlist(state,data){
            state.car = data;
            data.forEach(item => {
                state.num+=item.cou 
            });
        },
        addcar(state,id){
            state.car.forEach(item=>{
                if(item.id==id){
                    item.cou++;
                    store.commit("caradd")
                }
            })
        },
        subtract(state,id){
            state.car.forEach(item=>{
                if(item.id==id){
                    item.cou = item.cou - 1;
                    store.commit("caradd")
                }
            })
        }
    }
}) 


var vm = new Vue({
    el:"#app",
    router,
    render(c){
        return c(App)
    },
    store:store,
})