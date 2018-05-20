<template>
  <div id="app">
    <div class="container">
      <app-Header></app-Header>
    </div>
    <div class="contanier">
      <router-view>
        
      </router-view>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name='ordering'></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name='delivery'></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name='history'></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header'

export default {
  name: 'App',
  components: {
    "app-Header":Header,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
