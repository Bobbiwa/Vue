import Vue from 'vue';
import Vuex from 'vuex';
import increment from './increment';
import decrement from './decrement';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    increment,
    decrement,
  },
});
