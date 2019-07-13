<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要发表的内容(最多评论120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large" class="btn">发表评论</mt-button>
        <div class="commentlist">
            <div class="commentlist_item" v-for="(item,i) in commentlist" :key="i">
                <div class="commentlis_tltle">
                    第{{i+1}}楼 用户:{{item.user_name}} 发表时间:{{item.add_time | timeFormat("YY-MM-DD hh:mm:ss")}}
                </div>
                <div class="commentlis_body">
                    {{item.content===""&&"undefined" ? "此用户什么都没说" : item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" class="btn" plain @click="getmore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            artid:this.parentId,
            pageindex:1,
            commentlist:[]
        }
    },
    props:["parentId"],
    methods: {
        getcomment(){
            this.$http.get("api/getcomments/"+this.artid+"?pageindex="+this.pageindex).then(result=>{
                if(result.body.status==0){
                    this.commentlist=this.commentlist.concat(result.body.message)
                    console.log(222222);
                }else{
                    console.log("获取评论列表失败")
                }
            })
        },
        getmore(){
            this.pageindex++;
            this.getcomment();
        }
    },
    created(){
        this.getcomment()
        console.log(1111);
    }
}  
</script>
<style lang="scss">
    hr{
        height: 2px;
        background-color: #eee;
        margin: 15px 0;
    }
    .btn{
        margin: 10px 0;
        font-size: 18px;
    }
    .commentlist{
        .commentlist_item{
            .commentlis_tltle{
                margin: 10px 0;
                background-color: #ccc;
                padding: 2px 0;
            }
            .commentlis_body{
                padding-left: 20px;
            }
        }
    }
</style>