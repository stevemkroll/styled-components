const device = {
  state: {
    os: null,
    lang: null,
    height: null,
    width: null
  },
  mutations: {
    updateDevice(state, payload) {
      state.os = payload.os
      state.lang = payload.lang
      state.height = payload.height
      state.width = payload.width
    }
  },
  actions: {
    updateDevice(context, payload) {
      context.commit('updateDevice', payload)
    }
  },
  getters: {
    getDevice: (state) => {
      return state
    }
  }
}

export default device