// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {routes} from './routes'
import axios from 'axios'

import {store} from './store/store.js'

Vue.use(VueRouter)

// 配置默认根路径
axios.defaults.baseURL = "https://wd8113938945vvvdza.wilddogio.com/"

Vue.config.productionTip = false

const router = new VueRouter({
	routes,
	mode:'history',
	scrollBehavior(to,from,savedPosition){
		if(savedPosition){
			return savedPosition
		}else{
			return {x:0,y:0}
		}
	}
})	
// 全局守卫
// router.beforeEach((to,from,next)=>{
// 	if(to.path === '/login'  || to.path === '/reigter'){
// 		next();
// 	}else{
// 		alert("请先登录");
// 		next('/login');
// 	}
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
