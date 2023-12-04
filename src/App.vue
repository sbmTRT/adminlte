<template>
  <div class="wrapper">
    <Header />
    <Sidebar />
    <Home />
    <Footer />
  </div>
  <!-- ./wrapper -->
</template>

<script>
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min.js';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';

export default {
  components: {
    Header,
    Footer,
    Sidebar,
    Home,
    About,
  },
  data() {
    return {
      currentView: 'home', // Set the default view
    };
  },
  // App-level logic goes here
}
</script>

<style>
/* Add your custom styles here */
</style>
