<template>
	<section class="top">
		<div class="calDiv"> 
			<img class="calendarImg"  src="../assets/images/calendar.svg"/>			
			<datepicker style="float: right;" :calendar-class="calendarDiv" :format="format" :value="date" :language="language"  :id="id" ></datepicker>
		</div>
		<div style="margin-top: 50px;">
		<home></home>
		</div>
	</section>
</template>

<script>
	import Datepicker from 'vuejs-datepicker';
	
	import Home from '@c/middle/home/helloWorld.vue'
	
	export default{
		data(){
			return{
				test:"页面测试",
				screenWidth :document.documentElement.clientWidth ,
  				screenHeight :document.documentElement.clientHeight ,
				language: 'zh',
				id:'dateId',
				date:new Date(),
				format: 'MM月dd日',
				c1:"c1",
				calendarDiv:'calendarDiv'
			}
		},
		components:{
			Home,
  			Datepicker
		},
		methods:{
			datepickerOpenedFunction(event){
				debugger
				console.log("event="+event)
				console.log("this="+this.$children)
				
			}
		}
	}
</script>

<style>
	:root{ /*伪类：方便管理*/
		--base-left-margin:50px;
		--base-top-margin:5px
	}
	
	
	#dateId{
		font-size: 14px;
		width:100px;
		background-color:transparent;
		FILTER: alpha(opacity=0); /*androd*/ 
		border:0;
		color: white;
	}
	.calDiv{
		margin-left: calc(50% - var(--base-left-margin));
		margin-top: calc( var(--base-top-margin));
	}
	.calendarDiv{
		position: fixed !important; /*使用内置的出现了问题 calendar的参照对象不是屏幕而是父元素*/
		border: 0 !important;
		width :calc(100%) !important; /*在同一组属性设置中标有“!important”规则的优先级最大*/
		margin-left: calc(50% * (-1) + 30px);
		margin-top: calc(18px);
	}
	
	

</style>
<style scoped>
.calendarImg{
	float: left;
	width: 20px;
}	
</style>