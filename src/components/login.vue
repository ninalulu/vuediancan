<template>
  <div class="row mt-3">
   <div class="col-md-12 col-lg-12">
   	<div class="card">
   		<div class="card-body">
   			<img src="../assets/pizza.jpg" class="mx-auto d-block">
   			<form v-on:submit.prevent='onsubmit'>
   				<div class="form-group">
   					<label for="email">邮箱</label>
   					<input type="email" class="form-control" v-model='email'>
   				</div>
   				<div class="form-group">
   					<label for="password">密码</label>
   					<input type="password" class="form-control" v-model='password'>
   				</div>
   				<button class="btn btn-block btn-success" type="submit">登录</button>
   			</form>
   		</div>
   	</div>
   </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
 data(){
 	return{
 		email:'',
 		password:''
 	}
 },
 // 组件内的守卫（导航守卫）点击退出进入当前页面之前把所有数据清空
 beforeRouteEnter:(to,from,next)=>{
   next(vm => vm.$store.dispatch("setuser",null))
 },
 methods:{
 	onsubmit:function(){
 		axios.get('/users.json')
 			.then((res)=>{
 				const data = res.data
 				const users = []
 				for(let key in data){
 					const user = data[key]
 					users.push(user)
 				}

 				let result = users.filter((user)=>{
 					return user.email == this.email && user.password == this.password
 				})

 				console.log(result.length)

 				if(result.length > 0 && result != null){
               this.$store.dispatch("setuser",result[0].email)
 					this.$router.push({name:'homelink'})
 				}else{
 					alert("账号或密码不正确");
               this.$store.dispatch("setuser",null)
 				}
 			})
 	}
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
