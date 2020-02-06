import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hello Vuex',
    works: [
      {name: 'portfolio', img: 'pass', description: 'blah blah blah', tags: 'Vue.js', date: '2020-02-06'}
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
