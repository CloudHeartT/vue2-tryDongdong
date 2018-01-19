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
	  <div id="myChart" ></div>
	</section>
</template>

<script type="text/babel">
import { mapActions } from 'vuex'
import ICountUp from 'vue-countup-v2';

// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
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
   },
  drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      var data = [
	    {name:'2016/12/18 6:38:08', value:['2016/12/18 6:38:08', 80]},
	    {name:'2016/12/18 16:18:18', value:['2016/12/18 16:18:18', 60]},
	    {name:'2016/12/18 19:18:18', value:['2016/12/18 19:18:18', 90]}
	    ];
	  var anchor = [
	    {name:'2016/12/18 00:00:00', value:['2016/12/18 00:00:00', 0]},
	    {name:'2016/12/19 00:00:00', value:['2016/12/19 00:00:00', 0]}
	    ];
	      // 绘制图表
      myChart.setOption({
        title: {
        text: '动态数据 + 时间坐标轴'
    },
    	grid:{
    		top:-60
    	},
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '60%'], /*数值端两端空白策略*/
        splitLine: {
            show: false
        },
        axisLine:{
            show:false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'bar',
        barWidth:3,
        showSymbol: false,
        hoverAnimation: false,
        data: data
    },
    {
        name:'.anchor',
        type:'bar', 
        showSymbol:false, 
        data:anchor,
        itemStyle:{normal:{opacity:0}},
        lineStyle:{normal:{opacity:0}}
    }]
      });
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
  	this.drawLine();
	
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
#myChart{
	width: calc(100%);
	height: 230px;
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
