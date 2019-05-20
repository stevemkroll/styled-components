import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/assets/styles/main.scss"

import PrimaryButton from "@/components/buttons/PrimaryButton"
import SecondaryButton from "@/components/buttons/SecondaryButton"
import TertiaryButton from "@/components/buttons/TertiaryButton"
import QuaternaryButton from "@/components/buttons/QuaternaryButton"

Vue.component('PrimaryButton', PrimaryButton)
Vue.component('SecondaryButton', SecondaryButton)
Vue.component('TertiaryButton', TertiaryButton)
Vue.component('QuaternaryButton', QuaternaryButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')