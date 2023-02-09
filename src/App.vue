<template>
  <HomeView/>
</template>
<script>
import HomeView from '@/views/HomeView.vue'
export default {
  name: 'App',
  components: {
    HomeView
  }
}
</script>
<style>
@import '@/assets/styles/variables.css';
@import'~bootstrap/dist/css/bootstrap.css';
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
