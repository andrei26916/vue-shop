<template>
  <div id="app">
    <HeaderComponent/>

    <div class="content">
      <router-view/>
    </div>


  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent';


export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.content{
  width: 1440px;
  margin: 0 auto;
  display: flex;
}
</style>
