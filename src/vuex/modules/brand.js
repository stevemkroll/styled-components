const brand = {
  state: {
    color: {
      success: "#8dc63f",
      info: "#00aeef",
      warning: "#efc600",
      error: "#ef5a00",
    },
    button: {
      text: "#ffffff"
    },
    input: {
      text: "#666666",
      background: "#ffffff",
      border: "#dddddd"
    },
    switch: {
      background: "#666666",
      toggle: "#ffffff",
    },
    size: {
      modifier: "10",
    },
  },
  mutations: {
    updateColorSuccess(state, payload) {
      state.color.success = payload
    },
    updateColorInfo(state, payload) {
      state.color.info = payload
    },
    updateColorText(state, payload) {
      state.input.text = payload
    }
  },
  actions: {
    // updateBrand(context, payload) {
    //   context.commit('updateBrand', payload)
    // }
    updateColorSuccess(context, payload) {
      context.commit('updateColorSuccess', payload)
    },
    updateColorInfo(context, payload) {
      context.commit('updateColorInfo', payload)
    },
    updateColorText(context, payload) {
      context.commit('updateColorText', payload)
    }
  },
  getters: {
    getBrand: (state) => {
      return state
    }
  }
}

export default brand