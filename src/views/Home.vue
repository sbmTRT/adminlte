<template>
  <div>
    <h2>Home Page</h2>
    <div v-html="adminHtml"></div>
  </div>
</template>

<script>
import adminHtml from './adminlte/index.html';

export default {
  data() {
    return {
      adminHtml: adminHtml,
    };
  },
  // View-specific logic goes here
}
</script>

<style scoped>
/* View-specific styles go here */
</style>
