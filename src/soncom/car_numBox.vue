<template>
<!-- 问题： 我们不知道什么时候能够拿到 max 值，但是，总归有一刻，会得到一个真正的 max 值 -->
<!-- 我们可以 使用 watch 属性监听，来 监听 父组件传递过来的 max 值，不管 watch 会被触发几次，但是，最后一次，肯定是一个 合法的 max 数值 -->
  <!-- <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='60'>
    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="subtract">-</button>
    <input id="test" class="mui-input-numbox" type="button" ref="numbox"  value=cou()/>>
    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add">+</button>
  </div> -->
    <div class="mui-numbox" data-numbox-step='1' data-numbox-min='0' data-numbox-max='60'>
    <!-- "-"按钮，点击可减小当前数值 -->
    <button class="mui-btn mui-numbox-btn-minus" type="button" @click="subtract" ref = "jian">-</button>
    <input class="mui-numbox-input" type="number" ref="numbox"  v-model="goodcou" @click="cou()"/>>
    <!-- "+"按钮，点击可增大当前数值 -->
    <button class="mui-btn mui-numbox-btn-plus" type="button" @click="add">+</button>
    </div>

  <!-- 分析： 子组件什么时候把 数据传递给父组件 -->
  <!--  -->
</template>

<script>
// import mui from "../lib/mui/js/mui.min.js";
export default {
    data(){
        return {
            goodcou:0,
            
        }
    },
  mounted() {
    // 初始化数字选择框组件
    // mui(".mui-numbox").numbox();
    // console.log(this.max);
     if(this.$refs.numbox.value == 1){
            // this.$refs.numbox.value =1         
            this.$refs.jian.style.color="#eee"
            this.$refs.jian.style.backgroundColor="#fff"
            // return 
        }
  },
  methods: {
   
    cou(){
        this.$store.state.car.forEach(item => {
           
            if(item.id==this.goodsid){
                // console.log(item.cou)
                return this.goodcou = item.cou
            }
        });
    },
    subtract(){
        
        if(this.$refs.numbox.value <= 2){
                    
            this.$refs.jian.style.color="#eee"
            this.$refs.jian.style.backgroundColor="#fff"
        }
        if(this.$refs.numbox.value <= 1){
                    
            // this.$refs.jian.style.color="#eee"
            // this.$refs.jian.style.backgroundColor="#fff"
            return 
        }
            // console.log(this.$refs.numbox.value)

            this.goodcou--

            this.$store.commit("subtract",this.goodsid)
            console.log(this.$store.state.car)

            // console.log("减减")
            // console.log(this.$store.state.car)

            // console.log(this.goodcou)
            

        

    },
    add(){
        this.$refs.jian.style.color="#333"
        this.goodcou++
        this.$store.commit("addcar",this.goodsid)
        console.log(this.$store.state.car)

        console.log(this.$store.state.num)
        console.log(this.$store.state.total)
        console.log(this.$store.state.counts)
    }
   
  },
  props: ["goodsid"],
  watch: {
    // 属性监听
    // max: function(newVal, oldVal) {
    //   // 使用 JS API 设置 numbox 的最大值
    //   mui(".mui-numbox")
    //     .numbox()
    //     .setOption(max, 60);
    // }
   
    
  },
  created(){
       
      this.cou();

  }
};
</script>

<style lang="scss" scoped>

</style>
