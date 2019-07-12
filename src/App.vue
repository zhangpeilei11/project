<template>
    <div>
        <mt-header fixed title="固定在顶部"></mt-header>
        <input type="button" @click="show" style="margin:80px" value="123">
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="glyphicon glyphicon-home"></span>
				<span class="mui-tab-label cal">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="glyphicon glyphicon-user"></span>
				<span class="mui-tab-label cal">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="glyphicon glyphicon-shopping-cart car"></span>
				<span class="mui-tab-label cal">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="glyphicon glyphicon-search"></span>
				<span class="mui-tab-label cal">搜索</span>
			</a>
		</nav>
     
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {

        }
        
    },
    methods: {
            show(){
                Toast({
                    message:"哈哈",
                    iconClass:"mui-icon mui-icon-home"
                })
            }
    },
    
}
</script>
<style  scoped>
    .mui-bar-tab.mui-tab-item.glyphicon{
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar.glyphicon{
        font-size: 24px;
        position: relative;
        z-index: 20;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .glyphicon{
        /* font-family: Muiicons; */
        font-size: 24px;
        font-weight: 400;
        font-style: normal;
        line-height: 1;
        display: inline-block;
        text-decoration: none;
        -webkit-font-smoothing: antialiased;
    }
    .mui-tab-label.cal{
        display: block;
        font-size: 11px;
    }
    .mui-badge {
        position: absolute;
        padding: 2px 3px;
        top:1px;
        border-radius: 50%;
    }
</style>