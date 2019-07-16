import VueRouter from "vue-router"
import home from "./com/home.vue"
import member from "./com/member.vue"
import car from "./com/car.vue"
import search from "./com/search.vue"
import newlist from "./com/newlist.vue"
import newinfo  from "./com/newinfo.vue"
import photolist from "./com/photolist.vue"
import photoinfo from "./soncom/photoinfo.vue"
import commodity from "./com/commodity.vue"
import commodityinfo from "./com/commodityinfo.vue"
import img_text from "./com/img_text.vue"
import comment from "./soncom/comment.vue"
var router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},       
        {path:"/home",component:home    },       
        {path:"/member",component:member},       
        {path:"/car",component:car},       
        {path:"/search",component:search},       
        {path:"/home/newlist",component:newlist},       
        {path:"/home/newlist/newinfo/:id",component:newinfo},       
        {path:"/home/photolist",component:photolist},       
        {path:"/home/photolist/photoinfo/:id",component:photoinfo},       
        {path:"/home/commodity",component:commodity},       
        {path:"/home/commodityinfo/:id",component:commodityinfo},       
        {path:"/home/img_text/:id",component:img_text},       
        {path:"/home/comment/:id",component:comment},       
    ],
    linkActiveClass:"mui-active"
})
export default router
