<template>
	<section class="home">
	  <div class="simpleInfo">
		<ul class="si-ui">
			<li class="si-li">大卡</li>
			<li class="si-li">运动时长</li>
			<li class="si-li">公里数</li>
		</ul>
		<ul class="si-ui">
			<li class="si-li"><i-count-up :start="0" :end="si.calorie" :decimals="0" :duration="2.5" :options="options"></i-count-up></li>
			<li class="si-li">
				<i-count-up :start="0" :end="si.sportTimeH" :decimals="0" :duration="2.5" :options="options"></i-count-up>
				h<i-count-up :start="0" :end="si.sportTimeM" :decimals="0" :duration="2.5" :options="options"></i-count-up>
				m </li>
			<li class="si-li"><i-count-up :start="0" :end="si.sportKilo" :decimals="1" :duration="2.5" :options="options"></i-count-up></li>
		</ul>
	  </div>	
	  <div id="percent" style="">
		<vm-progress :percentage="percent" :type="type" :stroke-color="sc" :width="width" >
			<slot>
				 <div class="iCountUp">
				    <i-count-up :start="0" :end="80" :decimals="0" :duration="2.5" :options="options" ></i-count-up>
				  </div>
			</slot>
		</vm-progress>
	  </div> 
	</section>
</template>

<script type="text/babel">
import { mapActions } from 'vuex'
import ICountUp from 'vue-countup-v2';
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      percent:0,
      type:"circle",
      sc:"orange",
      width:210,
      options: {
	      useEasing: true,
	      useGrouping: true,
	      separator: ',',
	      decimal: '.',
	      prefix: '',
	      suffix: ''
      },
      si:{
      	calorie:70,
      	sportTimeH:2,
      	sportTimeM:30,
      	sportKilo:2.6
      }
    }
  },
  components: {
      ICountUp
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
	},
	callback: function(ins) {
        ins.update(ins.endVal + 100);
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
.home{
	width: calc(100%);
}
.simpleInfo{
	width: calc(100%);
}
.si-ul{
	width: calc(100%);
}
.si-li{
	float: left;
	text-align: center;
	width: calc(33.3%)
}
.vm-progress{
	margin-left: calc(25%);
	margin-top: 20px;
}


/*进度条*/
.vue-progress-path path {
  stroke-width: 12;
}

.vue-progress-path .progress {
  stroke: red;
}

.vue-progress-path .background {
  stroke: #edd;
}

/*countUp.js*/
.iCountUp {
    font-size: 2em;
    margin: 0;
    color: #4d63bc;
  }
</style>
