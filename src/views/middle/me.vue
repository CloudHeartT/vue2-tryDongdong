<template>
<section class="me">
	<section class="top">
		<div class="top-title">{{title}}</div>
	</section>
	<me-login v-show="loginShow"></me-login>
	<router-view></router-view>
</section>
</template>

<script>
import meLogin from '@c/middle/me/me-login.vue'
	export default{
		name:'me',
		data(){
			return{
				title:"我的",
				loginShow: true
			}
		},
		 watch: {
          '$route':function(){
          	this.routeChange()
          }
        },
		components:{
			meLogin
		},
		methods:{
			routeChange(){
   		debugger
   		let path = this.$route.path
   		if (path === '/me') {
        this.loginShow = true
      } else {
        this.loginShow = false
      }
   	},
		}
	}
</script>

<style>
</style>