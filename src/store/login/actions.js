import Vue from 'vue'
import axios from 'axios'


export default {
	
	//异步登录
	
	loginAsync({commit , state },{user}){
		debugger
		if (!user.username) {
			user.username = state.username
		}
		
		let reqUrl = common.getAPI(state.postUrl);
		let params = {username : user.username , password : user.password}
		
		return axios.get(reqUrl,params).then((res) =>{
			debugger
			let data = res.data ; 	
		})
	}
}
