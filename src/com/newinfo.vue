<template>
    <div class="info_content">      
        <h1 class="title">{{info.title}}</h1>
        <p>
            <span class="title">发表时间:{{info.add_time}}</span>
            <span class="clicknum">点击:{{info.click}}次</span>
        </p>
        <hr>
        <div v-html="info.content" class="content"></div>
        <div>
            <comment :parentId="id"></comment>     
        </div>  

    </div>
    
</template>
<script>
import comment from "../soncom/comment.vue"
export default {
    data(){
        return {
            id:this.$route.params.id,
            info:[]
        }
    },
    methods:{
        getinfo(){
            // id = this.id;
            this.$http.get('api/getnew/'+this.id).then(result=>{
                if(result.body.status==0){
                    this.info = result.body.message[0];
                }else{
                    console.log("获取新闻详情失败")
                }
            })
        }
    },
    components:{
        comment
    },
    created(){
        this.getinfo();
    }
}
</script>
<style lang="scss" scoped>
.info_content{
    padding: 2px 4px;
    h1{
        font-size: 16px;
        text-align: center;
        margin: 20px 0;
        color: red;
        font-weight: 600;
    }
    hr{
        margin:15px 0;
        height: 2%;
        background-color: #ccc;
    }
    p{
        margin: 0;
        padding: 0 5px;
        font-size: 12px;
        display: flex;
        justify-content:space-between;
        color: #226faa;

    }
    .content{
        img{
            width: 100%;
            block-size: 100%;
        }
    }
}
</style>
