import Vue from 'vue'
import Vuex from 'vuex'
import loginActions from './login/actions'
import loginMutations from './login/mutations'
import homeActions from './home/actions'
import homeMutations from './home/mutations'

Vue.use(Vuex);

//loading

//login
const login = {
	state:{
		username : '',
		password : '',
		postUrl : '/login'//bootdo
	},
	actions : loginActions,
	mutations : loginMutations
	//	getter
}

//home
const homeStore = {
	state:{
		percent: 0
	},
	actions : homeActions,
	mutations : homeMutations
	//	getter
}




const store = new Vuex.Store({
	modules:{
		login,
		homeStore
	}
})
export default store;
