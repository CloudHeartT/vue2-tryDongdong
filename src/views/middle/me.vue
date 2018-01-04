<template>
	<section class="top">
		<div class="top-title">{{title}}</div>
		<me-login></me-login>
	</section>
</template>

<script>
import meLogin from '@c/middle/me/me-login.vue'
	export default{
		name:'me',
		data(){
			return{
				title:"我的"
			}
		},
		components:{
			meLogin
		}
	}
</script>

<style>
</style>