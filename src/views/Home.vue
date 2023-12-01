<template>
  <div>
    <iframe
      srcdoc="adminHtml"
      style="width: 100%; height: 500px; border: none;"
    ></iframe>
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
