//import packages
import * as vueRouter from "vue-router";
//route setting
const routes = [
    {
        path: "/Home",
        name: "Home",
        component: () => import('../src/components/Home.vue')
    },
    {
        path: "/About",
        name: "About",
        component: () => import('../src/components/About.vue')
    }
];
// Create a router instance
const router = vueRouter.createRouter({
    history: vueRouter.createWebHistory(),
    routes,
});

// Create a Vue app instance with the router
const app = vue.createApp(App);
app.use(router);
app.mount('#app')