<template>
    <div>
        <div class="info_content">      
            <h1 class="title">{{imginfo.title}}</h1>
            <p>
                <span class="title">发表时间:{{imginfo.add_time}}</span>
                <span class="clicknum">点击:{{imginfo.click}}次</span>
            </p>
            <hr>
            <vue-preview :slides="info" @close="handleClose"></vue-preview>
            <p class="content" v-html="imginfo.content"></p>  
            <comment :parentId="id"></comment>
        </div>
    </div>
</template>
<script>
import comment from "../soncom/comment.vue"
export default {
    data(){
        return {
            info:[],
            id:this.$route.params.id,
            imginfo:{}
        }
    },
    methods: {
        
        getphotoinfo(){
            this.$http.get("api/getthumimages/"+this.$route.params.id).then(result=>{
                result.body.message.forEach(item => {
                    item.w=600;
                    item.h=400;
                    item.msrc = item.src;
                });
                this.info = result.body.message;
                // console.log(VuePreview);
            })
        },  
      
        handleClose () {
            console.log('close event')
        },
    
        getPhotoInfo() {
      // 获取图片的详情
            this.$http.get("api/getimageInfo/" + this.id).then(result => {
                if (result.body.status === 0) {
                this.imginfo = result.body.message[0];
                }
            });
        },
        
    },
    components:{
        comment,
        
    },
    created(){
        this.getphotoinfo();
        this.getPhotoInfo();
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
        color: r#22f622;
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
    .content{
        display: block;
        color: #000;
        line-height: 25px;
        font-size: 11px;
        margin-top: 10px;
    }
    
  

}
</style>