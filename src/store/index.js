import Vue from 'vue'
import Vuex from 'vuex'
import fenzhi from './fenzhi'
import Paf from './Paf'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
     fenzhi,
     Paf,
  }
})
