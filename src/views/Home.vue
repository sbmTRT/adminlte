<template>
  <div>
    <h2>Home Page</h2>
    <!-- Include the AdminLTE HTML content as a string -->
    <div v-html="adminHtml"></div>
  </div>
</template>

<script>
// Import the HTML content as a string
import adminHtml from 'raw-loader!./adminLTE/index.html';

export default {
  data() {
    return {
      adminHtml: adminHtml,
    };
  },
  // Other Vue options go here
}
</script>

<style scoped>
/* View-specific styles go here */
</style>
