<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbolist" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		            <img src="../images/menu1.png" alt="">
		            <div class="mui-media-body">新闻资讯</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		            <img src="../images/menu2.png" alt="">
		            <div class="mui-media-body">图片分享</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/commodity">
		            <img src="../images/menu3.png" alt="">
		            <div class="mui-media-body">商品购买</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		            <img src="../images/menu4.png" alt="">
		            <div class="mui-media-body">留言反馈</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		            <img src="../images/menu5.png" alt="">
		            <div class="mui-media-body">视频专区</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
		            <img src="../images/menu6.png" alt="">
		            <div class="mui-media-body">联系我们</div></router-link></li>
		    
		</ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lunbolist:[]
        }
    },
    methods: {
        getlunbo(){
            this.$http.get("api/getlunbo").then(result=>{
                if(result.body.status==0){
                    this.lunbolist=result.body.message
                }else{
                    console.log("请求轮播图数据失败")
                }
            })
        }
        
    },
    created(){
        this.getlunbo()
    }
}
</script>
<style lang = "scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: cyan;
        }
        &:nth-child(3){
            background-color: blue;
        }
        img{
            height: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
        }
        
    }
}
.mui-table-view.mui-grid-view.mui-grid-9{
    background: #fff;
    li{
        border: none;
        img{
            height: 60px;
            width: 60px;
        }
        div{
            font-size: 11px;
        }
    }
}


</style>