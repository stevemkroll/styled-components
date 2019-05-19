const brand = {
  state: {
    color: {
      primary: null,
      secondary: null,
      tertiary: null,
      quaternary: null
    }
  },
  mutations: {
    updateBrand(state, payload) {
      state.color.primary = payload.color.primary
      state.color.secondary = payload.color.secondary
      state.color.tertiary = payload.color.tertiary
      state.color.quaternary = payload.color.quaternary
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