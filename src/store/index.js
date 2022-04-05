import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// Данные, которые используют многие компоненты стоит разместить здесь

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  // Действия должны инициировать мутации, а не возвращать что-то
  actions: {
    getProductsList(ctx, data) {
      return api.getProductsList();
    },
  },
  modules: {
  }
})
