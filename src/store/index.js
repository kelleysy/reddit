import Vue from 'vue'
import Vuex from 'vuex'
import reddit from './reddit'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    reddit
  }
})

Vue.store = store

export default store
