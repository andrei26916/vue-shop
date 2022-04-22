<template>
  <div id="app">
    <div v-if="isAdmin()" class="admin_div_flex">
      <MenuComponent/>
      <div class="content_admin">
        <BreadcrumbComponent/>
        <router-view/>
      </div>
    </div>
    <div v-else>
      <HeaderComponent/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/layouts/HeaderComponent';
import MenuComponent from './components/layouts/Admin/MenuComponent';
import BreadcrumbComponent from './components/layouts/Admin/BreadcrumbComponent';

export default {
  name: 'App',
  components: {
    HeaderComponent, MenuComponent, BreadcrumbComponent
  },
  data(){
    return {
      user: {
        role: 1,
      }
    }
  },
  methods: {
    isAdmin(){
      let path = this.$route.path;
      if (path.indexOf('admin') >= 0){
        if (this.user.role == 0){
          this.$router.push({ name: 'home' })
        }
        return true;
      }
      return false;
    }
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
.admin_div_flex{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
