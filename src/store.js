// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
