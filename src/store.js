import { createApp } from 'vue';
import Vuex from 'vuex';

import App from './App.vue';
import store from './store';
import router from './routers/router';

// Create a Vue app instance with the router and store
const app = createApp(App);
app.use(store);
app.use(router);
app.use(Vuex);

export default new Vuex.Store({
    state: {
        formData: null,
    },
    mutations: {
        setFormData(state, data) {
            state.formData = data;
        },
    },
});
