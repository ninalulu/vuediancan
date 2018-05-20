<template>
  <div class="container row">
  	<!-- 菜单 -->
   <div class="col-sm-12 col-md-8">
   	<table class="table">
   		<thead class="thead-default">
   			<tr>
   				<th>尺寸</th>
   				<th>价格</th>
   				<th>加入</th>
   			</tr>
   		</thead>
   		<tbody  v-for='item in getitems' :key='item.name'>
   			<tr>
   				<td><strong>{{item.name}}</strong></td>
   			</tr>
   			<tr v-for='option in item.options' :key='option.size'>
   				<td>{{option.size}}</td>
   				<td>{{option.price}}</td>
   				<td>
   					<button @click='addToBasket(item,option)' class="btn btn-sm btn-outline-success">+</button>
   				</td>
   			</tr>
   		</tbody>
   	</table>
   </div>
<!-- 购物车 -->
	<div class="col-md-4 col-sm-12">
		<div v-if='baskets.length >0'>
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>数量</th>
						<th>品种</th>
						<th>价格</th>
					</tr>
				</thead>
				<tbody v-for='item in baskets' :key='item.name'>
					<tr>
						<td>
							<button @click='del(item)' class="btn btn-sm">-</button>
							<span>{{item.quantity}}</span>
							<button @click='add(item)' class="btn btn-sm">+</button>
						</td>
						<td>{{item.name}}{{item.size}}</td>
						<td>{{item.price * item.quantity}}</td>
					</tr>
				</tbody>
			</table>
			<p>总价：{{total +'元'}}</p>
			<button class="btn btn-success btn-block">提交</button>
		</div>
		<div v-else>
			{{basketText}}
		</div>
	</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
	data(){
		return {
			// getitems:{
				
			// },
			baskets:[],
			basketText:'购物车没有任何东西'
		}
	},
	created(){
		this.fetchdata()
	},
	methods:{
		fetchdata(){
			// 用fetch请求数据
			// fetch("https://wd8113938945vvvdza.wilddogio.com/menu.json")
			// .then(res => res.json())
			// .then(data => {
			// 	this.getitems = data
			// })
			// 用axios请求数据,将请求的数据存储到vuex中
			axios.get("menu.json")
			.then(res =>{
				this.$store.commit("setmenuitems",res.data)
			})
		},
		addToBasket(item,option){
			let basket ={
				name:item.name,
				size:option.size,
				price:option.price,
				quantity:1
			}
			// 如果购物车内商品数>0
			if(this.baskets.length > 0){
				// 进行筛选
				let result = this.baskets.filter((basket)=>{
					return(basket.name === item.name && basket.price === option.price)
				})
				// 购物车是否有该商品，有商品数加1，没有就追加到购物车中
				if(result !=null && result.length>0){
					result[0].quantity++
				}else{
					this.baskets.push(basket)
				}
			}else{
				this.baskets.push(basket)
			}			 
		},
		// 删除商品
		del(item){
			item.quantity--;
			if(item.quantity <= 0){
				this.removebasket(item)
			}
		},
		// 添加商品
		add(item){
			item.quantity++;
		},
		// 如果商品数量<=0时，删除这一行
		removebasket(item){
			this.baskets.splice(this.baskets.indexOf(item),1);
		}
	},
	// 计算总价
	computed:{
		total(){
			let totals = 0;//初始值为0
			for(let index in this.baskets){
				let itemlist = this.baskets[index]
				totals += itemlist.price * itemlist.quantity
			}
			return totals;
		},
		//获取存储在vuex中的数据
		getitems(){
			return this.$store.state.menuitem
			// 通过vuex的getters获取数据
			// return this.$store.getters.getname
		}

	}
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
