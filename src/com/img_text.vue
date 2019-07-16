<template>
    <div>
        <h1 class="imgText_title">{{info.title}}</h1>
        <div class="imgText_content" v-html=info.content></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            info:{},
            id:this.$route.params.id
        }
    },
    methods:{
        getimg_text(){
            this.$http.get("api/goods/getdesc/"+this.id).then(result=>{
                this.info = result.body.message[0]
            })
        }
    },
    created(){
        this.getimg_text();
    }
        
}
</script>
<style lang="scss">
    .imgText_title{
        text-align: center;
        font-size: 18px;
        padding: 10px;
    }
    .imgText_content{
        padding: 15px;
        img{
            width: 100%;
        }
    }
</style>