<template><!--页面布局暂时使用写死的方法，之后再优化-->
	<section>
		<section class="top">
			<div  style="width: 32px;height: 22x;" @click="swiperNextClick">
				<img style="margin-left: 380px;" src="../assets/images/rightTriangle.svg" />
	  		</div>
			<div class="top-title-other">{{title}}</div>
		</section>
		<section  :style="{height: screenHeight + 'px',width:screenWidth + 'px'}">
			<img src="../assets/images/tobefinish.svg" />
		</section>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				title:"视频训练",
				screenWidth :document.documentElement.clientWidth ,
  				screenHeight :document.documentElement.clientHeight + 50 ,
			}
		},
		props:[
			'mySwiper'			
		],
		components:{
		},
		methods:{
			swiperNextClick(){
				debugger
				/*需求：点击此组件的返回按钮，返回swiper的上一页。
				 两个想法：
				 1、将app.vue里new出来的swiper放入状态管理器，在此组件中调用vuex从而调用swiper
				 2、此组件触发父组件方法*/
				this.$emit('clickNextSwiper')  /*实验成功*/
			}
		}
	}
</script>

<style>

.triangle{
	width: 22px;
    height: 22px;
}
</style>