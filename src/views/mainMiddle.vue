<template>
	<section class="top">
		<div style="color: white" >{{test}}
		</div>
		<datepicker style="position: absolute;width: 20px;" :language="language"></datepicker>
		<div style="margin-top: 50px;">
		<hello-world></hello-world>
		</div>
	</section>
</template>

<script>
	import Datepicker from 'vuejs-datepicker';
	
	import helloWorld from '@c/helloWorld.vue'
	console.log(Datepicker);
	
	export default{
		data(){
			return{
				test:"页面测试",
				language: 'zh',
			}
		},
		components:{
			helloWorld,
  			Datepicker
		}
	}
</script>

<style>
</style>