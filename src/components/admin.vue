<template>
  <div class="roew">
   <div class="col-sm-12 col-md-8">
   	<pizza></pizza>
   </div>
   <div class="col-sm-12 col-md-4">
   	<h4 class="text-muted my-5">菜单</h4>
   	<table class="table">
   		<thead class="table table-default">
   			<tr>
   				<th>品种</th>
   				<th>删除</th>
   			</tr>
   		</thead>
   		<tbody v-for='item in getitems' :key='item.name'>
   			<tr>
   				<td>{{item.name}}</td>
   				<td>
   					<button @click='deldata(item)' class="btn btn-outline-danger btn-sm">&times;</button>
   				</td>
   			</tr>
   		</tbody>
   	</table>
   </div>
  </div>
</template>

<script>
import NewPizza from './newpizza.vue'
export default {
	data(){
		return{
			// getmenuitems:[]
		}
	},

	components:{
	  	'pizza':NewPizza
	},
	computed:{
		getitems:{
			get(){
				return this.$store.state.menuitem
			},
			set(){

			}
			
		}
	},
	
	created(){
		fetch("https://wd8113938945vvvdza.wilddogio.com/menu.json")
		.then(res => {
			return res.json()
		})
		.then(data => {
			let menuarry = []
			for(let key in data){
				data[key].id = key
				menuarry.push(data[key])
			}
			// this.getitems = menuarry
			// 数据同步
			this.$store.commit("setmenuitems",menuarry)
		})
	},
	methods:{
		// 删除数据
		deldata(item){
			fetch("https://wd8113938945vvvdza.wilddogio.com/menu/"+item.id+"/.json",{
				method:"DELETE",
				headers:{
					"Content-type":"application/json"
				}
			})
			.then(res => res.json())
			.then(data => {
				this.$store.commit("removemenuitems",item)
			})

		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
