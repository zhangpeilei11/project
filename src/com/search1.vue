<template>
    <div class="mui-content mui-row mui-fullscreen">
			<div class="mui-col-xs-3" @click="show">
				<div ref="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
                    <a class="mui-control-item" data-index="' + (i - 1) + '" href="#content' + i + '">选项' + i + '</a>
                </div>
			</div>
			<div ref="segmentedControlContents" class="mui-col-xs-9" style="border-left: 1px solid #c8c7cc;">
			</div>
		</div>
</template>
<script>
import mui from "../lib/mui/js/mui.js"
export default {
    data(){
        return {
            controls:"",
            contents:""
        }
    },
    methods: {
        show(){
            this.controls = this.$refs.segmentedControls
            this.contents = this.$refs.segmentedControlContents
            console.log(this.$refs.segmentedControls.outerHTML)
            // console.log(this.$refs.segmentedControlContents.outerHTML)
            if(this.controls==null){
                this.controls = `<div></div>`
            }
            var html = [];
			var i = 1,
				j = 1,
				m = 16, //左侧选项卡数量+1
				n = 21; //每个选项卡列表数量+1
			for (i=1; i < m; i++) {
				html.push('<a class="mui-control-item" data-index="' + (i - 1) + '" href="#content' + i + '">选项' + i + '</a>');
            }
            console.log(this.$refs)
            this.controls.innerHTML = html.join('');
			// controls.innerHTML = '<h1>123</h1>'
            
			html = [];
			for (i = 1; i < m; i++) {
				html.push('<div id="content' + i + '" class="mui-control-content"><ul class="mui-table-view">');
				for (j = 1; j < n; j++) {
					html.push('<li class="mui-table-view-cell">第' + i + '个选项卡子项-' + j + '</li>');
				}
				html.push('</ul></div>');
			}
            this.contents.innerHTML = html.join('');
			// contents.innerHTML = '<h1>234</h1>'
            
			//默认选中第一个
			this.controls.querySelector('.mui-control-item').classList.add('mui-active');
//			contents.querySelector('.mui-control-content').classList.add('mui-active');
			(function(data1,data2) {
				// var controlsElem = document.getElementById("segmentedControls");
                // var contentsElem = document.getElementById("segmentedControlContents");
                // console.log(data)
				var controlListElem = data1.querySelectorAll('.mui-control-item');
				var contentListElem = data2.querySelectorAll('.mui-control-content');
				var controlWrapperElem = data1.parentNode;
				var controlWrapperHeight = controlWrapperElem.offsetHeight;
				var controlMaxScroll = controlWrapperElem.scrollHeight - controlWrapperHeight;//左侧类别最大可滚动高度
				var maxScroll = data2.scrollHeight - data2.offsetHeight;//右侧内容最大可滚动高度
				var controlHeight = controlListElem[0].offsetHeight;//左侧类别每一项的高度
				var controlTops = []; //存储control的scrollTop值
				var contentTops = [0]; //存储content的scrollTop值
				var length = contentListElem.length;
				for (var i = 0; i < length; i++) {
					controlTops.push(controlListElem[i].offsetTop + controlHeight);
				}
				for (var i = 1; i < length; i++) {
					var offsetTop = contentListElem[i].offsetTop;
					if (offsetTop + 100 >= maxScroll) {
						var height = Math.max(offsetTop + 100 - maxScroll, 100);
						var totalHeight = 0;
						var heights = [];
						for (var j = i; j < length; j++) {
							var offsetHeight = contentListElem[j].offsetHeight;
							totalHeight += offsetHeight;
							heights.push(totalHeight);
						}
						for (var m = 0, len = heights.length; m < len; m++) {
							contentTops.push(parseInt(maxScroll - (height - heights[m] / totalHeight * height)));
						}
						break;
					} else {
						contentTops.push(parseInt(offsetTop));
					}
				}
				data2.addEventListener('scroll', function() {
					var scrollTop = data2.scrollTop;
					for (var i = 0; i < length; i++) {
						var offsetTop = contentTops[i];
						var offset = Math.abs(offsetTop - scrollTop);
//						console.log("i:"+i+",scrollTop:"+scrollTop+",offsetTop:"+offsetTop+",offset:"+offset);
						if (scrollTop < offsetTop) {
							if (scrollTop >= maxScroll) {
								onScroll(length - 1);
							} else {
								onScroll(i - 1);
							}
							break;
						} else if (offset < 20) {
							onScroll(i);
							break;
						}else if(scrollTop >= maxScroll){
							onScroll(length - 1);
							break;
						}
					}
				});
				var lastIndex = 0;
				//监听content滚动
				var onScroll = function(index) {
					if (lastIndex !== index) {
						lastIndex = index;
						var lastActiveElem = data1.querySelector('.mui-active');
						lastActiveElem && (lastActiveElem.classList.remove('mui-active'));
						var currentElem = data1.querySelector('.mui-control-item:nth-child(' + (index + 1) + ')');
						currentElem.classList.add('mui-active');
						//简单处理左侧分类滚动，要么滚动到底，要么滚动到顶
						var controlScrollTop = controlWrapperElem.scrollTop;
						if (controlScrollTop + controlWrapperHeight < controlTops[index]) {
							controlWrapperElem.scrollTop = controlMaxScroll;
						} else if (controlScrollTop > controlTops[index] - controlHeight) {
							controlWrapperElem.scrollTop = 0;
						}
					}
				};
				//滚动到指定content
				var scrollTo = function(index) {
					data2.scrollTop = contentTops[index];
				};
				mui(data1).on('tap', '.mui-control-item', function(e) {
                    console.log(2222)
					scrollTo(this.getAttribute('data-index'));
					return false;
				});
			})(this.controls,this.contents);
        }
    },
    // created(){
        
    // },
    // mouted(){
    //         this.show()
          
			
    // },
    // updated() {
    //         this.show()
        
    // },
    computed:{
        aaa(){
            return this.show()
        }
    },
    watch:{
        aaa(){
            console.log(222333)
        },
        "controls":()=>{
            console.log(111)
        }
    }
}
</script>
<style lang="">
    .mui-row.mui-fullscreen>[class*="mui-col-"] {
				height: 100%;
			}
			
			.mui-col-xs-3,
			.mui-col-xs-9 {
				overflow-y: auto;
				height: 100%;
			}
			
			.mui-segmented-control .mui-control-item {
				line-height: 50px;
				width: 100%;
			}
			
			.mui-control-content {
				display: block;
			}
			
			.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
				background-color: #fff;
			}
</style>
