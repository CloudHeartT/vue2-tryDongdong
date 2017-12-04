<template>
    <!--地图容器-->
    <div id="XSDFXPage" class="XSDFXPage"></div>
</template>

<script>
	export default{
		 data () {
            return {

            }
        },
        mounted(){
        	debugger
        	 // 创建Map实例
            var map = new BMap.Map("XSDFXPage",{enableMapClick:true});
            // 初始化地图,设置中心点坐标和地图级别
            map.centerAndZoom(new BMap.Point(116.4035,39.915), 11);
            // 添加地图类型控件
            map.addControl(new BMap.MapTypeControl());  
            // 设置地图显示的城市 此项是必须设置的
            map.setCurrentCity("杭州");    
            // 开启鼠标滚轮缩放      
            map.enableScrollWheelZoom(true);
        }
	}
</script>

<style>
	  html,body,.XSDFXPage{
            width: 100%;
            height: 100%;
            overflow: hidden;
            margin: 0;
            font-family: "微软雅黑";
        },
         /* 去掉地图左下角的百度LOGO */  
  .anchorBL {  
    display:none  
  }  
</style>