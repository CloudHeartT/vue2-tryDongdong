<template>
  <footer class="footer" :class="{'go-back': !showNav}">
  	<section class="footer mint-1px-t" v-show="showNav">
  		<nav class="nav nav-me" :class="{'cur-page': route === '/me'}">
			<router-link to="me">
				<div class="nav-icon">
					<img v-show="route !== '/me'" src="../assets/images/mew.svg" alt="">
					<img v-show="route === '/me'" src="../assets/images/meo.svg" alt="">
				</div>
			</router-link>
	  	</nav>
	  	<nav class="nav nav-analysis" :class="{'cur-page': route === '/analysis'}">
			<router-link to="analysis">
				<div class="nav-icon">
					<img v-show="route !== '/analysis'" src="../assets/images/analysisw.svg" alt="">
					<img v-show="route === '/analysis'" src="../assets/images/analysiso.svg" alt="">
				</div>
			</router-link>
	  	</nav>
	  	<nav class="nav nav-run" :class="{'cur-page': route === '/'}">
	  		<router-link to="/">
	  			<div class="nav-icon">
	  				<img v-show="route !== '/'" src="../assets/images/runw.svg" alt="">
	  				<img v-show="route === '/'" src="../assets/images/runo.svg" alt="">
	  			</div>
	  		</router-link>
	  	</nav>
	  	<nav class="nav nav-goal" :class="{'cur-page': route === '/goal'}">
			<router-link to="goal">
				<div class="nav-icon">
					<img v-show="route !== '/goal'" src="../assets/images/goalw.svg" alt="">
					<img v-show="route === '/goal'" src="../assets/images/goalo.svg" alt="">
				</div>
			</router-link>
	  	</nav>
	  	<nav class="nav nav-find" :class="{'cur-page': route === '/find'}">
	  		<router-link to="find">
	  			<div class="nav-icon">
	  				<img v-show="route !== '/find'" src="../assets/images/findw.svg" alt="">
	  				<img v-show="route === '/find'" src="../assets/images/findo.svg" alt="">
	  			</div>
	  		</router-link>
	  	</nav>
  	</section>
  	<section v-show="!showNav" @click="goBack" style="width: 100%">
  		<p class="back"> < </p>
  	</section>
  </footer>
</template>
<script>
export default{
  props: {
  	'showNav': {
  		type: Boolean,
  		default: true
  	}
  },
  computed: {
  	route () {
  		debugger
  		return this.$route.path
  	}
  },
  methods: {
  	goBack () {
  		this.$router.back()
  	}
  }
}
</script>

<style>
.footer {
	/*background-color: #fff; 白色*/
	background-color: black;
	position: fixed;
	width: 100%;
	bottom: 0px;
	height: 50px;
	display: -webkit-box; 
	padding-top: 7px;
	box-sizing: border-box;
	z-index: 10000;
}
.footer nav {
	-webkit-box-flex: 1;
	text-align: center;
	color: #8a869e;
}
.footer .cur-page.nav{
	/*color: #ff4d64;   //red */
	color: orange;
}
.nav-icon {
	width: 22px;
	height: 22px;
	margin: 0 auto;
}
.nav-icon img {
	width: 100%;
	height: 100%;
}
.nav-me::after,
.nav-find::after,
.nav-goal::after,
.nav-analysis::after,
.nav-run::after,
.nav-me::after {
	padding-top: 2px;
	text-align: center;
	width: 30px;
	display: inline-block;
	font-size: 12px;
}
.nav-find::after {
	content: "发现";
}
.nav-goal::after {
	content: "目标";
}
.nav-analysis::after {
	content: "分析";
}
.nav-run::after {
	content: "运动";
}
.nav-me::after {
	content: "我的";
}
.go-back {
	background: #ff2c43;
}
.back {
	font-size: 30px;
	color: #fff;
	padding-left: 35px;
	margin-top: -4px;
	transform: scaleY(1.5);
}
</style>
