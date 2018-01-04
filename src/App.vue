<template>
  <div id="app" :style="{height: screenHeight + 'px',width:screenWidth + 'px'}" class="base"><!--所有页面的入口-->
  	<!--note:加入swiper后，改变页面大小必须手动刷新，页面布局才会更改-->
  	<div class="swiper-container">
  		<div class="swiper-wrapper">
  		 	<!--主页左划-->
		  	<div class="mainByFoot swiper-slide" :style="{height: screenHeight + 'px',width:screenWidth + 'px'}">
		  		<main-left @clickNextSwiper="nextSwiper"></main-left>
		  	</div>
		  	<div class="mainByFoot swiper-slide"><!--主页面（由底部导航栏控制的页面）-->
		     <div class="main" :style="{height: screenHeight + 'px',width:screenWidth + 'px'}"> 
		      <router-view></router-view>
		     </div>
		     <footer-nav :showNav="showNav"></footer-nav>
		  	</div>
		  		<!--主页右划-->
		  	<div class="mainByFoot swiper-slide" :style="{height: screenHeight + 'px',width:screenWidth + 'px'}">
		  		<main-right @clickPreSwiper="preSwiper" ></main-right>
		  	</div>
		  </div>
		</div>
  </div>
</template>

<script>
	import Swiper from '@a/js/swiper.min.js'
	
import footerNav from '@c/middle/footerNav.vue'
import mainRight from '@v/mainRight.vue'
import mainLeft from '@v/mainLeft.vue'

export default {
  name: 'app',
  data(){
  	return{
  		showNav:true,
  		screenWidth :document.documentElement.clientWidth ,
  		screenHeight :document.documentElement.clientHeight
			
  	}
  },
  components:{
  	footerNav,
  	mainRight,
  	mainLeft
  },
  watch: {
          '$route':function(){
          	this.routeChange()
          }
        },
   methods:{
   	routeChange(){
   		debugger
   		let path = this.$route.path
   		if (path === '/' || path === '/analysis' || path === '/me' || path === '/find' || path === '/goal') {
        this.showNav = true
      } else {
        this.showNav = false
      }
   	},
   	initSwiper(){
   		this.mySwiper = new Swiper('.swiper-container',{
  		initialSlide :1,
  		autoHeight:true
		})
   	},
   	preSwiper(){
				this.mySwiper._slidePrev();
   	},
   	nextSwiper(){
				this.mySwiper._slideNext();
   	}
   },
   created () {
    this.routeChange()
  },
  mounted () {
  	debugger
  	console.log(document.documentElement.clientWidth)//屏幕宽度
  	console.log(document.documentElement.clientHeight)//屏幕高度
  	
  	console.log(document.body.clientWidth)//组件宽度
  	console.log(document.body.clientHeight)//组件高度
  	
  	
    window.setTimeout(() => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 250),
    console.log("挂载好了")
  	this.initSwiper()
    
  }
}
</script>

<style>
	.swiper-slide{height:10px}
	.swiper-slide-active { height:auto}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
body {
    background: #f5f5f5;
}
</style>
