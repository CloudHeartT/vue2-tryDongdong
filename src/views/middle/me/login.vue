<template>
		<div class="form">
	      <ul class="tab-group" @click="changeTab">
	        <li class="tab" :class="{'active':show}"><a sign='signUp'>Sign Up</a></li>
	        <li class="tab" :class="{'active':!show}"><a>Log In</a></li>
	      </ul>
	      
	      <div class="tab-content">
	        <section id="signup" v-show="show">   
	          <h1>Sign Up for Free</h1>
	          
	          <form action="/" method="post">
	          
	          <div class="top-row">
	            <div class="field-wrap">
	              <label>{{firstName}}<span class="req">*</span>
	              </label>
	              <input type="text" required autocomplete="off" />
	            </div>
	        
	            <div class="field-wrap">
	              <label>{{lastName}}<span class="req">*</span>
	              </label>
	              <input type="text"required autocomplete="off"/>
	            </div>
	          </div>
				<!--<div class="field-wrap">
				    <label>性别：</label>
				    <input id="sex01" type="radio" value="1" v-model="sex">
				    <label for="sex01">男</label>
				    <input id="sex02" type="radio" value="2" v-model="sex">
				    <label for="sex02">女</label>
				</div>-->
	          <div class="field-wrap">
	            <label>{{email}}<span class="req">*</span>
	            </label>
	            <input type="email"required autocomplete="off"/>
	          </div>
	          
	          <div class="field-wrap">
	            <label>{{password}}<span class="req">*</span>
	            </label>
	            <input type="password"required autocomplete="off"/>
	          </div>
	          
	          <button type="submit" class="button button-block">Get Started</button>
	          
	          </form>
	
	        </section>
	        
	        <section id="login" v-show="!show">   
	          <h1>Welcome Back!</h1>
	          
	          <form <!--@submit.prevent="submit"-->>
	          
	            <div class="field-wrap">
	            <label>UserName<span class="req">*</span>
	            </label>
	            <input type="name"required autocomplete="off" v-model="loginText.username"/>
	          </div>
	          
	          <div class="field-wrap">
	            <label>Password<span class="req">*</span>
	            </label>
	            <input type="password"required autocomplete="off" v-model="loginText.password"/>
	          </div>
	          
	          <p class="forgot"><a href="#">Forgot Password?</a></p>
	          
	          <button class="button button-block" @click="loginBtn">Log In</button>
	          
	          </form>
	
	        </section>
	        
	      </div><!-- tab-content -->
	      
	</div> <!-- /form -->
</template>

<script>
	import '@a/css/login.css'
	import { mapActions , mapMutations } from 'vuex'

	export default{
		name:'login',
		data(){
			return{
				firstName: 'First Name',
				lastName: 'Last Name',
				email: 'Email Adress',
				password: 'Password',
				show:true,
				loginText :{}
			}
		},
		methods:{
			...mapActions([
				'loginAsync'
			]),
			changeTab(event){
				debugger;
				event.target.getAttribute('sign') ? this.show = true : this.show = false
			},
			loginBtn(){
				debugger;
				console.log(this.loginText);
				this.$store.dispatch('loginAsync',{user:this.loginText});
			}
			
			
			
			/*,
			loginFunc(event){
				debugger
				let _this = this
			  event.preventDefault();
			  _this.parent().addClass('active');
			  _this.parent().siblings().removeClass('active');
			  
			  target = _this.attr('href');
			
			  $('.tab-content > div').not(target).hide();
			  
			  $(target).fadeIn(600);
			}*/
		}
	}
</script>

<style>
</style>