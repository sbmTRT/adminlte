// Import Vue and Vue Router
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import components
import Home from './views/Home.vue';
import About from './views/About.vue';
import Selection from './views/Selection.vue';
import App from './App.vue';
import store from './store';

// Route settings
const routes = [
    {
        path: '/',
        redirect: '/selection',
        store,
    },
    {
        path: '/selection',
        name: 'Selection',
        component: Selection,
        store,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        store,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        store,
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
