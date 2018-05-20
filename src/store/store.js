import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js' //引入所有actions文件的方法
import * as getters from './getters.js'
import * as mutations from './mutations.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
	// 对store进行优化之后

	state:{
		// 设置属性
		menuitem:{},
		currentuser:null, //c初始状态为空
		islogin:false //登录状态
	},
	getters,
	mutations,
	actions
	// getters:{
	// 	// 获取属性的状态
	// 	getname:state => state.menuitem,
	// 	currentuser:state => state.currentuser,
	// 	islogin:state => state.islogin
	// },
	// mutations:{
	// 	// 改变属性的状态
	// 	setmenuitems(state,data){
	// 		state.menuitem = data
	// 	},
	// 	// 将匹配到的对象，在menuitem数组中删除
	// 	removemenuitems(state,data){
	// 		state.menuitem.forEach((item,index)=>{
	// 			if(item == data){
	// 				state.menuitem.splice(index,1)
	// 			}
	// 		})
	// 	},
	// 	// 将新添加的数据push到menuitem数组中
	// 	pushdata(state,data){
	// 		state.menuitem.push(data)
	// 	},
	// 	userstatus(state,user){
	// 		if(user){
	// 			state.currentuser = user
	// 			state.islogin  = true
	// 		}else{
	// 			state.currentuser= null
	// 			state.islogin = false
	// 		}
	// 	}
	// },
	// actions :{
	// 	// 应用mutations
	// 	setuser({commit},user){
	// 		commit("userstatus",user)
	// 	}
	// }



})




