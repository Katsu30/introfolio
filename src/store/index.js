import Vue from 'vue';
import Vuex from 'vuex';

import { Home, About, Works } from './States';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  modules: {
    Home,
    About,
    Works
  }
})
