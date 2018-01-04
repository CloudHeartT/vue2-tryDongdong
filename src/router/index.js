import Vue from 'vue'
import Router from 'vue-router'
import MainMiddle from '@v/mainMiddle'
import Analysis from '@v/middle/analysis'
import Me from '@v/middle/me'
import Goal from '@v/middle/goal'
import Find from '@v/middle/find'

Vue.use(Router)


const routes = [
    {
      path: '/',
      name: 'mainMiddle',
      component: MainMiddle
    },{
    	path:'/analysis',
    	name:'analysis',
    	component:Analysis
    },{
    	path:'/me',
    	name:'me',
    	component:Me
    },{
    	path:'/goal',
    	name:'goal',
    	component:Goal
    },{
    	path:'/find',
    	name:'find',
    	component:Find
    }
  ]


export default new Router({
  routes: routes
})
