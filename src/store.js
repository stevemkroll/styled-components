import Vue from 'vue'
import Vuex from 'vuex'
import device from './vuex/modules/device.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    device: device
  }
})