<template>
	<section class="home">
  <div id="percent">
	<vm-progress :percentage="percent" :type="type" :stroke-color="sc" :width="width"></vm-progress>
  </div> 
	</section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      percent:0,
      type:"circle",
      sc:"orange",
      width:210
    }
  },
  methods:{
  	...mapActions([
				'homeAsync'
	]),
	changePercent(val){
		debugger
		//若percent改变，延迟加载动画
		var t;
		var self = this;
		clearTimeout(t);
		t = setTimeout(function (){
			debugger
			console.log("p1="+self.percent);
			self.percent = val;
		}, 1000);
	}
  },
  computed: {
  getNewPercent() {
  	console.log(this.$store.state.homeStore.percent);
    return this.$store.state.homeStore.percent;
  }
	},
	watch: {
	  getNewPercent(val) {
	     this.$nextTick(function () {   //或者用 this.$nextTick or Vue.nextTick
             	console.log("aaaaa");
             	this.changePercent(val);
              })
	  }
	},
  mounted () {
  	debugger
  	this.$store.dispatch('homeAsync',{param:{percent:80}});
	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}



.vue-progress-path path {
  stroke-width: 12;
}

.vue-progress-path .progress {
  stroke: red;
}

.vue-progress-path .background {
  stroke: #edd;
}
</style>
