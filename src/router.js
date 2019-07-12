import VueRouter from "vue-router"
import home from "./com/home.vue"
import member from "./com/member.vue"
import car from "./com/car.vue"
import search from "./com/search.vue"
var router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},       
        {path:"/home",component:home},       
        {path:"/member",component:member},       
        {path:"/car",component:car},       
        {path:"/search",component:search},       
    ],
    linkActiveClass:"mui-active"
})
export default router
