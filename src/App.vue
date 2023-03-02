<template>
  <link rel="canonical" href="https://portfolio.nigelchristiaans.nl">
  <meta name="theme-color" content="#363636">
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
  <HomeView/>
</template>
<script>
import HomeView from '@/views/HomeView.vue'
import {useMeta} from "vue-meta";
export default {
  name: 'App',
  components: {
    HomeView
  },
  setup() {
    useMeta({
      title: 'Nigel Christiaans',
      description: 'Portfolio website of Nigel Christiaans, here you can see all of my projects and information about myself!',
      htmlAttrs: { lang: 'nl' }
    })
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
