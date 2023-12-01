<template>
  <div>
    <h2>Home Page</h2>
    <!-- Embed the HTML content as a string -->
    <div v-html="adminHtml"></div>
  </div>
</template>

<script>
// Import the HTML content as a string
import adminHtml from './adminlte/index.html';

export default {
  data() {
    return {
      // Use the imported HTML content as a string
      adminHtml: adminHtml,
    };
  },
  // Other Vue options go here
}
</script>