const device = {
  state: {
    os: null,
    lang: null,
    height: null,
    width: null
  },
  mutations: {
    update(state, payload) {
      state.os = payload.os
      state.lang = payload.lang
      state.height = payload.height
      state.width = payload.width
    }
  },
  actions: {
    update(context, payload) {
      context.commit('update', payload)
    }
  },
  getters: {
    device: (state) => {
      return state
    }
  }
}

export default device