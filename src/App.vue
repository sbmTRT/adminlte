<template>
  <div id="app" class="wrapper">
    <Header />
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Dashboard</h1>
            </div>
          </div>
        </div>
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <!-- Your dashboard content goes here -->
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/dist/js/adminlte.min.js';

export default {
  components: {
    Header,
    Footer,
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
/* You can add your custom styles here */

/* Sidebar styles */
.sidebar {
  /* Add your styles for the sidebar here */
}

/* Main content styles */
.content-wrapper {
  /* Add your styles for the main content here */
}

/* Header styles */
.main-header {
  /* Add your styles for the header here */
}

/* Footer styles */
.main-footer {
  /* Add your styles for the footer here */
}

/* Additional styles based on your customization needs */
</style>
