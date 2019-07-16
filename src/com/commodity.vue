<template>
    <div class="body">
        <ul>
            <li v-for="item in goods" :key = item.id @click="info(item.id)">
                <img :src="item.img_url">
                <div class="content">
                    <p class="title">{{item.title}}</p>
                    <div class="price">
                        <p class="p_change">
                            <span class="new">￥{{item.sell_price}}</span>
                            <span class="old">￥{{item.market_price}}</span>
                        </p>
                        <p class="remain">
                            <span class="hot">热卖中</span>
                            <span class="num">剩{{item.stock_quantity}}件</span>
                        </p>
                    </div>
                </div>
            </li>    
        </ul>
        <mt-button type="danger" size="large" @click="more">加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            goods:[],
            pageindex:1
        }
    },
    methods:{
        getgoods(){
            this.$http.get("api/getgoods?pageindex="+this.pageindex).then(result=>{
                this.goods = result.body.message;
            })
        },
        more(){
            this.pageindex++;
            this.getgoods();
            if(this.goods.length==0){
                let instance = Toast('没有更多的了');
                setTimeout(() => {
                    instance.close();
                    this.$router.go("/home/commodisy")
                }, 2000);
            }
        },
        info(id){
            this.$router.push("/home/commodityinfo/"+id);
        }
    },
    created(){
        this.getgoods()
    },
}
</script>
<style lang="scss" scoped>
p{
    margin: 0;
}
.body{
    padding: 10px;
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li{
            list-style: none;
            border: 1px #ccc solid;
            flex: 0 0 49%;
            margin-bottom: 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 0 0 6px #999;
            img{
                padding: 5px;
                width: 100%;
                display: block;
            }
            .content{
                padding: 1px;               
                .title{
                    text-align: left;
                    margin: 10px 0;
                    color: #000;
                    padding: 0 5px;
                    font-weight: 600;
                    line-height: 15px;
                }
                .price{
                    background-color: #eee;
                    .p_change{
                        padding: 0 5px;
                        line-height: 30px;
                        display: flex;
                        .new{
                            color: red;
                            margin-right: 15px;
                            font-weight: 600;
                        }
                        .old{
                            text-decoration: line-through;
                            font-size: 12px;
                        }
                    }
                    .remain{
                        padding: 0 10px;
                        line-height: 30px;
                        display: flex;
                        justify-content: space-between;
                        font-size: 11px;
                    }
                }
                
            }
        }
    }
}
</style>