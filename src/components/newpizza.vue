<template>
	<form>
		<h4 class="text-muted my-5">添加新的披萨</h4>
		<div class="form-group row">
			<label class="col-sm-1">品种</label>
			<div class="col-sm-11">
				<input type="text" v-model='newpizza.name' class="form-control">
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">描述</label>
			<div class="col-sm-11">
				<textarea rows='5' class="form-control" v-model='newpizza.pingjia'></textarea>
			</div>
		</div>
		<p><strong>选项1</strong></p>
		<div class="form-group row">
			<label class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model='newpizza.size1'>
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model='newpizza.price1'>
			</div>
		</div>
		<p><strong>选项2</strong></p>
		<div class="form-group row">
			<label class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model='newpizza.size2'>
			</div>
		</div>
		<div class="form-group row">
			<label class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model='newpizza.price2'>
			</div>
		</div>
		<div class="form-group row">
			<button type='button' @click='addmenuitem()' class="btn btn-success btn-block">添加</button>
		</div>
	</form>
</template>
<script>
import axios from 'axios';
	export default{
		data(){
			return{
				newpizza:{}
			}
		},
		methods:{
			addmenuitem(){
				let data = {
					name:this.newpizza.name,
					pingjia:this.newpizza.pingjia,
					options:[
						{
							size:this.newpizza.size1,
							price:this.newpizza.price1
						},{
							size:this.newpizza.size2,
							price:this.newpizza.price2
						}
					]
				}

				// 将数据增加到数据中（es6的fetch方法）
				// fetch("https://wd8113938945vvvdza.wilddogio.com/menu.json",{
				// 	method:"POST",
				// 	headers:{
				// 		"Content-type":"application/json"
				// 	},
				// 	body:JSON.stringify(data)
				// })
				// .then((res)=>{
				// 	res.json()
				// })
				// .then((data)=>{
				// 	this.$router.push({name:'menulink'})
				// })
				// .catch(err => console.log(err))
				// 用axios将数据post，并同步到vuex中
				axios.post("menu.json",data)
				.then(res => this.$store.commit("pushdata",data))
			}
		}


	}
</script>
<style scoped>
	
</style>
