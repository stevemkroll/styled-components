const brand = {
  state: {
    color: {
      primary: null,
      secondary: null,
      tertiary: null,
      quaternary: null,
      light: null,
      dark: null
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