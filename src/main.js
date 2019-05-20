import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/assets/styles/main.scss"

import btnPrimary from "@/components/button/btnPrimary"
import btnSecondary from "@/components/button/btnSecondary"
import btnTertiary from "@/components/button/btnTertiary"
import btnQuaternary from "@/components/button/btnQuaternary"

Vue.component('btn-primary', btnPrimary)
Vue.component('btn-secondary', btnSecondary)
Vue.component('btn-tertiary', btnTertiary)
Vue.component('btn-quaternary', btnQuaternary)

import bgPrimary from "@/components/background/bgPrimary"
import bgLight from "@/components/background/bgLight"

Vue.component('bg-primary', bgPrimary)
Vue.component('bg-light', bgLight)

import contentLight from "@/components/content/contentLight"

Vue.component('content-light', contentLight)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')