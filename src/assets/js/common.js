import Vue from 'vue'


export default {
	/**
	 *  获取api url
	 */
	getAPI:function(method){
		return '/myboot' + method
	}
}
