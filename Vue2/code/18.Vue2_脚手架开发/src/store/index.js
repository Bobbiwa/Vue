import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sum: 0,
  },
  actions: {
    //context: miniStore
    JIA: function (context, value) {
      context.commit('JIA', value);
    },
    SYNCJIA: function (context, value) {
      setTimeout(() => {
        context.commit('SYNCJIA', value);
      }, 1000);
    },
  },
  mutations: {
    JIA: function (state, value) {
      state.sum += value;
    },
    SYNCJIA: function (state, value) {
      state.sum += value;
    },
  },
  getters: {},
});
