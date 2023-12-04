// Import Vue and Vue Router
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import components
import Home from './views/Home.vue';
import About from './views/About.vue';
import Selection from './views/Selection.vue';
import App from './App.vue';

// Route settings
const routes = [
    {
        path: '/',
        redirect: '/selection',
    },
    {
        path: '/selection',
        name: 'Selection',
        component: Selection,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    }
];

// Create a router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Create a Vue app instance with the router
const app = createApp(App); // Use the imported App component directly
app.use(router);

// Mount the app to the element with id 'app'
app.mount('#app');
