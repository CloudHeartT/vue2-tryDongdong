import Vue from 'vue'
import Router from 'vue-router'
import mainMiddle from '@v/mainMiddle'
import analysis from '@c/middle/analysis'

Vue.use(Router)


const routes = [
    {
      path: '/',
      name: 'mainMiddle',
      component: mainMiddle
    },
    {
    	path:'/analysis',
    	name:'analysis',
    	component:analysis
    }
  ]


export default new Router({
  routes: routes
})
