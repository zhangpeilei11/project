<template>
      <div class="shopcar-container">
    
    <div class="goods-list">

      <!-- 商品列表项区域 -->
      <div :class="['mui-switch mui-switch-mini main mui-active']"  id="switch">
                <div class="mui-switch-handle parent" @click = "p_toggle"></div>
      </div>
      <div class="mui-card" v-for="item in list" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						
              <switch-1 :s_id="item.id" @parent="son"></switch-1>
            <img :src="item.thumb_path">
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <numbox  :goodsid="item.id"></numbox>
                <!-- 问题：如何从购物车中获取商品的数量呢 -->
                <!-- 1. 我们可以先创建一个 空对象，然后循环购物车中所有商品的数据， 把 当前循环这条商品的 Id， 作为 对象 的 属性名，count值作为 对象的 属性值，这样，当把所有的商品循环一遍，就会得到一个对象： { 88: 2, 89: 1, 90: 4 } -->
                <a href="#" @click.prevent="del(item.id)">删除</a>
              </p>
            </div>

					</div>
				</div>
			</div>

    </div>
    

    <!-- 结算区域 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
              <p>总计（不含运费）</p>
              <span>已勾选商品 <span class="red">{{count}}</span> 件， 总价 <span class="red">￥{{ count==0?0:$store.state.total}}</span></span>
            </div>
             <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>


      <!-- <p>{{ $store.getters.getGoodsSelected }}</p> -->

  </div>
</template>



<script>
import numbox from "../soncom/car_numBox.vue"
import mui from"../lib/mui/js/mui.min.js"
import switch1 from "../soncom/s_switch.vue"
export default {
    data(){
        return {
            list:[],
            flag:true,
            count:0,
            price:0,
            son1:[]
        }
    },
    methods:{   
        getgoods(){
          this.$http.get("api/goods/getshopcarlist/87,88,89").then(result=>{
            this.list =  result.body.message;
            var a = result.body.message;
            this.$store.commit("carlist",a)
            result.body.message.forEach((item)=>{
            this.$store.state.carnum.push(item.id)
            })
          })
        },
        p_toggle(el){
            if(this.flag == true){
                this.flag = false
                this.count = 0
                this.ptoggle = 1
                console.log(this.son1)
                this.son1.forEach((item)=>{
                  item.classList.remove("mui-active")
                }) 
            }else if(this.flag == false){
                this.flag = true
                this.son1.forEach((item)=>{
                  item.classList.add("mui-active")
                })           
                this.count = this.$store.state.counts;
                this.total = 0
                this.ptoggle = 0

            }
            // return this.flag
        },
        totals(){
            this.$store.state.total = 0;
            this.$store.state.counts = 0
            this.$store.state.car.forEach(item=> {
                for(var i = 0;i<=this.$store.state.carnum.length;i++){
                  if(item.id == this.$store.state.carnum[i]){
                    this.$store.state.total += item.cou*item.sell_price
                    this.$store.state.counts+= item.cou
                  }
                }
            });
            this.count = this.$store.state.counts
            this.price = this.$store.state.total

        },
        del(id){
           this.$store.state.car.forEach((item,i)=> {
             if(item.id == id){
               this.$store.state.car.splice(i,1)
             }
           })
        },
        son(data){
          console.log(1111)
          if(data==undefined){
            return
          }else{
          this.son1.push(data)

          }
          console.log(data)
        }
    
    },
    created(){
       this.getgoods()
    },
    mounted(){
        mui('.mui-switch')['switch']()
        this.son()
    },
    components:{
        numbox,
        switch1
    },
    computed:{
        aaa(){
            // if(this.counts !== 0){
            

            this.totals()
            // this.p_toggle()
            // }
            // console.log(this.counts)
            return this.$store.state.num
        },
    },
    watch:{
        "aaa":(val,bbb)=>{
          
        },
        "count":(newVal,oldVal)=>{
          // console.log(newVal)
          // console.log(oldVal)
        }
    
    }
}
</script>
<style lang="scss" spoced>
    .mui-switch.mui-switch-mini.main{
        margin: 5px 25px 0;
    }
    .shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
      flex:0 0 0 4px
    }
    img {
      width: 60px;
      margin-left: 10px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>