<template>
  <Header />
  <Sidebar />
  <div class="content-wrapper">
    <!-- The main app component includes the router view -->
    <router-view />
  </div>
  <Footer />
</template>

<script>
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min.js';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Header,
    Footer,
    Sidebar,
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
