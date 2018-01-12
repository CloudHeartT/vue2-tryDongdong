
export default {
	
	//异步
	
	homeAsync({commit , state },{param}){
		debugger
		if (!param.percent) {
			param.percent = state.percent;
		}
		
//		let reqUrl = common.getAPI(state.postUrl);
//		let params = {username : user.username , password : user.password}
//		
//		return axios.get(reqUrl,params).then((res) =>{
//			debugger
//			let data = res.data ; 	
//		})
			return commit('UPDATEHOME',{param})
	}
}
