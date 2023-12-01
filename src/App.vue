<template>
  <div id="app" class="wrapper">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Admin from './adminlte/index.html';

export default {
  components: {
    Header,
    Footer,
    Home,
    About,
    Admin,
  },
  data() {
    return {
      currentView: './adminlte/index.html', // Set the default view
    };
  },
  // App-level logic goes here
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/admin-lte@3.0.5/dist/css/adminlte.min.css');
</style>
