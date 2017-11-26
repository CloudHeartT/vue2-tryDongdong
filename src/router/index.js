import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import analysis from '@c/analysis'

Vue.use(Router)


const routes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
