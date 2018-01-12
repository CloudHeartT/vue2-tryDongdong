const UPDATEHOME = 'UPDATEHOME'

export default {
  [UPDATEHOME] (state, { param }) {
  	if (param.percent) {
  		state.percent = param.percent;
  		
  	}
  }
}

//暂时理解
/*
 * 对于需要在actions.js里面使用的方法，可定义常量标识 eg.[UPDATECITY]
 * 其他的使用普通方法形式
 */