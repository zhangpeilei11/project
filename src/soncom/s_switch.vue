<template>
    <div class="mui-switch mui-switch-mini mui-active" ref="sons">
            <div class="mui-switch-handle" @click ="show"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            toggle:1,
            sons:""
        }
    },
    methods:{
        show(el){
            // console.log(this.s_id)
            if(this.toggle == 0){
                el.currentTarget.parentElement.classList.add("mui-active")
                // console.log(el.currentTarget.parentElement)
                console.log(this.$refs.sons)
                this.toggle = 1
                this.$store.state.carnum.push(this.s_id)
            }else{
                var arr = this.$store.state.carnum
                el.currentTarget.parentElement.classList.remove("mui-active")
                this.toggle = 0
                for(var i = 0;i<= arr.length;i++){
                    if(this.$store.state.carnum[i]== this.s_id){
                        arr.splice(i,1)
                    }
                }
                // console.log(this.$store.state.carnum)
            }
        },
        com(){
            this.$emit("parent",this.sons)
        }

    },
    props:["s_id"],
    mounted(){
        this.sons = this.$refs.sons
        this.com()
    }
}
</script>