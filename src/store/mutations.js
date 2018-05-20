// 改变属性的状态
export const setmenuitems=(state,data)=>{
			state.menuitem = data
		}
		// 将匹配到的对象，在menuitem数组中删除
		export const removemenuitems=(state,data)=>{
			state.menuitem.forEach((item,index)=>{
				if(item == data){
					state.menuitem.splice(index,1)
				}
			})
		}
		// 将新添加的数据push到menuitem数组中
		export const pushdata=(state,data)=>{
			state.menuitem.push(data)
		}
		export const userstatus=(state,user)=>{
			if(user){
				state.currentuser = user
				state.islogin  = true
			}else{
				state.currentuser= null
				state.islogin = false
			}
		}