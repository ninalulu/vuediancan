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
   				<div class="form-group">
   					<label for="confirmpassword">确认密码</label>
   					<input type="password" class="form-control" v-model='confirmpassword'>
   				</div>
   				<button class="btn btn-block btn-success" type="submit">注册</button>
   			</form>
   		</div>
   	</div>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
 data(){
 	return{
 		email:'',
 		password:'',
 		confirmpassword:''
 	}
 },
 methods:{
 	onsubmit:function(){
 		if(this.password == this.confirmpassword){
 			const formData = {
 				email:this.email,
 				password:this.password,
 				confirmpassword:this.confirmpassword
 			}
 			axios.post("/users.json",formData)
 			.then((res)=>{
 				this.$router.push({name:'loginlink'})//注册成功跳转到登录页面
 			})
 		}else{

 		}
 	}
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
