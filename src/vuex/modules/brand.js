const brand = {
  state: {
    color: {
      primary: "#00aeef",
      secondary: "#8dc63f",
      tertiary: "#efc600",
      quaternary: "#ef5a00",
      light: "#ffffff",
      dark: "#666666",
      success: "#8dc63f",
      info: "#00aeef",
      warning: "#efc600",
      error: "#ef5a00",
    },
    size: {
      modifier: "8",
    },
  },
  mutations: {
    updateBrand(state, payload) {
      state.color.primary = payload.color.primary
      state.color.secondary = payload.color.secondary
      state.color.tertiary = payload.color.tertiary
      state.color.quaternary = payload.color.quaternary
      state.color.light = payload.color.light
      state.color.dark = payload.color.dark
    }
  },
  actions: {
    updateBrand(context, payload) {
      context.commit('updateBrand', payload)
    }
  },
  getters: {
    getBrand: (state) => {
      return state
    }
  }
}

export default brand