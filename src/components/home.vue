<template>
  <div class="row">
    <div id='home' class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza</h1>
        <h2>这里有你给长西黄的pizza</h2>
         <button v-on:click='gotomenu' class="btn btn-success">点击我跳转到上一个浏览页面</button>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  methods:{
  	gotomenu:function(){
  		//跳转到上一次浏览页面
  		// this.$router.go(-1)
  		//跳转到指定页面
  		// this.$router.replace('menu')
  		// 跳转到指定路由名字的页面
  		// this.$router.replace({name:'menulink'})
  		//通过push跳转页面
  		// this.$router.push('menu')
  		// this.$router.push({name:'menulink'})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
  background: url('../assets/pizza.jpg') no-repeat;
  background-size: 100%;
  height: 85vh;
  padding: 10%;

}
h1,h2{
  margin: 6%;
}
.background{
  background: #eee ;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
