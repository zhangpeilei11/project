<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newlist/newinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body" id="d_right">
							<h1>{{item.title}}</h1>
							<p class="mui-ellipsis time"><a href="#">发布时间:{{item.add_time | timeFormat("YY-MM-DD hh:mm:ss")}}</a><i>点击:{{item.click}}次</i></p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newslist:[]
        }
    },
    methods:{
        getlist(){
            this.$http.get("api/getnewslist").then(result=>{
                if(result.body.status==0){
                    this.newslist = result.body.message
                }else{
                    console.log("获取失败")
                }
            })
        }
    },
    created(){
        this.getlist();
    }
}
</script>
<style lang="scss" scoped>
#d_right{
    overflow: initial;
}
    li{
        
        h1{
            font-size: 14px;
        }
        .mui-ellipsis.time{
            position: relative;
            color: #226aff;
            font-size: 12px;
            top: 10px;
            display: flex;
            justify-content: space-between;
            a{
                // display: block;
                // float: left;
                color: #226aff;
            }
            i{
                // display: block;
                // float:right;
                font-style: initial;
            }
        }
    }
</style>