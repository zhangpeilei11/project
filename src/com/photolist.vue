<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">

                    <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in photoclass" :key="item.id" @click="getphoto(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <ul class="photo-list">
            <router-link tag="li" v-for="item in photolist" :key="item.id" :to="'/home/photolist/photoinfo/'+item.id">
                <img v-lazy="item.img_url">
                <p>
                    <span class="title">{{item.title}}</span>
                    <span class="zhaiyao" v-html="item.zhaiyao"></span>
                </p>
            </router-link>
        </ul>
    </div>
</template>
<script>
import mui from "../lib/mui/js/mui.min.js"
// mui('.mui-scroll-wrapper').scroll({
// 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// });
export default {
    data(){
        return {
            photoclass:[],
            photolist:[]
        }
    },
    methods:{
        getclass(){
            this.$http.get("api/getimgcategory").then(result=>{
                if(result.body.status==0){
                    result.body.message.unshift({"title":"全部",id:0})
                    this.photoclass = result.body.message;
                }else{
                    console.log("获取图片分类失败")
                }
            })
        },
        getphoto(id){
            console.log(id);
            this.$http.get("api/getimages/"+id).then(result=>{
                if(result.body.status==0){
                    console.log(result);
                    this.photolist = result.body.message;
                }else{
                    console.log("获取图片分类失败")
                }
            })
        }
    },
    created(){
        this.getclass();
        this.getphoto(0);
    },
    mounted() {
    // 当 组件中的DOM结构被渲染好并放到页面中后，会执行这个 钩子函数
    // 如果要操作元素了，最好在 mounted 里面，因为，这里时候的 DOM 元素 是最新的
    // 2. 初始化滑动控件
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005,
             //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        console.log(111);
    },

}
</script>
<style lang="scss" scoped>
    
    .photo-list{
        text-align: center;
        padding: 10px;
        padding-bottom: 0;
        li{
            box-shadow: 0 0 9px #999;
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            position: relative;
            p{
                display: block;
                color:#fff;
                position: absolute;
                bottom:0;
                text-align: left;
                height: 74px;
                overflow: hidden;
                margin: 0;
                background-color: rgba(0,0,0,0.4);
                .title{
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 18px;
                }
               .zhaiyao{
                   display: block;
                    font-size: 13px; 
                    line-height: 18px;
               }
            }
            img{
                width: 100%;
                display: block;
            }
            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
        }
    }
    
</style>