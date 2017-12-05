<template><!--页面布局暂时使用写死的方法，之后再优化-->
	<section>
		<section class="top">
			<div  style="width: 32px;height: 22x;" @click="swiperPrevClick">
				<img src="../../assets/images/leftTriangle.svg" />
	  		</div>
			<div style="color: white;margin-left: 120px;margin-top: 5px;">{{test}}</div>
		</section>
		<section style="margin-top: 50px ;" :style="{height: screenHeight + 'px',width:screenWidth + 'px'}">
			<baidu-map></baidu-map>
		</section>
	</section>
</template>

<script>
import baiduMap from '@c/right/baiduMap.vue'

	export default{
		data(){
			return{
				test:"走跑运动",
				screenWidth :document.documentElement.clientWidth ,
  				screenHeight :document.documentElement.clientHeight-50 ,
			}
		},
		props:[
			'mySwiper'			
		],
		components:{
			baiduMap
		},
		methods:{
			swiperPrevClick(){
				debugger
				/*需求：点击此组件的返回按钮，返回swiper的上一页。
				 两个想法：
				 1、将app.vue里new出来的swiper放入状态管理器，在此组件中调用vuex从而调用swiper
				 2、此组件触发父组件方法*/
				this.$emit('clickPreSwiper')  /*实验成功*/
			}
		}
	}
</script>

<style>
	.top {
	/*background-color: #fff; 白色*/
	background-color: darkslategray;
	position: fixed;
	width: 100%;
	top: 0px;
	height: 50px;
	display: -webkit-box; 
	padding-top: 7px;
	box-sizing: border-box;
	z-index: 10000;
},
.triangle{
	width: 22px;
    height: 22px;
}
</style>