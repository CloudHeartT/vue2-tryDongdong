<template>
	<!--切换路由的两种方式: 1、router-link :to   2、this.$router.push('xxx')-->
<!--<router-link :to ="{name:'detail',params:{id:item.mID}}">   <!--此处的name为route定义页面的路由的name-->
<router-link :to="{ path: '@v/middle/me/login.vue'}" class="me-r-class">
	<div class="me-login">
		<img class="imgClass" src="../../../assets/images/login.svg"/>
		<div class="contentClass">{{content}}</div>
	</div>
</router-link>
</template>

<script>
	export default{
		data(){
			return{
				content:'登录/注册'
			}
		}
	}
</script>

<style>
	.me-r-class{
		display: block;
		width: calc(100%);
	}
	.imgClass{
		height: 50px;
		width: 80px;
		float: left;
		margin-top: 10px;
	}
	.me-login {
	/*background-color: #fff; 白色*/
	background-color: #575757;
	width: calc(100%);
	height: 80px;
	margin-top: 50px;
}
	.contentClass{
		color: white;
		line-height: 80px;
		size: a4;
	}
</style>