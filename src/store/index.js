import Vue from 'vue'
import Vuex from 'vuex'
import fenzhi from './fenzhi'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
     fenzhi,
  }
})
