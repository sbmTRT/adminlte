// main.js
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './routers/router';

// Create a Vue app instance with the router
const app = createApp(App); // Use the imported App component directly
app.use(router);

// Mount the app to the element with id 'app'
app.mount('#app');
