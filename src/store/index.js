import Vue from 'vue'
import Vuex from 'vuex'
import loginActions from './login/actions'
import loginMutations from './login/mutations'


Vue.use(Vuex);

//loading

//login
const login = {
	state:{
		username : '',
		password : '',
		postUrl : '/account/login'
	},
	actions : loginActions,
	mutations : loginMutations
	//	getter
}






const store = new Vuex.Store({
	modules:{
		login
	}
})
export default store;
