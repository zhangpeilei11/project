<template>
    <div class="content">
        <mt-header title="Vue项目">
            <a href="javascript:history.go(-1)" slot="left" :style = "this.$route.path=='/home' ? 'display:none' : 'display:block'">
                <mt-button icon="back">返回</mt-button>
            </a>
        </mt-header>
        <transition mode="out-in">
            <router-view @parentadd="add"></router-view>       
        </transition>
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="glyphicon glyphicon-home"></span>
				<span class="mui-tab-label cal">首页</span>
			</router-link>
			<router-link class="mui-tab-item1"  to="/member">
				<span class="glyphicon glyphicon-user"></span>
				<span class="mui-tab-label cal">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/car" id="badge">
				<span class="glyphicon glyphicon-shopping-cart car">
                    <span class="mui-badge" :style="num==0?'display:none':'display:block'">{{num}}</span>
                </span>
				<span class="mui-tab-label cal">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="glyphicon glyphicon-search"></span>
				<span class="mui-tab-label cal">搜索</span>
			</router-link>
		</nav>
     
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            route:"",
            num:0
        }
        
    },
    methods: {
        show(){
            Toast({
                message:"哈哈",
                iconClass:"mui-icon mui-icon-home"
            })
        },
        add(data){
            console.log(data);
            this.num = this.num +data
        }
 
    },
    
}
</script>
<style  lang="scss" scoped>
    .v-enter{
        opacity: 0;
        transform: translateX(100%)
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.1s ease;
    }
    .mui-bar-tab .mui-tab-item1.mui-active {
        color: #007aff;
    }
    .mui-bar-tab .mui-tab-item1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .content{
        // padding-top: 40px;
        overflow-x:hidden; 
        padding-bottom: 50px;
    }
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
    .mui-badge {
        font-size: 11px;
        line-height: 1.4;
        position: absolute;
        top: -2px;
        left: 100%;
        margin-left: -10px;
        padding: 1px 5px;
        color: #fff;
        background: red;
    }
</style>